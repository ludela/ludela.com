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
})
