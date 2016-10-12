import debounce from 'debounce';

export default function ($) {

  var lastScrollPos,
      allowScroll = true,
      scrollerDelay = 1500;

  const $document = $(document);
  const $window = $(window);
  const $panels = $('.splash__content');
  const $dot = $('.dot');
  const scrollThreshold = 30;

  if ($panels.length) {

    $window.on('scroll mousewheel', function (ev) {
      if ($('.is-open')[0]) {
        return
      }
      const currentPos = $window.scrollTop();
      const scrollDiff = currentPos - lastScrollPos;
      lastScrollPos = currentPos;
      if ( ! allowScroll || Math.abs(scrollDiff) <  scrollThreshold) return;
      disableScrollFor(ev, scrollerDelay);
      const dir = Math.min(1, Math.max(-1, scrollDiff));
      console.log(dir);
      $document.trigger('nextpanel', dir);
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
