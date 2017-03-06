var fs = require('fs');
var path = require('path');

buildTriageIndex({
    input: require(path.join(__dirname, '../data/test-result.json')),
    resolutions: path.join(path.join(__dirname, '../data/test-resoltions.json')),
    subject: {
        parse: {
            facts: function(item) {
                var result = [];
                if (item.error) {
                    result.push(item.error);
                }
                if (item.fixedError) {
                    result.push(item.fixedError);
                }
                return result;
            },
            attributes: {
                side: ['site', 'csstree'],
                type: true
            }
        },
        validation: {
            facts: function(item) {
                return item.validation;
            },
            attributes: {
                side: ['csstree-unsupport', 'confimed', 'to-be-confirmed'],
                type: true
            }
        }
    }
});

function createAttributes(attributes, values) {
    var result = {};

    for (var attributeName in attributes) {
        result[attributeName] = null;
    }

    if (values) {
        for (var attributeName in attributes) {
            var config = attributes[attributeName];

            if (Array.isArray(config)) {
                if (config.indexOf(values[attributeName]) !== -1) {
                    result[attributeName] = values[attributeName];
                }
            }
        }
    }

    return result;
}

function toArray(setOrMap) {
    var result = [];
    setOrMap.forEach(function(value) {
        result.push(value);
    });
    return result;
}

function buildTriageIndex(config) {
    var input = config.input;
    var resolutionsFile = config.resolutions;
    var knownResolutions = {};
    var factBySubject = {};
    var resolutionBySubject = {};

    if (fs.existsSync(resolutionsFile)) {
        knownResolutions = JSON.parse(fs.readFileSync(resolutionsFile, 'utf8'));
    }

    // use known resultions
    if (!knownResolutions.subject) {
        knownResolutions.subject = {};
    }

    for (var subjectName in config.subject) {
        var subject = config.subject[subjectName];
        var resolutions = [];

        factBySubject[subjectName] = new Map();

        if (knownResolutions.subject[subjectName].resolutions &&
            Array.isArray(knownResolutions.subject[subjectName].resolutions)) {
            resolutions = knownResolutions.subject[subjectName].resolutions;
        }

        if (knownResolutions.subject[subjectName].facts &&
            Array.isArray(knownResolutions.subject[subjectName].facts)) {
            knownResolutions.subject[subjectName].facts.forEach(function(fact) {
                factBySubject[subjectName].set(fact.name, fact);
                fact.sources = new Set();

                if (!Number.isInteger(fact.resolution) ||
                    fact.resolution < 0 ||
                    fact.resolution >= resolutions.length) {
                    fact.resolution = createAttributes(subject.attributes, fact.attributes);
                } else {
                    fact.resolution = resolutions[fact.resolution];
                }
            });
        }
    }

    // collect facts
    for (var name in input) {
        var item = input[name];

        for (var subjectName in config.subject) {
            var subject = config.subject[subjectName];
            var subjectFacts = factBySubject[subjectName];
            var facts = subject.facts(item);

            if (!facts || !facts.length) {
                continue;
            }

            facts.forEach(function(fact) {
                if (!subjectFacts.has(fact)) {
                    subjectFacts.set(fact, {
                        name: fact,
                        sources: new Set(),
                        resolution: createAttributes(subject.attributes)
                    });
                }

                var fact = subjectFacts.get(fact);
                fact.sources.add(name);
            });
        }
    }

    // generate result
    var result = {
        subject: {}
    };

    for (var subjectName in config.subject) {
        var mapResolution = new Map();
        var resolutions = [];

        result.subject[subjectName] = {
            resolutions: resolutions,
            facts: toArray(factBySubject[subjectName]).map(function(fact) {
                fact.sources = toArray(fact.sources);
                if (!mapResolution.has(fact.resolution)) {
                    mapResolution.set(fact.resolution, resolutions.push(fact.resolution) - 1);
                }
                fact.resolution = mapResolution.get(fact.resolution);
                return fact;
            })
        };
    }

    // write results
    fs.writeFileSync(resolutionsFile, JSON.stringify(result, null, 4), 'utf8');
}
