import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Authentication1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.authentication}>
      <Image
        style={styles.authenticationChild}
        resizeMode="cover"
        source={require("../assets/rectangle-188.png")}
      />
      <Text style={styles.welcomeBeckyHills}>{`Welcome, Becky Hills!
`}</Text>
      <Image
        style={styles.authenticationItem}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("Help1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <View style={[styles.authenticationInner, styles.authenticationLayout]} />
      <Text style={[styles.upayitIsLocked, styles.upayitIsLockedTypo]}>
        UPayIt is Locked.
      </Text>
      <Text
        style={styles.authenticationIsRequired}
      >{`Authentication is required in order to access UPayIt. `}</Text>
      <View style={[styles.rectangleView, styles.authenticationLayout]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-57.png")}
      />
      <Text style={[styles.pleaseHoldFor, styles.pleaseHoldForClr]}>
        Please hold for a second.
      </Text>
      <Text style={[styles.enterFingerprintTo, styles.pleaseHoldForClr]}>
        Enter Fingerprint to Unlock
      </Text>
      <Text style={[styles.welcomeToUpayit, styles.pleaseHoldForClr]}>
        Welcome to UPayIt!
      </Text>
      <View
        style={[styles.authenticationChild1, styles.authenticationLayout]}
      />
      <Pressable
        style={styles.frame1}
        onPress={() => navigation.navigate("Home1")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/frame27.png")}
        />
      </Pressable>
      <View style={styles.authenticationChild2} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  authenticationLayout: {
    width: 348,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    left: 6,
    position: "absolute",
  },
  upayitIsLockedTypo: {
    height: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    left: 18,
  },
  pleaseHoldForClr: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  authenticationChild: {
    top: 0,
    left: 0,
    width: 359,
    height: 156,
    position: "absolute",
  },
  welcomeBeckyHills: {
    top: 57,
    left: 107,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.schemesOnPrimary,
    width: 193,
    height: 89,
    textAlign: "center",
    position: "absolute",
  },
  authenticationItem: {
    top: 58,
    left: 20,
    width: 80,
    height: 80,
    position: "absolute",
  },
  wrapper: {
    left: 246,
  },
  container: {
    left: 306,
  },
  frame: {
    left: 276,
  },
  authenticationInner: {
    top: 180,
    height: 155,
  },
  upayitIsLocked: {
    top: 190,
    color: Color.colorDarkslategray_100,
    width: 241,
    fontSize: FontSize.size_5xl,
    height: 36,
    position: "absolute",
  },
  authenticationIsRequired: {
    top: 263,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkcyan,
    width: 318,
    height: 60,
    textAlign: "left",
    left: 18,
    position: "absolute",
  },
  rectangleView: {
    top: 353,
    height: 213,
  },
  rectangleIcon: {
    top: 404,
    left: 130,
    width: 100,
    height: 98,
    position: "absolute",
  },
  pleaseHoldFor: {
    top: 535,
    left: 76,
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 208,
    height: 26,
    textAlign: "center",
  },
  enterFingerprintTo: {
    top: 506,
    fontSize: 23,
    width: 336,
    height: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    left: 18,
  },
  welcomeToUpayit: {
    top: 369,
    left: 56,
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  authenticationChild1: {
    top: 585,
    height: 125,
  },
  icon3: {
    overflow: "hidden",
  },
  frame1: {
    left: 154,
    top: 622,
    width: 65,
    height: 65,
    position: "absolute",
  },
  authenticationChild2: {
    top: 795,
    left: 360,
    backgroundColor: Color.colorGainsboro_100,
    width: 35,
    height: 30,
    position: "absolute",
  },
  authentication: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Authentication1;
