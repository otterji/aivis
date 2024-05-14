export const BASE_URL = 'http://192.168.0.89:8889/api';

export const USER_TOKEN_NAME = 'aivis-token';

export const USER_TOKEN = JSON.parse(
  localStorage.getItem('user-token') || '{}',
);
