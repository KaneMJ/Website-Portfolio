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
    var lastfixed = undefined, 
        spacerEl = undefined,
        fixed = false,
        ghostElHeight = 0;
    
    $(document).on( 'scroll', function(){

        if($(window).scrollTop()>=$(".jumbotron").outerHeight())
        {
            fixed = true;
            if (fixed === lastfixed) return
             $(".navbar").addClass("navbar-fixed-top");
             ghostElHeight = $(".navbar").outerHeight()
             if (!!!spacerEl){
                spacerEl = $(".navbar").after(
                    '<div class="navspacer" style="height:' + ghostElHeight + 'px">&nbsp;</div>').next();
             }
        }
        
        if($(window).scrollTop()<$(".jumbotron").height() + ghostElHeight)
        {
             fixed = false;
             if (fixed === lastfixed) return
             ghostElHeight = 0;
             $(".navbar").removeClass("navbar-fixed-top");
             !!spacerEl && spacerEl.remove();
             spacerEl = undefined;
        }
        
        lastfixed = fixed;
        
    });
});

$('.navbar-collapse a').click(function (e) {
    if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
        $('.navbar-collapse').collapse('toggle');
    }
});

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});