# webpack-ts-karma-mocha-chai-boilerplate

A comprehensive template. Works out of the box for most front-end projects

Included and configurated these following tools:

- typescript@3.7.4, All code including webpack configuration is written in "Typescript" except commitlint and git-cz configuration
- webpack: A static module bundler for modern JavaScript applications
- Karma: A tool that allows you to execute test cases code in multiple real browsers
- mocha + chai + instanbul: unit testing and code coverage
- tslint and prettier to enforce consistence code style
- NPM scripts for common operations
- simple example of Typescript code and unit test
- .editorconfig for consistent file format
- Configuration for [Travis CI](https://travis-ci.org/) and [codecov.io](https://codecov.io/)
- Supports to generate bundles in different module formats: UMD, Commonjs, ES module
- commitlint: checks if your commit message meet the conventional commit format

## Getting start 

### Use as a repository template

To start, just click the [Use Template](https://github.com/y1j2x34/webpack-ts-karma-mocha-chai-boilerplate/generate) link to create your repository;

### Clone repository

To clone the repository use the following commands:
```sh
git clone https://github.com/y1j2x34/webpack-ts-karma-mocha-chai-boilerplate.git
cd webpack-ts-karma-mocha-chai-boilerplate
npm install
```

## Available Scripts

- `release` - Automate versioning and CHANGELOG generation
- `commit` - Commit your code by git-cz, It will prompt you to fill in any required fields, This makes your repo commitizen-friendly
- `lint` - Lint source files and tests
- `format` - Format source files and tests
- `test:debugger` - Start karma to run your unit tests to debug your code
- `ci` - Start karma to run your unit tests in a headless chrome, this command will be automatically executed by travis-ci when git push
- `codecov` - Collect your coverage datas and then upload to <codecov.io>, this command is also be automatically executed by travis-ci after the `ci` command completed.
- `build:cjs` - Build and generate Commonjs module bundle.
- `build:umd` - Build and generate UMD module bundle.
- `build:esm` - Build and generate ES module bundle.
- `gendoc`: - Run typedoc to generate documentation to the dist/docs directory
