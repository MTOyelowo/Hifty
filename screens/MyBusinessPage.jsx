import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import business from "../data/business";
import Product from "../components/Product";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const MyBusinessPage = () => {
  const [imageUri, setImageUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const onSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.myProducts}>My Products</Text>
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
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: "#3A6EA5",
            bottom: 2,
            borderRadius: 50,
            padding: 7.5,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: 200,
          }}
        >
          <Ionicons name="image-outline" size={30} color="white" />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 10,
              fontWeight: "700",
              fontFamily: "serif",
              color: "white",
            }}
          >
            Add Product
          </Text>
        </Pressable>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="close-outline" size={30} color="black" />
            </Pressable>
            <Pressable onPress={pickImage}>
              <Text
                style={{
                  color: "#2093FF",
                  fontSize: 17,
                  fontWeight: "600",
                  padding: 10,
                }}
              >
                Add Product Image
              </Text>
            </Pressable>
            {imageUri && (
              <>
                <Image source={{ uri: imageUri }} style={styles.image} />

                <TextInput
                  placeholder="Product Title"
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Set Price"
                  value={price}
                  onChangeText={setPrice}
                  style={styles.input}
                />

                <Pressable
                  style={styles.orderBtn}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.modalText}>Add Product</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyBusinessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  myProducts: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "serif",
  },
  offeringsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    width: "90%",
    fontSize: 16,
    borderRadius: 5,
    margin: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "serif",
    padding: 10,
  },
  closeBtn: {
    paddingBotton: 5,
    alignSelf: "flex-end",
    borderRadius: 50,
    padding: 7.5,
  },
  orderBtn: {
    backgroundColor: "#EEEBEB",
    position: "absolute",
    bottom: 2,
    borderRadius: 50,
    padding: 7.5,
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "700",
    margin: 5,
    fontFamily: "serif",
    color: "#181818",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 5,
    fontFamily: "serif",
    color: "#181818",
  },
  centeredView: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",

    borderColor: "gainsboro",
    borderRadius: 15,
  },
  modalView: {
    flex: 1,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  image: {
    width: "80%",
    aspectRatio: 1 / 1,
    marginBottom: 10,
  },
  buttonClose: {
    backgroundColor: "#660708",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "#004E98",
    fontSize: 16,
    fontFamily: "serif",
    fontWeight: "700",
    padding: 3,
    textAlign: "center",
    alignItems: "center",
  },
});
