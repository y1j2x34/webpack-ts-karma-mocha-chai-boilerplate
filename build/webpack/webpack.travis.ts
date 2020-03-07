import { configChain } from './webpack.test';

configChain.devtool('nosources-source-map');

export default configChain.toConfig();
