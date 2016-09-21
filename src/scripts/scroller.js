import debounce from 'debounce';

export default function ($) {

  var lastScrollPos,
      allowScroll = true,
      scrollerDelay = 1500;

  const $document = $(document);
  const $window = $(window);
  const $panels = $('.splash__content');
  const $general = $('#general');
  const $about = $('#about');
  const $dot = $('.dot');
  const scrollThreshold = 30;

  if ($general.length) {
    $window.on('scroll', setFooter);
  }

  function setFooter() {
    if ($window.scrollTop() + $window.height() > $document.height() - 2) {
      $general.addClass('is-footer');
    } else {
      $('.is-footer').removeClass('is-footer');
    }
  }

  if ($panels.length) {

    $window.on('scroll mousewheel', function (ev) {
      if ($('.is-open')[0]) {
        ev.preventDefault();
        ev.stopPropagation();
        return false
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

    $dot.on('click', function (ev, goTo) {
      goTo = $(this).data('goto');
      console.log('going to panel: ', goTo);
      disableScrollFor(ev, scrollerDelay);
      $document.trigger('setpanel', goTo);
    });
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