sass = require 'bebop/lib/compilers/sass'

module.exports =
  compilers:
    scss: (src, dst) ->
      sass 'sass/style.scss', 'css/style.css', (err) ->
        console.log err if err?
