import jQuery from 'jquery';
import panels from './panels';
import _debugger from './debugger';
import scroller from './scroller';
import about from './about';
import shell from './shell';
import video from './video';
import framework from './framework';

window.$ = window.jQuery = jQuery;

jQuery(function ($) {
  _debugger($);
  panels($);
  scroller($);
  about($);
  shell($);
  video($);
  framework($);

  const $nav = $('#menu'),
        $page = $('.wrapper'),
        $about = $('#about'),
        $general = $('#general'),
        $hamburger = $('#hamburger'),
        $fixed = $('.fixed');

  $('body').on('click touchstart', '#hamburger, #hamburger-foot', function () {
    $('#menu, #hamburger-foot, #hamburger, .wrapper').toggleClass('is-open');
    $('#about, #general, .fixed').toggleClass('nav-open');
  });
  $('body').on('click touchstart', '.nav-open, #menu', function () {
    $('#menu, #hamburger-foot, #hamburger, .wrapper').removeClass('is-open');
    $('#about, #general, .fixed').removeClass('nav-open');
  });
});
