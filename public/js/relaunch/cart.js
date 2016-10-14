$(window).load(function(){
  var Shop = window.Crowdstart.Shop;
  var client = Shop.client;
  var m = window.m;
  var renderCurrency = Shop.CrowdControl.Views.View.prototype.renderCurrency;

  var timeoutId = -1;

  var products = {
    'Solo-W-R': {},
    'Solo-W-O': {},
    'Solo-W-I': {},
    'Solo-W-G': {},
    'Solo-W-B': {},
    'Solo-W-P': {},
    'Solo-G-W': {},
    'Solo-G-SM': {},
    'Solo-G-R': {},
    'Solo-G-B': {},
    'Solo-G-BM': {},
    'Duo-W-R': {},
    'Duo-W-O': {},
    'Duo-W-I': {},
    'Duo-W-G': {},
    'Duo-W-B': {},
    'Duo-W-P': {},
    'Duo-G-W': {},
    'Duo-G-SM': {},
    'Duo-G-R': {},
    'Duo-G-B': {},
    'Duo-G-BM': {},
    'Trio-W-R': {},
    'Trio-W-O': {},
    'Trio-W-I': {},
    'Trio-W-G': {},
    'Trio-W-B': {},
    'Trio-W-P': {},
    'Trio-G-W': {},
    'Trio-G-SM': {},
    'Trio-G-R': {},
    'Trio-G-B': {},
    'Trio-G-BM': {},
    'SC-1': {},
    'SC-2': {},
    'SC-3': {},
    'SC-4': {},
    'SC-5': {},
    'SC-6': {},
    'SC-7': {},
    'SC-8': {},
    'SC-9': {},
    'SC-10': {},
    'SC-1-S': {},
    'SC-2-S': {},
    'SC-3-S': {},
    'SC-4-S': {},
    'SC-5-S': {},
    'SC-6-S': {},
    'SC-7-S': {},
    'SC-8-S': {},
    'SC-9-S': {},
    'SC-10-S': {},
  };

  var getEssentialSlug = function ($el) {
    var $item = $el;
    if (!$el.hasClass('item')) {
      $item = $el.closest('.item');
    }

    var productSlug = $item.find('.color-picker input:checked').attr('id');
    return productSlug.toUpperCase().replace('COLOR-', '').replace('SOLO', 'Solo').replace('DUO', 'Duo').replace('TRIO', 'Trio');
  }

  var getScentSlug = function ($el) {

  }

  var updatePrice = function() {
    $('.essentials > * > .item').each(function(){
      var $item = $(this);
      productSlug = getEssentialSlug($item);

      var product = products[productSlug]
      if (!product || !product.price) {
        return;
      }
      $item.find('.price-display span:last-child .price').html(renderCurrency('usd', product.price)+'&nbsp;USD');
    });
  };

  for (var productSlug in products) {
    (function(productSlug) {
      client.product.get(productSlug).then(function(product){
        products[productSlug] = product;
        updatePrice();
      }).catch(function(err){
        console.log(err.stack);
      });
    })(productSlug);
  }

  var freeScent = 'Unscented';

  $('.cart-button').on('click', function(){
    $('#general cart').addClass('show');
    $('#general cart').removeClass('hide');
    updatePrice();
    return false;
  })

  $('.essentials .add-to-cart').on('click', function(){
    var $item = $(this).closest('.item');

    var productSlug = $item.find('.color-picker input:checked').attr('id');
    productSlug = productSlug.toUpperCase().replace('COLOR-', '').replace('SOLO', 'Solo').replace('DUO', 'Duo').replace('TRIO', 'Trio');

    var item = Shop.getItem(productSlug);

    freeScent = $item.find('.scent-picker select').val();
    subscription = $item.find('.refill-plan-picker input:checked').val();
    if (subscription == 'subscription') {
      freeScent += '(Subscription)';
    }

    var quantity = 0;
    if (item != null) {
      quantity = item.quantity;
    }

    Shop.setItem(productSlug, quantity+1);

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

  m.on('update-item', function() {
    var items = this.data.get('order.items');

    if ( this.data.get('order.metadata') == null) {
      this.data.set('order.metadata', {})
    }

    if ( this.data.get('order.metadata.freeScents') == null) {
      this.data.set('order.metadata.freeScents', [])
    }

    var numItems = items.length;
    var numCandleItems = 0;
    for (var i = 0; i < numItems; i++) {
      var item = items[i];

      if (item.productSlug.indexOf('Solo') < 0 && item.productSlug.indexOf('Duo') < 0 && item.productSlug.indexOf('Trio') < 0) {
        continue;
      }

      numCandleItems += item.quantity;
    }

    var freeScents = this.data.get('order.metadata.freeScents');
    var numFreeScents = freeScents.length;
    if (freeScents.length < numCandleItems) {
      for (var i = numFreeScents; i < numCandleItems; i++) {
        freeScents.push(freeScent);
      }
    } else {
      freeScents.length = numCandleItems;
    }
    this.data.set('order.metadata.freeScents', freeScents);
  });
})
