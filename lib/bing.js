const request = require('request-promise');

const BASE_URL = 'https://bing.com/HPImageArchive.aspx?format=js&n=1';

const getImage = async () => {
    let obj = await request(BASE_URL);

    let { images: [{ url, copyright, copyrightlink, title, hsh },] } = JSON.parse(obj);

    return {
        url: 'http://bing.com' + url,
        copyright,
        copyrightlink,
        title,
        hsh,
    }
};

module.exports = {
    getImage,
}