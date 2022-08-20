const fs = require('fs');
const { lexer } = require('css-tree');
const knownCssProperties = require('known-css-properties').all;

const csstreeDict = lexer.dump();

// declaration
const declarations = require('./usage/Declaration.json');
const validDecl = new Set([
    ...declarations.valid,
    ...knownCssProperties,
    ...Object.keys(csstreeDict.properties)
]);
const invalidDecl = new Set(declarations.invalid);

for (const name of validDecl) {
    invalidDecl.delete(name);
}

validDecl.delete('--*');

fs.writeFileSync(__dirname + '/usage/Declaration.json', JSON.stringify({
    ...declarations,
    valid: [...validDecl].sort(),
    invalid: [...invalidDecl].sort()
}, null, 4) + '\n');

// atrule
const atrules = require('./usage/Atrule.json');
const validAtrule = new Set([
    ...atrules.valid,
    ...Object.keys(csstreeDict.atrules)
]);
const invalidAtrule = new Set(atrules.invalid);

for (const name of validAtrule) {
    invalidAtrule.delete(name);
}

fs.writeFileSync(__dirname + '/usage/Atrule.json', JSON.stringify({
    ...atrules,
    valid: [...validAtrule].sort(),
    invalid: [...invalidAtrule].sort()
}, null, 4) + '\n');
