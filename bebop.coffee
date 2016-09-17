sass = require 'bebop/lib/compilers/sass'

module.exports =
  compilers:
    scss: ->
      sass 'sass/style.scss', 'css/style.css', (err) ->
        throw err if err?
