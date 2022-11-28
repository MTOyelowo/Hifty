import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { useNhostClient } from "@nhost/react";
//import RemoteImage from "./RemoteImage";

const Product = (props) => {
  const { id, title, image, sellingPrice } = props.product;
  const [ratio, setRatio] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const onLike = () => {};

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const goToProductPage = () => {
    //navigation.navigate("Pin", { id });
  };

  return (
    <View style={styles.pin}>
      <View>
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.heartBtn}
        >
          <AntDesign name="eye" size={16} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.price}>{sellingPrice}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={{ uri: image }}
              style={[styles.image, { aspectRatio: ratio }]}
            />
            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="eye-off-outline" size={30} color="white" />
            </Pressable>
            <Pressable
              style={styles.orderBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalText}>Place Order</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  image: {
    width: "100%",
    borderRadius: 25,
  },
  heartBtn: {
    backgroundColor: "#EBEBEB",
    position: "absolute",
    bottom: 12.5,
    right: 12.5,
    borderRadius: 50,
    padding: 7.5,
  },
  closeBtn: {
    backgroundColor: "#660708",
    position: "absolute",
    top: 12.5,
    right: 12.5,
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
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

export default Product;
