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
    $splash.addClass('is-step-' + currentStep);
  }

  $document.on('setpanel', function (ev, index) {
    if($splash.length) {
      index = Math.max(1, Math.min(totalSteps, index));
      console.log('[setpanel] setting step to ', index);
      const $panel = $(`.splash__content:eq(${index - 1})`);
      // if ( ! $panel || $panel.length !> 0) return;
      // console.log($panel.offset().top);
      $body.animate({ scrollTop: $panel.offset().top }, 500);
      $splash
        .removeClass('is-step-' + currentStep)
        .addClass('is-step-' + (currentStep = index));
    }
  });

  $document.on('setabout', function (ev, index) {
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
    window.location.hash = '#'+steps[index - 1];
    $about
      .removeClass('is-step-' + currentStep)
      .addClass('is-step-' + (currentStep = index));
    console.log('stepp is'+ index);

    $('.active-dot').removeClass('active-dot')
    $('.dot-'+currentStep).addClass('active-dot');
  });

  $document.on('nextpanel', function (ev, dir) {
    $document.trigger('setpanel', currentStep + dir);
  });

  $document.on('setstory', function (ev, index) {
    var story = 9;
    if (index <=9) {
      story = index;
      $about.removeClass('is-footer');
    } else {
      $about.addClass('is-footer');
    }

    $about
      .removeClass('is-story-' + currentStory)
      .addClass('is-story-' + (currentStory = story));
  });

}
