export default function ($) {

  console.log('Panels Controller Loaded');

  const $splash = $('.splash');

  var currentStep = 1;

  $splash.addClass('is-step-' + currentStep);

  $(document).on('setpanel', function (ev, index) {
    $splash
      .removeClass('is-step-' + currentStep)
      .addClass('is-step-' + (currentStep = index));
  });

}
