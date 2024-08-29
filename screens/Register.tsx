import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <Image
        style={styles.bankLogosSmall}
        resizeMode="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <Text style={styles.register1}>Register</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
      </Pressable>
      <Image
        style={styles.registerChild}
        resizeMode="cover"
        source={require("../assets/rectangle-226.png")}
      />
      <Text style={[styles.register2, styles.register2Typo]}>Register</Text>
      <Text style={[styles.userName, styles.userNameTypo]}>User Name</Text>
      <Image
        style={[styles.registerItem, styles.registerPosition]}
        resizeMode="cover"
        source={require("../assets/line-27.png")}
      />
      <Text style={[styles.emailAddress, styles.userNameTypo]}>
        {" "}
        Email address
      </Text>
      <Image
        style={[styles.registerInner, styles.registerPosition]}
        resizeMode="cover"
        source={require("../assets/line-28.png")}
      />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Image
        style={[styles.lineIcon, styles.registerPosition]}
        resizeMode="cover"
        source={require("../assets/line-29.png")}
      />
      <Text style={[styles.confirmPassword, styles.passwordTypo]}>
        Confirm Password
      </Text>
      <Image
        style={[styles.registerChild1, styles.registerPosition]}
        resizeMode="cover"
        source={require("../assets/line-30.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Bankkpage")}
      />
      <Text style={[styles.register3, styles.text1Typo]}>
        <Text style={styles.text}>{`             `}</Text>
        <Text style={styles.register4}>Register</Text>
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
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.text1, styles.text1Typo]}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Text style={styles.logIn}>Log in</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
      </Pressable>
      <Image
        style={[styles.communicationMail, styles.editLayout]}
        resizeMode="cover"
        source={require("../assets/communication--mail.png")}
      />
      <Image
        style={[styles.editHide, styles.editLayout]}
        resizeMode="cover"
        source={require("../assets/edit--hide.png")}
      />
      <Image
        style={[styles.editHide1, styles.editLayout]}
        resizeMode="cover"
        source={require("../assets/edit--hide.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.stateBankOf, styles.register2Typo]}>
        {" "}
        State Bank Of India
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  register2Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  userNameTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 62,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  registerPosition: {
    height: 1,
    width: 334,
    marginLeft: -167,
    left: "50%",
    position: "absolute",
  },
  passwordTypo: {
    left: 65,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 708,
    position: "absolute",
  },
  editLayout: {
    width: 31,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  bankLogosSmall: {
    marginLeft: -75,
    top: 17,
    width: 150,
    height: 150,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  register1: {
    top: 224,
    left: 48,
    fontFamily: FontFamily.interRegular,
    color: Color.schemesOnPrimary,
    width: 188,
    height: 41,
    textAlign: "left",
    textDecoration: "underline",
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 52,
    top: 296,
  },
  registerChild: {
    bottom: 128,
    left: 13,
    borderRadius: Border.br_mini,
    width: 720,
    height: 450,
    position: "absolute",
  },
  register2: {
    top: 236,
    color: Color.colorSnow_800,
    width: 197,
    height: 39,
    left: 23,
    textDecoration: "underline",
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.poppinsRegular,
  },
  userName: {
    top: 336,
    color: "#fff7f7",
    width: 184,
    height: 19,
  },
  registerItem: {
    top: 362,
  },
  emailAddress: {
    top: 394,
    color: "#f8f4f4",
    width: 148,
    height: 24,
  },
  registerInner: {
    top: 422,
  },
  password: {
    top: 452,
    color: Color.colorWhitesmoke_100,
    width: 118,
    height: 19,
  },
  lineIcon: {
    top: 483,
  },
  confirmPassword: {
    top: 510,
    color: Color.colorWhitesmoke_200,
    width: 157,
    height: 21,
  },
  registerChild1: {
    top: 545,
  },
  rectanglePressable: {
    marginLeft: -115,
    top: 651,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 236,
    height: 43,
    left: "50%",
    position: "absolute",
  },
  text: {
    color: "#fbf2f2",
  },
  register4: {
    color: Color.colorDarkcyan,
  },
  register3: {
    marginLeft: -80,
    top: 660,
    width: 145,
    height: 25,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    left: "50%",
    position: "absolute",
  },
  image41Icon: {
    top: 703,
    left: 78,
    width: 30,
    height: 30,
    position: "absolute",
  },
  image42Icon: {
    marginLeft: -10,
    left: "50%",
  },
  image43Icon: {
    left: 261,
  },
  alreadyHaveAn: {
    color: Color.colorDimgray_100,
  },
  logIn: {
    color: Color.colorCornflowerblue,
  },
  text1: {
    marginLeft: -103,
    fontSize: FontSize.size_sm,
    width: 261,
    height: 17,
  },
  alreadyHaveAnContainer: {
    top: 751,
    left: "50%",
    position: "absolute",
  },
  container: {
    top: 327,
    left: 27,
  },
  communicationMail: {
    top: 391,
    left: 23,
  },
  editHide: {
    top: 451,
    left: 27,
  },
  editHide1: {
    top: 505,
    left: 27,
  },
  rectangleView: {
    top: 167,
    left: -10,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSnow_300,
    width: 379,
    height: 35,
    position: "absolute",
  },
  stateBankOf: {
    marginLeft: -162,
    top: 168,
    fontSize: FontSize.size_xl,
    color: Color.colorPaleturquoise_100,
    width: 282,
    height: 16,
    left: "50%",
  },
  register: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;
