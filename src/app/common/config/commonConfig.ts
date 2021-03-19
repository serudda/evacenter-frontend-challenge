import { CommonConfig } from '@config/config';
import * as appConstants from '@constants/appConstants';

const commonConfig: CommonConfig = {
  server: {
    port: 3000,
  },
  api: {
    uri: appConstants.DATA_URL as string,
  },
  languages: {
    default: 'es',
    list: ['es', 'en'],
  },
};

export default commonConfig;
