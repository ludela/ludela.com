import jQuery from 'jquery';
import panels from './panels';
import scroller from './scroller';
import shell from './shell';
import menu from './menu';
import video from './video';
import framework from './framework';
import scrollify from 'jquery-scrollify';
import header from './header';

window.$ = window.jQuery = jQuery;

jQuery(function ($) {
  panels($);
  header($);
  menu($);
  scrollify($);
  // scroller($);
  shell($);
  video($);
  framework($);

  var resizeTimer;

  const $nav = $('#menu'),
        $window = $(window),
        $body = $('html, body'),
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
      clearTimeout(resizeTimer);
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
    $.scrollify.move(parseInt($(this).data("goto"), 10));
  });

  var slide = 0;

  $('.visuals__phone').on('click', function(){
    if (slide == 1) {
      $.scrollify.next();
    }
  })

  var imageRatio = 229/368
  var updateAppSlider = function(){
    var $phone = $('.visuals__phone');

    var width = $phone.width();
    var height = $phone.height();
    var screenRatio = (width / height);

    if (screenRatio > imageRatio) {
      $('.app-slider').width(height * imageRatio)
      $('.app-slider').height(height)
    } else {
      $('.app-slider').width(width)
      $('.app-slider').height(width / imageRatio)
    }
  }

  updateAppSlider()
  $(window).on('resize', updateAppSlider)

  $.scrollify({
    section : ".splash__content",
    sectionName : false,
    // interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: ".mobile-overlay, .mobile-padding",
    setHeights: true,
    overflowScroll: true,
    before: function (index) {
      slide = index;
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
