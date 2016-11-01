window.loads++;

$(function(){
  $('.contentful').each(function(){
    var $el = $(this);

    var template = $el.html();
    $el.html('');

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
      var assets = [];

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
        (function(i) {
          $template.find('[data-contentful-field]').each(function(j){
            var $field = $(this);
            var field = $field.attr('data-contentful-field');
            $field.prepend(item.fields[field]);
          });

          $template.find('[data-contentful-src]').each(function(j){
            var $field = $(this);
            var field = $field.attr('data-contentful-src');

            if (!item.fields[field] || !item.fields[field].fields || !item.fields[field].fields.file) {
              return;
            }

            $field.attr('src', item.fields[field].fields.file.url);
          });

          $template.find('[data-contentful-href]').each(function(i){
            var $field = $(this);
            var field = $field.attr('data-contentful-href');
            $field.attr('href', item.fields[field]);
          });

        })(i);

        $el.append($template);
      }

      window.loads--;
    })
  });
});
