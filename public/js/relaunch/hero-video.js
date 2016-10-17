$(window).load(function(){
  var opts = 'autoplay=1&showinfo=0&modestbranding=1&rel=0&loop=1';

  $('.hero.video .play').on('click', function(e){
    var $hero = $(this).closest('.hero');
    var $modal = $hero.find('.modal');
    var $iframe = $modal.find('iframe');
    var $header = $('header')

    var src = $hero.attr('data-src');
    $iframe.attr('src', src + '?' + opts);
    $modal.removeClass('hidden');

    $header.css('z-index', '101')
    $('#hamburger').addClass('is-open');

    $('body').addClass('modal-lock');

    e.stopPropagation();
    e.preventDefault();
    return false;
  });

  $('.modal-close').on('click', function(e){
    var $modal = $(this).closest('.modal');
    $modal.addClass('hidden');
    var $iframe = $modal.find('iframe');
    $iframe.attr('src', '');
    var $header = $('header')
    $header.css('z-index', '')
    $('#hamburger').removeClass('is-open');
    $('body').removeClass('modal-lock');
  })
});

