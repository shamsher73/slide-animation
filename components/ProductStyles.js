import {StyleSheet,Dimensions} from "react-native";

const { height, width } = Dimensions.get('window');
const SIZE = width * 0.7;

export const styles = StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
      opacity:1,
      justifyContent: 'center',
      transform: [{ rotateZ: '0deg' }],
    },
    image:{
        height:SIZE,
        width:SIZE,
        shadowColor:"#ffffff",
        shadowRadius:10,
        shadowOpacity:1
    },
    square: {
      width: SIZE,
      height: SIZE,
      backgroundColor: 'rgba(0, 0, 256, 0.4)',
    },
    text: {
      marginTop:30,
      fontSize: 26,
      color: 'black',
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    subText: {
      marginTop:20,
      paddingLeft:50,
      paddingRight:50,
      color: 'black',
    },
    textContainer: { 
      alignItems: 'center',
      position: 'relative',
    },
    productContainer: {
      position:"absolute", 
      alignItems:"center", 
      marginTop:"50%"
    }
  });
  