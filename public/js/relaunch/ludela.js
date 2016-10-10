$(window).load(function(){
  $('.phone').on('click', function(){
    $('body').toggleClass('lit')
  })


  $('.checkout-container').on('scroll touchmove mousewheel', function(e){
    e.stopPropagation();
    return true
  })

  $('.hero.video .play-message').on('click', function(e){
    $(this).closest('.play-wrapper').find('.play').trigger('click', e);
  })

  // $('body').on('click tap', '#hamburger, #hamburger-foot', function () {
  //   $('#menu, #hamburger-foot, #hamburger, .wrapper').toggleClass('is-open');
  //   $('#about, #general, .fixed').toggleClass('nav-open');
  // });
  // $('body').on('click tap touchend', '.nav-open, #menu, .menu__close', function () {
  //   $('.is-open').removeClass('is-open');
  //   $('.nav-open').removeClass('nav-open');
  // });

  $('.progress').addClass('active');
});

