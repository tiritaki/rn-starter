import {Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textOneStyle}> Child 1</Text>
            <Text style = {styles.textTwoStyle}> This is my BoxScreen</Text>
            <Text style = {styles.textThreeStyle}> Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    viewStyle : {
        borderWidth : 5,
        borderColor : 'black',
        alignItems: 'flex-start', 
        // flexDirection: 'row',
        height : 200,
        // justifyContent: 'space-around',

    },
    textOneStyle: {
        borderWidth : 3,
        borderColor : 'red',
        // flex: 1
    },
    textTwoStyle: {
        borderWidth : 3,
        borderColor : 'red',
        // flex: 1,
        alignSelf: 'center'
    },
    textThreeStyle: {
        borderWidth : 3,
        borderColor : 'red',
        // flex: 1
    }
})

export default BoxScreen