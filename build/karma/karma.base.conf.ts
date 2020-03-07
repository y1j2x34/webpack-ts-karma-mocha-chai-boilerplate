import karma from 'karma';

const config: Partial<karma.ConfigOptions> = {
    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
        '../../test/specs/**/*.spec.ts',
        {
            pattern: '../../src/**/*.ts',
            served: true,
            included: false,
            watched: true
        }
    ],

    mime: {
        'text/x-typescript': ['ts', 'tsx']
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    autoWatch: true,

    customContextFile: './context.html',

    customDebugFile: './debug.html',

    customLaunchers: {
        HeadlessChrome: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-translate', '--disable-extensions']
        }
    },

    singleRun: false,

    concurrency: Infinity,

    plugins: [
        'karma-chrome-launcher',
        'karma-mocha',
        'karma-chai',
        'karma-mocha-reporter',
        'karma-sourcemap-loader',
        'karma-webpack'
    ]
};
export default config as karma.ConfigOptions;
