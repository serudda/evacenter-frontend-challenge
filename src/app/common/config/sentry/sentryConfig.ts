import * as Sentry from '@sentry/browser';

import { isLocal } from '@config/config';
import * as appConstants from '@constants/appConstants';

// Initialize Sentry
Sentry.init({
  environment: isLocal() ? appConstants.DEV : appConstants.PRD,
  dsn: appConstants.SENTRY_DSN,
});
