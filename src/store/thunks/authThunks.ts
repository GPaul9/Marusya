import { loginRequest, logoutRequest, profileRequest, registerRequest } from '@/api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout } from '../slices/authSlice';
import { LoginData, RegisterData, User } from '@/types';
import { handleThunkError } from '@/utils/handleThunkError';

export const loginUser = createAsyncThunk<
  User,
  LoginData,
  { rejectValue: { error: string } }
>(
  'auth/loginUser',
  async (loginData: LoginData, { dispatch, rejectWithValue }) => {
    try {
      await loginRequest(loginData);
      const profile: User = await profileRequest();
      dispatch(login(profile));
      return profile;
    } catch (err) {
      return handleThunkError(err, rejectWithValue);
    }
  }
);

export const logoutUser = createAsyncThunk<
  void,
  void,
  { rejectValue: { error: string } }
>(
  'auth/logoutUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await logoutRequest();
      dispatch(logout());
    } catch (err) {
      return handleThunkError(err, rejectWithValue);
    }
  }
);

export const registerUser = createAsyncThunk<
  void,
  RegisterData,
  { rejectValue: { error: string } }
>(
  'auth/registerUser',
  async (registerData: RegisterData, { rejectWithValue }) => {
    try {
      await registerRequest(registerData);
    } catch (err) {
      return handleThunkError(err, rejectWithValue);
    }
  }
);

export const profileUser = createAsyncThunk<User>(
  'auth/profileUser',
  async () => {
    return await profileRequest();
  }
);
