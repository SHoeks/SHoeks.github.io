$(document).ready(function () {
    $('.gallery li:lt(1)').show();
    $('.less').hide();
    var items =  2;
    var shown =  1;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery li:visible').length+3;
        if(shown< items) {
          $('.gallery li:lt('+shown+')').show(300);
        } else {
          $('.gallery li:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.gallery li').not(':lt(1)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});