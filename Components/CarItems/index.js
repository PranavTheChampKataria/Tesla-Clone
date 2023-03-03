import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import ButtonStyle from '../ButtonStyle';

const CarItems = (props) => {

  const {name, tagline, taglineCTA, image}=props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image}
        style={styles.image}></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline} {' '}
        <Text style={styles.subtitleCTA}>{taglineCTA}
        </Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonStyle type='primary'
          content={'cutomer order'}
          onPress={() => console.warn('Cutomer Order was pressed')} />
        <ButtonStyle type='secondary'
          content={'existing inventory'}
          onPress={() => console.warn('Existing Inventory was pressed')} />
      </View>
    </View>

  )
}
export default CarItems;