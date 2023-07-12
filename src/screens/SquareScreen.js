import { useState } from "react";
import {View, Text, Button, StyleSheet} from 'react-native'
import ColourCounter from "../components/ColorCounter";

const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View>
            <ColourCounter onIncrease = {() => setRed(red + 50)} onDecrease = {() => setRed(red - 50)} color = 'Red' />
            <ColourCounter onIncrease = {() => setGreen(green + 50)} onDecrease = {() => setGreen(green - 50)} color = 'Green'/>
            <ColourCounter onIncrease = {() => setBlue(blue + 50)} onDecrease = {() => setBlue(blue - 50)} color = 'Blue'/>
            <View style = {{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    )
}

const styles = StyleSheet.create ({})

export default SquareScreen