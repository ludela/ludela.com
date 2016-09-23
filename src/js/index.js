import jQuery from 'jquery';
import panels from './panels';
import _debugger from './debugger';
import scroller from './scroller';
import about from './about';
import shell from './shell';
import video from './video';
import framework from './framework';
import scrollify from 'jquery-scrollify';

window.$ = window.jQuery = jQuery;

jQuery(function ($) {
  _debugger($);
  panels($);
  scrollify($);
  // scroller($);
  about($);
  shell($);
  video($);
  framework($);

  var resizeTimer;

  const $nav = $('#menu'),
        $page = $('.wrapper'),
        $about = $('#about'),
        $general = $('#general'),
        $hamburger = $('hamburger'),
        $dot = $('.dot'),
        $fixed = $('.fixed');

  $(window).on('resize', function(e) {
    $($nav).hide();

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      $($nav).show();
    }, 250);
  });

  $('body').on('click tap', '#hamburger, #hamburger-foot', function () {
    $('#menu, #hamburger-foot, #hamburger, .wrapper').toggleClass('is-open');
    $('#about, #general, .fixed').toggleClass('nav-open');
  });
  $('body').on('click tap touchend', '.nav-open, #menu, .menu__close', function () {
    $('.is-open').removeClass('is-open');
    $('.nav-open').removeClass('nav-open');
  });

  $dot.on('mousedown touchstart', function (ev, goTo) {
    $.scrollify.move($(this).data("goto"));
  });

  $.scrollify({
    section : ".splash__content",
    sectionName : "step",
    // interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    // standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    before: function (index) {
      if (index == 0) {
        $('.big.play').show()
      } else {
        $('.big.play').hide()
      }
      $('.splash')
        .removeClass((i, css) =>
          (css.match (/is\-step\-[0-9]+/g) || []).join(' ')
        ).addClass('is-step-' + (index + 1));
      $('.active-dot').removeClass('active-dot');
      $('.dot-' + (index + 1)).addClass('active-dot');
      if (index === 6) {
        $('.footer-bar').hide();
      } else {
        $('.footer-bar').show();
      }
    },
    after: function () {},
    afterResize: function () {},
    afterRender: function () {}
  });
});
