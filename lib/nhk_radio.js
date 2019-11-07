const request = require('request-promise');

const BASE_URL = 'https://api.nhk.or.jp/r-news/v1/newslist.js';
const RADIO_PREFIX = 'https://www.nhk.or.jp/r-news/ondemand/mp3/';

const _getRadio = async (timeStr = new Date().getTime()) => {
    try {
        let data = await request(`${BASE_URL}?callback=radionews&_=${timeStr}`);

        data = data.replace('radionews(', '');
        data = data.substring(0, data.length - 2);

        let { news } = JSON.parse(data);

        return news.map(item => ({
            title: item.title,
            filename: `${RADIO_PREFIX}${item.soundlist.sound_normal.filename}.${item.soundlist.sound_normal.type}`,
            duration: item.soundlist.sound_normal.duration,
            size: item.soundlist.sound_normal.size,
            slow: {
                filename: `${RADIO_PREFIX}${item.soundlist.sound_slow.filename}.${item.soundlist.sound_slow.type}`,
                duration: item.soundlist.sound_slow.duration,
                size: item.soundlist.sound_slow.size,
            },
            fast: {
                filename: `${RADIO_PREFIX}${item.soundlist.sound_fast.filename}.${item.soundlist.sound_fast.type}`,
                duration: item.soundlist.sound_fast.duration,
                size: item.soundlist.sound_fast.size,
            }
        }));
    } catch (e) {
        console.log(e.stack);
        return null;
    }
};

const getLatestRadio = async () => {
    let radios = await getRadios();
    return radios ? radios.reverse()[0] : null;
};

const getRadios = async timeStr => {
    let radios = await _getRadio(timeStr);
    return radios ? radios.reverse() : null;
};

module.exports = {
    getRadios,
    getLatestRadio,
}