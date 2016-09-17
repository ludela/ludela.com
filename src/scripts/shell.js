export default function ($) {

  const shell = $('.visuals__shell');

  $('.swatch').on('click', function (ev) {
    var color = $(this).data("id");
    shell
        .attr('class', 'visuals__shell')
        .addClass('is-' + color);
  });

}
