import React from "react";
import Animated, {
  useSharedValue,
} from "react-native-reanimated";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductCard";

const Product = ({ index, translateX, productItem }) => {
  const expandOffset = useSharedValue(0);
  return (
    <Animated.View>
        <ProductCard index={index} translateX={translateX} productItem={productItem} expandOffset={expandOffset}/>
        <ProductModal expandOffset={expandOffset} productItem={productItem}/>
    </Animated.View>
  );
};

export { Product };
