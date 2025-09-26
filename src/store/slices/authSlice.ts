import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types';
import { profileUser } from '../thunks/authThunks';

type AuthState = {
  user: User | null;
  isAuth: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  authModalOpen: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuth: false,
  status: 'idle',
  authModalOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuth = true;
      state.authModalOpen = false;
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    openAuthModal(state) {
      state.authModalOpen = true;
    },
    closeAuthModal(state) {
      state.authModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // profile
      .addCase(profileUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(profileUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(profileUser.rejected, (state) => {
        state.status = 'failed';
        state.user = null;
        state.isAuth = false;
      })
  }
});

export const { login, logout, updateUser, openAuthModal, closeAuthModal } = authSlice.actions;
export default authSlice.reducer;
