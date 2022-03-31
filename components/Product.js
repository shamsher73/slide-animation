import React from "react";
import { Dimensions, Text, Image, View, Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Colors from "../constants/Colors";
import { styles } from "./ProductStyles";
import { AntDesign } from "@expo/vector-icons";
import Svg, { Circle, Line, Text as SvgText, TSpan } from "react-native-svg";

const { width } = Dimensions.get("window");
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const Product = ({ index, translateX, productItem }) => {
  const [viewModal, setViewModal] = React.useState(true);
  const expandOffset = useSharedValue(0);


  const bassProps = useAnimatedProps(() => {
    const value = interpolate(
      expandOffset.value,
      [0, 1],
      [50, 10],
      Extrapolate.CLAMP
    );

      return {
        cy: 
        withTiming(value, {
          duration: 1000,
        }),
      }
  })

  const midsProps = useAnimatedProps(() => {
    const value = interpolate(
      expandOffset.value,
      [0, 1],
      [50, 5],
      Extrapolate.CLAMP
    );

      return {
        cy: 
        withTiming(value, {
          duration: 1000,
        }),
      }
  })

  const trebalProps = useAnimatedProps(() => {
    const value = interpolate(
      expandOffset.value,
      [0, 1],
      [50, 15],
      Extrapolate.CLAMP
    );

      return {
        cy: 
        withTiming(value, {
          duration: 1000,
        }),
      }
  })

  

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
      >
        
      </Animated.View>
   
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
          console.log("clicked");
        }}
      >
        <View
          style={{
            bottom: 80,
            alignSelf: "center",
            backgroundColor: "#000000",
            padding: 10,
            borderRadius: 30,
          }}
        >
          <AntDesign name="slack" size={24} color="white" />
        </View>
      </Pressable>

      {viewModal && (
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
             
              backgroundColor: "#4a4a4a",
              height: "0%",
              width: "10%",
              borderRadius: 30,
            },
            expandStyle,
          ]}
        >
           
          <View style={{position:"relative",marginTop:-300, padding:30 }}>
            <Svg height="100%" width="100%" viewBox="0 0 100 110">
        
              <AnimatedCircle
                cx="20"
                cy="50"
                r="3"
                stroke="#4a4a4a"
                strokeWidth="1"
                fill="white"
                animatedProps={bassProps}
              />
              <AnimatedCircle
                cx="50"
                cy="50"
                r="3"
                stroke="#4a4a4a"
                strokeWidth="1"
                fill="white"
                animatedProps={midsProps}
              />
              <AnimatedCircle
                cx="80"
                cy="50"
                r="3"
                stroke="#4a4a4a"
                strokeWidth="1"
                fill="white"
                animatedProps={trebalProps}
              />
              <Line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                stroke="white"
                strokeWidth="0.5"
              />
              <Line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="white"
                strokeWidth="0.5"
              />
              <Line
                x1="0"
                y1="100"
                x2="100"
                y2="100"
                stroke="white"
                strokeWidth="0.5"
              />
              <Line
                x1="20"
                y1="0"
                x2="20"
                y2="100"
                stroke="white"
                strokeWidth="1"
              />
              <Line
                x1="50"
                y1="0"
                x2="50"
                y2="100"
                stroke="white"
                strokeWidth="1"
              />
              <Line
                x1="80"
                y1="0"
                x2="80"
                y2="100"
                stroke="white"
                strokeWidth="1"
              />

              <SvgText
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="bold"
                x="20"
                y="110"
                textAnchor="middle"
              >
                BASS
              </SvgText>

              <SvgText
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="bold"
                x="50"
                y="110"
                textAnchor="middle"
              >
                MIDS
              </SvgText>

              <SvgText
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="bold"
                x="80"
                y="110"
                textAnchor="middle"
              >
                TREBLE
              </SvgText>
            </Svg>
          </View>
          <View style={{position:"absolute", alignSelf:"center", top:"60%"}}>
            <Text style={{color:"white"}}>this is product description</Text>
          </View>

         

          <Animated.View
            style={[
              {
                position: "absolute",
                alignSelf: "center",
                backgroundColor: "#ffffff",
                top: "90%",
                borderRadius: 30,
              },
            ]}
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
      )}
    </Animated.View>
  );
};

export { Product };
