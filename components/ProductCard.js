import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from "react-native-reanimated";
import Colors from "../constants/Colors";
import { styles } from "./ProductStyles";
import {Dimensions, Image, Text, Pressable, View} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const ProductCard = ({index,translateX,productItem, expandOffset}) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    const cardStyle = useAnimatedStyle(() => {
        const opacityCard = interpolate(
          translateX.value,
          inputRange,
          [0, 1, 0],
          Extrapolate.CLAMP
        );
        const rotateZ = interpolate(
          translateX.value,
          inputRange,
          [30, 0, -30],
          Extrapolate.CLAMP
        );
        return {
          transform: [{ rotateZ: rotateZ + "deg" }],
          opacity: opacityCard,
        };
      });

      const rStyle = useAnimatedStyle(() => {
        const scale = interpolate(
          translateX.value,
          inputRange,
          [0, 1, 0],
          Extrapolate.CLAMP
        );
        const opacityProduct = interpolate(
          translateX.value,
          inputRange,
          [-1, 1, -1],
          Extrapolate.CLAMP
        );
        return {
          transform: [{ scale }],
          opacity: opacityProduct,
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
    <Animated.View>
      <Animated.View
        style={[
          styles.container,
          { backgroundColor: Colors[index % 3] },
          cardStyle,
        ]}
      />
      <Animated.View style={styles.productContainer}>
        <Animated.View style={[rStyle]}>
          <Image
            source={require("./../assets/headphone.png")}
            style={styles.image}
          />
        </Animated.View>

        <Animated.View style={[styles.textContainer, rTextStyle]}>
          <Text style={styles.text}>{productItem.title}</Text>
          <Text style={styles.subText}>{productItem.description}</Text>
        </Animated.View>
      </Animated.View>

      <Pressable
        onPress={() => {
          expandOffset.value = withSpring(1);
        }}
      >
        <View style={styles.button}>
          <AntDesign name="slack" size={24} color="white" />
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default ProductCard;
