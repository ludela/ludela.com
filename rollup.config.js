import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: './src/scripts/index.js',
  dest: './public/site.js',
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
