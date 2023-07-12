import {View, StyleSheet, Button, FlatList} from 'react-native';
import {useState} from 'react';

const ColorScreen = () => {

    const [colors, setColors] = useState([])

    return (
        <View>
            <Button title = 'Add Color' onPress={() => {setColors([...colors, randomRgb()])}}></Button>
            <FlatList keyExtractor={(item) => item} data ={colors} renderItem = {({item}) => { return <View style = {{height: 100, width:100, backgroundColor: item}}></View>}} />
        </View>
    )
}
 
const randomRgb = () => {
    const red = Math.floor(Math.random () * 256)
    const green = Math.floor(Math.random () * 256)
    const blue = Math.floor(Math.random () * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create ({})

export default ColorScreen