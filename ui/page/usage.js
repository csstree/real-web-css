/* eslint-env browser */

const statBadge = {
    view: 'badge',
    data: `{
        $name;
        $type;
        $siteCount: sites.size();
        $stylesheetCount: stylesheets.size();
        $entryCount: stylesheets.stylesheet.usage.reduce(=> $$ + $[$type][$name], 0);

        sites,
        $siteCount,
        $stylesheetCount,
        $entryCount,
        text: [
            $entryCount,
            $stylesheetCount,
            $siteCount
        ].join(' / ')
    }`,
    tooltip: [
        { view: 'block', content: 'text:"Entries: " + entryCount' },
        { view: 'block', content: 'text:"StyleSheets: " + stylesheetCount' },
        { view: 'block', content: 'text:"Sites: " + siteCount' },
        { view: 'ol', data: 'sites', item: 'text:domain', limit: 10 }
    ]
};

function setStateHandler(toSet) {
    return function (_, data, context) {
        const stat = context.data.usage[data.type];

        for (const fromSet of ['valid', 'invalid', 'unknown']) {
            const fromIdx = stat[fromSet].indexOf(data);

            if (fromIdx !== -1) {
                if (fromSet === toSet) {
                    console.warn('From and to sets are equal');
                    return;
                }

                const toIdx = stat[toSet].findIndex(item => item.name > data.name);

                stat[fromSet].splice(fromIdx, 1);

                if (toIdx === -1) {
                    stat[toSet].push(data);
                } else {
                    stat[toSet].splice(toIdx, 0, data);
                }

                discovery.renderPage();
                break;
            }
        }
    };
}

discovery.page.define('usage', [
    {
        view: 'page-header',
        content: 'h1:"Usage across sites"'
    },
    {
        view: 'list',
        data: 'usage.entries().({ name: key, ... value })',
        item: [
            'h2:name',
            {
                view: 'hstack',
                content: [
                    {
                        view: 'block',
                        data: 'valid',
                        content: [
                            'h4:`✅ Valid (${size()})`',
                            { view: 'ul', item: [
                                'html:`<span class="name">${fullName}</pre>`',
                                statBadge
                            ] }
                        ]
                    },
                    {
                        view: 'block',
                        data: 'invalid',
                        content: [
                            'h4:`❌ Invalid (${size()})`',
                            { view: 'ul', item: [
                                'html:`<span class="name">${fullName}</pre>`',
                                statBadge
                            ] }
                        ]
                    },
                    {
                        view: 'block',
                        data: 'unknown',
                        whenData: true,
                        content: [
                            'h4:`⚠️ Unknown (${size()})`',
                            { view: 'ul', item: [
                                ...location.hostname === 'localhost'
                                    ? [
                                        { view: 'button', content: 'text:"✅"', onClick: setStateHandler('valid') },
                                        { view: 'button', content: 'text:"❌"', onClick: setStateHandler('invalid') }
                                    ]
                                    : [],
                                'html:`<span class="name">${fullName}</pre>`',
                                statBadge
                            ] }
                        ]
                    }
                ]
            }
        ]
    }
]);
