import config from './webpack.base';

config.module.rules.delete('compile');

config.mode('development');
config.devtool('cheap-module-eval-source-map');

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
    .end(); // end rule: compule

export const configChain = config;

export default config.toConfig();
