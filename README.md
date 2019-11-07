# spider-api
I've been repeating with creating logics using spiders, so I decided to create a api center to hold these APIs based on spiders. This tool is somehow based on the previous [spider adapter tool](https://www.npmjs.com/package/spider-adapters).

## How to Use
Currently it has only one API for NHK Radio Center. So:
```
const radio = require('../index').nhk_radio;

radio.getRadios().then(res => console.log(res));
```

## API List

### NHK Radio
#### getRadios()
Return:
```
[ { title: '午後 X 時のNHKニュース',
    filename: '',
    duration: '297',
    size: '2376621',
    slow: 
     { filename: '',
       duration: '357',
       size: '2863341' },
    fast: 
     { filename: '',
       duration: '178',
       size: '1431693' } },
  ...]
```
#### getLatestRadio
Return:
```
{ title: '午後 X 時のNHKニュース',
    filename: '',
    duration: '297',
    size: '2376621',
    slow: 
     { filename: '',
       duration: '357',
       size: '2863341' },
    fast: 
     { filename: '',
       duration: '178',
       size: '1431693' }}
```