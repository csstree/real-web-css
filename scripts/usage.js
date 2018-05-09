var fs = require('fs');
var csstree = require('css-tree');
var fws = require('fixed-width-string');
var types = [
    'Atrule',
    'MediaFeature',
    'PseudoClassSelector',
    'PseudoElementSelector',
    'Function',
    'Declaration',
    'Dimension'
];
var names = types.reduce(function(res, type) {
    res[type] = new Map();
    return res;
}, Object.create(null));
var statusOrder = ['❔', '🆗', '⚠'];
var status = types.reduce(function(res, type) {
    var data = require('./usage/' + type + '.json');
    var status = Object.create(null);
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

var maxNameLength = 0;
var totalCssLength = 0;
var totalCssCount = 0;
var startTime = Date.now();

fs.readdirSync('./data/css').forEach(function(fn, idx, list) {
    console.error(
        fws(idx + 1, String(list.length).length, { align: 'right' }) + '/' + list.length,
        'data/css/' + fn
    );

    var css = fs.readFileSync('./data/css/' + fn, 'utf-8');
    var ast = csstree.parse(css, {
        tolerant: true,
        // positions: true
    });

    totalCssCount++;
    totalCssLength += css.length;

    csstree.walk(ast, function(node) {
        if (node.type in names) {
            if (node.type === 'Declaration') {
                name = csstree.property(node.property);
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

            var info = names[node.type].get(name);

            if (!info) {
                names[node.type].set(name, info = {
                    sites: new Set(),
                    count: 0
                });
            }

            maxNameLength = Math.max(name.length, maxNameLength);
            info.sites.add(fn);
            info.count++;
        }
    });
});

// ============= output results ==================

console.log('# CSS features used by Alexa TOP 250 sites');
console.log('');
console.log('Update date: ' + new Date().toISOString());
console.log('');
console.log('[Dictionaries are used for a validity checking](scripts/usage)');
console.log('');
console.log('<table>')
console.log('<tr><td>❔</td><td>Unknown validity (need to check and add a decision to a dictionary)</td></tr>')
console.log('<tr><td>🆗</td><td>Valid (feature exists)</td></tr>')
console.log('<tr><td>⚠</td><td>Invalid (typos, pre-/post-processing artifacts, never exists prefixed version etc)</td></tr>')
console.log('</table>')
console.log('');

// TOC
Object.keys(names).sort().forEach((type) => {
    console.log('- [' + type + '](#' + type.toLowerCase() + ')');
});
console.log('');

// Sections
Object.keys(names).sort().forEach((type) => {
    console.log('## ' + type);
    console.log([...names[type]]
        .sort(function([a], [b]) {
            return (
                (statusOrder.indexOf(status[type][a] || '❔') - statusOrder.indexOf(status[type][b] || '❔'))
                ||
                (a < b ? -1 : a > b ? 1 : 0)
            );
        })
        .map(function([name, info]) {
            var nameStatus = status[type][name] || '❔';

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

console.log(totalCssLength + ' bytes of CSS from ' + totalCssCount + ' sites in ' + ((Date.now() - startTime) / 1000).toFixed(1) + ' sec');
