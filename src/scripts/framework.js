/* Paul Irish - raf polyfill */
export default function($) {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
  window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
  };

  // Modals
  $('.modal').on('scroll touchmove mousewheel', function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  $('.modal-close').on('click', function(e){
    var $modal = $(this).closest('.modal');
    $modal.addClass('hidden');
  })

  $('.loader').fadeTo(1000, 0, function() {
    $(this).hide();
  });
}
