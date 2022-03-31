import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from "react-native-reanimated";
import SpecsSvg from "./SpecsSvg";
import {View, Text, Pressable} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./ProductStyles";

const ProductModal = ({expandOffset,productItem}) => {
    const expandStyle = useAnimatedStyle(() => {
        const height = interpolate(
          expandOffset.value,
          [0, 1],
          [0, 95],
          Extrapolate.CLAMP
        );
        const width = interpolate(
          expandOffset.value,
          [0, 1],
          [0, 100],
          Extrapolate.CLAMP
        );
        return {
          height: height + "%",
          width: width + "%",
        };
      });

    return (
        <Animated.View
          style={[
            styles.productModalContainer,
            expandStyle,
          ]}
        >
          <SpecsSvg expandOffset={expandOffset}/>
          <View style={{position:"absolute", alignSelf:"center", top:"60%", padding:30}}>
            <Text style={{color:"white"}}>{productItem.description}</Text>
          </View>
          <Animated.View
            style={styles.productModalButton}
          >
            <Pressable
              onPress={() => {
                expandOffset.value = withSpring(0);
              }}
            >
              <View style={{padding:10}}>
              <AntDesign name="close" size={24} color="black" />
              </View>
            </Pressable>
          </Animated.View>
        </Animated.View>
  
    )
}

export default ProductModal;