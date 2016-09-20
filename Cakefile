require 'shortcake'

use 'cake-test'
use 'cake-version'
use 'cake-publish', npm: false

task 'build', 'build project', ->
  exec '''
    rollup -c
    stylus src/styles/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/site.css
    '''

task 'watch', 'watch for changes and recompile project', ->
  exec.parallel '''
    rollup -c --watch
    stylus src/styles/index.styl --use ./node_modules/helpful-ui --use ./node_modules/autoprefixer-stylus --out public/site.css --watch --sourcemap
    bebop --work-dir public
    cp ./node_modules/shop.js/shop.js ./public/shop.js
    '''
