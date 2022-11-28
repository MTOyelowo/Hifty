import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import business from "../data/business";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import Product from "../components/Product";

const BusinessScreen = () => {
  const navigation = useNavigation();
  console.log(business.offerings);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: business.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <View style={styles.details}>
        <Text style={styles.businessName}>{business.name}</Text>
        <Text style={styles.location}>{business.location}</Text>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <Pressable style={styles.socials}>
            <FontAwesome name="whatsapp" size={25} color="#25D366" />
          </Pressable>
          <Pressable style={styles.socials}>
            <FontAwesome name="twitter" size={25} color="#00ACEE" />
          </Pressable>
          <Pressable style={styles.socials}>
            <Fontisto name="shopping-bag" size={25} color="#004E98" />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={{
          position: "absolute",
          top: 4,
          left: 5,
          backgroundColor: "#EBEBEB",
          padding: 5,
          borderRadius: 25,
        }}
        onPress={navigation.goBack}
      >
        <Ionicons name="md-return-down-back-outline" size={35} color="black" />
      </Pressable>
      <View style={{ paddingTop: 10, flexDirection: "row", paddingLeft: 5 }}>
        <MaterialIcons name="local-offer" size={40} color="black" />
        <Text style={styles.offerings}>Offerings</Text>
      </View>
      <ScrollView>
        <View style={styles.offeringsContainer}>
          <View style={{ flex: 1 }}>
            {business.products
              .filter((item, index) => index % 2 === 0)
              .map((product) => (
                <Product product={product} />
              ))}
          </View>
          <View style={{ flex: 1 }}>
            {business.products
              .filter((item, index) => index % 2 === 1)
              .map((product) => (
                <Product product={product} />
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BusinessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  offeringsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  details: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "gainsboro",
  },
  businessName: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
    fontFamily: "serif",
    padding: 5,
  },
  location: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2,
    fontFamily: "serif",
  },
  categoryIcon: {
    alignSelf: "center",
  },
  overview: {
    padding: 4,
  },
  socials: {
    padding: 7,
  },
  offerings: {
    fontSize: 26,
    padding: 5,
    paddingLeft: 15,

    fontWeight: "bold",
    fontFamily: "serif",
  },
});
