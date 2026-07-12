// Central place for all app-level constants.
// Never hardcode these values in components or API files.

export const APP_NAME = 'SellbyMU';

export const ROUTES = {
  LOGIN: '/login',
  HOME: '/',
  MY_ADS: '/my-ads',
  SELL: '/sell',
  PRODUCT_DETAILS: '/product-details',
  MESSAGES: '/messages',
  SETTINGS: '/settings',
} as const;

export const PAGINATION_LIMIT = 20;
