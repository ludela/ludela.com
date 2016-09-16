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
        $contact = $('#contact'),
        $hamburger = $('#hamburger'),
        $fixed = $('.fixed'),
        $faq = $('#faq');

  $hamburger.on('click', function() {
    $nav.toggleClass('is-open');
    $('#hamburger').toggleClass('is-open');
    $about.toggleClass('nav-open');
    $faq.toggleClass('nav-open');
    $contact.toggleClass('nav-open');
    $page.toggleClass('nav-open');
    $nav.toggleClass('nav-open');
    $fixed.toggleClass('nav-open');
  });;
});
