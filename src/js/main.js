global.$ = global.jQuery = require('jquery');
require('modernizr');
var Slider = require('./modules/press-slider.js');

$(document).ready(function() {

    var slider = new Slider('.press-slider');

});