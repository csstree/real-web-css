discovery.setPrepare((data, { defineObjectMarker }) => {
    data.sites.forEach(defineObjectMarker('site', {
        ref: 'domain'
    }));
});
