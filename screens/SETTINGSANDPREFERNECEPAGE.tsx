import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SETTINGSANDPREFERNECEPAGE = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.settingsAndPrefernecePage}>
      <View style={styles.settingsAndPrefernecePageChild} />
      <View style={styles.settingsAndPrefernecePageItem} />
      <Image
        style={[
          styles.settingsAndPrefernecePageInner,
          styles.rectangleChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Image
        style={[styles.alignLeftIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/align-left.png")}
      />
      <Pressable
        style={[styles.arrowLeft, styles.arrowLeftPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrow-left2.png")}
        />
      </Pressable>
      <Text
        style={[styles.settingsAndPreferences, styles.logOutFlexBox]}
      >{`Settings And  Preferences `}</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Image
        style={[
          styles.settingsAndPrefernecePageChild1,
          styles.rectangleChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={styles.languages}>Languages</Text>
      <Text style={[styles.chosenLanguageEnglish, styles.manageTypo]}>
        Chosen language: English
      </Text>
      <Image
        style={[
          styles.settingsAndPrefernecePageChild2,
          styles.rectangleChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Text style={[styles.billNotifications, styles.themeTypo]}>
        Bill Notifications
      </Text>
      <Text style={[styles.recieveAlertsWhen, styles.recieveAlertsWhenTypo]}>
        Recieve alerts when bill is generated
      </Text>
      <Text style={[styles.permissions, styles.themeTypo]}>Permissions</Text>
      <Text style={[styles.manageDataSharing, styles.manageTypo]}>
        Manage data sharing settings
      </Text>
      <Image
        style={[
          styles.settingsAndPrefernecePageChild3,
          styles.rectangleChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Text style={[styles.theme, styles.themeTypo]}>Theme</Text>
      <Text style={[styles.chooseBetweenLight, styles.recieveAlertsWhenTypo]}>
        Choose between light and dark mode
      </Text>
      <View style={[styles.rectangleView, styles.rectangleChildLayout]} />
      <Image
        style={[styles.userIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Text style={[styles.dataPreferences, styles.themeTypo]}>
        Data Preferences
      </Text>
      <Text style={[styles.manageAllShared, styles.manageTypo]}>
        Manage all shared information
      </Text>
      <Image
        style={[styles.playArrowIcon, styles.playIconLayout]}
        contentFit="cover"
        source={require("../assets/play-arrow.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.logOutPosition]}
        onPress={() => navigation.navigate("LoginPage")}
      />
      <Text style={[styles.logOut, styles.logOutPosition]}>LOG OUT</Text>
      <Image
        style={[styles.boldIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/bold.png")}
      />
      <Pressable
        style={[styles.playArrow, styles.playIconLayout]}
        onPress={() => navigation.navigate("SETTINGSANDPREFERNECEPAGE1")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/play-arrow1.png")}
        />
      </Pressable>
      <Image
        style={[styles.pickerButtonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/picker-button.png")}
      />
      <Image
        style={[styles.playArrowIcon1, styles.playIconLayout]}
        contentFit="cover"
        source={require("../assets/play-arrow.png")}
      />
      <Image
        style={[styles.playArrowIcon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/play-arrow.png")}
      />
      <Image
        style={[styles.creditCardIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/credit-card.png")}
      />
      <Pressable
        style={[styles.playArrow1, styles.playIconLayout]}
        onPress={() => navigation.navigate("PermissionsPage")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/play-arrow.png")}
        />
      </Pressable>
      <Image
        style={[styles.frameIcon, styles.arrowLeftPosition]}
        contentFit="cover"
        source={require("../assets/frame-14.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleChildLayout: {
    height: 90,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  iconLayout2: {
    height: 38,
    width: 38,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  arrowLeftPosition: {
    left: 4,
    position: "absolute",
  },
  iconLayout1: {
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
  },
  manageTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkcyan,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  themeTypo: {
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
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
    color: Color.colorDarkcyan,
    textAlign: "center",
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
  },
  logOutPosition: {
    top: 673,
    left: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  iconLayout: {
    left: 40,
    height: 38,
    width: 38,
  },
  iconPosition: {
    top: 276,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  settingsAndPrefernecePageChild: {
    top: 2,
    left: 0,
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    width: 360,
    position: "absolute",
    height: 800,
  },
  settingsAndPrefernecePageItem: {
    top: 8,
    left: -1,
    backgroundColor: Color.colorDarkcyan,
    width: 362,
    height: 81,
    position: "absolute",
  },
  settingsAndPrefernecePageInner: {
    top: 354,
    width: 325,
    left: "50%",
    height: 90,
    borderRadius: Border.br_mini,
    marginLeft: -157.15,
  },
  alignLeftIcon: {
    top: 375,
    left: 36,
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft: {
    top: 36,
    width: 40,
    height: 29,
  },
  settingsAndPreferences: {
    top: 27,
    fontSize: FontSize.size_11xl,
    width: 396,
    height: 76,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.schemesOnPrimary,
    left: 38,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rectangleIcon: {
    top: 158,
    width: 325,
    left: "50%",
    height: 90,
    borderRadius: Border.br_mini,
    marginLeft: -157.15,
  },
  settingsAndPrefernecePageChild1: {
    top: 214,
    left: 21,
    width: 318,
  },
  languages: {
    top: 168,
    left: 62,
    height: 24,
    width: 203,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_6xl,
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
    top: 204,
    left: 88,
    height: 25,
    width: 203,
    fontSize: FontSize.size_mini,
  },
  settingsAndPrefernecePageChild2: {
    top: 254,
    width: 325,
    left: "50%",
    height: 90,
    borderRadius: Border.br_mini,
    marginLeft: -157.15,
  },
  billNotifications: {
    top: 267,
    left: 60,
    width: 250,
    height: 20,
  },
  recieveAlertsWhen: {
    top: 300,
    left: 70,
    width: 281,
    height: 15,
  },
  permissions: {
    top: 370,
    left: 46,
    width: 232,
    height: 27,
  },
  manageDataSharing: {
    top: 401,
    left: 75,
    width: 246,
    height: 32,
  },
  settingsAndPrefernecePageChild3: {
    top: 458,
    width: 325,
    left: "50%",
    height: 90,
    borderRadius: Border.br_mini,
    marginLeft: -157.15,
  },
  theme: {
    top: 476,
    width: 194,
    height: 28,
    left: 38,
  },
  chooseBetweenLight: {
    top: 507,
    left: 63,
    width: 301,
    height: 19,
  },
  rectangleView: {
    marginLeft: -159.75,
    top: 565,
    backgroundColor: Color.schemesOnPrimary,
    width: 325,
    left: "50%",
    height: 90,
    borderRadius: Border.br_mini,
  },
  userIcon: {
    top: 584,
    left: 38,
  },
  dataPreferences: {
    top: 580,
    left: 56,
    width: 277,
    height: 31,
  },
  manageAllShared: {
    top: 614,
    left: 73,
    width: 251,
    height: 16,
  },
  playArrowIcon: {
    top: 590,
    left: 314,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rectanglePressable: {
    marginLeft: -117.25,
    backgroundColor: Color.colorDarkslategray_200,
    width: 228,
    height: 47,
    borderRadius: Border.br_mini,
    top: 673,
  },
  logOut: {
    marginLeft: -90.25,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.inriaSerifRegular,
    width: 182,
    height: 33,
    textAlign: "center",
    color: Color.schemesOnPrimary,
  },
  boldIcon: {
    top: 177,
    left: 42,
  },
  playArrow: {
    left: 311,
    top: 182,
    position: "absolute",
  },
  pickerButtonIcon: {
    top: 483,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  playArrowIcon1: {
    top: 489,
    left: 317,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  playArrowIcon2: {
    left: 316,
    width: 24,
    height: 24,
  },
  creditCardIcon: {
    left: 40,
    height: 38,
    width: 38,
    overflow: "hidden",
  },
  playArrow1: {
    left: 315,
    top: 381,
    position: "absolute",
  },
  frameIcon: {
    top: 725,
    width: 371,
    height: 77,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  settingsAndPrefernecePage: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default SETTINGSANDPREFERNECEPAGE;
