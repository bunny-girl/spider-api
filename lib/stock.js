const request = require('request-promise');

const BASE_URL = 'http://hq.sinajs.cn/list=';

const getGeneral = async () => {
    let str = await request(BASE_URL + 's_sh000001');

    str = str.split('=')[1];
    str = str.substring(1, str.length - 3);

    let [, currentValue, netChange, netChangePercent] = str.split(',');

    return {
        currentValue,
        netChange,
        netChangePercent,
    }
};

const getStockById = async id => {
    let data = await request(BASE_URL + 'id');
};

module.exports = {
    getGeneral,
    // getStockById,
}