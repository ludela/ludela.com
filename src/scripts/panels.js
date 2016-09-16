export default function ($) {

  console.log('Panels Controller Loaded');

  const $document = $(document);
  const $window = $(window);
  const $body = $('html, body');
  const $splash = $('.splash');
  const $about = $('#about');

  var currentStep = 1;
  var totalSteps;
  var currentStory = 1;


  if ($splash.length) {
    totalSteps = $('.splash__content').length;
    // console.log(totalSteps);
    $splash.addClass('is-step-' + currentStep);
  }

  $document.on('setpanel', function (ev, index) {
    index = Math.max(1, Math.min(totalSteps, index));
    console.log('[setpanel] setting step to ', index);
    const $panel = $(`.splash__content:eq(${index - 1})`);
    // if ( ! $panel || $panel.length !> 0) return;
    // console.log($panel.offset().top);
    $body.animate({ scrollTop: $panel.offset().top }, 500);
    console.log('currentStep: ', currentStep);
    console.log('index: ', index);
    $splash
      .removeClass('is-step-' + currentStep)
      .addClass('is-step-' + (currentStep = index));
    console.log('new currentStep: ', currentStep);
    $('.active-dot').removeClass('active-dot');
    $('.dot-' + currentStep).addClass('active-dot');
  });



  $document.on('setabout', function (ev, index) {
    $about
      .removeClass('is-step-' + currentStep)
      .addClass('is-step-' + (currentStep = index));
      $('.active-dot').removeClass('active-dot');
      $('.dot-'+currentStep).addClass('active-dot');
  });

  $document.on('nextpanel', function (ev, dir) {
    $document.trigger('setpanel', currentStep + dir);
  });

  $document.on('setstory', function (ev, index) {
    var story = 9;
    if (index <=9) {
      story = index
    }
    $about
      .removeClass('is-story-' + currentStory)
      .addClass('is-story-' + (currentStory = story));
      // console.log(ev, index);
  });

}
