module.exports = {
    'amazon.com': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.in': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.co.jp': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.co.uk': {
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
    'dropbox.com': {
        comment: 'Missed preprocessor function',
        patch: function(css) {
            return css.replace(/ selector-append\(/gi, ':selector-append(');
        }
    },
    'imgur.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/},\./g, '}.')
                .replace(/font-weight:bold:/g, 'font-weight:bold;');
        }
    },
    'nytimes.com': {
        comment: 'Typos',
        patch: function(css) {
            return css
                .replace(/0=;/g, '0;')
                .replace(/##ffffff/g, '#ffffff');
        }
    },
    'vice.com': {
        comment: 'Wrong and missed substitutions',
        patch: function(css) {
            return css
                .replace(/:nth-child\(10pxn/g, ':nth-child(10n')
                .replace(/:nth-child\(0\.9375remn/g, ':nth-child(n')
                .replace(/:nth-child\(1\.875remn/g, ':nth-child(n')
                .replace(/\$mid-gray/g, '\\$mid-gray')
                .replace(/\$article/g, '\\$article');
        }
    },
    'quora.com': {
        comment: 'Missed quotes in selector',
        patch: function(css) {
            return css.replace(/:not\('\.results_frame\'\)/g, ':not(.results_frame)');
        }
    },
    'mediafire.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/overflow: hidden:/g, 'overflow: hidden;')
                .replace(/margin-right: 0 padding:/g, 'margin-right: 0; padding:')
                .replace(/color: #;/g, 'color: \\#;')
                .replace(/Initial\*\/\//g, 'Initial*/')
                .replace(/width: 360px -webkit-border/g, 'width: 360px; -webkit-border');
        }
    },
    'huaban.com': {
        comment: 'Using img() function instead url()',
        patch: function(css) {
            return css.replace(/background:img\(/g, 'background:url(');
        }
    },
    'w3schools.com': {
        comment: 'Typo',
        patch: function(css) {
            return css.replace(/input:\.focus/g, 'input:focus');
        }
    },
    'sohu.com': {
        comment: 'Missed semicolon',
        patch: function(css) {
            return css
                .replace(/font-weight:boldtext-/g, 'font-weight:bold;text-')
                .replace(/[“”]/g, '"');
        }
    },
    'gmw.cn': {
        comment: 'Some missed parts',
        patch: function(css) {
            return css
                .replace(/;e;/g, ';')
                .replace(/;100}/g, ';}');
        }
    },
    'xvideos.com': {
        comment: 'Missed `n` in `:nth-child()`',
        patch: function(css) {
            return css
                .replace(/:nth-child\((\d)\+1\)/g, ':nth-child($1n+1)');
        }
    },
    'adobe.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/\),27\.1875rem/g, ')')
                .replace(/:not \(/g, ':not(');
        }
    },
    'hao123.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/white-space:nowrap -o-text-overflow/g, 'white-space:nowrap; -o-text-overflow')
                .replace(/\}\}\.leftad\{/g, '}.leftad{');
        }
    },
    'sina.com.cn': {
        comment: 'Some missed things',
        patch: function(css) {
            return css
                .replace(/;!important}/g, ';}')
                .replace(/;px;/g, ';');
        }
    },
    'youtube.com': {
        comment: 'Using `progid` for `background` property',
        patch: function(css) {
            return css.replace(
                /background:progid:DXImageTransform\.Microsoft\.gradient\(([^)]+)\)/g,
                'background:"progid:DXImageTransform.Microsoft.gradient($1)"'
            );
        }
    },
    'yahoo.com': {
        comment: 'Unescaped comma in class',
        patch: function(css) {
            return css.replace(/\.Lts\\\(-\.31em\\\)/g, '.Lts\\(-\\.31em\\)');
        }
    },
    'yahoo.co.jp': {
        comment: 'Missed substitions',
        patch: function(css) {
            return css.replace(/%clearfix/g, '\\%clearfix');
        }
    },
    'ebay.com': {
        comment: 'Unprocessed Less escaping',
        patch: function(css) {
            return css
                .replace(/~"([^"]+)"/g, '$1')
                .replace(/position:relativeoverflow:/, 'position:relative;overflow:');
        }
    },
    'ebay.de': {
        comment: 'Unprocessed Less escaping',
        patch: function(css) {
            return css.replace(/~"([^"]+)"/g, '$1');
        }
    },
    'ebay.co.uk': {
        comment: 'Unprocessed Less escaping',
        patch: function(css) {
            return css.replace(/~"([^"]+)"/g, '$1');
        }
    },
    'taobao.com': {
        comment: 'Used `filter()` instead of `alpha()`',
        patch: function(css) {
            return css
                .replace(/filter:filter\(/g, 'filter:alpha(')
                .replace(/input:\.focus/g, 'input:focus');
        }
    },
    'rolloid.net': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css
                .replace(/@mobileu_gradient_two_mob/g, '\\@mobileu_gradient_two_mob')
                .replace(/color:#;/g, 'color:\\#;');
        }
    },
    'nicovideo.jp': {
        comment: 'Typos',
        patch: function(css) {
            return css
                .replace(/text-decoration:underline:/g, 'text-decoration:underline;')
                .replace(/progid :DXImageTransform/g, 'progid:DXImageTransform');
        }
    },
    'bankofamerica.com': {
        comment: 'Broken declaration',
        patch: function(css) {
            return css
                .replace(/bottom:border:0/g, 'border:0');
        }
    },
    'foxnews.com': {
        comment: 'Typo and broken comment',
        patch: function(css) {
            return css
                .replace(/padding;0;/g, 'padding:0;')
                .replace(/\*\/\.HPP/g, '/*.HPP');
        }
    },
    'douyu.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/preserve-3d moz-transform-style:/g, 'preserve-3d; -moz-transform-style:')
                .replace(/\. \.normallevel/g, '.normallevel')
                .replace(/_png:#00f\/ie6\/[a-z]+\.png/g, '');
        }
    },
    'outbrain.com': {
        comment: 'Missed trailing curly bracket',
        patch: function(css) {
            return css + '}';
        }
    },
    'detik.com': {
        comment: 'Missed trailing curly bracket',
        patch: function(css) {
            return css + '}';
        }
    },
    'chinadaily.com.cn': {
        comment: 'Missed trailing curly bracket',
        patch: function(css) {
            return css + '}';
        }
    },
    'pinterest.com': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css.replace(/:global/g, '');
        }
    },
    'pinimg.com': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css.replace(/:global/g, '');
        }
    },
    'microsoft.com': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css.replace(/[a-z\-]+:\s*#\{\$[a-z\-]+\};/gi, '');
        }
    },
    'pixnet.net': {
        comment: 'Wrong function `image-url()` instead of `url()`',
        patch: function(css) {
            return css.replace(/image-url\(ie8/gi, 'url(ie8');
        }
    },
    'ntd.tv': {
        comment: 'Typo',
        patch: function(css) {
            return css.replace(/;s}/gi, ';}');
        }
    },
    'adf.ly': {
        patch: function(css) {
            return css
                .replace(/}\n}\n#tools-tabs/gi, '}\n#tools-tabs')
                .replace(/none;',/g, 'none;');
        }
    },
    'porn555.com': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css.replace(/\$tag-surprise/gi, '\\$tag-surprise');
        }
    },
    'booking.com': {
        comment: 'Typos and using double dash for class selector name',
        patch: function(css) {
            return css
                .replace(/\.--/g, '.-')
                .replace(/-0-transition/gi, '-o-transition')
                .replace(/\.\.ge-genius/g, '.ge-genius');
        }
    },
    'flipkart.com': {
        comment: 'Too many errors, too hard to patch'
    },
    'steampowered.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/;\);/g, ';')
                .replace(/width 616px/, 'width: 616px')
                .replace(/#transparent/g, '\\#transparent')
                .replace(/background: background:/, 'background: ');
        }
    },
    'dailymail.co.uk': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css.replace(/\$control-bar/g, '\\$control-bar');
        }
    },
    'walmart.com': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css.replace(/\$font-size-small/g, '\\$font-size-small');
        }
    },
    'nih.gov': {
        comment: 'Missed trailing comma in selector',
        patch: function(css) {
            return css.replace(/, {/g, ' {');
        }
    },
    'abs-cbn.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/filter:DXImageTransform/g, 'filter:progid:DXImageTransform')
                .replace(/;:\?}/g, ';}')
                .replace(/(@me\s*)?<!--.*?-->/g, '');
        }
    },
    'washingtonpost.com': {
        comment: 'Missed media query',
        patch: function(css) {
            return css.replace(/@media {/g, '@media all {');
        }
    },
    'youm7.com': {
        comment: 'Various issues',
        patch: function(css) {
            return css
                .replace(/.\s+col-sm-9/g, '.col-sm-9')
                .replace(/background-repeat no-repeat;/, 'background-repeat: no-repeat;')
                .replace(/@container-desktop/, '\\@container-desktop')
                .replace('<a href="../../Models/News.cs" > ../../Models/News.cs</a >', '')
                .replace(/#Srcform {\s+}/, '#Srcform {')
                .replace(/div\.frmdata select\s+}/, '');
        }
    },
    'etsy.com': {
        comment: 'Broken An+B expression',
        patch: function(css) {
            return css.replace(/:nth-child\(n2\)/g, ':nth-child(2n)');
        }
    },
    'slack.com': {
        comment: 'Broken media query',
        patch: function(css) {
            return css.replace(/@media 480px/g, '@media \\480px');
        }
    },
    'redtube.com': {
        comment: 'Used bracket hack (usupported by CSSTree)',
        patch: function(css) {
            return css.replace(/\(-bracket-:hack;(margin-left:\dpx;)\)/g, '$1');
        }
    },
    'rambler.ru': {
        comment: 'Broken selector by unsupported single line comment',
        patch: function(css) {
            return css.replace(/\/\/ Для IE8/g, '');
        }
    },
    'livejournal.com': {
        comment: 'Typo in selector',
        patch: function(css) {
            return css.replace(/\. \.lj-like--v4/g, ' .lj-like--v4');
        }
    },
    'wittyfeed.com': {
        comment: 'Typos',
        patch: function(css) {
            return css
                .replace(/top:3px width:/g, 'top:3px; width:')
                .replace(/svg\. \.error/, 'svg .error')
                .replace(/input::{/, 'input{');
        }
    },
    'weebly.com': {
        comment: 'Using @media expression for @font-face block',
        patch: function(css) {
            return css
                .replace(
                    /@media screen and \(-webkit-min-device-pixel-ratio: 0\){font-family:/g,
                    '@font-face{font-family:'
                )
                .replace(/::--webkit/g, '::-webkit');
        }
    },
    'kinogo.club': {
        comment: 'Typo in media feature',
        patch: function(css) {
            return css.replace(/\(resolution=0\)/g, '(resolution:0)');
        }
    },
    'xinhuanet.com': {
        comment: 'Typo in class selector',
        patch: function(css) {
            return css.replace(/\. picTitle/g, ' .picTitle');
        }
    },
    '39.net': {
        comment: 'Broken selectors',
        patch: function(css) {
            return css
                .replace(/a\.spad\/dx/, 'a.spad\\/dx')
                .replace(/\.#renMap1/g, '.renMap1');
        }
    },
    'tmall.com': {
        patch: function(css) {
            return css.replace(/;\+\s+/g, ';+');
        }
    },
    'mail.ru': {
        patch: function(css) {
            return css.replace(/<!--\[(.|\s)*?\]-->/g, '');
        }
    },
    'varzesh3.com': {
        comment: 'Missed custom at-rule',
        patch: function(css) {
            return css.replace(/300ms\)\}@keyframes/g, '300ms);}@keyframes');
        }
    },
    'aliexpress.com': {
        comment: 'Missed selector',
        patch: function(css) {
            return css.replace(/}{/g, '}a{');
        }
    },
    'rakuten.co.jp': {
        comment: 'Typo',
        patch: function(css) {
            return css.replace(/width:%9/g, 'width:9%');
        }
    },
    '123movies.is': {
        comment: 'Bad id name (starts with number)',
        patch: function(css) {
            return css.replace(/#123movies-player/g, '#\\31 23movies-player');
        }
    },
    'diply.com': {
        comment: 'Missed percent sign for keyframe selector',
        patch: function(css) {
            return css.replace(/loading{0,100%/g, 'loading{0%,100%');
        }
    },
    'uol.com.br': {
        comment: 'Missed percent sign for keyframe selector',
        patch: function(css) {
            return css.replace(/placarGol{0{/g, 'placarGol{0%{');
        }
    }
};
