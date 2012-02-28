(function(win, undefined){

	$('[data-collapse]').each(function() {
		var $el        = $(this),
			$curParent = $el.addClass('nav-enhanced'),
			breakPoint = $el.attr('data-collapse');
			
		$el.find('.nav-current a').bind('click', function(e) {
			if( ( win.innerWidth || document.documentElement.clientWidth ) <= breakPoint ) {
				var $curOpen = $el.hasClass('nav-open');

				$('[data-collapse]').removeClass('nav-open');
				!$curOpen && $el.addClass('nav-open');
				e.preventDefault();
			}
		});
		
		$el.find('label').bind('click', function(e) {
			if( ( win.innerWidth || document.documentElement.clientWidth ) <= breakPoint ) {
				var $curOpen = $el.hasClass('nav-open');

				$('[data-collapse]').removeClass('nav-open');
				!$curOpen && $el.addClass('nav-open');
				e.preventDefault();
			}
		});
	});
	

})(this);