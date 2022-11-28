import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Category = (props) => {
  const navigation = useNavigation();

  const goToCategoryPage = () => {
    navigation.navigate("Category", { id });
  };

  const { id, icon, name } = props.category;
  return (
    <View style={{ width: 80 }} key={id}>
      <Pressable style={styles.categoryContainer} onPress={goToCategoryPage}>
        <MaterialCommunityIcons name={icon} size={30} color="#672523" />
        <Text style={styles.categoryName}>{name}</Text>
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categories: {
    fontWeight: "700",
    fontSize: 20,
    color: "#672523",
    letterSpacing: 1.5,
    paddingLeft: 5,
  },
  categoryContainer: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryName: {
    color: "#D15859",
  },
});
