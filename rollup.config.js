
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.min.js',
      format: 'iife', 
      name: 'window',
      extend: true,
      esModule: false,
      sourcemap: process.env.BUILD == 'dev',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        outDir: './dist',
      }),
      terser(),
      postcss({
        extract: true,
        minimize: true,
      }),
      copy({
        targets: [
          { src: 'docs/examples/index.html', dest: 'dist' }, // Copy HTML to dist
        ],
      }),
      serve({
        open: true,
        contentBase: 'dist',
        port: 3001,
      }),
      livereload('dist'),
    ],
  }
];