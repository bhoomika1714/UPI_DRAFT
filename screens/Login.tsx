import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <Image
        style={styles.bankLogosSmall}
        contentFit="cover"
        source={require("../assets/bank-logos-small3.png")}
      />
      <Text style={[styles.stateBankOf, styles.login2FlexBox]}>
        {" "}
        State Bank Of India
      </Text>
      <View style={styles.loginChild} />
      <Text style={styles.login1}>Login</Text>
      <Pressable style={styles.image} onPress={() => navigation.navigate("")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image12.png")}
        />
      </Pressable>
      <Pressable style={styles.image1} onPress={() => navigation.navigate("")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image14.png")}
        />
      </Pressable>
      <Text style={[styles.emailAddress, styles.login3Typo]}>
        Email address
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Image
        style={[styles.loginItem, styles.loginLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.loginInner, styles.loginLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
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
        <Text style={styles.login3Typo}>Login</Text>
      </Text>
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
      <Text style={[styles.dontHaveAnContainer, styles.textTypo]}>
        <Text style={styles.dontHaveAn}>{`Dont have an account? `}</Text>
        <Text style={styles.register}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login2FlexBox: {
    textAlign: "left",
    left: "50%",
  },
  login3Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  passwordTypo: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  loginLayout: {
    height: 1,
    width: 318,
    position: "absolute",
  },
  login2Typo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    top: 687,
    height: 20,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  stateBankOf: {
    marginLeft: -141,
    top: 207,
    fontSize: FontSize.size_xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    width: 282,
    height: 16,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  loginChild: {
    marginLeft: -160,
    top: 287,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkcyan,
    width: 320,
    height: 270,
    left: "50%",
    position: "absolute",
  },
  login1: {
    top: 299,
    fontSize: FontSize.size_13xl,
    textDecoration: "underline",
    color: "#f0e5e5",
    width: 174,
    height: 36,
    left: 33,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image: {
    height: 20,
    width: 25,
    top: 380,
    left: 33,
    position: "absolute",
  },
  image1: {
    top: 445,
    height: 31,
    width: 25,
    left: 33,
    position: "absolute",
  },
  emailAddress: {
    left: 65,
    color: "#faf0f0",
    width: 148,
    height: 24,
    fontSize: FontSize.size_base,
    position: "absolute",
    top: 380,
    fontWeight: "700",
    textAlign: "left",
  },
  password: {
    top: 448,
    left: 66,
    width: 118,
    height: 19,
    fontSize: FontSize.size_base,
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
    width: 141,
    height: 18,
  },
  forgotPassword: {
    left: 178,
    top: 502,
    position: "absolute",
  },
  rectanglePressable: {
    top: 536,
    left: 103,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 50,
    position: "absolute",
  },
  login2: {
    marginLeft: -66,
    top: 546,
    color: Color.colorGray_300,
    width: 130,
    height: 23,
    textAlign: "left",
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
  login: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
