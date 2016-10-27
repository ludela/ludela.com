window.loads++;

$(function(){
  $('.contentful').each(function(){
    var $el = $(this);

    var template = $el.html();

    var space = $el.attr('data-contentful-space');
    var token = $el.attr('data-contentful-token');
    var model = $el.attr('data-contentful-model');
    var order = $el.attr('data-contentful-order')

    if (!space || space === '') {
      console.error('No Contentful Space Specified');
      return;
    }

    if (!token || token === '') {
      console.error('No Contentful Token Specified');
      return;
    }

    var contentfulClient = contentful.createClient({
      accessToken: token,
      space: space
    })

    contentfulClient.getEntries({
      content_type: model
    }).then(function(entries) {
      var items = entries.items;
      var len = items.length;

      if (order && order != "") {
        items.sort(function(a, b) {
            return a.fields[order] - b.fields[order];
        })
      } else {
        items.sort(function(a, b) {
            return (new Date(a.sys.createdAt)).getTime() - (new Date(b.sys.createdAt)).getTime();
        })
      }

      for(var i = 0; i < len; i++) {
        var item = items[i];
        var $template = $(template);
        $template.find('[data-contentful-field]').each(function(i){
          var $field = $(this);
          var field = $field.attr('data-contentful-field');
          $field.html(item.fields[field]);
        });

        $el.append($template);
      }

      window.loads--;
    })
  });
});
