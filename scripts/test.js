var path = require('path');
var fs = require('fs');
var csstree = require('css-tree');
var syntax = csstree.lexer;
var dir = path.join(__dirname, '../data');
var total = 0;
var error = 0;

function validate(ast) {
    var errors = [];

    try {
        csstree.walkDeclarations(ast, function(node) {
            if (!syntax.matchProperty(node.property, node.value)) {
                var error = syntax.lastMatchError;
                var message = error.rawMessage || error.message || error;

                if (message === 'Mismatch') {
                    message = 'Invalid value for `' + node.property + '`';
                } else if (message === 'Uncomplete match') {
                    message = 'The rest part of value can\'t to be matched on `' + node.property + '` syntax';
                }

                errors.push({
                    node: node,
                    loc: error.loc || node.loc,
                    line: error.line || node.loc && node.loc.start && node.loc.start.line,
                    column: error.column || node.loc && node.loc.start && node.loc.start.column,
                    property: node.property,
                    message: message,
                    error: syntax.lastMatchError
                });
            }
        });
    } catch (e) {
        return e;
    }

    return errors;
}

function formatErrors(error) {
    var output = [];
    if (Array.isArray(error)) {
        output.push.apply(output, error.map(function(item) {
            return '        * ' +
                String(item.error.message || item.error)
                    .replace(/^[^\n]+/, item.message)
                    .replace(/\n/g, '\n            ');
        }));
    } else {
        output.push('       [ERROR] ' + error);
    }
    return output.join('\n');
}

fs.readdirSync(dir).forEach(function(fn) {
    var fullfn = dir + '/' + fn;

    if (path.extname(fullfn) !== '.css') {
        return;
    }

    var css = fs.readFileSync(fullfn, 'utf8');
    var host = css.match(/^\/\*\s*([^*]+)\s*\*\//)[1];

    total++;
    try {
        var ast = csstree.parse(css, { positions: true });
        console.log('[OK] ' + fn + ' ' + host);
        var errors = validate(ast);
        if (errors.length) {
            console.log(formatErrors(errors));
        } else {
            console.log('[NO ERRORS]');
        }
    } catch (e) {
        error++;
        console.log('[ERROR] ' + fn + ' ' + host, '\n' + (e.formattedMessage || e.message));
    }
    console.log();
});

console.log('Total:', total);
console.log('Success:', total - error);
console.log('Failed:', error);
