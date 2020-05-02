import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../routes/Login';
import Register from '../routes/Register';

import Home from './home';
const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'The Best Shop',
            headerStyle: {
              elevation: 9,
              height: 90,
              backgroundColor: '#526d74',
            },
            headerTitleStyle: {
              fontFamily: 'serif',
              fontSize: 30,
              fontWeight: 'bold',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerStyle: {
              elevation: 9,
              height: 90,
              backgroundColor: '#526d74',
            },
            headerTitleStyle: {
              fontFamily: 'serif',
              fontSize: 30,
              fontWeight: 'bold',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              elevation: 9,
              height: 90,
              backgroundColor: '#526d74',
            },
            headerTitleStyle: {
              fontFamily: 'serif',
              fontSize: 30,
              fontWeight: 'bold',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
