import {View, Text, StyleSheet, TextInput} from 'react-native'
import { useState } from 'react'


const TextScreen = () => {

    const [name, setName] = useState('')

    return (
        <View>
             <Text> Enter Name</Text>
            <TextInput style = {styles.input} autoCapitalize='none' autoCorrect = {false} value = {name} onChangeText={(newValue) => setName(newValue)}></TextInput>
            <Text>My name is {name}</Text>
            {name.length < 4 ? <Text>Please enter at least 4 char </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create ({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen