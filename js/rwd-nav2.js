/* Sample scripts for RWD nav patterns 
   (c) 2012 Maggie Wachs, Filament Group, Inc - http://filamentgroup.com/examples/rwd-nav-patterns/GPL-LICENSE.txt
   Last updated: March 2012
   Dependencies: jQuery
*/



jQuery(function($){

   $('html').addClass('hasJS');

   $('.nav-primary')      
      // toggle the menu items' visiblity
      .find('h3, .nav-current a')
         .bind('click focus', function(){
            $(this).closest('div').toggleClass('expanded')
            return false;
         });    

});