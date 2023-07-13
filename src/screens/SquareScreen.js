import { useReducer } from "react";
import {View, Text, Button, StyleSheet} from 'react-native'
import ColourCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
      switch (action.colorToChange) {
        case 'red': 
            return {...state, red: state.red + action.amount }
        case 'green':
            return {...state, green: state.green + action.amount }
        case 'blue' :
            return {...state, blue: state.blue + action.amount }
        default: 
            return state
      }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer (reducer, {red: 0, green: 0, blue: 0})

    const {red, green, blue} = state

    return (
        <View>
            <ColourCounter onIncrease = {() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})} onDecrease= {() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})} color = 'Red' />
            <ColourCounter onIncrease = {() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})} onDecrease= {() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})} color = 'Green'/>
            <ColourCounter onIncrease = {() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})} onDecrease= {() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})} color = 'Blue'/>
            <View style = {{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    )
}

const styles = StyleSheet.create ({})

export default SquareScreen