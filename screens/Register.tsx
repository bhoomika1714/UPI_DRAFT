import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.register}>
      <Image
        style={styles.bankLogosSmall}
        contentFit="cover"
        source={require("../assets/bank-logos-small3.png")}
      />
      <Text style={styles.stateBankOf}> State Bank Of India</Text>
      <Text style={[styles.register1, styles.registerTypo]}>Register</Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.navigate("")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
      </Pressable>
      <Image
        style={styles.registerChild}
        contentFit="cover"
        source={require("../assets/rectangle-226.png")}
      />
      <Text style={[styles.register2, styles.registerTypo]}>Register</Text>
      <Pressable
        style={[styles.image, styles.imagePosition1]}
        onPress={() => navigation.navigate("")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image14.png")}
        />
      </Pressable>
      <Image
        style={[styles.imageIcon, styles.imagePosition]}
        contentFit="cover"
        source={require("../assets/image15.png")}
      />
      <Pressable
        style={[styles.image1, styles.imagePosition]}
        onPress={() => navigation.navigate("")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image12.png")}
        />
      </Pressable>
      <Text style={[styles.userName, styles.userNameTypo]}>User Name</Text>
      <Image
        style={[styles.registerItem, styles.registerPosition]}
        contentFit="cover"
        source={require("../assets/line-27.png")}
      />
      <Text style={[styles.emailAddress, styles.userNameTypo]}>
        Email address
      </Text>
      <Image
        style={[styles.registerInner, styles.registerPosition]}
        contentFit="cover"
        source={require("../assets/line-27.png")}
      />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Image
        style={[styles.lineIcon, styles.registerPosition]}
        contentFit="cover"
        source={require("../assets/line-27.png")}
      />
      <Pressable
        style={[styles.image2, styles.imagePosition1]}
        onPress={() => navigation.navigate("")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image14.png")}
        />
      </Pressable>
      <Text style={[styles.confirmPassword, styles.passwordTypo]}>
        Confirm Password
      </Text>
      <Image
        style={[styles.registerChild1, styles.registerPosition]}
        contentFit="cover"
        source={require("../assets/line-27.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.register3Position]}
        onPress={() => navigation.navigate("Bankkpage")}
      />
      <Text style={[styles.register3, styles.text1Typo]}>
        <Text style={styles.text}>{`             `}</Text>
        <Text style={styles.register4}>Register</Text>
      </Text>
      <Image
        style={styles.image41Icon}
        contentFit="cover"
        source={require("../assets/image-41.png")}
      />
      <Image
        style={[styles.image42Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-42.png")}
      />
      <Image
        style={[styles.image43Icon, styles.iconPosition]}
        contentFit="cover"
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
    </View>
  );
};

const styles = StyleSheet.create({
  registerTypo: {
    textDecoration: "underline",
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    position: "absolute",
  },
  imagePosition1: {
    left: 32,
    height: 31,
    width: 25,
    position: "absolute",
  },
  imagePosition: {
    height: 20,
    left: 32,
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
  register3Position: {
    marginLeft: -80,
    left: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  iconPosition: {
    top: 708,
    height: 20,
    width: 20,
    position: "absolute",
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
  stateBankOf: {
    marginLeft: -162,
    top: 169,
    fontSize: FontSize.size_xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    width: 282,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  register1: {
    top: 224,
    left: 48,
    fontFamily: FontFamily.interRegular,
    color: Color.schemesOnPrimary,
    width: 188,
    height: 41,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 52,
    top: 296,
    height: 31,
    width: 25,
    position: "absolute",
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
    left: 23,
    color: Color.colorSnow_400,
    width: 197,
    height: 39,
    fontFamily: FontFamily.poppinsRegular,
    textDecoration: "underline",
    fontSize: FontSize.size_13xl,
  },
  image: {
    top: 446,
  },
  imageIcon: {
    width: 20,
    height: 20,
    top: 336,
  },
  image1: {
    top: 394,
    height: 20,
    width: 25,
  },
  userName: {
    color: "#fff2f2",
    width: 184,
    height: 19,
    top: 336,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 62,
  },
  registerItem: {
    top: 362,
  },
  emailAddress: {
    color: Color.colorLavenderblush_200,
    width: 148,
    height: 24,
    top: 394,
  },
  registerInner: {
    top: 422,
  },
  password: {
    top: 452,
    color: "#efe1e1",
    width: 118,
    height: 19,
  },
  lineIcon: {
    top: 483,
  },
  image2: {
    top: 505,
  },
  confirmPassword: {
    top: 510,
    color: "#f6f2f2",
    width: 157,
    height: 21,
  },
  registerChild1: {
    top: 545,
  },
  rectanglePressable: {
    top: 644,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 50,
  },
  text: {
    color: "#fbf2f2",
  },
  register4: {
    color: Color.colorGray_200,
  },
  register3: {
    top: 660,
    width: 145,
    height: 25,
    marginLeft: -80,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
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
  register: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;
