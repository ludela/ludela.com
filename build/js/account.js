$(function () {
  var m = window.m;

  setupReferral = function(url) {
    $('.ref-text').html(url)
    uri = encodeURIComponent(url)
    $('#fbLink').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + uri)
    $('#twLink').attr('href', 'https://twitter.com/intent/tweet?url=' + uri + '&amp;text=The+world%27s+first+real+flame+smart+candle!&amp;via=ludela')
  }

  if (!window.client.client.customerToken) {
    window.location.href = 'login'
  }

  m.on('profile-load', function(){
  });

  m.on('profile-load-success', function(data){
    setupReferral('http://www.ludela.com/#' +data.referrers[0].id);
  })
})
