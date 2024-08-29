import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Life = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.life}>
      <Image
        style={[styles.lifeChild, styles.lifeChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
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
      <View style={[styles.rectangleParent, styles.lifeChildPosition]}>
        <Image
          style={[styles.frameChild, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-321.png")}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <Text style={[styles.history, styles.profileTypo]}>History</Text>
        <Text style={[styles.transac, styles.checkPosition]}>Transac...</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={[styles.wrapper1, styles.wrapper1Position]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper2, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <View style={[styles.frameItem, styles.wrapper1Position]} />
        <Pressable
          style={[styles.wrapper3, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.lifeInsurance, styles.checkTypo]}>
        Life Insurance
      </Text>
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon7, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left2.png")}
        />
      </Pressable>
      <View style={styles.lifeItem} />
      <Text style={[styles.croreTermLife, styles.croreTermLifePosition]}>
        ₹ 1 Crore Term Life Insurance
      </Text>
      <Text style={styles.startingAt499month}>Starting at ₹499/month</Text>
      <View style={styles.lifeInner} />
      <Text style={[styles.calculateYourCover, styles.croreTermLifePosition]}>
        Calculate your cover amount
      </Text>
      <Text style={[styles.dateOfBirth, styles.dateOfBirthTypo]}>
        Date of Birth
      </Text>
      <View style={[styles.rectangleView, styles.lifeChild2Layout]} />
      <Text style={[styles.ddmmyyyy, styles.ddmmyyyyTypo]}>DD/MM/YYYY</Text>
      <View style={styles.lifeChild1} />
      <Text style={[styles.annualIncome, styles.dateOfBirthTypo]}>
        Annual Income
      </Text>
      <View style={[styles.lifeChild2, styles.lifeChild2Layout]} />
      <Text style={[styles.text, styles.textTypo]}>₹</Text>
      <Text style={[styles.eg1200000, styles.textTypo]}>Eg: ₹ 12,00,000</Text>
      <Text style={[styles.thisWayWe, styles.ddmmyyyyTypo]}>
        This way we can calculate your cover amount.
      </Text>
      <Text style={[styles.check, styles.checkTypo]}>CHECK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lifeChildPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
  },
  homeTypo: {
    height: 20,
    fontSize: FontSize.size_smi,
    top: 43,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  checkPosition: {
    left: 143,
    textAlign: "left",
  },
  wrapper1Position: {
    top: 13,
    position: "absolute",
  },
  checkTypo: {
    fontWeight: "900",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  croreTermLifePosition: {
    left: 20,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  dateOfBirthTypo: {
    fontFamily: FontFamily.interBold,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  lifeChild2Layout: {
    height: 44,
    width: 319,
    borderColor: Color.miscellaneousBarBorder,
    left: 24,
    backgroundColor: Color.schemesOnPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  ddmmyyyyTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.miscellaneousBarBorder,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    top: 517,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  lifeChild: {
    top: 0,
    height: 156,
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
  frameChild: {
    left: 165,
    top: 11,
    width: 25,
    position: "absolute",
  },
  rectanglePressable: {
    left: 234,
    top: 11,
    width: 25,
    position: "absolute",
  },
  home: {
    width: 38,
    textAlign: "left",
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
    width: 63,
    height: 20,
    fontSize: FontSize.size_smi,
    top: 43,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  cards: {
    left: 93,
    width: 38,
    textAlign: "left",
  },
  wrapper1: {
    left: 292,
    height: 31,
    width: 25,
  },
  wrapper2: {
    left: 101,
    top: 11,
    width: 25,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTurquoise,
    height: 32,
    width: 38,
    left: 31,
  },
  wrapper3: {
    left: 37,
    top: 14,
    position: "absolute",
  },
  rectangleParent: {
    top: 723,
    backgroundColor: Color.colorDarkslategray_100,
    height: 77,
    overflow: "hidden",
  },
  lifeInsurance: {
    top: 119,
    left: 29,
    fontFamily: FontFamily.poppinsBlack,
    textAlign: "center",
    width: 205,
    height: 36,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    color: Color.schemesOnPrimary,
  },
  icon7: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 5,
    top: 121,
    width: 30,
    height: 26,
    position: "absolute",
  },
  lifeItem: {
    top: 187,
    left: 7,
    backgroundColor: Color.colorDarkcyan,
    borderColor: Color.colorDarkcyan,
    width: 344,
    height: 124,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  croreTermLife: {
    top: 205,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    width: 276,
    color: Color.schemesOnPrimary,
    left: 20,
  },
  startingAt499month: {
    top: 277,
    left: 11,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#98d5de",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  lifeInner: {
    top: 325,
    left: 8,
    borderRadius: Border.br_xl,
    width: 343,
    height: 306,
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  calculateYourCover: {
    top: 330,
    fontFamily: FontFamily.poppinsBold,
    width: 324,
    color: Color.miscellaneousFloatingTabTextUnselected,
    left: 20,
    fontWeight: "700",
  },
  dateOfBirth: {
    top: 407,
    left: 25,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  rectangleView: {
    top: 431,
  },
  ddmmyyyy: {
    top: 443,
    left: 42,
    color: Color.miscellaneousBarBorder,
    fontSize: FontSize.size_base,
  },
  lifeChild1: {
    top: 580,
    left: 52,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGainsboro_100,
    width: 245,
    height: 40,
    position: "absolute",
  },
  annualIncome: {
    top: 480,
    left: 26,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  lifeChild2: {
    top: 504,
  },
  text: {
    left: 41,
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  eg1200000: {
    left: 63,
    color: Color.miscellaneousBarBorder,
  },
  thisWayWe: {
    top: 553,
    left: 30,
    fontSize: FontSize.size_sm,
    width: 331,
    color: Color.miscellaneousBarBorder,
  },
  check: {
    top: 588,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBlack,
    color: "#6b6b75",
    left: 143,
    textAlign: "left",
  },
  life: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Life;
