import karma from 'karma';
import baseConfig from './karma.base.conf';
import webpackTest from '../webpack/webpack.test';

export default function(config: karma.Config) {
    config.set(baseConfig as karma.ConfigOptions);
    config.set({
        preprocessors: {
            '../../test/specs/index.spec.ts': ['webpack', 'sourcemap']
        },
        webpack: webpackTest,
        webpackMiddleware: {
            stats: 'errors-warnings'
        },
        reporters: ['progress', 'mocha'],
        logLevel: config.LOG_DEBUG
    });
}
