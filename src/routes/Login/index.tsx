import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import Input from '../../components/Input';
import Buttons from '../../components/Button';

import styles from './style';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#526d74" />
      <Text style={styles.text}>Login</Text>

      <Input icon="email" placeholder="Email address" onChangeText={() => {}} />
      <Input icon="key" placeholder="password" onChangeText={() => {}} />
      <Buttons name="Login" onPress={() => navigation.navigate('Home')} />
      <Buttons
        name="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;
