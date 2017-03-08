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
    'amazon.de': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.in': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.co.uk': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.co.jp': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.fr': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.it': {
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
            return css
                .replace(/},\./g, '}.')
                .replace(/font-weight:bold:/g, 'font-weight:bold;');
        }
    },
    'stackoverflow.com': {
        comment: 'Parser has no support for `!ie7` hack',
        patch: function(css) {
            return css.replace(/!ie7/g, '!important');
        }
    },
    'nytimes.com': {
        patch: function(css) {
            return css
                .replace(/0=;/g, '0;')
                .replace(/##ffffff/g, '#ffffff');
        }
    },
    'vice.com': {
        patch: function(css) {
            return css.replace(/:nth-child\(10pxn/g, ':nth-child(10n');
        }
    },
    'quora.com': {
        patch: function(css) {
            return css.replace(/:not\('\.results_frame\'\)/g, ':not(.results_frame)');
        }
    },
    'mediafire.com': {
        patch: function(css) {
            return css
                .replace(/overflow: hidden:/g, 'overflow: hidden;')
                .replace(/margin-right: 0 padding:/g, 'margin-right: 0; padding:');
        }
    },
    'huaban.com': {
        patch: function(css) {
            return css.replace(/background:img\(/g, 'background:url(');
        }
    },
    'w3schools.com': {
        patch: function(css) {
            return css.replace(/input:\.focus/g, 'input:focus');
        }
    },
    'sohu.com': {
        patch: function(css) {
            return css.replace(/font-weight:boldtext-/g, 'font-weight:bold;text-');
        }
    },
    'gmw.cn': {
        patch: function(css) {
            return css.replace(/;e;/g, ';');
        }
    },
    'xvideos.com': {
        patch: function(css) {
            return css.replace(/:nth-child\(3\+1\)/g, ':nth-child(3n+1)');
        }
    },
    'adobe.com': {
        patch: function(css) {
            return css
                .replace(/\),27\.1875rem/g, ')')
                .replace(/:not \(/g, ':not(');
        }
    },
    'hao123.com': {
        patch: function(css) {
            return css.replace(/white-space:nowrap -o-text-overflow/g, 'white-space:nowrap; -o-text-overflow');
        }
    },
    'sina.com.cn': {
        patch: function(css) {
            return css
                .replace(/;!important}/g, ';}')
                .replace(/;px;/g, ';');
        }
    }
}
