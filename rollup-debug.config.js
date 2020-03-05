const plugins = require('./build/rollup.plugins');
const pkg = require('./package.json');

const rollupPlugins = [
    plugins.typescript({
        tsconfig: './test/tsconfig.json',
        tsconfigOverride: {
            compilerOptions: {
                inlineSourceMap: false
            }
        }
    }),
    plugins.nodeResolve(),
    plugins.commonjs({
        include: 'node_modules/**',
        ignore: ['js-base64'],
        sourceMap: false,
        namedExports: {
            chai: ['expect']
        }
    })
];
module.exports = {
    context: 'this',
    watch: true,
    output: {
        format: 'iife',
        name: pkg.library,
        sourcemap: 'inline'
    },
    plugins: rollupPlugins,
    onwarn: function(warning) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') {
            return;
        }
        console.warn(`(!) ${warning.message}`);
    }
};
