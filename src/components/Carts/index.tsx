import React from 'react';

import {View, Text, Image} from 'react-native';

import styles from './style';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';

interface Props {
  amount: string;
  description: string;
  onPress?: () => void;
  title: string;
  uri: string;
  value: string;
}
const Cart = ({
  amount,
  description,
  onPress = () => {},
  title,
  uri,
  value,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.Image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <TextInput style={styles.amount} value={amount} />
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
