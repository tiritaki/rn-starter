import { useState } from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

const ColourCounter = ({color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
        </View>
    )
}

const styles = StyleSheet.create ({})

export default ColourCounter