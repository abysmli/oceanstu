/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.0.0
 * Created:October 2014
 * License URI:http://wrapbootstrap.com
 * File Description: Place here your custom scripts
 */
var tpj = jQuery;
tpj.noConflict();

var image_stu = tpj(".stuttgart img");
var image_ber = tpj(".berlin img");
var image_ham = tpj(".hamburg img");

tpj(document).ready(function() {

    tpj('[data-toggle="tooltip"]').tooltip();

    if (tpj.fn.cssOriginal != undefined) tpj.fn.css = tpj.fn.cssOriginal;
    var api = tpj('.slider-banner').revolution();

    api.bind("revolution.slide.onchange", function(e, data) {
        if (data.slideIndex == 1) {
        	changTo_stu(api);
        }
        if (data.slideIndex == 2) {
        	changTo_ber(api);
        }
        if (data.slideIndex == 3) {
        	changTo_ham(api);
        }
    });

    var height_deu_map = tpj('.deutschland-map-container').height();
    var height_slideshow = tpj('.slideshow').height();
    var margin_top = (height_deu_map - height_slideshow) / 2;
    if (margin_top > 0) {
        tpj('.slideshow').css({
            'margin-top': margin_top + 'px'
        });
    }

    image_stu.attr('src', 'images/point_color.jpg');
    image_stu.click(function() {
        changTo_stu(api);
    });
    image_ber.click(function() {
        changTo_ber(api);
    });
    image_ham.click(function() {
        changTo_ham(api);
    });
});

function changTo_stu(api) {
    image_stu.attr('src', 'images/point_color.jpg');
    image_ber.attr('src', 'images/point_gray.jpg');
    image_ham.attr('src', 'images/point_gray.jpg');
    api.revshowslide(1);
}

function changTo_ber(api) {
    image_stu.attr('src', 'images/point_gray.jpg');
    image_ber.attr('src', 'images/point_color.jpg');
    image_ham.attr('src', 'images/point_gray.jpg');
    api.revshowslide(2);
}

function changTo_ham(api) {
    image_stu.attr('src', 'images/point_gray.jpg');
    image_ber.attr('src', 'images/point_gray.jpg');
    image_ham.attr('src', 'images/point_color.jpg');
    api.revshowslide(3);
}