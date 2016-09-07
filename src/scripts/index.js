import jQuery from 'jquery';
import panels from './panels';
import _debugger from './debugger';

jQuery(function ($) {
  _debugger($);
  panels($);

  const $toggle = $('#toggle'),
        $nav = $('nav'),
        $page = $('.wrapper');

  $toggle.on('click', function() {
    $nav.toggleClass('is-open');
    $page.toggleClass('nav-open');
  });
});
