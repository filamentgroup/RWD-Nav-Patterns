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
                  items = nav.find('a');
                  
            $('body').removeClass('no-fit');
                  
            // when all nav options are on the same line                
            if ( $(items[items.length-1]).offset().top > $(items[0]).offset().top ) {
            
               // show all nav items (with styles scoped to this class)
               $('body').addClass('no-fit');
               
            };
         })
      
      // update the nav on load
      .trigger('updatenav')
      
      // toggle the menu items' visiblity
      .find('h3')
         .bind('click focus', function(){
            $(this).parent().toggleClass('expanded')
         });   
   
   // ...and update the nav on window events
   $(window).bind('orientationchange resize', function(){
      $('.nav-primary').trigger('updatenav');
   });

});