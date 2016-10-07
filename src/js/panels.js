export default function ($) {

  console.log('Panels Controller Loaded');

  const $document = $(document);
  const $window = $(window);
  const $body = $('html, body');
  const $splash = $('.splash');
  const $about = $('#about');
  const $dot = $('.dot');
  const steps = [
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
    'Our-Story-9'
    // , 'Join-Us'
  ];

  var currentStep = 1;
  var totalSteps;
  var currentStory = 1;


  if ($splash.length) {
    totalSteps = $('.splash__content').length;
    $splash.addClass('is-step-' + currentStep);
  }

  if ($about.length) {
    $('html, body').css('overflow', 'initial');
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
    $.scrollify.move($(this).data("step"));
    // goTo = $(this).data('goto');
    // $('.splash')
    //     .removeClass((i, css) =>
    //       (css.match (/is\-step\-[0-9]+/g) || []).join(' '))
    //     .addClass("is-step-" + goTo);
    // window.location.hash = ('s' + goTo);
  });

  $document.on('setabout', function (ev, index) {
    $('.scroll-container').addClass('scroll-stop');
    $('#step-'+currentStep+', #step-'+index).animate({scrollTop: 0}, 750);

    console.log($('#step-'+index).scrollTop());

    $about
      .removeClass('is-step-' + currentStep)
      .addClass('is-step-' + (currentStep = index));

    $('.active-dot').removeClass('active-dot')
    $('.dot-'+currentStep).addClass('active-dot');

    var Hash = '#'+steps[index -1];
    if (window.location.hash !== Hash) {
      window.location.hash = Hash;
    }

    setTimeout( function(){
      $('.scroll').removeClass('scroll');
      $('#step-'+currentStep).addClass('scroll');
      $('.scroll-container').removeClass('scroll-stop');}, 1000)
  });

  $document.on('nextpanel', function (ev, dir) {
    $document.trigger('setpanel', currentStep + dir);
  });

  $document.on('setstory', function (ev, index, prev) {

		if( $(window).width() > 680 ) {

	    $('.scroll-container').addClass('scroll-stop');

	    var story = 9;
	    if (index <=9 && $(window).width() > 680) {
	      story = index;
	      $('.story-'+index+1+', .story-'+index+', .story-'+index-1).animate({scrollTop: 0}, 750);
	      $about.removeClass('is-footer');
	    } else {
				story = 1;
	    }

	    $about
	      .removeClass('is-story-' + currentStory)
	      .addClass('is-story-' + (currentStory = story));

	    setTimeout( function(){
	      $('.scroll').removeClass('scroll');
	      $('.story-'+story).addClass('scroll');
	      $('.scroll-container').removeClass('scroll-stop');}, 1000)

	    var Hash = '#'+steps[story + 2];
	    if (window.location.hash !== Hash) {
	      window.location.hash = Hash;
	    }
		} else {
			$about
	      .removeClass('is-story-' + currentStory)
	      .addClass('is-story-1');
		}
  });
}
