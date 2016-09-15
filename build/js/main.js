$(function () {
  var settings = {
    key:      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJiaXQiOjQ1MDM2MTcwNzU2NzUxNzIsImp0aSI6Ii1BNGY1QTByLXhNIiwic3ViIjoiOU9UME95YkRDMCJ9.zVuDVbhI3eHgf7ERybUB2Wx5w8NHjbqjQIBomV3SefrFt69QldTduSRxRSaDc4oSHILEJhI-mO-V71sz33tFzQ',
    endpoint: 'https://api.crowdstart.com'
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

  var m = Shop.start(settings);
  m.on('change', function(){
    this.data.set('user.passwordConfirm', this.data.get('user.password'));
  })

  var enable = false;
  m.on('change-success', function(){
    enable = true;
    $('.email-form .form-submit').removeClass('disabled')
  })

  $('.email-form .form-submit').on('click touchstart', function() {
    if (enable) {
      $(this).hide();
      $('.email-form user-email').css({
        'max-width': 'initial'
      })
      $('.password-form').removeClass('collapsed');
    }
  })

  /**
   * Toggle hamburger
   */
  $('.hamburger').on('click touchstart', function () {
    $(this).toggleClass('open');
  });

  $('.email-form').on('submit', function() {
  });
});
