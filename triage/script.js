

fetch('./data/test-resolutions.json').then(res => res.json()).then(data => {
    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function isActualFact(fact) {
        return Array.isArray(fact.sources) && fact.sources.length > 0;
    }

    function generateFactList(subject) {
        var facts = data.subject[subject].facts || [];

        return facts.filter(isActualFact).map(function(fact) {
            var sources = fact.sources.map(function(source) {
                return source.replace(
                    /([a-z0-9\-]+(?:\.[a-z0-9\-]+)+)(\s+\((\d+)\))/,
                    '<a class="source" href="data/css/$3.css" target="_blank">$1</a>$2'
                )
            }).join(', ')
            var factEl = document.createElement('div');
            factEl.className = 'fact';
            factEl.innerHTML =
                '<div class="sources">' + sources + '</div>' +
                '<pre>' + escapeHtml(fact.name) + '<pre>';

            return factEl;
        });
    }

    function selectSubject(subject) {
        if (subject in data.subject === false) {
            subject = '';
        }

        [].slice.call(subjectListEl.querySelectorAll('.subject')).forEach(function(tab, idx) {
            if (!subject) {
                subject = tab.id;
            }

            tab.classList.toggle('subject__selected', tab.id === subject);
        });

        factListEl.innerHTML = '';
        factListEl.appendChild(
            generateFactList(subject).reduce(function(frag, factEl) {
                frag.appendChild(factEl);
                return frag;
            }, document.createDocumentFragment())
        );

        if (location.hash.substr(1) !== subject) {
            location.hash = '#' + subject;
        }
    }

    function updateLocation() {
        selectSubject(location.hash.substr(1));
    }

    var subjectListEl = document.querySelector('.subject-list');
    var factListEl = document.querySelector('.fact-list');

    for (var subjectName in data.subject) {
        var subjectData = data.subject[subjectName];

        // counts
        var resolutionsCount = subjectData.resolutions.length;
        var unresolvedCount = subjectData.facts
            .filter(isActualFact)
            .reduce(function(count, fact) {
                return count + (subjectData.resolutions[fact.resolution].side === null);
            }, 0);

        var tab = document.createElement('div');
        tab.className = 'subject';
        tab.id = subjectName;
        tab.onclick = function() {
            location.href = '#' + this.id;
            selectSubject(this.id);
        };
        tab.innerHTML =
            '<span class="caption">' + subjectName + '</span>' +
            '<span class="count">' + unresolvedCount + '</span>';

        subjectListEl.appendChild(tab)
    }

    addEventListener('hashchange', updateLocation);
    updateLocation();
});
