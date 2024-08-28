import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MobileRecharge = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mobileRecharge}>
      <Image
        style={[styles.mobileRechargeChild, styles.rectangleParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-25.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("Notifications7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-26.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("Help4")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-27.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-28.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <Pressable
          style={[styles.rectanglePressable, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Transactions")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-324.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper1, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <Text style={[styles.history, styles.profileTypo]}>History</Text>
        <Text style={[styles.transac, styles.homeTypo]}>Transac...</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={[styles.wrapper2, styles.wrapper2Position]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper3, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.wrapper2Position]} />
        <Pressable
          style={[styles.wrapper4, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.mobileRecharge1}>Mobile Recharge</Text>
      <View style={[styles.mobileRechargeItem, styles.mobileLayout]} />
      <Image
        style={[styles.search24dp434343Fill0Wght4Icon, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/search-24dp-434343-fill0-wght400-grad0-opsz24-1.png")}
      />
      <Text style={styles.searchByName}>Search by Name or Num...</Text>
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon8, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left13.png")}
        />
      </Pressable>
      <View style={[styles.mobileRechargeInner, styles.mobileLayout]} />
      <View style={[styles.lineView, styles.mobileChildLayout1]} />
      <View style={[styles.mobileRechargeChild1, styles.mobileChildLayout1]} />
      <View style={[styles.mobileRechargeChild2, styles.mobileChildLayout1]} />
      <Text style={styles.seeAll}>See All....</Text>
      <Image
        style={[styles.rectangleIcon, styles.mobileLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-132.png")}
      />
      <Text style={styles.allContacts}>All Contacts</Text>
      <Image
        style={[styles.mobileRechargeChild3, styles.mobileChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-176.png")}
      />
      <Image
        style={[styles.mobileRechargeChild4, styles.mobileChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-177.png")}
      />
      <Image
        style={[styles.mobileRechargeChild5, styles.mobileChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-177.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>+91 9955120513</Text>
      <Text style={[styles.text1, styles.textTypo1]}>+91 7135888959</Text>
      <Text style={[styles.text2, styles.textTypo1]}>+91 7135888959</Text>
      <Text style={[styles.text3, styles.textTypo]}>06/08</Text>
      <Text style={[styles.text4, styles.textTypo]}>11/06</Text>
      <Text style={[styles.text5, styles.textTypo]}>13/04</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 25,
    position: "absolute",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
  },
  homeTypo: {
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 43,
    position: "absolute",
  },
  profileTypo: {
    top: 44,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  wrapper2Position: {
    top: 13,
    position: "absolute",
  },
  mobileLayout: {
    width: 344,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mobileChildLayout1: {
    height: 1,
    width: 345,
    borderTopWidth: 1,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    borderStyle: "solid",
    position: "absolute",
  },
  mobileChildLayout: {
    height: 30,
    left: 27,
    width: 30,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_mini,
    left: 87,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.miscellaneousTabUnselected,
    left: 283,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  mobileRechargeChild: {
    top: 0,
    height: 156,
  },
  wrapper: {
    left: 246,
    width: 20,
    top: 15,
    height: 25,
  },
  container: {
    left: 306,
    width: 20,
    top: 15,
    height: 25,
  },
  frame: {
    left: 276,
    width: 20,
    top: 15,
    height: 25,
  },
  rectanglePressable: {
    left: 165,
    top: 11,
    width: 25,
    position: "absolute",
  },
  wrapper1: {
    left: 234,
    top: 11,
    width: 25,
    position: "absolute",
  },
  home: {
    width: 38,
    left: 31,
  },
  profile: {
    left: 286,
    width: 42,
  },
  history: {
    left: 223,
    width: 47,
  },
  transac: {
    left: 143,
    width: 63,
  },
  cards: {
    left: 93,
    width: 38,
  },
  wrapper2: {
    left: 292,
    height: 31,
    width: 25,
  },
  wrapper3: {
    left: 101,
    top: 11,
    width: 25,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTurquoise,
    height: 32,
    width: 38,
    left: 31,
  },
  wrapper4: {
    left: 37,
    top: 14,
    position: "absolute",
    width: 25,
  },
  rectangleParent: {
    top: 723,
    backgroundColor: Color.colorDarkslategray_100,
    height: 77,
    overflow: "hidden",
  },
  mobileRecharge1: {
    top: 119,
    left: 29,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    width: 221,
    height: 36,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  mobileRechargeItem: {
    top: 177,
    left: 7,
    borderRadius: Border.br_11xl,
    height: 44,
    backgroundColor: Color.schemesOnPrimary,
    width: 344,
  },
  search24dp434343Fill0Wght4Icon: {
    top: 187,
    left: 22,
    width: 24,
  },
  searchByName: {
    top: 188,
    left: 57,
    color: Color.colorGainsboro_200,
    width: 254,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  icon8: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 5,
    top: 121,
    height: 26,
    width: 30,
    position: "absolute",
  },
  mobileRechargeInner: {
    top: 232,
    borderRadius: Border.br_xl,
    height: 242,
    left: 8,
    backgroundColor: Color.schemesOnPrimary,
    width: 344,
  },
  lineView: {
    top: 295,
    left: 8,
  },
  mobileRechargeChild1: {
    top: 358,
    left: 6,
  },
  mobileRechargeChild2: {
    top: 423,
    left: 8,
  },
  seeAll: {
    top: 436,
    left: 135,
    color: Color.miscellaneousAlertMenuActionSheetSeparators,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  rectangleIcon: {
    top: 486,
    height: 237,
    left: 8,
  },
  allContacts: {
    top: 503,
    left: 28,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  mobileRechargeChild3: {
    top: 251,
  },
  mobileRechargeChild4: {
    top: 377,
  },
  mobileRechargeChild5: {
    top: 314,
  },
  text: {
    top: 260,
  },
  text1: {
    top: 383,
  },
  text2: {
    top: 319,
  },
  text3: {
    top: 274,
  },
  text4: {
    top: 337,
  },
  text5: {
    top: 401,
  },
  mobileRecharge: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MobileRecharge;
