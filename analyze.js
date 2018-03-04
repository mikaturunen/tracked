const unirest = require('unirest');

const API_KEY = process.env['API_KEY']

// TODO load urls from somewhere
const host = 'https://whatcms.org/APIEndpoint';
const shopUrls = [
    "https://checkout.fi",
    "www.verkkokauppa.fi",
    "hobbyhall.fi",
    "pelikamat.net",
    "http://www.deadfine.fi/",
    "suokko.fi",
    "somantupa.fi/",
    "retkitukku.fi",
    "juhlamaailma.fi"
]
.map(url => url.replace('https://', '').replace('http://', '').replace('www.', ''));

timer = 0;
Promise
    .all(
        shopUrls.map(url => new Promise((resolve) => {
            timer += 5000;
            setTimeout(() =>
                unirest.get(`${host}?key=${API_KEY}&url=${url}`).end(response => resolve(response)),
                timer
            )
        }))
    )
    .then(results => console.log(JSON.stringify(results, null, 2)))
    .catch(errors => console.log('error:', errors));


