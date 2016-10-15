$(window).load(function(){
  $('.cart-button').on('click', function(){
    $('#general cart').addClass('show');
    $('#general cart').removeClass('hide');
    return false;
  })

  $('cart .back-button').on('click', function(){
    $('#general cart').removeClass('show');
    $('#general cart').addClass('hide');
    return false;
  });

})
