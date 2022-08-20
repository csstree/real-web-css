export default function(data, { defineObjectMarker }) {
    const siteMarker = defineObjectMarker('site', { ref: 'domain' });
    const stylesheetMarker = defineObjectMarker('stylesheet');
    const usageStat = Object.create(null);

    data.usage = usageStat;

    for (const type of Object.keys(data.usageDict)) {
        usageStat[type] = Object.create(null);
    }

    for (const site of data.sites) {
        siteMarker(site);

        for (const stylesheet of site.stylesheets) {
            stylesheetMarker(stylesheet);
            stylesheet.site = site;

            for (const error of stylesheet.errors) {
                error.stylesheet = stylesheet;
            }

            for (const [type, stat] of Object.entries(stylesheet.usage)) {
                const map = usageStat[type];

                for (const [key, count] of Object.entries(stat)) {
                    if (!map[key]) {
                        map[key] = [];
                    }

                    map[key].push({
                        domain: site.domain,
                        stylesheet,
                        count
                    });
                }
            }
        }
    }

    for (const [type, stat] of Object.entries(usageStat)) {
        const usageDict = data.usageDict[type];
        const neverUsedValid = new Set(usageDict.valid);
        const newStat = {
            count: 0,
            unusedKnowns: null,
            valid: [],
            invalid: [],
            unknown: []
        };

        usageStat[type] = newStat;

        for (const [name, stylesheets] of Object.entries(stat)) {
            const validity = usageDict.valid.includes(name)
                ? 'valid'
                : usageDict.invalid.includes(name)
                    ? 'invalid'
                    : 'unknown';
            let fullName = name;

            switch (type) {
                case 'Atrule':
                    fullName = `@${name}`;
                    break;

                case 'PseudoClassSelector':
                    fullName = `:${name}`;
                    break;

                case 'PseudoElementSelector':
                    fullName = `::${name}`;
                    break;
            }

            neverUsedValid.delete(name);
            newStat.count++;
            newStat[validity].push({
                name,
                status: validity,
                type,
                fullName,
                sites: [...new Set(stylesheets.map(s => s.stylesheet.site))],
                stylesheets
            });
        }

        newStat.unusedKnowns = [...neverUsedValid];
        newStat.valid.sort((a, b) => a.name < b.name ? -1 : 1);
        newStat.invalid.sort((a, b) => a.name < b.name ? -1 : 1);
        newStat.unknown.sort((a, b) => a.name < b.name ? -1 : 1);
    }
}
