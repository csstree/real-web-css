const fs = require('fs');
const path = require('path');
const csstree = require('css-tree');
const fws = require('fixed-width-string');
const cssDir = path.join(__dirname, '../data/css');
const types = [
    'Atrule',
    'MediaFeature',
    'PseudoClassSelector',
    'PseudoElementSelector',
    'Function',
    'Declaration',
    'Declaration hacks',
    'Dimension'
];
const names = types.reduce(function(res, type) {
    res[type] = new Map();
    return res;
}, Object.create(null));
const statusOrder = ['❔', '🆗', '⚠'];
const status = types.reduce(function(res, type) {
    const data = !/hacks/.test(type) ? require('./usage/' + type + '.json') : { invalid: [], valid: [] };
    const status = Object.create(null);
    data.invalid.forEach(function(name) {
        status[name] = '⚠'; // 🚫❌❗⛔️
    });
    data.valid.forEach(function(name) {
        if (name in status) {
            throw new Error('Duplicate status for `' + type + '/' + name + '`');
        }
        status[name] = '🆗';
    });
    res[type] = status;
    return res;
}, Object.create(null));

const startTime = Date.now();
let maxNameLength = 0;
let totalCssLength = 0;
let totalCssCount = 0;

const dataFiles = fs.readdirSync(cssDir)
    .filter(filename => path.extname(filename) === '.json')
    .sort();

const reports = dataFiles.map(filename => {
    const { id, url: siteUrl, stylesheets } = require(path.join(cssDir, filename));

    console.error('Site #' + id + ' ' + siteUrl);

    for (const { error, content: css } of stylesheets) {
        if (error) {
            continue;
        }

        const ast = csstree.parse(css);

        totalCssCount++;
        totalCssLength += css.length;
        // console.error(`  ${String(css.length).padStart(6)} ${url ? ' ' + url : type}`);

        csstree.walk(ast, function(node) {
            if (node.type in names) {
                let name;
                if (node.type === 'Declaration') {
                    name = csstree.property(node.property);

                    if (name.hack) {
                        let info = names['Declaration hacks'].get(name.hack);

                        if (!info) {
                            names['Declaration hacks'].set(name.hack, info = {
                                sites: new Set(),
                                count: 0
                            });
                        }

                        info.sites.add(siteUrl);
                        info.count++;
                    }

                    if (name.custom) {
                        return;
                    }
                    name = name.name;// + (name.hack ? ' (with hack: ' + name.hack + ')' : '');
                } else if (node.type === 'Dimension') {
                    name = node.unit.toLowerCase();
                } else {
                    name = node.name.toLowerCase();
                    if (node.type === 'PseudoClassSelector' ||
                        node.type === 'PseudoElementSelector' ||
                        node.type === 'Function') {
                        if (node.children !== null) {
                            name += '()';
                        }
                    }
                }

                // if (/^[^a-z\-\_]/.test(name)) {
                //     console.log(node.loc);
                //     console.log(name);
                //     console.log(new Buffer(name));
                //     process.exit();
                // }

                let info = names[node.type].get(name);

                if (!info) {
                    maxNameLength = Math.max(name.length, maxNameLength);
                    names[node.type].set(name, info = {
                        sites: new Set(),
                        count: 0
                    });
                }

                info.sites.add(siteUrl);
                info.count++;
            }
        });
    }
});

// ============= output results ==================

console.log('# CSS features used by Alexa TOP 250 sites');
console.log('');
console.log('Update date: ' + new Date().toISOString());
console.log('');
console.log('[Dictionaries are used for a validity checking](scripts/usage)');
console.log('');
console.log('<table>');
console.log('<tr><td>❔</td><td>Unknown validity (need to check and add a decision to a dictionary)</td></tr>');
console.log('<tr><td>🆗</td><td>Valid (feature exists)</td></tr>');
console.log('<tr><td>⚠</td><td>Invalid (typos, pre-/post-processing artifacts, never exists prefixed version etc)</td></tr>');
console.log('</table>');
console.log('');

// TOC
Object.keys(names).sort().forEach((type) => {
    console.log('- [' + type + '](#' + type.replace(/\s/g, '-').toLowerCase() + ')');
});
console.log('');

// Sections
Object.keys(names).sort().forEach((type) => {
    console.log('## ' + type);
    console.log([...names[type]]
        .sort(function([a], [b]) {
            return (
                (statusOrder.indexOf(status[type][a] || '❔') - statusOrder.indexOf(status[type][b] || '❔')) ||
                (a < b ? -1 : a > b ? 1 : 0)
            );
        })
        .map(function([name, info]) {
            const nameStatus = status[type][name] || '❔';

            switch (type) {
                case 'Atrule': name = '@' + name; break;
                case 'PseudoClassSelector': name = ':' + name; break;
                case 'PseudoElementSelector': name = '::' + name; break;
            }

            return (
                '  - ' +
                nameStatus + ' `' + fws(name, 52).replace(/\s*$/, '`$&') +
                '*(sites: ' +
                fws(info.sites.size, 4, { align: 'right' }) +
                ', occurrences: ' +
                fws(info.count,      6, { align: 'right' }) +
                ')*'
            );
        })
        .join('\n')
    );
    console.log();
});

const trailer = totalCssLength + ' bytes of CSS from ' + dataFiles.length + ' sites in ' + ((Date.now() - startTime) / 1000).toFixed(1) + ' sec';
console.log(trailer);
console.error(trailer);
