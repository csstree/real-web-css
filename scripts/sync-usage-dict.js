const fs = require('fs');
const { lexer } = require('css-tree');
const knownCssProperties = require('known-css-properties').all;

const csstreeDict = lexer.dump();
const usageFilenameDir = __dirname + '/usage/';

function sync(type, syncValid, ignoreCurrent) {
    const current = JSON.parse(fs.readFileSync(`${usageFilenameDir}${type}.json`));
    const invalid = new Set(current.invalid);
    const valid = new Set([
        ...ignoreCurrent ? [] : current.valid,
        ...syncValid
    ]);

    for (const name of valid) {
        invalid.delete(name);
    }

    for (const name of current.valid) {
        if (!valid.has(name)) {
            invalid.add(name);
        }
    }

    fs.writeFileSync(`${usageFilenameDir}${type}.json`, JSON.stringify({
        ...current,
        valid: [...valid].sort(),
        invalid: [...invalid].sort()
    }, null, 4) + '\n');

}

// declaration
sync('Declaration', [
    ...knownCssProperties,
    ...Object.keys(csstreeDict.properties).filter(name => name !== '--*')
]);

// atrule
sync('Atrule', Object.keys(csstreeDict.atrules));

// demension units
sync('Dimension', [].concat(...Object.values(csstreeDict.units)), true);
