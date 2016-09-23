export default function ($) {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  $('.video, .big.play').on('click', function () {
    $('#video-modal, #hamburger, #hamburger-foot').addClass('is-open');

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: '1ayoxYoCUSo',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        },
        playerVars: {rel: 0, showinfo: 0, modestbranding: 1, autoplay: 1},
      });
    }

    function onPlayerReady(event) {
      var iframe = $('#player');
      event.target.playVideo();
      var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
      if (requestFullScreen) {
        requestFullScreen.bind(iframe)();
      }
    }

    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
    onYouTubeIframeAPIReady();

    $('#video-modal').on('click', function (e) {
      player.stopVideo();
      $('#video-modal, #hamburger, #hamburger-foot').removeClass('is-open');
    })
  });
}
