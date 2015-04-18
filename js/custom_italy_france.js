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
image_objs.push($(".rome img"));
image_objs.push($(".milan img"));
image_objs.push($(".venice img"));
image_objs.push($(".florence img"));
image_objs.push($(".paris img"));
image_objs.push($(".nice img"));
image_objs.push($(".provence img"));
image_objs.push($(".dazur img"));

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $.each(image_objs, function(index, obj) {
        if (!index) obj.attr('src', 'images/point_color.jpg');
        obj.click(function() {
            changeTo(index, obj, true);
        });
        obj.hover(function(){
            $(this).transition({ scale: [1.5, 1.5], duration: 200 });
        }, function(){
            $(this).transition({ scale: [1, 1], duration: 200 });
        });
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var index = parseInt($(e.target).parent('li').index());
        if ($(e.target).parent('li').parent('ul').attr('id')=='top_tab_list') {
            if (index==0) {
                changeTo(0, image_objs[0], true);
            } else {
                changeTo(4, image_objs[4], true);
            }
        } else {
            if ($(e.target).parent('li').parent('ul').attr('id')=='france_tab_list') {
                index+=4;
            }
            changeTo(index, image_objs[index], false);
        }
    })
});

function changeTo(index, obj, flag) {
    $.each(image_objs, function(_index, _obj) {
        _obj.attr('src', 'images/point_gray.jpg');
    });
    obj.attr('src', 'images/point_color.jpg');
    if (index<4) {
        if (flag) $('#italy_tab_list li:eq('+index+') a').tab('show');
    } else {
        if (flag) $('#france_tab_list li:eq('+(index-4)+') a').tab('show');
    }
    
}