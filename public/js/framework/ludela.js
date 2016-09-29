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
})

