import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, SignInWithGoogle } from '../../DB/firebase';

const initialState = {
  value: {
    info: '',
    error: '',
  },
};

export const authLogin = createAsyncThunk(
  'user/authLogin',
  async (dispatch, getState) => {
    return await SignInWithGoogle();
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
  extraReducers: {
    [authLogin.pending]: (state, action) => {
      state.value.info = 'loading';
    },
    [authLogin.fulfilled]: (state, { payload }) => {
      state.value.info = payload;
      state.value.error = '';
    },
    [authLogin.rejected]: (state, { payload }) => {
      state.value.info = "";
      state.value.error = "failed";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
