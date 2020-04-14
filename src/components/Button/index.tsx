/* eslint-disable no-sparse-arrays */
import React, {useEffect} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

import style from './style';

interface Props {
  name: string;
  onPress?: () => void;
}

const Button = ({name, onPress = () => {}}: Props) => {
  const fade = new Animated.Value(0);
  useEffect(() => {
    Animated.spring(fade, {
      toValue: 1,
      speed: 1,
      bounciness: 0,
      useNativeDriver: false,
    }).start();
  });

  const animation = {
    login: [
      style.buttonLogin,
      {
        transform: [
          {
            translateX: fade.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 80],
            }),
          },
        ],
      },
      ,
    ],
    register: [
      style.buttonRegister,
      {
        transform: [
          {
            translateX: fade.interpolate({
              inputRange: [0, 1],
              outputRange: [300, 0],
            }),
          },
        ],
      },
    ],
    cart: style.buttonCart,
  };
  const animationButton =
    name === 'Register'
      ? animation.register
      : null || name === 'Login'
      ? animation.login
      : null || name === 'Add to cart'
      ? animation.cart
      : null;

  return (
    <View style={style.container}>
      <Animated.View style={animationButton}>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={name === 'Register' ? style.textRegister : style.textLogin}
          >
            {name}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
export default Button;
