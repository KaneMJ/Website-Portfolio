$(document).ready(function() {
    // navigation click actions 
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 1200);       
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});

// scroll function
function scrollToID(id, speed){
    var offSet = 100;
    if($(window).width() <= 768){
     offSet = 60;
    }
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({scrollTop:targetOffset}, speed);
}

// offset fix
$(function () {
    var fixed = false;

    $(document).on( 'scroll', function(){

        if($(window).scrollTop()>=$(".carousel").outerHeight())
        {
             if (fixed == true) return
             fixed = true;
             $(".navbar").addClass("navbar-fixed-top");
             $(".navspacer").show();
        }

        if($(window).scrollTop()<$(".carousel").height())
        {
             if (fixed == false) return
             fixed = false;
             $(".navbar").removeClass("navbar-fixed-top");
             $(".navspacer").hide();
        }
    });
});

$('.navbar-collapse a').click(function (e) {
    if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
        $('.navbar-collapse').collapse('toggle');
    }
});