import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginPage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loginPage01, styles.iconTransform]}>
      <Image
        style={[styles.loginPage01Child, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Image
        style={[styles.loginPage01Item, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Image
        style={styles.loginPage01Inner}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <View style={styles.rectangleView} />
      <View style={[styles.loginPage01Child1, styles.loginChildLayout]} />
      <Text style={[styles.enterYourLogIn, styles.enterYourLogInTypo]}>
        Enter your log-in details to access your account
      </Text>
      <View style={[styles.loginPage01Child2, styles.loginChildLayout]} />
      <Image
        style={[styles.phoneIcon, styles.iconTransform]}
        resizeMode="cover"
        source={require("../assets/phone1.png")}
      />
      <Text style={[styles.digitNumber, styles.digitTypo]}>
        10-digit number
      </Text>
      <Text style={[styles.enter4DigitPassword, styles.digitTypo]}>
        Enter 4-digit Password
      </Text>
      <Image
        style={[styles.lockIcon, styles.iconTransform]}
        resizeMode="cover"
        source={require("../assets/lock1.png")}
      />
      <Pressable
        style={styles.enterDetails}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={styles.enterDetails1}>Enter Details</Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.enterYourLogInTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.loginPage01Child3, styles.loginChildLayout]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-58.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconTransform: {
    overflow: "hidden",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  loginLayout: {
    height: 148,
    width: 360,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  loginChildLayout: {
    width: 317,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  enterYourLogInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  digitTypo: {
    height: 12,
    width: 188,
    fontSize: FontSize.size_mini,
    color: Color.schemesOnPrimary,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  loginPage01Child: {
    top: 8,
    left: -1,
  },
  loginPage01Item: {
    left: 240,
    top: 301,
  },
  loginPage01Inner: {
    top: 379,
    left: 366,
    width: 374,
    height: 226,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rectangleView: {
    top: -16,
    left: -35,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 50,
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    borderStyle: "solid",
    borderColor: Color.schemesOnPrimary,
    borderWidth: 1,
    width: 414,
    height: 816,
    position: "absolute",
  },
  loginPage01Child1: {
    top: 200,
    backgroundColor: Color.colorGainsboro_300,
    height: 78,
    left: 23,
    width: 317,
    borderRadius: Border.br_mini,
  },
  enterYourLogIn: {
    top: 211,
    color: Color.colorDarkcyan,
    width: 285,
    height: 40,
    left: 39,
  },
  loginPage01Child2: {
    top: 289,
    backgroundColor: Color.schemesOutline,
    height: 222,
    left: 23,
    width: 317,
    borderRadius: Border.br_mini,
  },
  phoneIcon: {
    top: 317,
    width: 32,
    height: 32,
    left: 39,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  digitNumber: {
    left: 68,
    top: 301,
  },
  enter4DigitPassword: {
    top: 360,
    left: 86,
  },
  lockIcon: {
    top: 374,
    left: 38,
    width: 29,
    height: 31,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  enterDetails1: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 175,
    height: 36,
    color: Color.schemesOnPrimary,
    textAlign: "center",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  enterDetails: {
    left: 89,
    top: 438,
    position: "absolute",
  },
  forgotPassword: {
    marginLeft: -116.4,
    top: 531,
    left: "50%",
    color: Color.miscellaneousFloatingTabTextUnselected,
    width: 231,
    height: 17,
  },
  loginPage01Child3: {
    top: 26,
    left: 24,
    backgroundColor: Color.schemesOnPrimary,
    height: 150,
  },
  rectangleIcon: {
    top: 33,
    left: 114,
    width: 130,
    height: 130,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  loginPage01: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
});

export default LoginPage1;
