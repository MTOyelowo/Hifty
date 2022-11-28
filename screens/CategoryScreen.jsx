import { StyleSheet, Text, View } from "react-native";
import React from "react";
import categories from "../data/categories";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation, useRoute } from "@react-navigation/native";
import MasonryList from "../components/MasonryList";

const CategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);

  const categoryId = route.params?.id;

  const category = categories.find((c) => c.id === categoryId);
  return (
    <View style={styles.container}>
      <View style={[styles.banner, { backgroundColor: category.color }]}>
        <MaterialCommunityIcons
          name={category.icon}
          size={50}
          color="white"
          style={styles.categoryIcon}
        />
        <Text style={styles.categoryName}>{category.name}</Text>
      </View>
      <Pressable
        style={{ position: "absolute", top: 4, left: 10 }}
        onPress={navigation.goBack}
      >
        <Ionicons name="md-return-down-back-outline" size={35} color="white" />
      </Pressable>
      <View style={styles.overview}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            letterSpacing: 2,
            fontFamily: "serif",
          }}
        >
          Overview
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontStyle: "italic",
            letterSpacing: 1,
            fontFamily: "serif",
          }}
        >
          {category.overview}
        </Text>
      </View>
      {category.businesses.length ? (
        <MasonryList businesses={category.businesses} />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            padding: 4,
            fontFamily: "serif",
          }}
        >
          No Vendors Available Yet
        </Text>
      )}
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  banner: {
    height: "25%",
    justifyContent: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  categoryName: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "700",
    letterSpacing: 2,
    fontFamily: "serif",
    color: "white",
  },
  categoryIcon: {
    alignSelf: "center",
  },
  overview: {
    padding: 4,
  },
});
