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
    {
        view: 'chart',
        data: 'sites.stylesheets.errors.group(=>name).({ x: key, y: value.size() }).sort(y desc)',
        sort: false,
        vertical: true
    },
    {
        view: 'table',
        data: 'sites.[stylesheets]',
        cols: [
            { header: '#', data: 'id + 1' },
            { header: 'Site', data: 'domain' },
            { header: 'Count', data: 'stylesheets.size()' },
            { header: 'Size', data: 'stylesheets.reduce(=>$$ + size, 0)' },
            { header: 'Errors', data: 'stylesheets.errors.size()' }
        ]
    },
    {
        view: 'table',
        data: 'usage.entries().({ type: key, stat: value })',
        cols: [
            { header: 'Type', data: 'type' },
            { header: 'All', data: 'stat.count' },
            { header: 'Valid', data: 'stat.valid.size()' },
            { header: 'Invalid', data: 'stat.invalid.size()' },
            { header: 'Unknown', data: 'stat.unknown.size()' },
            { header: 'Knowns', data: '#.data.usageDict[type].valid.size()' },
            { header: 'Unused knowns', data: 'stat.unusedKnowns.size()' }
        ]
    },
    { view: 'struct', expanded: 2 }
]);
