$(window).load(function(){
  $('select').selectize({
      create: true,
      sortField: 'text'
  });

  var instance = Layzr({
    normal: 'data-lazy',
    threshold: 25
  })

  instance.update().check().handlers(true);

  $('.color-picker label').on('click', function(){
    var $label = $(this);
    var $color = $label.closest('span');
    var color = $color[0]
    var i = $color.index();

    var $imgs = $color.closest('.item').find('.image img')
    $imgs.removeClass('active');
    $($imgs[i]).addClass('active');
  })
})
