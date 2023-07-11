import { View, Text, StyleSheet, Button } from "react-native";
import {useState} from 'react';

const CounterScreen = () => {

  const [counter, setCounter] = useState (0);

  return (
    <View>
      <Button title="Increase" onPress={() => {setCounter(counter + 1)}}></Button>
      
      <Button title="Descrease" onPress={() => {setCounter(counter - 1)}}></Button>

      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
