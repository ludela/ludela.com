$(window).load(function(){
  $('.phone').on('click', function(){
    $('body').toggleClass('lit')
  })

  var imageRatio = 229/368
  var updateAppSlider = function(){
    var $phone = $('.phone')

    var width = $phone.width()
    var height = $phone.height()
    var screenRatio = width / height

    if (screenRatio > imageRatio) {
      $('.app-slider').width(height * imageRatio)
      $('.app-slider').height(height)
    } else {
      $('.app-slider').width(width)
      $('.app-slider').height(width / imageRatio)
    }
  }

  updateAppSlider()
  $(window).on('resize', updateAppSlider)

  $('.checkout-container').on('scroll touchmove mousewheel', function(e){
    e.stopPropagation();
    return true
  })

  $('.hero.video .play-message').on('click', function(e){
    $(this).closest('.play-wrapper').find('.play').trigger('click', e);
  })

  $('body').on('click tap', '#hamburger, #hamburger-foot', function () {
    $('#menu, #hamburger-foot, #hamburger, .wrapper').toggleClass('is-open');
    $('#about, #general, .fixed').toggleClass('nav-open');
  });
  $('body').on('click tap touchend', '.nav-open, #menu, .menu__close', function () {
    $('.is-open').removeClass('is-open');
    $('.nav-open').removeClass('nav-open');
  });
})

