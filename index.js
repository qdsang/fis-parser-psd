

'use strict';

var psd2png = require('psd2png');

module.exports = function(content, file, conf){
    
    var buffer = psd2png(content);

    return buffer;
};