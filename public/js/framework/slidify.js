$(function(){
  var $blocks = $('body > section, body > .block');
  var totalBlocks = $blocks.length;

  var caught = false;

  $(window).on('scroll', function(){
    if (caught) {
      return true;
    }
    caught = true;
    requestAnimationFrame(function(){
      caught = false;

      var $body = $('body')
      $body.removeClass(function(i, css) {
        return (css.match (/is\-slide\-[0-9]+/g) || []).join(' ');
      });

      var top = $(window).scrollTop() + 100;

      for (var i = 0; i < totalBlocks; i++) {
        var $block = $($blocks[i]);
        var blockTop = $block.offset().top;
        var blockBottom = blockTop + $block.height();

        if (blockTop <= top &&  blockBottom > top) {
          $body.addClass('is-slide-' + i);
          return;
        }
      }
    })
  })
})
