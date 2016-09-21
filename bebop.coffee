sass = require 'bebop/lib/compilers/sass'

module.exports =
  workDir: 'public/'
  compilers:
    scss: ->
      sass 'src/prelaunch/prelaunch.scss', 'public/css/prelaunch.css', (err) ->
        throw err if err?
    styl: ->
