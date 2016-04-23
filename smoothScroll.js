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
        {
            /*
            duration can be set to 
            'fast', 'slow', or any integer
            (in milliseconds)
            jQuery's default is 400.
            'fast' = 200, 'slow' = 600.
            I like it relatively slow.
            */
            duration: 1200,
            /* 
            'easeOutBack' provides the bouncy effect
            for other effects, please refer to README.md
            */
            easing: 'easeOutBack'
        }
    );
}