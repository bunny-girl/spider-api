const bing = require('../index').bing;

bing.getImage().then(data => console.log(data));