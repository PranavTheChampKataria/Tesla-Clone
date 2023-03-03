import React, {Component} from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import styles from './styles';
import cars from './cars'
import CarItems from '../CarItems'

const CarsList = (props) => {

  return (
   <View style={styles.container}>
    <FlatList
    data={cars}
    renderItem={({item})=><CarItems car={item}/>}
    snapToAlignment={'start'}
    snapToInterval={Dimensions.get('window').height}
    decelerationRate='fast'
    showsVerticalScrollIndicator={false}
    />
    </View>
  )
}
export default CarsList;