// rollup.config.js

import babel from'rollup-plugin-babel';
import postcss from'rollup-plugin-postcss';

const common = require('./rollup.js');

console.log(common)

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        // 如果不同时使用 export 与 export default 可打开legacy
        // legacy: true,
        banner: common.banner
    },
    plugins: [
        postcss({
            extensions: ['.css']
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        })
    ]
};
