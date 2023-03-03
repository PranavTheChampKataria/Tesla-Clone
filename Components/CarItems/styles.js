import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '400',
      },
      subtitle: {
        fontSize: 16,
        color: 'grey',
      },
      subtitleCTA: {
        textDecorationLine:'underline'
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonsContainer:{
        width:'100%',
        bottom:50,
        position:'absolute'
      }
})

export default styles;