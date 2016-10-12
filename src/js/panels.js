export default function ($) {

  console.log('Panels Controller Loaded');

  const $document = $(document);
  const $window = $(window);
  const $body = $('html, body');
  const $splash = $('.splash');
  const $dot = $('.dot');

  var currentStep = 1;
  var totalSteps;
  var currentStory = 1;

  if ($splash.length) {
    totalSteps = $('.splash__content').length;
    $splash.addClass('is-step-' + currentStep);
  }

  $document.on('setpanel', function (ev, index) {
    if($splash.length) {
      index = Math.max(1, Math.min(totalSteps, index));
      console.log('[setpanel] setting step to ', index);
      const $panel = $(`.splash__content:eq(${index - 1})`);
      $body.animate({ scrollTop: $panel.offset().top }, 500);
      $splash
        .removeClass('is-step-' + currentStep)
        .addClass('is-step-' + (currentStep = index));
      $('.active-dot').removeClass('active-dot');
      $('.dot-' + currentStep).addClass('active-dot');
    }
  });

  $dot.on('click', function (ev, goTo) {
    // $.scrollify.move($(this).data("step"));
    // goTo = $(this).data('goto');
    // $('.splash')
    //     .removeClass((i, css) =>
    //       (css.match (/is\-step\-[0-9]+/g) || []).join(' '))
    //     .addClass("is-step-" + goTo);
    // window.location.hash = ('s' + goTo);
  });



  $document.on('nextpanel', function (ev, dir) {
    $document.trigger('setpanel', currentStep + dir);
  });
}
