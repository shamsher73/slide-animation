import React from 'react';
import { Dimensions, Text, Image } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Colors from '../constants/Colors';
import { styles } from './ProductStyles';
const { width } = Dimensions.get('window');

const Product = ({ index, translateX, productItem }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const cardStyle = useAnimatedStyle(() => {
    const opacityCard = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const rotateZ = interpolate(
      translateX.value,
      inputRange,
      [30, 0, -30],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ rotateZ: rotateZ+'deg' }],
      opacity: opacityCard,
    }
  });

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: Colors[index%3] },
        cardStyle
      ]}
    >
      <Animated.View style={[rStyle]}>
        <Image source={require('./../assets/headphone.png')} style={styles.image} />
      </Animated.View>
      <Animated.View style={[styles.textContainer, rTextStyle]}>
        <Text style={styles.text}>{productItem.title}</Text>
        <Text style={styles.subText}>{productItem.description}</Text>
      </Animated.View>
    </Animated.View>
  );
};

export { Product };
