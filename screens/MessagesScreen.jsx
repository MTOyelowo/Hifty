import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const categories = [
  {
    id: "11",
    name: "African Fashion",
    icon: "star-circle-outline",
  },
  {
    id: "12",
    name: "Agric Products",
    icon: "grain",
  },
  {
    id: "13",
    name: "Catering",
    icon: "cake-variant-outline",
  },
  {
    id: "14",
    name: "Clothings",
    icon: "tshirt-crew-outline",
  },
  {
    id: "15",
    name: "Resturants",
    icon: "food",
  },
  {
    id: "16",
    name: "Groceries",
    icon: "cart-variant",
  },
  {
    id: "17",
    name: "Health Care",
    icon: "plus-box",
  },
  {
    id: "18",
    name: "Show Makers",
    icon: "shoe-sneaker",
  },
];

const MessagesScreen = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({ item }) => (
          <Pressable>
            <MaterialCommunityIcons
              name={item.icon}
              size={30}
              color="#672523"
            />
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
