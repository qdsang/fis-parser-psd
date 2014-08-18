fis-parser-psd
==================

A parser plugin for fis to compile psd file.

## 说明

psd 目前支持RGB颜色模式哦！
不然爆以下错误概不负责，请自行调整（PhotoShop menu -> 图像 -> 模式 -> RGB 颜色）
```
[ERROR] parser.psd: Object #<Image> has no method 'combineCmykChannel'
```
或者
```
[ERROR] parser.psd: Object #<Image> has no method 'combineGreyscaleChannel'
```


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
