import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

interface Props {
  icon: string;
  placeholder: string;
  onChangeText: () => void;
}

const Input = ({icon, placeholder, onChangeText}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} color="#00838a" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
