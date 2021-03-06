$(function() {
  var Shop = window.Crowdstart.Shop

  var settings = {
    key: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJiaXQiOjQ1MDM2MTcwNzU2NzUxNzIsImp0aSI6InoyWkNVQ3hrZmhFIiwic3ViIjoiVjlPVDIybUkwYSJ9.QajT3dH6kT4DiqCuUD8MhDEgUdYvQ5ZYSH5kwf0a36-ruKlD1f_SkVVE7uymuSCIcscwNXYMMP5H29EL0RQ7Zw',
    // key: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJiaXQiOjQ1MDM2MTcwNzU2NzUxNzYsImp0aSI6IkdqcEJEblR1RFVrIiwic3ViIjoiVjlPVDIybUkwYSJ9.RwJ5EfCPSKXqj80erk9vX4OHjmDcZQOQZKxdwg5ujSYhPp60L3-RCFNMJ38pKv8wQKR8cy8HquQ9rO6jRez6qA',
    endpoint: 'https://api.crowdstart.com',
    // endpoint: 'https://api.staging.crowdstart.com',
    // endpoint: 'http://localhost:8080/api',
    order: {
      metadata: {
        batch: 'prelaunch'
      },
      shippingRate: 1000
    },
    taxRates: [{
      taxRate:  0.071,
      city:     'minden',
      state:    'nv',
      country:  'us'
    },
    {
      taxRate: 0.046,
      state:   'nv',
      country: 'us'
    }],
    shippingRates: [{
      shippingRate:  1000,
      country:  'us'
    },
    {
      shippingRate: 2500
    }],
    config: {
      hashReferrer: true
    },
    referralProgram: {
      name:     'Ludela Prelaunch Referral',
      triggers: [0],
      event: 'user.new',
      actions: [{
        type:     'Credit',
        currency: 'points',
        amount:   1
      }]
    }
  };

  Shop.use({
    Controls: {
      Error:'' +
        '<div class="error" if="{ errorMessage }">' +
        '  { errorMessage }' +
        '</div>'
    }
  });

  var m = window.m = Shop.start(settings);
  window.client = Shop.client

  if (window.client.client.customerToken) {
    $('.login-link').hide()
  } else {
    $('.progress-link').hide()
  }

  var step = 1;

  var $modal = $('.checkout-modal.modal')
  var $hamburger = $('#hamburger')
  var $thankyou = $('.thankyou')
  var $checkoutContainer = $('checkout-container')

  window.openCheckout = function(e){
    var $modal = $('.checkout-modal.modal');
    $modal.addClass('is-open');

    $('#hamburger').addClass('is-open');
    $modal.removeClass('hidden');

    Shop.initCart()

    $('.thankyou').hide()
    $('.checkout-container').css('opacity', 1)
    $('.checkout-container').css('top', $(window).scrollTop() + 50)
    $('.thankyou').css('top', $(window).scrollTop() + 100)

    Shop.analytics.track('Viewed Checkout Step',    {step: 1});
    Shop.analytics.track('Completed Checkout Step', {step: 1});
    Shop.analytics.track('Viewed Checkout Step',    {step: 2});

    $('#general cart').removeClass('show');
    $('#general cart').addClass('hide');

    return false;
  };

  $modal.find('.modal-close').on('click', function(e){
    var $modal = $(this).closest('.modal');
    $modal.removeClass('hidden');
    $modal.removeClass('is-open');

    $hamburger.removeClass('is-open');
    $('.checkout-container').css('top', '');
    $('.thankyou').css('top', '').hide();
    return false;
  })

  $('button[type=submit]').on('click', function(){
    if (step == 2) {
      return true;
    }

    var $inputs = $('user-name, user-email, card-number, card-expiry, card-cvc');

    var inputCount = $inputs.length;
    var i = 0;

    var validateFn = function () {
      input = $inputs[i]
      if (input) {
        var pRef = {};
        input._tag.input.trigger('validate', pRef);
        pRef.p.then(function() {
          i++;
          if(i == inputCount) {
            step = 2;

            Shop.analytics.track('Completed Checkout Step', {step: 2});
            Shop.analytics.track('Viewed Checkout Step',    {step: 3});

            $('checkout').addClass('step-2');
          } else {
            validateFn();
          }
        }).catch(function(e){
          console.log(e);
        })
      }
    }

    validateFn();

    return false;
  });

  $('.continue-shopping').on('click', function(e){
    if (step == 2) {
      step = 1;
      $('checkout').removeClass('step-2');
      return false
    }

    $modal.removeClass('hidden');
    $modal.removeClass('is-open');
    $hamburger.removeClass('is-open');

    $('.checkout-container').css('top', '')

    return false;
  })

  m.on('change', function(){
    this.data.set('user.passwordConfirm', this.data.get('user.password') || '');

    requestAnimationFrame(function() {
      Shop.cart.invoice()
      Shop.riot.update()
    })
  });

  var enable = false;
  m.on('change-success', function(){
    enable = true;
    $('.email-form .form-submit').removeClass('disabled');
  });

  // Prevent Duplicate Registers Client Side
  m.on('register-success', function() {
    window.Cookies('registered', 'true');
    if (window.localStorage) {
      window.localStorage.setItem('registered','true');
    }
  });

  if (window.Cookies('registered') == 'true') {
    $('register').remove();
  }

  if (window.localStorage) {
    if (window.localStorage.getItem('registered') == 'true') {
      $('register').remove();
    }
  }

  m.on('register login', function() {
    $('.loader').show();
    $('.loader').fadeTo(500, 0.8);
  })

  m.on('register-failed login-failed', function() {
    $('.loader').fadeTo(500, 0, function() {
      $(this).hide();
    });
  })

  m.on('reset-password-success', function() {
    $('.loader').fadeTo(500, 1, function() {
      window.location.href = 'resetpending';
    });
  })

  m.on('login-success register-complete-success reset-password-complete-success', function() {
    $('.loader').fadeTo(500, 1, function() {
      window.location.href = 'account';
    });
  })

  m.on('submit', function(){
    $('.loader').show();
    setTimeout(function(){
      $('.loader').fadeTo(500, 0.8);
    }, 1)
  })

  m.on('submit-failed', function(){
    $('.loader').fadeTo(500, 0, function() {
      $(this).hide();
    });
  })

  m.on('submit-success', function(){
    $('.loader').fadeTo(500, 0, function() {
      $(this).hide();
    })

    Shop.analytics.track('Completed Checkout Step', {step: 3});

    $('.thankyou strong').text(this.data.get('order.number'))
    $('.checkout-container').fadeTo(500, 0)

    $('.thankyou').show();
    setTimeout(function(){
      $('.thankyou').fadeTo(500, 1, function() {
      })
      $('.loader').fadeTo(500, 0, function() {
        $(this).hide();
      })
    }, 100)

    $('.modal-close').on('click', function(e){
      window.location.reload();
    })
  });

  $('.special-offer input').on('change', function(){
    window.Crowdstart.Shop.data.set('order.metadata.subscribedToTrialRefills', $(this).prop('checked'))
  })

  /**
   * Toggle hamburger
   */
  $hamburger.on('click touchstart', function () {
    $(this).toggleClass('open');
  });

  $('.email-form').on('submit', function() {
  });

  setTimeout(function(){
    $('.footer-bar').css('bottom', 0)
  }, 100)
})
