$(function(){
  var scheduled = false;
  $(window).on('scroll touchmove mousewheel', function(){
    if (!scheduled) {
      requestAnimationFrame(function(){
        var scrollTop = $(this).scrollTop();

        var $header = $('header');
        if (scrollTop > $(window).height() - 100) {
          $header.addClass('dark')
        } else {
          $header.removeClass('dark')
        }

        scheduled = false;
      })
      scheduled = true;
    }
  });
})
