const stylesheetTable = {
    view: 'table',
    cols: {
        url: { content: {
            view: 'switch',
            content: [
                { when: 'url', content: 'link:{ href: url, external: true, text: url | size() > 50 ? $[:50] + "..." : $ }' },
                { content: [] }
            ]
        } }
    }
};

const usageDictTable = {
    view: 'table',
    cols: [
        'fullName',
        { header: 'Sites', data: 'sites', content: 'text:size()', details: 'table' },
        { header: 'Stylesheets', data: 'stylesheets', content: 'text:size()', details: 'table' }
    ]
};

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
        view: 'hstack',
        content: [
            {
                view: 'section',
                header: 'h2:"Sites"',
                content: {
                    view: 'table',
                    data: 'sites.[stylesheets]',
                    cols: [
                        { header: '#', data: 'id + 1' },
                        { header: 'Site', data: 'domain' },
                        { header: 'Count', className: 'number', data: 'stylesheets', content: 'text-numeric:size()', details: stylesheetTable },
                        { header: 'Size', className: 'number', data: 'stylesheets', content: 'text-numeric:reduce(=>$$ + size, 0)', details: stylesheetTable },
                        { header: 'Errors', className: 'number', data: 'stylesheets.errors', content: 'text-numeric:size()', details: [
                            {
                                view: 'list',
                                item: {
                                    view: 'expand',
                                    header: [
                                        'badge:name',
                                        'text:message',
                                        { view: 'source', when: 'details', data: '{ lineNum: false, content: details }' }
                                    ],
                                    content: { view: 'struct', expanded: 1 }
                                }
                            },
                            'table'
                        ] }
                    ]
                }
            },
            {
                view: 'section',
                header: 'h2:"Usage"',
                content: [
                    {
                        view: 'table',
                        data: 'usage.entries().({ type: key, stat: value })',
                        cols: [
                            { header: 'Type', data: 'type' },
                            { header: 'All', data: 'stat.count' },
                            { header: 'Valid', className: 'number', data: 'stat.valid', content: 'text:size()', details: usageDictTable },
                            { header: 'Invalid', className: 'number', data: 'stat.invalid', content: 'text:size()', details: usageDictTable },
                            { header: 'Unknown', className: 'number', data: 'stat.unknown', content: 'text:size()', details: usageDictTable },
                            { header: 'Known', className: 'number', data: '#.data.usageDict[type].valid', content: 'text:size()', details: {
                                view: 'table',
                                data: '.({ fullName: $ })'
                            } },
                            { header: 'Unused known', className: 'number', data: 'stat.unusedKnowns', content: 'text:size()', details: {
                                view: 'table',
                                data: '.({ fullName: $ })'
                            } }
                        ]
                    },
                    'link:{ href: "#usage", text: "Usage page" }'
                ]
            }
        ]
    },
    { view: 'struct', expanded: 2 }
]);
