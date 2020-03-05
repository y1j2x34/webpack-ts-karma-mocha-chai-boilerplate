'use strict';

const baseConfig = require('./karma.base.conf');
const rollupConfig = require('./rollup-debug.config');

module.exports = function (config) {


    config.set(baseConfig);
    config.set({
        preprocessors: {
            'test/specs/**/*.spec.ts': ['sourcemap', 'rollup']
        },
        rollupPreprocessor: rollupConfig,
        reporters: ['progress', 'mocha'],

        logLevel: config.LOG_DEBUG,

        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-mocha-reporter',
            'karma-rollup-preprocessor',
            'karma-sourcemap-loader'
        ],
        singleRun: false
    });
};
