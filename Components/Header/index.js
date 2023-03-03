import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import styles from './styles';


const Header = (props) => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')}
      style={styles.logo}/>
      <Image source={require('../../assets/images/menu.png')}
      style={styles.menu}/>
    </View>
  )
}
export default Header;