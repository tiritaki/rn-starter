import { Text, StyleSheet, View } from "react-native";



const ComponentsScreen = () => {
    const oleh = <Text style = {style.subHeaderStyle}> This is Oleh </Text>
    return (
        <View>
       <Text style = {style.headerStyle}> This is my text for ComponentsScreen </Text>
        {oleh}
       </View>
    )
}

const style = StyleSheet.create ({
    headerStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 10
    }
}
)

export default  ComponentsScreen