import config from './webpack.base';
import path from 'path';

config.module.rules.delete('compile');

config.devtool('inline-source-map');

config.module
    .rule('compile')
    .test(/\.ts/)
    .exclude.add(/node_modules/)
    .end()
    .use('typescirpt')
    .loader('ts-loader')
    .options({
        configFile: '../../test/tsconfig.json',
        transpileOnly: true
    })
    .end() // end use: typescript
    .end() // end rule: compule
    .rule('coverage')
    .test(/\.ts$/)
    .enforce('post')
    .exclude.add(/node_modules|\.spec\.ts$/)
    .end()
    .include.add(path.resolve(__dirname, '../../src'))
    .end()
    .use('istanbul')
    .loader('coverage-istanbul-loader')
    .options({
        esModules: true
    })
    .end()
    .end();

export const configChain = config;

export default config.toConfig();
