import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'src/index.js',
        output: {
            format: 'esm',
            file: 'dist/library.esm.js'
        },
        plugins: [
            vue(),
            commonjs(),
        ]
    },
]