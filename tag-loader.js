var loaderUtils = require("loader-utils");
var path = require("path");

var riot_compile = require('riot/compiler')

module.exports = function(source) {
var js =riot_compile(source, { compact:true})
return js;
} 
