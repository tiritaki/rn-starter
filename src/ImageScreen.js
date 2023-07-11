import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title = "Forest" imageSource = {require("..//assets/forest.jpg")} imageScore = '1'/>
      <ImageDetail title = "Beach" imageSource = {require('..//assets/beach.jpg')} imageScore = '2'/>
      <ImageDetail title = "Mountain" imageSource = {require('..//assets/mountain.jpg')} imageScore = '3'/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
