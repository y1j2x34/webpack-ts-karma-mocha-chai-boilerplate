import config from './webpack.base';
import yargs from 'yargs';
import path from 'path';
import pkg from '../../package.json';
import ESMWebpackPlugin from '@purtuga/esm-webpack-plugin';

yargs
    .option('output-format', {
        describe: 'Specific the output format of wepack',
        choices: ['cjs', 'umd', 'esm'],
        demandOption: true,
        default: 'cjs'
    })
    .option('output-language', {
        describe: 'Specify the output language generage from webpack',
        choices: ['ES3', 'ES5', 'ES6', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'],
        demandOption: false,
        default: 'ES5'
    });

const format: 'cjs' | 'umd' | 'esm' = yargs.argv.outputFormat as any;

config.entry('index').add(path.resolve(__dirname, '../../src/index.ts'));
config.mode('development');
config.devtool('cheap-module-source-map');

config.output.path(path.resolve(__dirname, '../..', pkg.distDir));

config.module
    .rule('compile')
    .use('typescript')
    .options({
        compilerOptions: {
            declaration: true,
            declarationDir: pkg.distDir,
            target: yargs.argv.outputLanguage
        }
    });

switch (format) {
    case 'cjs':
        config.output
            .filename('[name].cjs.js')
            .library(pkg.library)
            .libraryTarget('commonjs');
        break;
    case 'esm':
        config.plugin('esm').use(ESMWebpackPlugin);
        config.output
            .filename('[name].esm.js')
            .library(pkg.library)
            .libraryTarget('var');
        break;
    case 'umd':
        config.output
            .filename('[name].umd.js')
            .library(pkg.library)
            .libraryTarget('umd');
        break;
}

export default config.toConfig();
