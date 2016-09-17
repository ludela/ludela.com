import jQuery from 'jquery';
import panels from './panels';
import _debugger from './debugger';
import scroller from './scroller';
import about from './about';


jQuery(function ($) {
  _debugger($);
  panels($);
  scroller($);
  about($);

  const $nav = $('#menu'),
        $page = $('.wrapper'),
        $about = $('#about'),
        $general = $('#general'),
        $hamburger = $('#hamburger'),
        $fixed = $('.fixed');

  $hamburger.on('click', function() {
    $nav.toggleClass('is-open');
    $('#hamburger').toggleClass('is-open');
    $('#hamburgfoot').toggleClass('is-open');
    $about.toggleClass('nav-open');
    $general.toggleClass('nav-open');
  });
  $('#hamburgfoot').on('click', function() {
    $('#menu').toggleClass('is-open');
    $('#hamburgfoot').toggleClass('is-open');
    $('#hamburger').toggleClass('is-open');
    $about.toggleClass('nav-open');
    $general.toggleClass('nav-open');
  });
  $('#menu').on('click', function() {
    $('#menu').removeClass('is-open');
    $('#hamburgfoot').removeClass('is-open');
    $('#hamburger').removeClass('is-open');
    $about.removeClass('nav-open');
    $general.removeClass('nav-open');
  });
});
