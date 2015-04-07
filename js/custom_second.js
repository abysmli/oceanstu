/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.0.0
 * Created:October 2014
 * License URI:http://wrapbootstrap.com
 * File Description: Place here your custom scripts
 */

var image_objs = [];
image_objs.push($(".stuttgart img"));
image_objs.push($(".berlin img"));
image_objs.push($(".hamburg img"));
image_objs.push($(".frankfurt img"));
image_objs.push($(".koeln img"));
image_objs.push($(".muenchen img"));
image_objs.push($(".heidelberg img"));
image_objs.push($(".dresden img"));
image_objs.push($(".hanover img"));
image_objs.push($(".duesseldorf img"));

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $.each(image_objs, function(index, obj) {
        if (!index) obj.attr('src', 'images/point_color.jpg');
        obj.click(function() {
            changeTo(index, obj, true);
        });
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var index = parseInt($(e.target).parent('li').index());
        changeTo(index, image_objs[index], false);
    })
});

function changeTo(index, obj, flag) {
    $.each(image_objs, function(_index, _obj) {
        _obj.attr('src', 'images/point_gray.jpg');
    });
    obj.attr('src', 'images/point_color.jpg');
    if (flag) $('#tab_list li:eq('+index+') a').tab('show');
}