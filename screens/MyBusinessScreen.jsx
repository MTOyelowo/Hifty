import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  Image,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import business from "../data/business";
import MyBusinessItem from "../components/MyBusinessItem";
import * as ImagePicker from "expo-image-picker";

const MyBusinessScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [twitter, setTwitter] = useState("");

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
      <View style={styles.profile}>
        <Text style={styles.header}>My Profile</Text>
      </View>
      <View>
        <Text style={styles.header}>My Businesses</Text>
        <MyBusinessItem business={business} />
      </View>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.addBusiness}
      >
        <MaterialIcons name="add-business" size={30} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "700", fontFamily: "serif" }}>
          Add a Business
        </Text>
      </Pressable>
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
            <TextInput
              placeholder="Business Name"
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />
            <TextInput
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter WhatsApp Business Number"
              value={whatsapp}
              onChangeText={setWhatsapp}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter Twitter Handle"
              value={twitter}
              onChangeText={setTwitter}
              style={styles.input}
            />
            <Pressable onPress={pickImage}>
              <Text
                style={{
                  color: "#2093FF",
                  fontSize: 17,
                  fontWeight: "600",
                  padding: 10,
                }}
              >
                Add your brand image
              </Text>
            </Pressable>
            {imageUri && (
              <>
                <Image source={{ uri: imageUri }} style={styles.image} />

                <Pressable
                  style={styles.orderBtn}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.modalText}>Create Business</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyBusinessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
  },
  profile: {
    height: "25%",
    borderBottomWidth: 0.5,
    borderBottomColor: "gainsboro",
  },
  addBusiness: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 2,
    borderRadius: 50,
    padding: 7.5,
    backgroundColor: "#00ACEE",
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
