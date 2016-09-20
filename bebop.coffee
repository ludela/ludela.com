sass = require 'bebop/lib/compilers/sass'

module.exports =
  workDir: 'src/'
  staticDir: 'public/'
  compilers:
    scss: ->
      sass 'prelaunch/sass/prelaunch.scss', 'public/css/prelaunch.css', (err) ->
        throw err if err?
    styl: ->
