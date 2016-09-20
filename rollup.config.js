import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: './src/js/index.js',
  dest: './public/js/site.js',
  format: 'iife',
  moduleName: 'Ludela',
  sourceMap: true,
  plugins: [
    resolve({
      main: true,
      jsnext: true
    }),
    commonjs({
      include: ['./node_modules/**']
    }),
    buble()
  ]
};
