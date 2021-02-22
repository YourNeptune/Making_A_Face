import {terser} from 'rollup-plugin-terser'

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'cjs'
        },
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            plugins: [terser()]
        }
    ]
}