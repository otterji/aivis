export const BASE_URL = 'http://192.168.0.89:8888/api';

export const USER_TOKEN_NAME = 'aivis-token';

export const USER_TOKEN = JSON.parse(
  localStorage.getItem(USER_TOKEN_NAME) || '',
);

export const CODING_TEST_TOKEN =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb2RpbmdfdGVzdCIsImF1dGgiOiJST0xFX1VTRVIiLCJ0eXBlIjoiU0VTU0lPTiIsImV4cCI6MTcxNTc0MzYxMX0.H7R8UsrS0jCdjEJKGAuB7qxs43IXb7x6FXmBOwaDLhIDZ4A8tPKmmFSwzTf4e1FoSyX4HKbZNJ3Cv3EA_8jEQw';
