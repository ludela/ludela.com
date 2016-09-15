$(function () {
  var settings = {
    // key:      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJiaXQiOjQ1MDM2MTcwNzU2NzUxNzIsImp0aSI6Ii1BNGY1QTByLXhNIiwic3ViIjoiOU9UME95YkRDMCJ9.zVuDVbhI3eHgf7ERybUB2Wx5w8NHjbqjQIBomV3SefrFt69QldTduSRxRSaDc4oSHILEJhI-mO-V71sz33tFzQ',
    // endpoint: 'https://api.crowdstart.com',
    key: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJiaXQiOjQ1MDM2MTcwNzU2NzUxNzYsImp0aSI6IkdqcEJEblR1RFVrIiwic3ViIjoiVjlPVDIybUkwYSJ9.RwJ5EfCPSKXqj80erk9vX4OHjmDcZQOQZKxdwg5ujSYhPp60L3-RCFNMJ38pKv8wQKR8cy8HquQ9rO6jRez6qA',
    endpoint: 'http://localhost:8080/api',
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
    $.cookie('registered', 'true');
    if (window.localStorage) {
      window.localStorage.setItem('registered','true');
    }
  });

  if ($.cookie('registered') == 'true') {
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

  m.on('register-success login-success', function() {
    $('.loader').fadeTo(500, 1, function() {
      window.location.href = 'account';
    });
  })

  var $emailSubmit = $('.email-form .form-submit')
  if ($emailSubmit.length > 0) {
    var blockEnter = true;
    $(window).keydown(function(event){
      if(event.keyCode == 13 && blockEnter) {
        event.preventDefault();
        return false;
      }
    });


    $emailSubmit.on('click touchstart', function() {
      if (enable) {
        blockEnter = false;
        $(this).hide();
        $('.email-form user-email').css({
          'max-width': 'initial'
        })
        $('.password-form').removeClass('collapsed');
      }
    })
  }

  /**
   * Toggle hamburger
   */
  $('.hamburger').on('click touchstart', function () {
    $(this).toggleClass('open');
  });

  $('.email-form').on('submit', function() {
  });
});
