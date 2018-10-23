// rollup.config.js
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const common = require('./rollup.js');

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        // 如果不同时使用 export 与 export default 可打开legacy
        // legacy: true,
        name: common.name,
        banner: common.banner,
    },
    plugins: [
        postcss({
            plugins: [
                cssnext({ warnForDuplicates: false }),
                cssnano()
            ],
            extensions: ['.css']
        }),
        nodeResolve({
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        })
    ]
};
