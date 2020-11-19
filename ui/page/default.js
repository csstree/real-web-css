discovery.page.define('default', [
    {
        view: 'page-header',
        content: [
            'h1:#.name',
            {
                view: 'block',
                className: 'credits',
                content: [
                    'text:"Powered by "',
                    'link:{ text: "CSSTree", href: "https://github.com/csstree/csstree" }',
                    'text:" and "',
                    'link:{ text: "Discovery.js", href: "https://github.com/discoveryjs/discovery" }'
                ]
            }
        ]
    },
    { view: 'struct', expanded: 2 }
]);
