$(window).load(function(){
  var Shop = window.Crowdstart.Shop

  var timeoutId = -1;
  $('.cart-button').on('click', function(){
    $('#general cart').addClass('show');
    $('#general cart').removeClass('hide');
    return false;
  })

  $('.add-to-cart').on('click', function(){
    var item = Shop.getItem('ludela');
    var quantity = 0;
    if (item != null) {
      quantity = item.quantity;
    }

    Shop.setItem('ludela', quantity+1);

    $('#general cart').addClass('show');
    $('#general cart').removeClass('hide');

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      $('#general cart').removeClass('show');
    }, 5000);
    return false;
  });

  $('cart .back-button').on('click', function(){
    $('#general cart').removeClass('show');
    $('#general cart').addClass('hide');
    return false;
  });
})
