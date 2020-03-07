import WebpackChain from 'webpack-chain';

const config = new WebpackChain();

config.resolve.extensions.merge(['.ts', '.tsx', '.js', '.jsx']).end();
config.module
    .rule('compile')
    .test(/\.tsx?$/)
    .pre()
    .exclude.add(/node_modules/)
    .end()
    .use('typescript')
    .loader('ts-loader')
    .end()
    .end();

export default config;
