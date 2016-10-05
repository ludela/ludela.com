import debounce from 'debounce';

export default function ($)  {
  var $container = $('.scroll-container');

    var step = 1;
    var prevStep = 1;
    var story = 1;
    var scroll = true;
    var steps = [
      'A-Seed-Was-Planted',
      'Better-Light',
      'The-Team',
      'Our-Story-1',
      'Our-Story-2',
      'Our-Story-3',
      'Our-Story-4',
      'Our-Story-5',
      'Our-Story-6',
      'Our-Story-7',
      'Our-Story-8',
      'Our-Story-9',
      'Join-Us'
    ]



  if ($container.length && scroll == true) {
    window.onscroll = debounce(setStep, 25);
    window.onload = reload();
  }

    function setStep(){

      if (window.location.hash == '') {
        window.location.hash = steps[0]
      }

      var hash = window.location.hash;
      step = steps.indexOf(hash.substring(1, hash.length))+1;
      var prevStep = step;

      if ( $(window).scrollTop() + $(window).height() + 2 > $(document).height() && step <= 14) {
        step++;
      } else if ( $(window).scrollTop() == 0 && step > 1) {
        step--;
      }

      if (prevStep !== step) {
        scroll = false;
        setTimeout(setScroll, 1000);
      }

      if (step == 13 || step > 4 && $(window).width()<=680) {
        step = 5;
        window.location.hash = steps[12];
        $(document).trigger('setfooter');
      } else if (step >= 4) {
        story = step - 3;
        step = 4;
      }

      if (prevStep !== step && story < 2) {
        $(document).trigger('setabout', step);
        prevStep = step;
      }

      if (step == 4) {
        $(document).trigger('setstory', story);
      }
    }


    function reload() {

      if (window.location.hash == '') {
        window.location.hash = steps[0]
      }

      var hash = window.location.hash;
      step = steps.indexOf(hash.substring(1, hash.length))+1;
      var prevStep = step;

      if (step == 13 || step > 4 && $(window).width()<=680) {
        window.location.hash = steps[12];
        step = 5;
        $(document).trigger('setfooter');
      } else if (step >= 4) {
        story = step - 3;
        step = 4;
      }

      if ( story < 2) {
        $(document).trigger('setabout', step);
        prevStep = step;
      }

      if (step == 4) {
        $(document).trigger('setabout', 4);
        $(document).trigger('setstory', story);
      }

    }

    function setScroll() {
      $(window).scrollTop(100);
      scroll = true;
    }
  }
