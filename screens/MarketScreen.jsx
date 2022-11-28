import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import featuredBusinesses from "../data/featuredBusinesses";
import Slider from "../components/Slider";
import BusinessItem from "../components/BusinessItem";
import populars from "../data/populars";
import categories from "../data/categories";
import Category from "../components/Category";

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      {/*Header-- Profile Image and Search Bar*/}
      <View style={styles.topContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="reorder-three-outline" size={40} color="#672523" />
          <View style={styles.searchContainer}>
            <View style={styles.searchInner}>
              <Ionicons
                name="ios-search-outline"
                size={20}
                color="#672523"
                style={{ padding: 5 }}
              />
              <TextInput
                placeholder="Search Market"
                keyboardType="default"
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#D15859" }}>
          <Slider
            data={featuredBusinesses}
            title="Top Businesses of the Week"
          />
        </View>
        <View style={{ paddingTop: 5 }}>
          <Text style={styles.categories}>Categories</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {categories.map((category) => (
              <View key={category.id}>
                <Category category={category} />
              </View>
            ))}
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
                paddingLeft: 10,
              }}
            >
              <Ionicons
                name="ios-star-half-outline"
                size={30}
                color="#672523"
              />
              <Text
                style={{
                  color: "#672523",
                  fontSize: 20,
                  fontWeight: "700",
                  paddingLeft: 20,
                  letterSpacing: 1.5,
                }}
              >
                Popular
              </Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={populars}
              renderItem={({ item }) => <BusinessItem business={item} />}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#672523",
                padding: 10,
                paddingTop: 20,
              }}
            >
              History
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D15859",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    marginHorizontal: 8,
    width: "73%",
  },
  searchInner: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingLeft: 8,
    backgroundColor: "#F1D8D7",
    padding: 1,
    borderRadius: 50,
  },
  textInput: {
    color: "black",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
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
