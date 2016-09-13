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
        $contact = $('#contact'),
        $faq = $('#faq');

  $toggle.on('click', function() {
    $nav.toggleClass('is-open');
    $page.toggleClass('nav-open');
  });
  $('#hamburger').on('click', function() {
    $('#menu').toggleClass('is-open');
    $('#hamburger').toggleClass('is-open');
    $about.toggleClass('nav-open');
    $faq.toggleClass('nav-open');
    $contact.toggleClass('nav-open');
  });;
});
