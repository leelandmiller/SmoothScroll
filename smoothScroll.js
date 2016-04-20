/*jslint browser: true*/
/*global $, jQuery, alert*/

function scrollToAnchor(anchorId) {
    'use strict';
	//elem = #anchorId
    //offset = offset of elem: (left, top)
	var elem = '#' + anchorId,
        offset = $(elem).offset();
    //offset = top offset of elem
    offset = offset.top;
	//jquery animate(properties, options)
	$('html,body').animate(
		{
            scrollTop: offset
        },
        'slow'
    );
}