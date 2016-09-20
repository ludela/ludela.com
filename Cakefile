require 'shortcake'

use 'cake-test'
use 'cake-version'
use 'cake-publish', npm: false

task 'build', 'build project', ->
  exec.parallel '''
    rollup -c
    stylus src/css/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/css/site.css
    bebop compile --work-dir public
    cp ./node_modules/shop.js/shop.js ./public/js/shop.js
    '''

task 'watch', 'watch for changes and recompile project', ->
  exec.parallel '''
    rollup -c --watch
    stylus src/css/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/css/site.css --watch --sourcemap
    bebop --work-dir public
    cp ./node_modules/shop.js/shop.js ./public/js/shop.js
    '''
