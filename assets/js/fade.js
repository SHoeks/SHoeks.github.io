//---------------------------------------- bwmainwork
$(window).scroll(function() {
    $('.IMG_wpad').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
            $(this).addClass("fadeIn");
        }
    });
});
$(window).scroll(function() {
    $('.IMG_npad').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
            $(this).addClass("fadeIn");
        }
    });
});


$(document).ready(function() {
    $('.IMG_npad_loaded1').each(function(){
        $(this).addClass("fadeIn");
    });
    $('.IMG_wpad_loaded1').each(function(){
        $(this).addClass("fadeIn");
    });
    $('.IMG_npad_loaded2').each(function(){
        $(this).addClass("fadeIn");
    });
    $('.IMG_wpad_loaded2').each(function(){
        $(this).addClass("fadeIn");
    });

    winwidth = $(window).width();
    if(winwidth > 754){
        $('.IMG_npad_loaded').each(function(){
            $(this).addClass("fadeIn");
        });
        $('.IMG_wpad_loaded').each(function(){
            $(this).addClass("fadeIn");
        });
    }else{
        $(window).scroll(function() {
            $('.IMG_npad_loaded').each(function(){
            var imagePos = $(this).offset().top;
        
            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+900) {
                    $(this).addClass("fadeIn");
                }
            });
        });
        $(window).scroll(function() {
            $('.IMG_wpad_loaded').each(function(){
            var imagePos = $(this).offset().top;
        
            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+900) {
                    $(this).addClass("fadeIn");
                }
            });
        });
    }
});
//---------------------------------------- end bwmainwork

//---------------------------------------- colorwork
$(window).scroll(function() {
    $('.IMG_cwpad').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
            $(this).addClass("fadeIn");
        }
    });
});
$(window).scroll(function() {
    $('.IMG_cnpad').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
            $(this).addClass("fadeIn");
        }
    });
});


$(document).ready(function() {
    $('.IMG_cnpad_loaded1').each(function(){
        $(this).addClass("fadeIn");
    });
    $('.IMG_cwpad_loaded1').each(function(){
        $(this).addClass("fadeIn");
    });
    $('.IMG_cnpad_loaded2').each(function(){
        $(this).addClass("fadeIn");
    });
    $('.IMG_cwpad_loaded2').each(function(){
        $(this).addClass("fadeIn");
    });

    winwidth = $(window).width();
    if(winwidth > 754){
        $('.IMG_cnpad_loaded').each(function(){
            $(this).addClass("fadeIn");
        });
        $('.IMG_cwpad_loaded').each(function(){
            $(this).addClass("fadeIn");
        });
    }else{
        $(window).scroll(function() {
            $('.IMG_cnpad_loaded').each(function(){
            var imagePos = $(this).offset().top;
        
            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+900) {
                    $(this).addClass("fadeIn");
                }
            });
        });
        $(window).scroll(function() {
            $('.IMG_cwpad_loaded').each(function(){
            var imagePos = $(this).offset().top;
        
            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+900) {
                    $(this).addClass("fadeIn");
                }
            });
        });
    }
});
//---------------------------------------- end colorwork

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}