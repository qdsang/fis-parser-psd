

'use strict';

var psd2png = require('psd2png');

module.exports = function(content, file, conf){
    var hash = fis.util.md5(content, 10);
    var basename = fis.project.getCachePath('psd', file.basename);
    var cacheFile = basename + '-psd-' + hash + '.tmp';
    
    var buffer;
    if (fis.util.exists(cacheFile)) {
    	buffer = fis.util.fs.readFileSync(cacheFile);
    } else {
    	buffer = psd2png(content);
     	fis.util.write(cacheFile, buffer);
    }
    
    return buffer;
};