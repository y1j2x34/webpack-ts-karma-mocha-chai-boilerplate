import { configChain } from './webpack.test';
import path from 'path';

configChain.devtool('nosources-source-map');

configChain.module
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

export default configChain.toConfig();
