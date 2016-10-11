require 'shortcake'

use 'cake-test'
use 'cake-version'
use 'cake-publish',
  deploy:
    remote:  'origin'
    refspec: 'master:production'
  npm:    false

task 'build', 'build project', ->
  exec.parallel '''
    rollup -c
    stylus src/css/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/css/site.css
    stylus src/css/relaunch/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/css/relaunch/site.css --sourcemap
    bebop compile --work-dir .
    cp ./node_modules/shop.js/shop.min.js ./public/js/shop.js
    '''

task 'watch', 'watch for changes and recompile project', ->
  exec.parallel '''
    rollup -c --watch
    stylus src/css/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/css/site.css --watch --sourcemap
    stylus src/css/relaunch/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/css/relaunch/site.css --watch --sourcemap
    bebop
    cp ./node_modules/shop.js/shop.js ./public/js/shop.js
    '''
