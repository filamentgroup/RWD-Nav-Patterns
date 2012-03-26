/* Sample scripts for RWD nav patterns 
   (c) 2012 Maggie Wachs, Filament Group, Inc - http://filamentgroup.com/examples/rwd-nav-patterns/GPL-LICENSE.txt
   Last updated: March 2012
   Dependencies: jQuery
*/



jQuery(function($){

   $('html').addClass('hasJS');

   // add a "close" button to the nav   
   $('.nav-primary h3').before('<a href="#" id="hide-nav" class="button">Close menu</a>');
   
   // toggle visiblity
   $('#show-nav, #hide-nav').live('click', function(){
      $('html').toggleClass('nav-column');
      return false;
   });
   
   // when the screen is large enough, open the nav by default
   $(window).bind('load resize orientationchange', function(){
      if ( window.outerWidth >= 1000 ) { $('html').addClass('nav-column'); };
   });
   
});