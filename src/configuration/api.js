import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import Snackbar from 'react-native-snackbar';
const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@access_token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    config.paramsSerializer = (params) => {
      return Object.entries(Object.assign({}, params))
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    };

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  async function (error) {
    // Do something with response error
    console.log(error);
    if (401 === error.response.status) {
      console.log(error);
      await AsyncStorage.removeItem('@access_token');
    } else if (412 === error.response.status) {
      console.log(error.response.data.data.errors);
      const {errors} = error.response.data.data;
      for (error in errors) {
        for (err in errors[error]) {
          Snackbar.show({
            text: errors[error][err],
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      }
    } else if (404 === error.response.status) {
      console.log(error.response.data.data.errors);
      const {errors} = error.response.data.data;
      Snackbar.show({
        text: 'Not found',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  },
);

export default instance;
