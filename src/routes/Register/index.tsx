import React from 'react';
import {View} from 'react-native';

import Input from '../../components/Input';
import Buttons from '../../components/Button';

import styles from './style';

const Register = () => {
  return (
    <View style={styles.container}>
      <Input icon="human-handsup" placeholder="Name" onChangeText={() => {}} />
      <Input icon="email" placeholder="Email address" onChangeText={() => {}} />
      <Input icon="key" placeholder="password" onChangeText={() => {}} />

      <Buttons name="Register" />
    </View>
  );
};

export default Register;
