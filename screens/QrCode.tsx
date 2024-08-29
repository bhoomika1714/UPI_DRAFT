import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QrCode = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.qrCode1, styles.iconLayout]}>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("Home1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left7.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorParent}
        onPress={() => navigation.navigate("QrCode2")}
      >
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
        <Text style={[styles.scanQrCode, styles.scanFlexBox]}>
          Scan QR Code
        </Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.image10Icon, styles.scanYourQrPosition]}
        resizeMode="cover"
        source={require("../assets/image-101.png")}
      />
      <Image
        style={styles.qrCode1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-581.png")}
      />
      <Text style={[styles.scanYourQr, styles.scanYourQrPosition]}>
        Scan your QR code
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scanFlexBox: {
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  scanYourQrPosition: {
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: 27,
    top: 34,
    width: 40,
    height: 29,
    position: "absolute",
  },
  vectorIcon: {
    height: "55.5%",
    width: "11.4%",
    right: "77.98%",
    bottom: "22.83%",
    left: "10.62%",
    top: "21.67%",
  },
  scanQrCode: {
    left: "29.79%",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.interRegular,
    top: "21.67%",
    position: "absolute",
  },
  vectorParent: {
    top: 711,
    left: 34,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslategray_100,
    width: 292,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "37.5%",
    width: "83.33%",
    top: "31.25%",
    right: "9.44%",
    bottom: "31.25%",
    left: "7.22%",
  },
  image10Icon: {
    marginLeft: -121,
    top: 280,
    width: 240,
    height: 240,
  },
  qrCode1Child: {
    top: 365,
    left: 150,
    width: 59,
    height: 55,
    position: "absolute",
  },
  scanYourQr: {
    marginLeft: -133,
    top: 76,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  qrCode1: {
    backgroundColor: Color.colorDarkcyan,
    borderStyle: "solid",
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderWidth: 1,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default QrCode;
