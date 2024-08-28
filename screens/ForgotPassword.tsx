import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.forgotPassword}>
      <Image
        style={styles.bankLogosSmall}
        contentFit="cover"
        source={require("../assets/bank-logos-small3.png")}
      />
      <Text style={[styles.stateBankOf, styles.stateBankOfTypo]}>
        {" "}
        State Bank Of India
      </Text>
      <View style={[styles.forgotPasswordChild, styles.forgotLayout]} />
      <Text style={[styles.forgotPassword1, styles.stateBankOfTypo]}>
        <Text style={styles.forgot}>Forgot</Text>
        <Text style={styles.password}> Password</Text>
      </Text>
      <Text style={styles.enterYourMail}>
        Enter your mail id we will send the reset link to your mail
      </Text>
      <Pressable style={styles.image} onPress={() => navigation.navigate("")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image12.png")}
        />
      </Pressable>
      <Text style={[styles.emailAddress, styles.sendLinkTypo]}>
        Email address
      </Text>
      <View style={[styles.forgotPasswordItem, styles.forgotLayout]} />
      <View style={styles.forgotPasswordInner} />
      <Text style={[styles.sendLink, styles.sendLinkTypo]}> Send Link</Text>
      <Image
        style={styles.image41Icon}
        contentFit="cover"
        source={require("../assets/image-41.png")}
      />
      <Image
        style={[styles.image42Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-42.png")}
      />
      <Image
        style={[styles.image43Icon, styles.iconLayout]}
        contentFit="cover"
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
    </View>
  );
};

const styles = StyleSheet.create({
  stateBankOfTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  forgotLayout: {
    width: 323,
    position: "absolute",
  },
  sendLinkTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    top: 683,
    height: 20,
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
  stateBankOf: {
    top: 212,
    fontSize: FontSize.size_xl,
    width: 284,
    height: 16,
    color: Color.miscellaneousFloatingTabTextUnselected,
    marginLeft: -161,
  },
  forgotPasswordChild: {
    top: 281,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkcyan,
    height: 200,
    marginLeft: -161,
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
  },
  enterYourMail: {
    top: 340,
    fontSize: FontSize.size_mini,
    color: "#464242",
    width: 285,
    height: 18,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image: {
    top: 407,
    width: 25,
    height: 20,
    left: 36,
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
    borderColor: "#252222",
    borderTopWidth: 1,
    height: 1,
  },
  forgotPasswordInner: {
    marginLeft: -80,
    top: 467,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  sendLink: {
    top: 481,
    left: 115,
    width: 122,
    height: 22,
    color: Color.miscellaneousFloatingTabTextUnselected,
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
  forgotPassword: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassword;
