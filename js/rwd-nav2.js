/* Sample scripts for RWD nav patterns 
   (c) 2012 Maggie Wachs, Filament Group, Inc - http://filamentgroup.com/examples/rwd-nav-patterns/GPL-LICENSE.txt
   Last updated: March 2012
   Dependencies: jQuery
*/



jQuery(function($){

   $('html').addClass('hasJS');
   
   var nav = $('.nav-primary'),
         menutimer;
   
   // show the menu: click the h3 (button) or focus on the first menu link
   nav
      .find('h3') 
         .bind('click', function(){ 
            nav.toggleClass('expanded');
         })   
      .find('a:first').not('li ul a')
         .bind('focus', function(){
            nav.addClass('expanded');
         });
         
   // show the menu with the "Menu" button
   // we have to script this behavior to bypass a known WebKit bug: http://whatisdamon.com/blog/2012/01/why-your-skip-to-content-link-might-not-work/
   $('#show-nav')
      .bind('click', function(){      
         $(this).blur();
         nav
            .addClass('expanded')
            .find('a:first').focus();
      });
   
   // close the menu when focus is redirected    
   nav
      .find('a')
         .bind('focusout', function(){            
            menutimer = setTimeout(function(){ nav.removeClass('expanded'); }, 500);
         })
         .bind('focusin', function(){
            clearTimeout(menutimer);
         });   
   
});