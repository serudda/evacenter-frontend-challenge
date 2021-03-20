/**
 * @desc App constants: Keep centralize every global app constant here
 * (e.g. server urls, domain, google Map Key, accessKeyIdS3, etc.)
 * @type constants
 */

/* Base domain */
export const LOCAL_BASE_DOMAIN = 'http://localhost:3000/';
export const PROD_BASE_DOMAIN = 'https://evacenter-fe-challenge.netlify.app/';

/* Environments */
export const LOCAL = 'local';
export const DEV = 'development';
export const PRD = 'production';

/* Server Url */
export const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
export const DATA_URL = process.env.REACT_APP_DATA_URL;

/* Firebase Config */
export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

/* Sentry Config */
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN;
