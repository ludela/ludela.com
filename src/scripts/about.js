import debounce from 'debounce';

export default function ($)  {
  var $container = $('.scroll-container');

    var step = 1;
    var prevStep = 1;
    var story = 1;



  if ($container) {
    window.onscroll = debounce(setStep, 1);
  }

    function setStep(){
      story = 1;
      step = Math.floor(($(window).scrollTop()/$(window).height())+1);

      if (step >= 14) {
        story = 9;
        step = 5;
      } else if (step > 4) {
        story = step - 4;
        step = 4;
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
  }
