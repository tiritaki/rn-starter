import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: "Age 20" },
    { name: "Friend 2", age: "Age 40" },
    { name: "Friend 3", age: "Age 60" },
    { name: "Friend 4", age: "Age 80" },
    { name: "Friend 5", age: "Age 100" },
    { name: "Friend 6", age: "Age 120" },
    { name: "Friend 7", age: "Age 140" },
    { name: "Friend 8", age: "Age 160" },
    { name: "Friend 9", age: "Age 180" },
  ];

  return (
    <FlatList
      // horizontal
      showsHorizontalScrollIndicator = {false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style = {style.textStyle}>{item.name} - {item.age}</Text>;
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
