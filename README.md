# spider-api
I've been repeating with creating logics using spiders, so I decided to create a api center to hold these APIs based on spiders. This tool is somehow based on the previous [spider adapter tool](https://www.npmjs.com/package/spider-adapters).

## How to Use
Currently it has 2 API: NHK radio and Bing image. So:
```
const radio = require('../index').nhk_radio;

radio.getRadios().then(res => console.log(res));
```

## API List

### NHK Radio
#### getRadios()
Return:
```javascript
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
```javascript
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

## Bing Image

### getImage
Return:
```javascript
{ url:
   'http://bing.com/th?id=OHR.BlueChip_ROW8110118488_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  copyright:
   'Circuit board of a computer (© Bobkov Evgeniy/Shutterstock)',
  copyrightlink: 'javascript:void(0)',
  title: '',
  hsh: 'e54b9ac63a19bec27a5c288b93d5c024' }
```

*Sorry I removed other infor from the original response*
