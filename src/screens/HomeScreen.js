import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
  <View>
  <Text style={styles.text}>HomeMyScreen</Text>
  
  <Button title="Go to Components Demo" onPress={() => navigation.navigate('Components')}></Button>

  <Button title = 'Go to List Demo' onPress={() => navigation.navigate('List')}></Button>

  <TouchableOpacity onPress={() => navigation.navigate('List')}>
  <Text>Go to the List Demo</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Images')}>
  <Text>This is a list of images</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
  <Text>Counter Demo</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Color')}>
  <Text>Add Color</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Square')}>
  <Text>Square Screen</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Text')}>
  <Text>Text Screen</Text>
  </TouchableOpacity>

  </View>
)};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
