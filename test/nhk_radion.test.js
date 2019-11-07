const radio = require('../index').nhk_radio;

radio.getRadios().then(res => console.log(res));