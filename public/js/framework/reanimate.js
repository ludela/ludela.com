// Trigger Animate.css animation when it gets scrolled to.
$(function() {
  $('.animated').each(function() {
    var $animated = $(this);
    var scheduled = false;
    var animation = $animated.css('animation-name');
    $animated.removeClass(animation);
    $(window).on('scroll touchmove mousewheel', function(){
      if (!scheduled) {
        requestAnimationFrame(function(){
          var offset = $animated.offset();
          if (offset.top < ($(window).height() + $(window).scrollTop())) {
            $animated.addClass(animation);
          } else {
            scheduled = false;
          }
        });
        scheduled = true;
      }
    });
  });
});
