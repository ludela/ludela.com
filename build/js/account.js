$(function () {
  var m = window.m;

  setupReferral = function(url) {
    $('.ref-text').html(url)
    uri = encodeURIComponent(url)
    $('#fbLink').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + uri)
    $('#twLink').attr('href', 'https://twitter.com/intent/tweet?url=' + uri + '&amp;via=ludela')
  }

  if (!window.client.client.customerToken) {
    window.location.href = 'login'
  }

  m.on('profile-load-failed', function() {
    window.client.account.logout();
    window.history.back();
  });

  // m.on('profile-load', function(){
  // });

  m.on('profile-load-success', function(data){
    setupReferral('http://www.ludela.com/#' +data.referrers[0].id);

    var referrals = 0;
    if (data.referrals) {
      referrals = data.referrals.length;
    }

    $('.friends-count').html(referrals);

    if (referrals >= 5 ) {
      $('.point5').addClass('done').removeClass('todo');
    }
    if (referrals >= 10 ) {
      $('.point10').addClass('done').removeClass('todo');
    }
    if (referrals >= 25 ) {
      $('.point25').addClass('done').removeClass('todo');
    }
    if (referrals >= 50 ) {
      $('.point50').addClass('done').removeClass('todo');
    }

    for (var i = 0; i < Math.min(10, referrals); i++){
      var $li = $('<li>' + data.referrals[referrals - 1 - i].firstName + '</li>');
      $('.friend-names').append($li);
    }
  })
})
