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
const statusOrder = ['❔', '🆗', '⚠'];
const dictionaries = types.reduce(function(res, type) {
    res[type] = !/hacks/.test(type)
        ? require('./' + type + '.json')
        : { invalid: [], valid: [] };
    return res;
}, Object.create(null));
const status = types.reduce(function(res, type) {
    const data = dictionaries[type];
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

module.exports = {
    types,
    dictionaries,
    statusOrder,
    status
};
