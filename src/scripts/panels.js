export default function ($) {

  console.log('Panels Controller Loaded');

  const $document = $(document);
  const $window = $(window);
  const $body = $('html, body');
  const $splash = $('.splash');

  var currentStep = 1,
      totalSteps = $('.splash__content').length;

  $splash.addClass('is-step-' + currentStep);

  $document.on('setpanel', function (ev, index) {
    index = Math.max(1, Math.min(totalSteps, index));
    console.log('[setpanel] setting step to ', index);
    const $panel = $(`.splash__content:eq(${index - 1})`);
    // if ( ! $panel || $panel.length !> 0) return;
    $body.animate({ scrollTop: $panel.offset().top }, 500);
    $splash
      .removeClass('is-step-' + currentStep)
      .addClass('is-step-' + (currentStep = index));
  });

  $document.on('nextpanel', function (ev, dir) {
    $document.trigger('setpanel', currentStep + dir);
  });

}
