import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MakePayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.makePayment}>
      <View style={[styles.makePaymentChild, styles.makeBg]} />
      <Text style={[styles.confirmPaymentDetails, styles.payNow1Typo]}>
        [ ] confirm payment details
      </Text>
      <View style={[styles.makePaymentItem, styles.makeBg]} />
      <Pressable
        style={styles.payNow}
        onPress={() => navigation.navigate("Succes")}
      >
        <Text style={[styles.payNow1, styles.payNow1Typo]}> Pay Now</Text>
      </Pressable>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  makeBg: {
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  payNow1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  makePaymentChild: {
    top: 68,
    left: 31,
    width: 312,
    height: 63,
  },
  confirmPaymentDetails: {
    top: 90,
    left: 50,
    color: "#f8eaea",
    width: 289,
    height: 39,
    position: "absolute",
  },
  makePaymentItem: {
    top: 143,
    left: 202,
    width: 129,
    height: 47,
  },
  payNow1: {
    color: Color.schemesOnPrimary,
    width: 103,
    height: 28,
  },
  payNow: {
    left: 214,
    top: 153,
    position: "absolute",
  },
  image1Icon: {
    top: 94,
    left: 53,
    width: 15,
    height: 15,
    position: "absolute",
  },
  makePayment: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MakePayment;
