import karma from 'karma';
import baseConfig from './karma.base.conf';
import webpackTest from '../webpack/webpack.test';
interface HTMLFileReporterConfigOption extends karma.ConfigOptions {
    htmlFileReporter?: Record<string, unknown>;
};
export default function(config: karma.Config) {
    baseConfig.plugins?.push('karma-htmlfile-reporter');
    config.set(baseConfig as karma.ConfigOptions);
    config.set({
        preprocessors: {
            '../../test/specs/index.spec.ts': ['webpack', 'sourcemap']
        },
        webpack: webpackTest,
        webpackMiddleware: {
            stats: 'errors-warnings'
        },
        reporters: ['progress', 'mocha', 'html'],
        logLevel: config.LOG_DEBUG,
        htmlReporter: {
            outputFile: '../../reports/index.html',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true
        }
    } as HTMLFileReporterConfigOption);
}
