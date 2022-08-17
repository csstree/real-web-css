export default function(data, { defineObjectMarker }) {
    data.sites.forEach(defineObjectMarker('site', {
        ref: 'domain'
    }));
}
