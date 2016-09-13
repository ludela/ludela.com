import debounce from 'debounce';

export default function ($) {

  var lastScrollPos,
      allowScroll = true,
      scrollerDelay = 1500;

  const $document = $(document);
  const $window = $(window);
  const $panels = $('.splash__content');
  const scrollThreshold = 20;

  if ($panels.length) {

    $window.on('scroll', function (ev) {
      const currentPos = $window.scrollTop();
      const scrollDiff = currentPos - lastScrollPos;
      // console.log('[scroll] diff:' + scrollDiff);
      if ( ! allowScroll || Math.abs(scrollDiff) <  scrollThreshold) return;
      disableScrollFor(ev, scrollerDelay);
      const dir = Math.min(1, Math.max(-1, scrollDiff));
      console.log(dir);
      $document.trigger('nextpanel', dir);
      lastScrollPos = currentPos;
    });

    $window.on('load resize', debounce(function () {
      lastScrollPos = $window.scrollTop();
    }, 150));

  }


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
