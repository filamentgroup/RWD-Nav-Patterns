/* Scripts for the tables test page 
   Author: Maggie Wachs, www.filamentgroup.com
   Date: November 2011
   Dependencies: jQuery, jQuery UI widget factory
*/

   

jQuery(function($){

   // scope styles to this class when JS is present
   $('html').addClass('hasJS');

   $('.nav-primary')
      .bind('updatenav', function(){
            var nav = $(this),
                  hdr = nav.find('h3'),
                  list = nav.find('ul'),
                  items = nav.find('a');
                  
            $('body').removeClass('no-fit');
                  
            // when all nav options are on the same line                
            if ( $(items[items.length-1]).offset().top > $(items[0]).offset().top ) {
            
               // show all nav items (with styles scoped to this class)
               $('body').addClass('no-fit');             
               
               // toggle the menu items' visiblity
               hdr.click(function(){
                  nav.toggleClass('expanded')
                  return false;
               });
               
            };
         })
      // update the nav on load...
      .trigger('updatenav');
   
   // ...and on window events
   $(window).bind('orientationchange resize', function(){
      $('.nav-primary').trigger('updatenav');
   });

});