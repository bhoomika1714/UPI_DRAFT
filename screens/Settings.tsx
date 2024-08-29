import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.iconLayout]}>
      <View style={[styles.settingsChild, styles.settingsChildLayout]} />
      <Text style={[styles.changePassword, styles.changePasswordTypo]}>
        Change Password
      </Text>
      <View style={[styles.settingsItem, styles.settingsPosition]} />
      <Text
        style={[styles.activatedeactivateCard, styles.setSpendingLimitLayout]}
      >
        Activate/Deactivate Card
      </Text>
      <View style={[styles.settingsInner, styles.settingsPosition]} />
      <Text style={[styles.setSpendingLimit, styles.setTypo]}>
        Set Spending Limit
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.settingsPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Text style={[styles.setAutoPayment, styles.setTypo]}>
        Set Auto-Payment
      </Text>
      <Image
        style={[styles.duotoneLogin, styles.duotonePosition]}
        resizeMode="cover"
        source={require("../assets/duotone--login.png")}
      />
      <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
      <Image
        style={[styles.duotoneUserQuestion, styles.duotonePosition]}
        resizeMode="cover"
        source={require("../assets/duotone--userquestion.png")}
      />
      <Text style={[styles.customerSupport, styles.logOutTypo]}>
        Customer Support
      </Text>
      <Image
        style={[styles.settingsChild1, styles.settingsChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Text style={styles.languagePrefrences}>Language Prefrences</Text>
      <View style={[styles.rectangleView, styles.settingsChildLayout]} />
      <Text style={[styles.personalInformation, styles.setTypo]}>
        Personal Information
      </Text>
      <Image
        style={styles.settingsChild2}
        resizeMode="cover"
        source={require("../assets/rectangle-101.png")}
      />
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-10000008931.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  settingsChildLayout: {
    height: 54,
    width: 299,
    position: "absolute",
  },
  changePasswordTypo: {
    textAlign: "left",
    color: Color.colorSnow_1100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  settingsPosition: {
    left: 25,
    height: 54,
    width: 299,
    position: "absolute",
  },
  setSpendingLimitLayout: {
    width: 272,
    left: 38,
  },
  setTypo: {
    height: 31,
    textAlign: "left",
    color: Color.colorSnow_1100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  duotonePosition: {
    top: 740,
    position: "absolute",
  },
  logOutTypo: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  settingsChild: {
    top: 63,
    backgroundColor: Color.colorTeal_200,
    borderRadius: Border.br_xl,
    left: 26,
  },
  changePassword: {
    top: 77,
    left: 49,
    width: 275,
    height: 27,
  },
  settingsItem: {
    top: 215,
    backgroundColor: Color.colorTeal_200,
    borderRadius: Border.br_xl,
  },
  activatedeactivateCard: {
    top: 228,
    height: 29,
    textAlign: "left",
    color: Color.colorSnow_1100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  settingsInner: {
    top: 292,
    backgroundColor: Color.colorTeal_200,
    borderRadius: Border.br_xl,
  },
  setSpendingLimit: {
    top: 309,
    width: 272,
    left: 38,
  },
  rectangleIcon: {
    top: 369,
  },
  setAutoPayment: {
    top: 377,
    left: 43,
    width: 262,
  },
  duotoneLogin: {
    width: 30,
    height: 30,
    left: 26,
    overflow: "hidden",
  },
  logOut: {
    top: 743,
    left: 58,
    width: 69,
    height: 22,
  },
  duotoneUserQuestion: {
    left: 168,
    width: 25,
    height: 25,
  },
  customerSupport: {
    top: 744,
    left: 202,
    width: 158,
    height: 18,
  },
  settingsChild1: {
    top: 439,
    left: 26,
  },
  languagePrefrences: {
    top: 454,
    width: 254,
    height: 36,
    left: 38,
    textAlign: "left",
    color: Color.colorSnow_1100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleView: {
    top: 139,
    left: 27,
    backgroundColor: Color.colorTeal_200,
    borderRadius: Border.br_xl,
  },
  personalInformation: {
    top: 149,
    left: 39,
    width: 271,
  },
  settingsChild2: {
    top: 537,
    left: 0,
    width: 360,
    height: 157,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "3.33%",
    top: "2.28%",
    right: "85.47%",
    bottom: "92.8%",
    width: "11.19%",
    height: "4.93%",
    position: "absolute",
  },
  settings: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default Settings;
