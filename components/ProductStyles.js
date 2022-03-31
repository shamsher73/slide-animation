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
    },
    button: {
      bottom: 80,
      alignSelf: "center",
      backgroundColor: "#000000",
      padding: 10,
      borderRadius: 30,
    },
    productModalContainer: {
      position: "absolute",
      bottom: 0,
      alignSelf: "center",
      backgroundColor: "#4a4a4a",
      height: "0%",
      width: "10%",
      borderRadius: 30,
    },
    productModalButton:
    {
      position: "absolute",
      alignSelf: "center",
      backgroundColor: "#ffffff",
      top: "90%",
      borderRadius: 30,
    }
  });
  