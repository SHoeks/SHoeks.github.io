jQuery(document).ready(function(){
	$("img.lazyload").lazyload({
	    threshold : 400
	});
	
	// textarea autoExpand
	$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
    });
    
    /*
	 * Replace all SVG images with inline SVG
	 */
	jQuery('.btn--social img[src*=".svg"]').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');
	
	    jQuery.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');
	
	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }
	
	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');
	
	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }
	
	        // Replace image with new SVG
	        $img.replaceWith($svg);
	
	    }, 'xml');
	
	});
	
	// Banner
	var hideBanner = sessionStorage.getItem('nlsBanner1');
	if (!hideBanner) {
		jQuery('body').prepend(jQuery('.banner'));
		setTimeout(function() {
			jQuery('.banner').addClass('active');	
			sessionStorage.setItem('nlsBanner1', true); // show only once on first viewed page
		}, 3000);
	}
	jQuery(document).on('click', '.banner-close', function() {
		$('.banner').removeClass('active');
		sessionStorage.setItem('nlsBanner1', true);
	});
	
	// Parallax
	if ($('body').hasClass('home')) {
		$(window).scroll(function() {
			var top = $(window).scrollTop() || 0,
				width = $(window).width(),
				isTablet = width <= 860;
			if (isTablet) $('#header').css({ top: top / 4 + 'px' }); // scroll header to prevent ugly whitespace on tablets and phones
			$('.swiper-wrapper').css({ top: top / 4 + 'px' });
		});
	}
});

jQuery(window).on('load', function(){
	$('.twentytwenty').twentytwenty({
		no_overlay: true,
		click_to_move: true,
		move_with_handle_only: false
	});
	
	// load transitions
	jQuery('body').addClass('startTransition');
});

// transition fallback for slow connection
setTimeout(function() {
	jQuery('body').addClass('startTransition');
}, 1000);

jQuery(window).scroll(function(){
	if ($(window).scrollTop() >= 1000) {
		$('.totop').addClass('active');
	} else {
		$('.totop').removeClass('active');
	}
});

jQuery(document).on('click', '.totop', function(){
	jQuery("html, body").stop().animate({scrollTop:0}, 500, 'swing');
});

jQuery(document).on('click', '.close-btn', function(){
	jQuery('body').toggleClass('mmenu-active');
});

jQuery(document).on('click', '.navigation .submenu', function(e){
	if (window.innerWidth <= 860) {
		if (!$(this).hasClass('showSub')) {
			e.preventDefault();
		}
		jQuery(this).toggleClass('showSub');	
	}
});