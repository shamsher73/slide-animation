import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Product } from './components/Product';
import Products from './constants/Products';

export default function App() {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
    >
      {Products.map((productItem, index) => {
        return (
          <Product
            key={index.toString()}
            productItem={productItem}
            translateX={translateX}
            index={index}
          />
        );
      })}
    </Animated.ScrollView>
  );
}
