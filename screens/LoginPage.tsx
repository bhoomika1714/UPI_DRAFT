import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.loginPage2, styles.lockIconTransform]}>
      <Image
        style={[styles.loginPage2Child, styles.loginLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.loginPage2Item, styles.loginLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={styles.loginPage2Inner}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.loginPage2Child1} />
      <Text style={[styles.enterYourLogIn, styles.login1FlexBox]}>
        Enter your log-in details to access your account
      </Text>
      <View style={[styles.loginPage2Child2, styles.loginChildLayout]} />
      <Text style={[styles.text, styles.textTypo]}>****</Text>
      <Image
        style={[styles.phoneIcon, styles.text1Position]}
        contentFit="cover"
        source={require("../assets/phone.png")}
      />
      <Text style={[styles.digitNumber, styles.digitTypo]}>
        10-digit number
      </Text>
      <Text style={[styles.enter4DigitPassword, styles.digitTypo]}>
        Enter 4-digit Password
      </Text>
      <Text style={[styles.text1, styles.text1Position]}>**********</Text>
      <Image
        style={[styles.lockIcon, styles.lockIconTransform]}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Text style={styles.show}>SHOW</Text>
      <Text style={[styles.forgotPassword, styles.loginPosition]}>
        Forgot Password?
      </Text>
      <View style={[styles.loginPage2Child3, styles.loginChildLayout]} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-581.png")}
      />
      <View style={styles.loginPage2Child4} />
      <Pressable
        style={[styles.login, styles.loginPosition]}
        onPress={() => navigation.navigate("Authentication")}
      >
        <Text style={[styles.login1, styles.login1FlexBox]}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lockIconTransform: {
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
  login1FlexBox: {
    textAlign: "center",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  loginChildLayout: {
    backgroundColor: Color.schemesOnPrimary,
    width: 317,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  textTypo: {
    height: 22,
    width: 220,
    fontSize: FontSize.size_6xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  text1Position: {
    top: 317,
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
    textAlign: "center",
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  loginPosition: {
    left: "50%",
    position: "absolute",
  },
  loginPage2Child: {
    top: 8,
    left: -1,
  },
  loginPage2Item: {
    left: 240,
    top: 301,
  },
  loginPage2Inner: {
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
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    borderStyle: "solid",
    borderColor: Color.schemesOnPrimary,
    borderWidth: 1,
    width: 414,
    height: 816,
    position: "absolute",
  },
  loginPage2Child1: {
    top: 200,
    backgroundColor: "rgba(232, 227, 227, 0.34)",
    height: 78,
    width: 317,
    borderRadius: Border.br_mini,
    left: 23,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  enterYourLogIn: {
    top: 211,
    width: 285,
    height: 40,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    left: 39,
    position: "absolute",
  },
  loginPage2Child2: {
    top: 289,
    height: 222,
    left: 23,
    backgroundColor: Color.schemesOnPrimary,
  },
  text: {
    top: 378,
    left: 61,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  phoneIcon: {
    width: 32,
    height: 32,
    left: 39,
    top: 317,
    overflow: "hidden",
  },
  digitNumber: {
    left: 68,
    top: 301,
  },
  enter4DigitPassword: {
    top: 360,
    left: 86,
  },
  text1: {
    left: 85,
    height: 22,
    width: 220,
    fontSize: FontSize.size_6xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
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
  show: {
    top: 388,
    left: 290,
    fontSize: FontSize.size_3xs,
    width: 42,
    height: 5,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorDarkcyan,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  forgotPassword: {
    marginLeft: -116.4,
    top: 531,
    width: 231,
    height: 17,
    color: Color.miscellaneousFloatingTabTextUnselected,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  loginPage2Child3: {
    top: 26,
    left: 24,
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
  loginPage2Child4: {
    top: 449,
    left: 84,
    backgroundColor: Color.colorDarkslategray_100,
    width: 180,
    height: 46,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  login1: {
    marginLeft: -88.1,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.schemesOnPrimary,
    width: 175,
    height: 36,
  },
  login: {
    top: 453,
  },
  loginPage2: {
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

export default LoginPage;
