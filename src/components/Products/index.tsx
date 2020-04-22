import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from './style';

interface Props {
  description: string;
  onPress: () => void;
  title: string;
  uri: string;
  value: string;
}

const Product = ({
  description,
  onPress = () => {},
  title,
  uri,
  value,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri,
        }}
        style={styles.Image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.value}>R$: {value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
