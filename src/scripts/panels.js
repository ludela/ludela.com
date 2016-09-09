export default function ($) {

  console.log('Panels Controller Loaded');

  const $splash = $('.splash');

  var currentStep = 1;

  var currentStory = 1;

  $splash.addClass('is-step-' + currentStep);

  $(document).on('setpanel', function (ev, index) {
    $splash
      .removeClass('is-step-' + currentStep)
      .addClass('is-step-' + (currentStep = index));
      console.log(ev, index);
  });

  $(document).on('setstory', function (ev, index) {
    var story = 9;
    if (index <=9) {
      story = index
    }
    $splash
      .removeClass('is-story-' + currentStory)
      .addClass('is-story-' + (currentStory = story));
      console.log(ev, index);
  });

}
