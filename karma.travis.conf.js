'use strict';
const path = require('path');

const plugins = require('./build/rollup.plugins');
const rollupPluginIstanbul = require('rollup-plugin-istanbul');
const baseConfig = require('./karma.base.conf');
const pkg = require('./package.json');

module.exports = function (config) {
    const coverageIstanbulReporter = {
        reports: ['lcov', 'text-summary', 'cobertura'],
        dir: path.join(__dirname, 'coverage'),
        skipFilesWithNoCoverage: true
    };

    const rollupPlugins = [
        plugins.nodeResolve(),
        plugins.commonjs({
            include: 'node_modules/**',
            ignore: ['js-base64'],
            sourceMap: false,
            namedExports: {
                chai: ['expect']
            }
        }),
        plugins.typescript({
            tsconfig: 'test/tsconfig.json'
        }),
        rollupPluginIstanbul({
            exclude: ['test/**/*.ts', "node_modules/**/*"],
            instrumenterConfig: {
                embedSource: true,
                debug: true
            }
        })
    ];
    config.set(Object.assign({}, baseConfig, {
        preprocessors: {
            'test/specs/**/*.spec.ts': ['rollup']
        },
        rollupPreprocessor: {
            context: 'this',
            watch: false,
            output: {
                format: 'iife',
                name: pkg.library,
                sourcemap: false
            },
            plugins: rollupPlugins,
            onwarn: function(warning) {
                if (warning.code === 'CIRCULAR_DEPENDENCY') {
                    return;
                }
                console.warn(`(!) ${warning.message}`);
            }
        },
        reporters: ['mocha', 'coverage-istanbul'],
        coverageIstanbulReporter: coverageIstanbulReporter,

        logLevel: config.LOG_DEBUG,

        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-mocha-reporter',
            'karma-rollup-preprocessor',
            'karma-coverage-istanbul-reporter'
        ],

        singleRun: true
    }));
};
