export const BASE_URL = '192.168.0.89:8888/api';

export const USER_TOKEN_NAME = 'aivis-token';

export const USER_TOKEN = JSON.parse(
  localStorage.getItem(USER_TOKEN_NAME) || '',
);
