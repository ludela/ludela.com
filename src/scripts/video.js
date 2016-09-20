export default function ($) {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  $('.video').on('click', function () {
    $('#video-modal, #hamburger, #hamburger-foot').addClass('is-open');

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: 'ITDbQSVmQ8k',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
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
