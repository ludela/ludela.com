export default function($) {
  $('.checkout-button').on('click', function(e){
    var $modal = $('.modal');
    $modal.removeClass('hidden');

    e.stopPropagation();
    e.preventDefault();
    return false;
  });

  $('.modal-close').on('click', function(e){
    var $modal = $(this).closest('.modal');
    $modal.addClass('hidden');
  })
}

