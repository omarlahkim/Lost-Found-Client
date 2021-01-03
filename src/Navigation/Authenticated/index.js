import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
//screens
import Home from '../../screens/Authentified/Home';
import AddObject from '../../screens/Authentified/AddObject';
import ViewObject from '../../screens/Authentified/ViewObject';
import Profile from '../../screens/Authentified/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        options={{headerShown: false}}
        name="home"
        component={Home}
      />
      <Stack.Screen name="object" component={ViewObject} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="profile">
      <Stack.Screen
        options={{headerShown: false}}
        name="profile"
        component={Profile}
      />
      <Stack.Screen name="object" component={ViewObject} />
    </Stack.Navigator>
  );
};

const Authentified = () => {
  return (
    <Tab.Navigator initialRouteName="addobject">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="plus" color={color} size={size} />
          ),
        }}
        name="report"
        component={AddObject}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default Authentified;
