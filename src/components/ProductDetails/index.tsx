import React from 'react';
import {View, Image, Text} from 'react-native';

import Button from '../Button';
import styles from './style';

interface Props {
  uri: string;
  title: string;
  description: string;
  value: string;
}

const ProductsDetails = ({uri, title, description, value}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri,
        }}
        style={styles.Image}
      />
      <View style={styles.titlePosition}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
      <Button name="Add to cart" />
    </View>
  );
};

export default ProductsDetails;
