module.exports = {
    'wikipedia.org': {
        comment: 'Parser has no support for `!ie` hack',
        patch: function(css) {
            return css.replace(/!ie/g, '!important');
        }
    },
    'amazon.com': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'sina.com.cn': {
        patch: function(css) {
            return css.replace(/;px;/g, ';');
        }
    },
    'imgur.com': {
        patch: function(css) {
            return css.replace(/},\./g, '}.');
        }
    },
    'stackoverflow.com': {
        comment: 'Parser has no support for `!ie7` hack',
        patch: function(css) {
            return css.replace(/!ie7/g, '!important');
        }
    }
}
