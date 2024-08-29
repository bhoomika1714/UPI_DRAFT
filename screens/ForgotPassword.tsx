import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <Image
        style={styles.bankLogosSmall}
        resizeMode="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <View style={[styles.forgotPasswordChild, styles.forgotLayout]} />
      <Text style={[styles.forgotPassword1, styles.stateBankOfTypo]}>
        <Text style={styles.forgot}>Forgot</Text>
        <Text style={styles.password}> Password</Text>
      </Text>
      <Text style={[styles.enterYourMail, styles.stateBankOfTypo]}>
        Enter your mail id we will send the reset link to your mail
      </Text>
      <Text style={[styles.emailAddress, styles.sendLinkTypo]}>
        Email address
      </Text>
      <View style={[styles.forgotPasswordItem, styles.forgotLayout]} />
      <View style={styles.forgotPasswordInner} />
      <Text style={[styles.sendLink, styles.sendLinkTypo]}> Send Link</Text>
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
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.text}>
          <Text style={styles.dontHaveAn}>{`Dont have an account? `}</Text>
          <Text style={styles.register}>Register</Text>
        </Text>
      </Pressable>
      <Image
        style={styles.communicationMail}
        resizeMode="cover"
        source={require("../assets/communication--mail.png")}
      />
      <View style={[styles.rectangleView, styles.stateBankOfPosition]} />
      <Text style={[styles.stateBankOf, styles.stateBankOfPosition]}>
        {" "}
        State Bank Of India
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotLayout: {
    width: 323,
    position: "absolute",
  },
  stateBankOfTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  sendLinkTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 683,
    position: "absolute",
  },
  stateBankOfPosition: {
    top: 215,
    position: "absolute",
  },
  bankLogosSmall: {
    marginLeft: -75,
    top: 55,
    width: 150,
    height: 150,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  forgotPasswordChild: {
    marginLeft: -161,
    top: 281,
    backgroundColor: Color.colorDarkcyan,
    height: 200,
    borderRadius: Border.br_3xs,
    left: "50%",
  },
  forgot: {
    fontSize: FontSize.size_11xl,
  },
  password: {
    fontSize: FontSize.size_13xl,
  },
  forgotPassword1: {
    marginLeft: -140,
    top: 292,
    textDecoration: "underline",
    color: "#efeded",
    width: 281,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  enterYourMail: {
    top: 340,
    left: 36,
    fontSize: FontSize.size_smi,
    color: Color.colorSnow_400,
    width: 285,
    height: 18,
    position: "absolute",
  },
  emailAddress: {
    top: 403,
    left: 65,
    color: "#f6f0f0",
    width: 148,
    height: 24,
  },
  forgotPasswordItem: {
    top: 434,
    left: 20,
    borderStyle: "solid",
    borderColor: "#fbf1f1",
    borderTopWidth: 1,
    height: 1,
  },
  forgotPasswordInner: {
    marginLeft: -80,
    top: 467,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 43,
    left: "50%",
    position: "absolute",
  },
  sendLink: {
    top: 481,
    left: 115,
    color: Color.colorDarkcyan,
    width: 122,
    height: 22,
  },
  image41Icon: {
    top: 677,
    left: 79,
    width: 30,
    height: 30,
    position: "absolute",
  },
  image42Icon: {
    marginLeft: -9,
    left: "50%",
  },
  image43Icon: {
    left: 253,
  },
  dontHaveAn: {
    color: Color.colorDimgray_100,
  },
  register: {
    color: Color.colorCornflowerblue,
  },
  text: {
    marginLeft: -72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interBold,
    width: 270,
    height: 27,
    fontWeight: "700",
    textAlign: "left",
  },
  dontHaveAnContainer: {
    top: 753,
    left: "50%",
    position: "absolute",
  },
  communicationMail: {
    top: 396,
    left: 24,
    width: 31,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    left: -9,
    backgroundColor: Color.colorSnow_300,
    width: 379,
    height: 35,
    borderRadius: Border.br_3xs,
  },
  stateBankOf: {
    marginLeft: -151,
    fontSize: FontSize.size_xl,
    color: Color.colorPaleturquoise_100,
    width: 284,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  forgotPassword: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ForgotPassword;
