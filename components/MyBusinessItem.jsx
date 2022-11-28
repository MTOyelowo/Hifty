import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyBusinessItem = (props) => {
  const navigation = useNavigation();

  const goToMyBusinessPage = () => {
    navigation.navigate("MyBusinessPage");
  };

  const { id, image, name } = props.business;
  return (
    <Pressable onPress={goToMyBusinessPage} style={styles.businessItem}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.businessName}>{name}</Text>
    </Pressable>
  );
};

export default MyBusinessItem;

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  businessItem: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 7,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "gainsboro",
  },
  businessName: {
    padding: 10,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "serif",
  },
});
