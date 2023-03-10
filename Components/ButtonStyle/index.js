import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';


const ButtonStyle = (props) => {

    // const type = props.type;
    // const onPress=props.onPress;
    // const content = props.content;
    const {type,content,onPress}=props
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}>
                <Text style={[styles.text,{color:textColor}]}>{content}</Text></Pressable>
        </View>
    )
}
export default ButtonStyle;