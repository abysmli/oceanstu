/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.0.0
 * Created:October 2014
 * License URI:http://wrapbootstrap.com
 * File Description: Place here your custom scripts
 */

$(document).ready(function(){

	var _splitpage_width_sum = $(".splitpage-container").width();
	$(".splitpage-container").height(_splitpage_width_sum*700/1140 + "px");
	$(".splitpage-1").width(_splitpage_width_sum + "px");
	$(".splitpage-1").height(_splitpage_width_sum*700/1140 + "px");
	$(".splitpage-2").width(_splitpage_width_sum + "px");
	$(".splitpage-2").height(_splitpage_width_sum*700/1140 + "px");
	$(".splitpage-3").width(_splitpage_width_sum + "px");
	$(".splitpage-3").height(_splitpage_width_sum*700/1140 + "px");
	$(".splitpage-4").width(_splitpage_width_sum + "px");
	$(".splitpage-4").height(_splitpage_width_sum*700/1140 + "px");

	var _splitpage_width = $(".splitpage-container").width()/4;
	var _splitpage_2_left = _splitpage_width;
	var _splitpage_3_left = _splitpage_width*2;
	var _splitpage_4_left = _splitpage_width*3;
	$(".splitpage-2").css({ left: _splitpage_2_left + "px" });
	$(".splitpage-3").css({ left: _splitpage_3_left + "px" });
	$(".splitpage-4").css({ left: _splitpage_4_left + "px" });

	var _splitpage_offset = Math.tan(Math.PI/18)*$(".splitpage-container").height()/2*(-1);
	$(".splitpage-2 img").css({left: _splitpage_offset + "px"});
	$(".splitpage-3 img").css({left: _splitpage_offset + "px"});
	$(".splitpage-4 img").css({left: _splitpage_offset + "px"});

	$("#map_canvas").height($("#map_canvas").width()*3/5 + "px");

	$(window).resize(function(){
		_splitpage_width_sum = $(".splitpage-container").width();
		$(".splitpage-container").height(_splitpage_width_sum*700/1140 + "px");
		$(".splitpage-1").width(_splitpage_width_sum + "px");
		$(".splitpage-1").height(_splitpage_width_sum*700/1140 + "px");
		$(".splitpage-2").width(_splitpage_width_sum + "px");
		$(".splitpage-2").height(_splitpage_width_sum*700/1140 + "px");
		$(".splitpage-3").width(_splitpage_width_sum + "px");
		$(".splitpage-3").height(_splitpage_width_sum*700/1140 + "px");
		$(".splitpage-4").width(_splitpage_width_sum + "px");
		$(".splitpage-4").height(_splitpage_width_sum*700/1140 + "px");

		_splitpage_width = $(".splitpage-container").width()/4;
		_splitpage_2_left = _splitpage_width;
		_splitpage_3_left = _splitpage_width*2;
		_splitpage_4_left = _splitpage_width*3;
		$(".splitpage-2").css({ left: _splitpage_2_left + "px" });
		$(".splitpage-3").css({ left: _splitpage_3_left + "px" });
		$(".splitpage-4").css({ left: _splitpage_4_left + "px" });

		_splitpage_offset = Math.tan(Math.PI/18)*$(".splitpage-container").height()/2*(-1);
		$(".splitpage-2 img").css({left: _splitpage_offset + "px"});
		$(".splitpage-3 img").css({left: _splitpage_offset + "px"});
		$(".splitpage-4 img").css({left: _splitpage_offset + "px"});

		$("#map_canvas").height($("#map_canvas").width()*3/5 + "px");
	});

	$(".splitpage-1").hover(
		function(){
			$(".splitpage-2").finish().transition({left: _splitpage_2_left + _splitpage_width*1.5 + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left + _splitpage_width + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left + _splitpage_width/2 + "px"});
		},function() {
			$(".splitpage-2").finish().transition({left: _splitpage_2_left + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left + "px"});
	});
	$(".splitpage-2").hover(
		function(){
			$(".splitpage-2").finish().transition({left: _splitpage_2_left - _splitpage_width/2 + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left + _splitpage_width + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left + _splitpage_width/2 + "px"});
		},function() {
			$(".splitpage-2").finish().transition({left: _splitpage_2_left + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left + "px"});
	});
	$(".splitpage-3").hover(
		function(){
			$(".splitpage-2").finish().transition({left: _splitpage_2_left - _splitpage_width/2 + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left - _splitpage_width + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left + _splitpage_width/2 + "px"});
		},function() {
			$(".splitpage-2").finish().transition({left: _splitpage_2_left + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left + "px"});
	});
	$(".splitpage-4").hover(
		function(){
			$(".splitpage-2").finish().transition({left: _splitpage_2_left - _splitpage_width/2 + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left - _splitpage_width + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left - _splitpage_width*1.5 + "px"});
		},function() {
			$(".splitpage-2").finish().transition({left: _splitpage_2_left + "px"});
			$(".splitpage-3").finish().transition({left: _splitpage_3_left + "px"});
			$(".splitpage-4").finish().transition({left: _splitpage_4_left + "px"});
	});
	var map = new GMaps({
		el: '#map_canvas',
		lat: 48.695443,
		lng: 9.161513,
	});
	map.addMarker({
		lat: 48.695443,
		lng: 9.161513,
		title: '欧深思途',
		infoWindow: {
          content: '<p>我们在这</p>'
        }
	});

});
