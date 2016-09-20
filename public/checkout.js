$(function() {
  $('.checkout-button').on('click', function(e){
    var $modal = $('.modal');
    $modal.addClass('is-open');

    $('#hamburger').addClass('is-open');

    Shop.analytics.track('Viewed Checkout Step', {step: 1})
    Shop.initCart()

    e.stopPropagation();
    e.preventDefault();
    return false;
  });

  $('.modal-close').on('click', function(e){
    var $modal = $(this).closest('.modal');
    $modal.addClass('hidden');
    $modal.removeClass('is-open');

    $('#hamburger').removeClass('is-open');
  })

  var settings = {
    key: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJiaXQiOjQ1MDM2MTcwNzU2NzUxNzIsImp0aSI6InoyWkNVQ3hrZmhFIiwic3ViIjoiVjlPVDIybUkwYSJ9.QajT3dH6kT4DiqCuUD8MhDEgUdYvQ5ZYSH5kwf0a36-ruKlD1f_SkVVE7uymuSCIcscwNXYMMP5H29EL0RQ7Zw',
    endpoint: 'https://api.crowdstart.com',
    // endpoint: 'https://api.staging.crowdstart.com',
    // endpoint: 'http://localhost:8080/api',
    order: {
      metadata: {
        batch: 'prelaunch'
      }
    },
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

  var Shop = window.Crowdstart.Shop

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

  m.on('change', function(){
    this.data.set('user.passwordConfirm', this.data.get('user.password'));
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

  if (Shop.isEmpty()) {
    Shop.setItem('ludela', 1);
  }

  /**
   * Toggle hamburger
   */
  $('.hamburger').on('click touchstart', function () {
    $(this).toggleClass('open');
  });

  $('.email-form').on('submit', function() {
  });
})
