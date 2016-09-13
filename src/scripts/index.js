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

  const $toggle = $('#toggle'),
        $nav = $('nav'),
        $page = $('.wrapper'),
        $about = $('#about'),
        $general = $('#general');

  $toggle.on('click', function() {
    $nav.toggleClass('is-open');
    $page.toggleClass('nav-open');
  });
  $('#hamburger').on('click', function() {
    $('#menu').toggleClass('is-open');
    $('#hamburger').toggleClass('is-open');
    $about.toggleClass('nav-open');
    $general.toggleClass('nav-open');
  });;
});
