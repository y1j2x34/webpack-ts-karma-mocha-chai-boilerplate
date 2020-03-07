import karma from 'karma';
import webpackConfig from '../webpack/webpack.travis';
import baseConfig from './karma.base.conf';

export default function(config: karma.Config) {
    config.set(baseConfig as karma.ConfigOptions);
    config.set({
        preprocessors: {
            '../../test/specs/**/*.spec.ts': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-warnings'
        },
        reporters: ['mocha', 'coverage-istanbul'],
        coverageIstanbulReporter: {
            reports: ['cobertura', 'text-summary'],
            dir: 'coverage',
            fixWebpackSourcePaths: true
        },
        logLevel: config.LOG_INFO,
        singleRun: true,
        autoWatch: false,
        plugins: baseConfig.plugins?.concat(['karma-coverage-istanbul-reporter'])
    });
}
