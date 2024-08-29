import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SETTINGSANDPREFERNECEPAGE1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsAndPrefernecePage}>
      <View
        style={[
          styles.settingsAndPrefernecePageChild,
          styles.settingsChildPosition,
        ]}
      />
      <View style={styles.settingsAndPrefernecePageItem} />
      <Image
        style={[
          styles.settingsAndPrefernecePageInner,
          styles.settingsChildLayout2,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Image
        style={[styles.alignLeftIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/align-left.png")}
      />
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left.png")}
        />
      </Pressable>
      <Text style={[styles.settingsAndPreferences, styles.logOutFlexBox]}>
        Settings And Preferences
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.settingsChildLayout2]}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Image
        style={[
          styles.settingsAndPrefernecePageChild1,
          styles.settingsChildLayout2,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={styles.languages}>Languages</Text>
      <Text style={[styles.chosenLanguageEnglish, styles.manageAllSharedTypo]}>
        Chosen language: English
      </Text>
      <Image
        style={[
          styles.settingsAndPrefernecePageChild2,
          styles.settingsChildLayout2,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={[styles.billNotifications, styles.themeTypo]}>
        Bill Notifications
      </Text>
      <Text style={[styles.recieveAlertsWhen, styles.recieveAlertsWhenTypo]}>
        Recieve alerts when bill is generated
      </Text>
      <Text style={[styles.permissions, styles.themeTypo]}>Permissions</Text>
      <Image
        style={[
          styles.settingsAndPrefernecePageChild3,
          styles.settingsChildLayout2,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Text style={[styles.theme, styles.themeTypo]}>Theme</Text>
      <Text style={[styles.chooseBetweenLight, styles.recieveAlertsWhenTypo]}>
        Choose between light and dark mode
      </Text>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.userIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/user.png")}
      />
      <Text style={styles.dataPreferences}>Data Preferences</Text>
      <Text style={[styles.manageAllShared, styles.manageAllSharedTypo]}>
        Manage all shared information
      </Text>
      <Image
        style={[styles.playArrowIcon, styles.playIconLayout]}
        resizeMode="cover"
        source={require("../assets/play-arrow.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      />
      <Text style={[styles.logOut, styles.logOutFlexBox]}>LOG OUT</Text>
      <Image
        style={[styles.boldIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/bold.png")}
      />
      <Image
        style={[styles.playArrowIcon1, styles.playIconLayout]}
        resizeMode="cover"
        source={require("../assets/play-arrow1.png")}
      />
      <Image
        style={[styles.pickerButtonIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picker-button.png")}
      />
      <Image
        style={[styles.playArrowIcon2, styles.playIconLayout]}
        resizeMode="cover"
        source={require("../assets/play-arrow2.png")}
      />
      <Image
        style={[styles.playArrowIcon3, styles.playIconLayout]}
        resizeMode="cover"
        source={require("../assets/play-arrow2.png")}
      />
      <Image
        style={[styles.creditCardIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/credit-card.png")}
      />
      <Pressable
        style={[styles.playArrow, styles.playIconLayout]}
        onPress={() => navigation.navigate("PermissionsPage")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/play-arrow2.png")}
        />
      </Pressable>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame-14.png")}
      />
      <Image
        style={[
          styles.settingsAndPrefernecePageChild4,
          styles.settingsChildLayout2,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-201.png")}
      />
      <Image
        style={[
          styles.settingsAndPrefernecePageChild5,
          styles.settingsChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-202.png")}
      />
      <View style={styles.settingsAndPrefernecePageChild6} />
      <View
        style={[
          styles.settingsAndPrefernecePageChild7,
          styles.settingsChildLayout1,
        ]}
      />
      <Image
        style={styles.checkBoxIcon}
        resizeMode="cover"
        source={require("../assets/check-box.png")}
      />
      <Text style={styles.english}>English</Text>
      <View
        style={[
          styles.settingsAndPrefernecePageChild8,
          styles.settingsChildLayout1,
        ]}
      />
      <Image
        style={styles.image25Icon}
        resizeMode="cover"
        source={require("../assets/image-25.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>ಕನ್ನಡ</Text>
      <View
        style={[
          styles.settingsAndPrefernecePageChild9,
          styles.settingsChildLayout,
        ]}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank.png")}
      />
      <View
        style={[
          styles.settingsAndPrefernecePageChild10,
          styles.settingsChildLayout1,
        ]}
      />
      <View
        style={[
          styles.settingsAndPrefernecePageChild11,
          styles.settingsChildLayout1,
        ]}
      />
      <Text style={[styles.text1, styles.textTypo]}>தமிழ் </Text>
      <Pressable
        style={[
          styles.settingsAndPrefernecePageChild12,
          styles.rectanglePressableLayout,
        ]}
        onPress={() => navigation.navigate("SETTINGSANDPREFERNECEPAGE")}
      />
      <Text style={styles.continue}>Continue</Text>
      <View
        style={[
          styles.settingsAndPrefernecePageChild13,
          styles.settingsChildLayout,
        ]}
      />
      <View
        style={[styles.settingsAndPrefernecePageChild14, styles.text4Position]}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon1, styles.checkIconPosition1]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank.png")}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon2, styles.checkIconPosition]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank.png")}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon3, styles.checkIconPosition1]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank.png")}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon4, styles.checkIconPosition]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank.png")}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon5, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>తెలుగు </Text>
      <Text style={[styles.text3, styles.textTypo1]}>ગુજરાતી </Text>
      <Text style={[styles.text4, styles.text4Position]}>മലയാളം</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsChildPosition: {
    left: 0,
    position: "absolute",
  },
  settingsChildLayout2: {
    height: 90,
    width: 318,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  iconLayout1: {
    height: 38,
    width: 38,
    left: 37,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    width: "100%",
  },
  logOutFlexBox: {
    textAlign: "center",
    color: Color.schemesOnPrimary,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  manageAllSharedTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  themeTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  recieveAlertsWhenTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  iconPosition: {
    left: 36,
    height: 38,
    width: 38,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  playIconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 47,
    width: 228,
    backgroundColor: Color.colorDarkslategray_200,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsChildLayout1: {
    width: 305,
    height: 65,
    borderWidth: 1,
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderStyle: "solid",
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_3xs,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_7xl,
  },
  settingsChildLayout: {
    left: 24,
    width: 305,
    height: 65,
    borderWidth: 1,
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderStyle: "solid",
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_3xs,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  checkIconLayout: {
    height: 23,
    left: 294,
    width: 23,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  textTypo: {
    width: 76,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_7xl,
    height: 31,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  text4Position: {
    left: 44,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  checkIconPosition1: {
    left: 292,
    height: 23,
    width: 23,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  checkIconPosition: {
    left: 295,
    height: 23,
    width: 23,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsAndPrefernecePageChild: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    width: 360,
    height: 800,
    top: 2,
  },
  settingsAndPrefernecePageItem: {
    left: -1,
    backgroundColor: Color.colorDarkcyan,
    width: 362,
    height: 82,
    top: 2,
    position: "absolute",
  },
  settingsAndPrefernecePageInner: {
    top: 311,
    left: 30,
    borderRadius: Border.br_mini,
  },
  alignLeftIcon: {
    top: 328,
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 7,
    top: 27,
    width: 40,
    height: 29,
    position: "absolute",
  },
  settingsAndPreferences: {
    top: 20,
    left: 31,
    fontSize: FontSize.size_11xl,
    width: 410,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    height: 38,
  },
  rectangleIcon: {
    top: 95,
    left: 25,
    borderRadius: Border.br_mini,
  },
  settingsAndPrefernecePageChild1: {
    top: 214,
    left: 21,
  },
  languages: {
    top: 112,
    height: 24,
    width: 203,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_6xl,
    left: 60,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  chosenLanguageEnglish: {
    top: 150,
    left: 85,
    height: 25,
    width: 203,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_mini,
  },
  settingsAndPrefernecePageChild2: {
    top: 205,
    left: 25,
    borderRadius: Border.br_mini,
  },
  billNotifications: {
    top: 226,
    width: 250,
    height: 20,
    left: 60,
    fontSize: FontSize.size_6xl,
  },
  recieveAlertsWhen: {
    top: 261,
    left: 66,
    width: 281,
    height: 15,
  },
  permissions: {
    left: 46,
    width: 232,
    height: 27,
    top: 328,
  },
  settingsAndPrefernecePageChild3: {
    top: 422,
    left: 25,
    borderRadius: Border.br_mini,
  },
  theme: {
    top: 440,
    left: 41,
    width: 194,
    height: 28,
  },
  chooseBetweenLight: {
    top: 476,
    left: 57,
    width: 301,
    height: 19,
  },
  rectangleView: {
    top: 530,
    backgroundColor: Color.colorTeal_200,
    height: 93,
    width: 316,
    left: 25,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  userIcon: {
    top: 558,
    overflow: "hidden",
  },
  dataPreferences: {
    top: 553,
    left: 53,
    width: 277,
    height: 31,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  manageAllShared: {
    top: 588,
    left: 67,
    width: 251,
    height: 16,
    fontSize: FontSize.size_mini,
    color: Color.schemesOnPrimary,
  },
  playArrowIcon: {
    top: 573,
    left: 314,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rectanglePressable: {
    left: 58,
    top: 658,
  },
  logOut: {
    marginLeft: -92.15,
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.inriaSerifRegular,
    width: 182,
    height: 33,
    top: 658,
  },
  boldIcon: {
    top: 115,
  },
  playArrowIcon1: {
    top: 125,
    left: 306,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  pickerButtonIcon: {
    top: 445,
  },
  playArrowIcon2: {
    top: 455,
    left: 313,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  playArrowIcon3: {
    top: 243,
    left: 316,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  creditCardIcon: {
    top: 228,
  },
  playArrow: {
    left: 311,
    top: 344,
  },
  frameIcon: {
    top: 725,
    left: 4,
    width: 371,
    height: 77,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  settingsAndPrefernecePageChild4: {
    top: 94,
    left: 375,
    borderRadius: Border.br_mini,
  },
  settingsAndPrefernecePageChild5: {
    top: 180,
    width: 364,
    height: 618,
    borderRadius: Border.br_mini,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsAndPrefernecePageChild6: {
    top: 184,
    left: 20,
    height: 65,
    borderWidth: 1,
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderStyle: "solid",
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_3xs,
    width: 316,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsAndPrefernecePageChild7: {
    top: 271,
    left: 26,
  },
  checkBoxIcon: {
    top: 204,
    left: 296,
    width: 23,
    height: 24,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  english: {
    top: 203,
    left: 34,
    width: 112,
    height: 30,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_7xl,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsAndPrefernecePageChild8: {
    top: 344,
    left: 25,
  },
  image25Icon: {
    top: 355,
    width: 62,
    height: 41,
    left: 47,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  text: {
    top: 294,
    left: 55,
    width: 82,
    height: 30,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsAndPrefernecePageChild9: {
    top: 563,
  },
  checkBoxOutlineBlankIcon: {
    top: 583,
  },
  settingsAndPrefernecePageChild10: {
    top: 490,
    left: 25,
  },
  settingsAndPrefernecePageChild11: {
    top: 417,
    left: 25,
  },
  text1: {
    top: 429,
    left: 52,
  },
  settingsAndPrefernecePageChild12: {
    top: 722,
    left: 69,
    borderRadius: Border.br_mini,
  },
  continue: {
    top: 729,
    left: 94,
    width: 178,
    height: 30,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_7xl,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsAndPrefernecePageChild13: {
    top: 636,
  },
  settingsAndPrefernecePageChild14: {
    top: 352,
    width: 51,
    height: 30,
  },
  checkBoxOutlineBlankIcon1: {
    top: 291,
  },
  checkBoxOutlineBlankIcon2: {
    top: 657,
  },
  checkBoxOutlineBlankIcon3: {
    top: 365,
  },
  checkBoxOutlineBlankIcon4: {
    top: 509,
  },
  checkBoxOutlineBlankIcon5: {
    top: 436,
  },
  text2: {
    top: 506,
    left: 47,
  },
  text3: {
    top: 574,
    left: 51,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  text4: {
    top: 647,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_7xl,
  },
  settingsAndPrefernecePage: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 796,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
});

export default SETTINGSANDPREFERNECEPAGE1;
