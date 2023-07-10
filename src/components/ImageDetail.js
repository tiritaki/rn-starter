import { View, Text, StyleSheet, View } from "react-native";

const ImageDetail = (props) => {
    return (
        <View>
        <Image source = {require('../../assets/beach.jpg')} />
        <Text>{props.title}</Text>
        </View>
}

const styles = StyleSheet.create ({})

export default ImageDetail