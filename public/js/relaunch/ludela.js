$(window).load(function(){
  $('.phone').on('click', function(){
    $('body').toggleClass('lit')
  })


  $('.checkout-container').on('scroll touchmove mousewheel', function(e){
    e.stopPropagation();
    return true
  })

  $('.hero.video .play-message').on('click', function(e){
    $(this).closest('.play-wrapper').find('.play').trigger('click', e);
  })

  if (window.location.pathname == '/' || window.location.pathname == '/store' || window.location.pathname == '/press' || window.location.pathname == '/account') {
    $('body').on('click tap', '#hamburger, #hamburger-foot', function () {
      $('#menu, #hamburger-foot, #hamburger, .wrapper').toggleClass('is-open');
      $('#about, #general, .fixed').toggleClass('nav-open');
    });

    $('body').on('click tap touchend', '.nav-open, #menu, .menu__close', function () {
      $('.is-open').removeClass('is-open');
      $('.nav-open').removeClass('nav-open');
    });
  }

  $('.progress').addClass('active');

  /**
   * Lazy Image Loading
   */

  /*
   * Minimal classList shim for IE 9
   * By Devon Govett
   * MIT LICENSE
   */

  if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
      get: function() {
        var self = this;
        function update(fn) {
          return function(value) {
            var classes = self.className.split(/\s+/),
                index = classes.indexOf(value);

            fn(classes, index, value);
            self.className = classes.join(" ");
          }
        }

        var ret = {
          add: update(function(classes, index, value) {
            ~index || classes.push(value);
          }),

          remove: update(function(classes, index) {
            ~index && classes.splice(index, 1);
          }),

          toggle: update(function(classes, index, value) {
            ~index ? classes.splice(index, 1) : classes.push(value);
          }),

          contains: function(value) {
            return !!~self.className.split(/\s+/).indexOf(value);
          },

          item: function(i) {
            return self.className.split(/\s+/)[i] || null;
          }
        };

        Object.defineProperty(ret, 'length', {
          get: function() {
            return self.className.split(/\s+/).length;
          }
        });

        return ret;
      }
    });
  }

  if (window.Layzr) {
    var instance = Layzr({
      normal: 'data-lazy',
      threshold: 250
    })

    instance.on('src:after', function(element) {
      if (element.tagName == 'IMG') {
        return;
      }

      element.style.backgroundImage = 'url('+ element.getAttribute('src') +')';
      element.className = (element.className + ' lazy-loaded').trim();
      element.removeAttribute('data-lazy');
    });

    instance.update().check().handlers(true);
  }
});

