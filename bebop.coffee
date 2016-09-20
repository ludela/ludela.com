sass = require 'bebop/lib/compilers/sass'

module.exports =
  workDir: 'public/'
  compilers:
    scss: ->
      sass 'prelaunch/sass/style.scss', 'public/prelaunch.css', (err) ->
        throw err if err?

