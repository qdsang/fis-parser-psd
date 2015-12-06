fis-parser-psd
==================

A parser plugin for fis to compile psd file.

## usage

    $ npm install -g fis-parser-psd


```javascript
//file : fis-conf.js

fis.config.merge({
    project : {
        fileType : {
            image : 'psd'
        }
    }
});

fis.config.set('roadmap.path', [
    {
        reg : '**.psd'
    }
]);

fis.config.merge({
    roadmap : {
        ext : {
            psd : 'png'
        }
    },
    modules : {
        parser : {
            psd : 'psd'
        }
    }
});

```

Stats
-----

[![NPM](https://nodei.co/npm/fis-parser-psd.png?downloads=true&stars=true)](https://nodei.co/npm/fis-parser-psd/)
[![NPM](https://nodei.co/npm-dl/fis-parser-psd.png)](https://nodei.co/npm/fis-parser-psd/)

