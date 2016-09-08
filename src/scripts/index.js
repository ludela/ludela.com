import jQuery from 'jquery';
import panels from './panels';
import _debugger from './debugger';
import scroller from './scroller';

jQuery(function ($) {
  _debugger($);
  panels($);
  scroller($);


  const $toggle = $('#toggle'),
        $nav = $('nav'),
        $page = $('.wrapper');

  $toggle.on('click', function() {
    $nav.toggleClass('is-open');
    $page.toggleClass('nav-open');
  });
});
