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
    window.onscroll = debounce(setStep, 500);
  }

    function setStep(){

      if (window.location.hash == '') {
        window.location.hash = steps[0]
      }

      var hash = window.location.hash;
      step = steps.indexOf(hash.substring(1, hash.length))+1;
      var prevStep = step;

      console.log('top + height: ', $(window).scrollTop() + $(window).height() +' doc height: '+ $(document).height());

      if ( $(window).scrollTop() + $(window).height() + 1 == $(document).height() && step <= 13) {
        step++;
        console.log('going up '+step);
        console.log('new scroll: ', $(window).scrollTop());
      } else if ( $(window).scrollTop() == 0 && step > 1) {
        step--;
        console.log('going down '+step);
        console.log('new scroll: ', $(window).scrollTop());
      }

      if (prevStep !== step) {
        window.location.hash = steps[step-1];
        scroll = false;
        setTimeout(setScroll, 1500);
      }

      console.log(window.location.hash, steps[step-1]);

      if (step >= 14) {
        story = 9;
        step = 5;
      } else if (step >= 4) {
        story = step - 3;
        step = 4;
        console.log('yes step:', step, ' story:', story);
      }
      console.log(step);
      console.log($(window).scrollTop());

      if (prevStep !== step) {
        $(document).trigger('setabout', step);
        prevStep = step;
      }

      if (step == 4) {
        $(document).trigger('setstory', story);
      }
    }

    function setScroll() {
      $(window).scrollTop(100);
      scroll = true;
    }
  }
