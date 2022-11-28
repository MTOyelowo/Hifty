import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BusinessItem = ({ business }) => {
  const navigation = useNavigation();

  const goToBusinessPage = () => {
    navigation.navigate("Business");
  };

  return (
    <Pressable onPress={goToBusinessPage} style={styles.container}>
      <View>
        <Image
          source={{
            uri: business.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{business.name}</Text>
      </View>
    </Pressable>
  );
};

export default BusinessItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 200,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  nameContainer: {
    backgroundColor: "white",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 2,
    width: 100,
    height: 40,
    borderRadius: 15,
    shadowColor: "#D15859",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#D15859",
  },
});
