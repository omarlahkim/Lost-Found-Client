import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//screens
import Entry from '../../screens/UnAuthentified/Entry';
import Register from '../../screens/UnAuthentified/Register';
import Login from '../../screens/UnAuthentified/Login';

const UnAuthenticated = () => {
  return (
    <Stack.Navigator initialRouteName="entry">
      <Stack.Screen
        options={{headerShown: false}}
        name="entry"
        component={Entry}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="signup"
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="signin"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticated;
