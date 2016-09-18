export default function ($) {
  var tag = document.createElement('script');
  console.log('called');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

    $('.video').on('click', function () {
      $('#video-modal').addClass('is-open');
      $('#hamburger').addClass('is-open');


      var player;
      function onYouTubeIframeAPIReady() {
        console.log('frame ready');
        player = new YT.Player('player', {
          videoId: 'qHXh_U1gVRE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        console.log('player ready');
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
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
        if (e.target.id !== 'frame') {}
        player.stopVideo();
        $('#video-modal').removeClass('is-open');
        $('#hamburger').removeClass('is-open');
      })


    });

}
