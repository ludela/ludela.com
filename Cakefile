require 'shortcake'

use 'cake-test'
use 'cake-publish'
use 'cake-version'

option '-b', '--browser [browser]', 'browser to use for tests'
option '-g', '--grep [filter]',     'test filter'
option '-t', '--test [test]',       'specify test to run'
option '-v', '--verbose',           'enable verbose test logging'

task 'build', 'build project', ->
  exec '''
    bebop -c
    cp node_modules/shop.js/shop.min.js js/shop.js
    '''

task 'watch', 'watch for changes and recompile project', ->
  exec 'bebop'
