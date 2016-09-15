import debounce from 'debounce';

export default function ($) {

  var lastScrollPos,
      allowScroll = true,
      scrollerDelay = 1500;

  const $document = $(document);
  const $window = $(window);
  const $panels = $('.splash__content');
  const $dot = $('.dot');
  const scrollThreshold = 10;

  $window.on('scroll', function (ev) {
    const currentPos = $window.scrollTop();
    const scrollDiff = currentPos - lastScrollPos;
    lastScrollPos = currentPos;
    // console.log('[scroll] diff:' + scrollDiff);
    if ( ! allowScroll || Math.abs(scrollDiff) <  scrollThreshold) return;
    disableScrollFor(ev, scrollerDelay);
    const dir = Math.min(1, Math.max(-1, scrollDiff));
    console.log(dir);
    $document.trigger('nextpanel', dir);
  });

  $window.on('load resize', debounce(function () {
    lastScrollPos = $window.scrollTop();
  }, 150));

  $dot.on('click', function (ev, goTo) {
    goTo = $(this).data('goto');
    console.log('going to panel: ', goTo);
    disableScrollFor(ev, scrollerDelay);
    $document.trigger('setpanel', goTo);
  });


  function disableScrollFor(ev, time) {
    console.log('disabling scroll');
    allowScroll = false;
    ev.preventDefault();
    ev.stopPropagation();
    const t = setTimeout(function () {
      allowScroll = true;
      clearTimeout(t);
      console.log('enabling scroll');
    }, time);
  }

}
