(function($) {
  "use strict";

  // Menu
  var windows = $(window);
  var stick = $(".header-sticky");
  windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 245) {
      stick.removeClass('sticky')
    }else {
      stick.addClass("sticky")
    }
  });

  // JQuery MeanMenu
  $('.main-menu nav').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

  // Mail Chimp
  $('#mc-form').ajaxChimp({
    language: 'en',
    callback: mailChimpResponse,
    url:'https://themeshaven.us8.list-manage.com/subscribe/post-json?u=XYZ123XYZ123&id=ABC123ABC123&c=?'
  });

  function mailChimpResponse(resp) {
    if(resp.result === 'sucess') {
      $('.mailchimp-sucess').html('' + resp.msg).fadeIn(900) ;
      $('.mailchimp-error').fadeOut(400);
    }else if(resp.result === 'error') {
      $('.mailchimp-error').html('' + resp.msg).fadeIn(900); 
    }
  }

  // Counter UP
  $('.counter').counterUp({
    delay: 70,
    time: 5000
  });

  // ScrollUp
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  new Window().init();

  $('.datepicker').datepicker();
})(jQuery);