import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={styles.bankLogosSmall}
        resizeMode="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <View style={[styles.loginChild, styles.loginChildLayout]} />
      <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      <Text style={[styles.emailAddress, styles.passwordTypo]}>
        Email address
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Image
        style={[styles.loginItem, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.loginInner, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/line-32.png")}
      />
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={[styles.forgotPassword1, styles.passwordTypo]}>
          Forgot Password?
        </Text>
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Bankkpage")}
      />
      <Text style={[styles.login2, styles.login2Typo]}>
        <Text style={styles.textTypo}>{`            `}</Text>
        <Text style={styles.passwordTypo}>Login</Text>
      </Text>
      <Image
        style={styles.image41Icon}
        resizeMode="cover"
        source={require("../assets/image-41.png")}
      />
      <Image
        style={[styles.image42Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-42.png")}
      />
      <Image
        style={[styles.image43Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-43.png")}
      />
      <Text style={[styles.dontHaveAnContainer, styles.textTypo]}>
        <Text style={styles.dontHaveAn}>{`Dont have an account? `}</Text>
        <Text style={styles.register}>Register</Text>
      </Text>
      <Image
        style={[styles.editHide, styles.editHideLayout]}
        resizeMode="cover"
        source={require("../assets/edit--hide.png")}
      />
      <Image
        style={[styles.communicationMail, styles.editHideLayout]}
        resizeMode="cover"
        source={require("../assets/communication--mail.png")}
      />
      <View style={[styles.rectangleView, styles.loginChildLayout]} />
      <Text style={[styles.stateBankOf, styles.login1Typo]}>
        {" "}
        State Bank Of India
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  login1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  passwordTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  loginLayout: {
    height: 1,
    width: 318,
    position: "absolute",
  },
  login2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 687,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  editHideLayout: {
    height: 31,
    width: 31,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  bankLogosSmall: {
    marginLeft: -75,
    top: 45,
    width: 150,
    height: 150,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  loginChild: {
    marginLeft: -160,
    top: 287,
    backgroundColor: Color.colorDarkcyan,
    width: 320,
    height: 270,
    left: "50%",
  },
  login1: {
    top: 299,
    left: 33,
    fontSize: FontSize.size_13xl,
    textDecoration: "underline",
    color: "#f0e5e5",
    width: 174,
    height: 36,
    textAlign: "left",
  },
  emailAddress: {
    top: 380,
    left: 65,
    color: "#faf0f0",
    width: 148,
    height: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: 448,
    left: 66,
    color: Color.colorSnow_300,
    width: 118,
    height: 19,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  loginItem: {
    top: 410,
    left: 22,
  },
  loginInner: {
    top: 482,
    left: 20,
  },
  forgotPassword1: {
    fontSize: FontSize.size_sm,
    color: Color.colorSnow_200,
    width: 141,
    height: 18,
    textAlign: "left",
  },
  forgotPassword: {
    left: 178,
    top: 502,
    position: "absolute",
  },
  rectanglePressable: {
    marginLeft: -118,
    top: 536,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 236,
    height: 43,
    left: "50%",
    position: "absolute",
  },
  login2: {
    marginLeft: -65,
    top: 546,
    color: Color.colorDarkcyan,
    width: 130,
    height: 23,
    left: "50%",
  },
  image41Icon: {
    top: 682,
    left: 74,
    width: 30,
    height: 30,
    position: "absolute",
  },
  image42Icon: {
    marginLeft: -11,
    left: "50%",
  },
  image43Icon: {
    left: 254,
  },
  dontHaveAn: {
    color: Color.colorDimgray_100,
  },
  register: {
    color: Color.colorCornflowerblue,
  },
  dontHaveAnContainer: {
    marginLeft: -77,
    top: 757,
    fontSize: FontSize.size_3xs,
    width: 270,
    height: 27,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  editHide: {
    top: 442,
  },
  communicationMail: {
    top: 373,
  },
  rectangleView: {
    top: 199,
    left: 0,
    backgroundColor: Color.colorSnow_300,
    width: 379,
    height: 35,
  },
  stateBankOf: {
    marginLeft: -137,
    top: 202,
    fontSize: FontSize.size_xl,
    color: Color.colorPaleturquoise_100,
    width: 282,
    height: 16,
    textAlign: "left",
    left: "50%",
  },
  login: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;
