/*
 * xTime - Responsive Coming Soon Template
 *
 * Author: www.matchthemes.com
 *
 */
 
jQuery(document).ready(function($) {
 

	"use strict";
	

	/*************************************
	 Background Slideshow images                                           
	/****************************************/

	var slideshow_images = [
	{"image":"images/bkgs/bkg-1.jpg"},
	{"image":"images/bkgs/bkg-2.jpg"},
	{"image":"images/bkgs/bkg-3.jpg"}
];
	
	$.supersized({
				
				autoplay : 1, // Slideshow starts playing automatically
                    
                slide_interval : 3500, // Length between transitions
                    
             	transition : 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                    
                transition_speed : 1500, // Speed of transition
														   
				slides : slideshow_images
				
	
	});
	
	  $('#countdown').countDown({
	        targetDate: {
	            'day':      30,
          		'month':    6,
	            'year':     2020,
	            'hour':     12,
	            'min':      0,
    	        'sec':      0
	        },
        omitWeeks: true
	    });

})




