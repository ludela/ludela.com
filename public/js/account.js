$(function() {
  var m = window.m;

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  var displayCopied = function() {
    setTimeout(function() {
      $('.copied').fadeIn()
      setTimeout(function() {
        $('.copied').fadeOut()
      }, 1000)
    }, 250)
  }

  // Copy link to clipboard and fade in message on click
  var setupClipboard = function() {
    new Clipboard('.ref-link', {
      target: function(trigger) {
        if (!isSafari) {
          displayCopied()
        }
        return $('.ref-link')[0]
      }
    });
  }

  var setupReferral = function(url) {
    $('.ref-text').html(url);
    url = encodeURIComponent(url);
    $('#fbLink').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url);
    var message = encodeURIComponent("Excited for the @JoinLudela launch! The world's first smartphone-controlled, real-flame candle is coming!");
    $('#twLink').attr('href', 'https://twitter.com/intent/tweet?text=' + message + '&amp;url=' + url);
    setupClipboard();
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

  m.on('profile-load-success', function(data) {
    setupReferral('https://ludela.com/#' + data.referrers[0].id);

    if (data.firstName != '') {
      $('.important').hide();
    }

    var referrals = 0;
    if (data.referrals) {
      referrals = data.referrals.length;
    }

    $('.friends-count').html(referrals);

    if (referrals >= 5) {
      $('.point5').addClass('done').removeClass('todo');
    }
    if (referrals >= 10) {
      $('.point10').addClass('done').removeClass('todo');
    }
    if (referrals >= 25) {
      $('.point25').addClass('done').removeClass('todo');
    }
    if (referrals >= 50) {
      $('.point50').addClass('done').removeClass('todo');
    }

    for (var i = 0; i < Math.min(10, referrals); i++) {
      var $li = $('<li>' + data.referrals[referrals - 1 - i].firstName + '</li>');
      $('.friend-names').append($li);
    }
  })
})
