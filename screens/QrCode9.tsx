import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QrCode9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.qrCode2, styles.iconLayout]}
      onPress={() => navigation.navigate("QrCode8")}
    >
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorParent}
        onPress={() => navigation.navigate("QrCode8")}
      >
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.scanQrCode, styles.scanFlexBox]}>
          Scan QR Code
        </Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.image10Icon, styles.scanYourQrPosition]}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <Image
        style={styles.qrCode2Child}
        contentFit="cover"
        source={require("../assets/rectangle-58.png")}
      />
      <Text style={[styles.scanYourQr, styles.scanYourQrPosition]}>
        Scan your QR code
      </Text>
      <View style={styles.qrCode2Item} />
    </Pressable>
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
    top: 707,
    left: 26,
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(0, 98, 112, 0.4)",
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
    marginLeft: -124,
    top: 272,
    width: 240,
    height: 240,
  },
  qrCode2Child: {
    top: 364,
    left: 146,
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
  qrCode2Item: {
    top: 522,
    left: 54,
    borderColor: Color.colorMediumspringgreen,
    borderTopWidth: 5,
    width: 245,
    height: 5,
    position: "absolute",
    borderStyle: "solid",
  },
  qrCode2: {
    backgroundColor: Color.colorDarkcyan,
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderWidth: 1,
    flex: 1,
    height: 800,
    overflow: "hidden",
    borderStyle: "solid",
  },
});

export default QrCode9;
