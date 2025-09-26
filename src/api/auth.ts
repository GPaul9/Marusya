import { apiClient } from './apiClient';
import { LoginData, RegisterData, User } from '@/types';

export const loginRequest = async ( loginData: LoginData) => {
  const res = await apiClient.post('/auth/login', loginData, {
    withCredentials: true,
  });
  return res.data;
};

export const logoutRequest = async () => {
  await apiClient.get('/auth/logout', {
    withCredentials: true,
  });
};

export const profileRequest = async (): Promise<User> => {
  const res = await apiClient.get('/profile', {
    withCredentials: true,
  });
  return res.data;
};

export const registerRequest = async (registerData: RegisterData) => {
  const res = await apiClient.post('/user', registerData, {
    withCredentials: true,
  });
  return res.data;
};
