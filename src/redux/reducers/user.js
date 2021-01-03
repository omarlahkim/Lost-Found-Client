import React, {useCallback, useContext} from 'react';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {signIn, getUser} from '../../Helpers/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (userid, thunkAPI) => {
    await getUser(userid, async (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      global.usertemp = response.data.data;
    });
    return global.usertemp;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    actualuser: {},
    tempuser: {username: '', email: '', role: '', profile_picture: ''},
    users: {},
    token: null,
  },
  // reducers actions
  reducers: {
    signin: {
      reducer(state, {payload}) {
        const {username, password} = payload;
        signIn(username, password, async (error, response) => {
          if (error) {
            await console.log(error);
          } else {
            try {
              await AsyncStorage.setItem('@access_token', response.token);
            } catch (e) {
              // saving error
              console.log(e);
            }
          }
        });
      },
    },
  },
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      state.tempuser = action.payload;
    },
  },
});

const {actions, reducer} = userSlice;
export const {signin} = actions;
export default reducer;
