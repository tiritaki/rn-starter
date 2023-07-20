import {Text, View, StyleSheet, ImageBackground} from 'react-native'

const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <View style = {styles.viewOneStyle} />
            <View style = {styles.viewTwoStyle} />
            <View style = {styles.viewThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create ({
    viewStyle : {
        borderWidth : 5,
        borderColor : 'black',
        // alignItems: 'center', 
        flexDirection: 'row',
        height : 200,
        justifyContent: 'space-between',

    },
    viewOneStyle: {
        // borderWidth : 3,
        // borderColor : 'red',
        // flex: 1
        height : 100,
        width : 100,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        // borderWidth : 3,
        // borderColor : 'red',
        height : 100,
        width : 100,
        backgroundColor: 'green',
        // flex: 1,
        alignSelf: 'flex-end'
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // left: 0,
        // bottom: 0
        //...StyleSheet.absoluteFillObject
    },
    viewThreeStyle: {
        // borderWidth : 3,
        // borderColor : 'red',
        height : 100,
        width : 100,
        backgroundColor: 'violet'
        // flex: 1
    }
})

export default BoxScreen