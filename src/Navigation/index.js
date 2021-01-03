import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authentified from './Authenticated';
import UnAuthenticated from './UnAuthenticated';
import {Theme} from '../theme';
import {authContext} from '../App';
import {Provider as PaperProvider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  screens: {
    signin: '/signin',
    signup: '/signup',
    entry: '/',
    home: '/home',
    addobject: '/addobject',
    viewobject: '/object',
    profile: '/profile',
  },
};

const linking = {
  prefixes: ['http://localhost:3000', 'lost://'],
  config,
};

const Navigator = () => {
  var [token, setToken] = useContext(authContext);

  const updateToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@access_token');
      if (value !== null) {
        // value previously stored
        setToken(value);
      } else {
        setToken(null);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    updateToken(token, setToken);
  }, [token]);

  return (
    <NavigationContainer linking={linking} theme={Theme}>
      <PaperProvider theme={Theme}>
        {token ? <Authentified /> : <UnAuthenticated />}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Navigator;
