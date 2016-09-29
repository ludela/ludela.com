// Set up automatic scrolling to bookmarks
$(function() {
  var $as = $('a');
  $as.each(function(){
    var $a = $(this);
    var href = $a.attr('href');
    if (href && href.charAt(0) === '#') {
      href = href.substr(1);

      $a.on('click', function(e) {
        var $scrollTo = $('a[name=' + href + ']').parent();
        if ($scrollTo.length !== 0) {
          var offset = ($(window).height() - $scrollTo.height()) /2;

          $("html, body").animate({ scrollTop: $scrollTo.offset().top - offset }, 500);
        }
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    }
  });
});
