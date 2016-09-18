import jQuery from 'jquery';
import panels from './panels';
import _debugger from './debugger';
import scroller from './scroller';
import about from './about';
import video from './video';


jQuery(function ($) {
  _debugger($);
  panels($);
  scroller($);
  about($);
  video($);

  const $nav = $('#menu'),
        $page = $('.wrapper'),
        $about = $('#about'),
        $general = $('#general'),
        $hamburger = $('#hamburger'),
        $fixed = $('.fixed');

  $('body').on('click', '#hamburger, #hamburger-foot', function () {
    $('#menu, #hamburger-foot, #hamburger, .wrapper').toggleClass('is-open');
    $('#about, #general').toggleClass('nav-open');
  });
  $('body').on('click', '.nav-open, #menu', function () {
    $('#menu, #hamburger-foot, #hamburger, .wrapper').removeClass('is-open');
    $('#about, #general').removeClass('nav-open');
  });
});
