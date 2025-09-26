import axios from 'axios';

const BASE_URL = 'https://cinemaguide.skillbox.cc';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
