import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Insurance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insurance}>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <Pressable
          style={[styles.wrapper, styles.frameLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Text style={[styles.history, styles.homeTypo]}>History</Text>
        <Text style={styles.loans}>Loans</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={[styles.container, styles.containerPosition]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.containerPosition]} />
        <Pressable
          style={[styles.rectanglePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Image
        style={[styles.insuranceChild, styles.insuranceChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-162.png")}
      />
      <View style={[styles.insuranceItem, styles.insuranceBg]} />
      <Pressable
        style={[styles.life, styles.carPosition]}
        onPress={() => navigation.navigate("Life1")}
      >
        <Text style={styles.carTypo}>Life</Text>
      </Pressable>
      <Pressable
        style={[styles.ellipsePressable, styles.insuranceChildLayout]}
        onPress={() => navigation.navigate("Life1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
      </Pressable>
      <Image
        style={[styles.insuranceInner, styles.insurancePosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Text style={styles.insurance1}>Insurance</Text>
      <Image
        style={[styles.ellipseIcon, styles.insurancePosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.insuranceChild1, styles.insurancePosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.insuranceChild2, styles.insuranceChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.insuranceChild3, styles.insuranceChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.insuranceChild4, styles.insuranceChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.insuranceChild5, styles.insuranceChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Text style={[styles.car, styles.carTypo]}>Car</Text>
      <Text style={[styles.health, styles.carTypo]}>Health</Text>
      <Text style={[styles.bike, styles.carTypo]}>Bike</Text>
      <Text style={[styles.credit, styles.carTypo]}>Credit</Text>
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon5, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left13.png")}
        />
      </Pressable>
      <Image
        style={[styles.motorcycle16dp006270Fill0WIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/motorcycle-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.heartCheck16dp006270Fill0Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/heart-check-16dp-006270-fill0-wght300-grad0-opsz20-11.png")}
      />
      <Image
        style={[styles.healthAndSafety16dp006270Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/health-and-safety-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.noCrash16dp006270Fill0WghIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/no-crash-16dp-006270-fill0-wght300-grad0-opsz20-11.png")}
      />
      <Image
        style={[styles.carCrash16dp006270Fill0WgIcon, styles.fill0IconPosition]}
        resizeMode="cover"
        source={require("../assets/car-crash-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.store16dp006270Fill0Wght30Icon,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/store-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.creditScore16dp006270Fill0Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/credit-score-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.travel16dp006270Fill0Wght3Icon,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/travel-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Text style={[styles.travel, styles.shopTypo]}>Travel</Text>
      <Text style={[styles.shop, styles.shopTypo]}>Shop</Text>
      <Text style={[styles.accident, styles.shopTypo]}>Accident</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={styles.insuranceChild6}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={[styles.wrapper1, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper2, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Help1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper3, styles.wrapperLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.insuranceChild7, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet14, styles.walletPosition]}>Wallet</Text>
      <Pressable
        style={[styles.insuranceChild22, styles.insuranceBg]}
        onPress={() => navigation.navigate("Ai")}
      />
      <Image
        style={[
          styles.robot224dp006270Fill0WghtIcon,
          styles.insuranceChildPosition1,
        ]}
        resizeMode="cover"
        source={require("../assets/robot-2-24dp-006270-fill0-wght300-grad0-opsz24-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
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
    top: 44,
    position: "absolute",
  },
  containerPosition: {
    top: 13,
    position: "absolute",
  },
  insuranceChildLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  insuranceBg: {
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  carPosition: {
    top: 292,
    position: "absolute",
  },
  insurancePosition: {
    top: 356,
    height: 35,
    width: 35,
    position: "absolute",
  },
  insuranceChildPosition: {
    top: 241,
    height: 35,
    width: 35,
    position: "absolute",
  },
  carTypo: {
    width: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  fill0IconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  fill0IconPosition: {
    top: 358,
    height: 30,
    width: 30,
    position: "absolute",
  },
  shopTypo: {
    top: 408,
    width: 57,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    position: "absolute",
  },
  wrapperLayout: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 28,
    width: 165,
    borderRadius: Border.br_xs,
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  textTypo: {
    height: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  upiIdLayout: {
    width: 45,
    left: 36,
    fontFamily: FontFamily.interRegular,
  },
  walletPosition: {
    top: 103,
    height: 21,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  insuranceChildPosition1: {
    left: 305,
    top: 653,
  },
  wrapper: {
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
  loans: {
    left: 145,
    width: 63,
    textAlign: "center",
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 44,
    position: "absolute",
  },
  cards: {
    left: 93,
    width: 38,
  },
  container: {
    left: 292,
    height: 31,
    width: 25,
  },
  frame: {
    left: 101,
    top: 11,
    width: 25,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorTurquoise,
    height: 32,
    borderRadius: Border.br_3xs,
    width: 38,
    left: 31,
  },
  rectanglePressable: {
    left: 37,
    top: 14,
    position: "absolute",
  },
  vectorIcon: {
    left: 168,
    top: 11,
    width: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 723,
    backgroundColor: Color.colorDarkslategray_100,
    height: 77,
    overflow: "hidden",
  },
  insuranceChild: {
    left: 305,
    top: 653,
    borderRadius: Border.br_3xs,
  },
  insuranceItem: {
    top: 177,
    left: 5,
    borderRadius: Border.br_mini,
    width: 348,
    height: 525,
  },
  life: {
    left: 14,
  },
  ellipsePressable: {
    left: 27,
    top: 242,
  },
  insuranceInner: {
    left: 102,
  },
  insurance1: {
    top: 187,
    left: 51,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  ellipseIcon: {
    left: 169,
  },
  insuranceChild1: {
    left: 29,
  },
  insuranceChild2: {
    left: 169,
  },
  insuranceChild3: {
    left: 102,
  },
  insuranceChild4: {
    left: 241,
  },
  insuranceChild5: {
    left: 306,
  },
  car: {
    left: 158,
    top: 292,
    position: "absolute",
  },
  health: {
    left: 91,
    top: 292,
    position: "absolute",
  },
  bike: {
    left: 230,
    top: 292,
    position: "absolute",
  },
  credit: {
    left: 295,
    top: 292,
    position: "absolute",
  },
  icon5: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 9,
    top: 197,
    width: 30,
    height: 20,
    position: "absolute",
  },
  motorcycle16dp006270Fill0WIcon: {
    left: 244,
    top: 244,
    height: 30,
  },
  heartCheck16dp006270Fill0Icon: {
    top: 246,
    left: 29,
  },
  healthAndSafety16dp006270Icon: {
    top: 245,
    left: 105,
  },
  noCrash16dp006270Fill0WghIcon: {
    left: 172,
    top: 242,
  },
  carCrash16dp006270Fill0WgIcon: {
    left: 105,
  },
  store16dp006270Fill0Wght30Icon: {
    left: 171,
  },
  creditScore16dp006270Fill0Icon: {
    left: 310,
    top: 244,
    height: 30,
  },
  travel16dp006270Fill0Wght3Icon: {
    left: 31,
  },
  travel: {
    left: 16,
  },
  shop: {
    left: 158,
  },
  accident: {
    left: 91,
  },
  rectangleIcon: {
    top: 0,
    height: 156,
  },
  insuranceChild6: {
    top: 57,
    left: 249,
    width: 80,
    height: 80,
    position: "absolute",
  },
  wrapper1: {
    left: 246,
  },
  wrapper2: {
    left: 306,
  },
  wrapper3: {
    left: 276,
  },
  rectangleView: {
    top: 68,
    left: 29,
  },
  text: {
    top: 73,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    height: 21,
    fontSize: FontSize.size_sm,
    left: 91,
    width: 35,
  },
  insuranceChild7: {
    top: 99,
    left: 30,
  },
  upiId1: {
    textDecoration: "underline",
  },
  upiId: {
    top: 71,
    height: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
    width: 45,
    left: 36,
    color: Color.colorDarkslategray_100,
  },
  wallet: {
    width: 45,
    left: 36,
    fontFamily: FontFamily.interRegular,
  },
  wallet14: {
    left: 80,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    width: 58,
  },
  insuranceChild22: {
    top: 650,
    left: 302,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 3,
    width: 41,
    height: 41,
    borderRadius: Border.br_3xs,
  },
  robot224dp006270Fill0WghtIcon: {
    width: 34,
    height: 34,
    position: "absolute",
  },
  insurance: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Insurance;
