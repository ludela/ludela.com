import jQuery from 'jquery';
import panels from './panels';
import _debugger from './debugger';
import about from './about';

jQuery(function ($) {
  _debugger($);
  panels($);
  about($);

  const $toggle = $('#toggle'),
        $nav = $('nav'),
        $page = $('.wrapper'),
        $about = $('#about');

  $toggle.on('click', function() {
    $nav.toggleClass('is-open');
    $page.toggleClass('nav-open');
  });
  $('#hamburger').on('click', function() {
    $('#menu').toggleClass('is-open');
    $about.toggleClass('nav-open');
  });;
});
