export default function ($) {
  console.log('Debugger Loaded');

  const $buttons = $('#debugger button');

  $buttons.on('click', function () {
    const panelIndex = $(this).data('goto');
    $(document).trigger('setpanel', panelIndex);
  });

}
