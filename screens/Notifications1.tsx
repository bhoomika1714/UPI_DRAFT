import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notifications1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <Image
        style={[styles.notificationsChild, styles.rectangleParentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Help1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <Text style={styles.notifications1}>Notifications</Text>
      <Pressable style={styles.frame} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-61.png")}
        />
      </Pressable>
      <View style={[styles.notificationsItem, styles.notificationsLayout]} />
      <View style={[styles.notificationsInner, styles.notificationsLayout]} />
      <View style={styles.rectangleView} />
      <View style={[styles.notificationsChild1, styles.notificationsLayout]} />
      <Text style={[styles.dontMissOut, styles.dontMissOutTypo]}>
        Don’t miss out on amazing new rewards from top brands.
      </Text>
      <Text
        style={[styles.paymentRequestOf, styles.getUpToTypo]}
      >{`Payment request of ₹299 from Pratham Taxi Service. `}</Text>
      <Text style={[styles.getUpTo, styles.getUpToTypo]}>
        Get up to ₹149 guaranteed Cashback on every referral.
      </Text>
      <Text style={[styles.paymentRequestOf1, styles.dontMissOutTypo]}>
        Payment request of ₹1299 from Myntra.
      </Text>
      <Text style={[styles.goToThe, styles.payTypo]}>
        Go to the rewards section now!
      </Text>
      <Text style={[styles.payNow, styles.payTypo]}>Pay now.</Text>
      <Text style={[styles.inviteYourFriends, styles.payTypo]}>
        Invite your friends to UPayIt. Refer now.
      </Text>
      <Text style={[styles.payNow1, styles.payTypo]}>Pay now.</Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-68.png")}
      />
      <View style={[styles.notificationsChild2, styles.fill0IconLayout]} />
      <Image
        style={[styles.notificationsChild3, styles.wrapperLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <Pressable
          style={[styles.rectanglePressable, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Text style={[styles.history, styles.homeTypo]}>History</Text>
        <Text style={[styles.loans, styles.homeTypo]}>Loans</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={[styles.wrapper1, styles.wrapperLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper2, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper3, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <View
        style={[styles.notificationsChild4, styles.notificationsChildLayout]}
      />
      <View
        style={[styles.notificationsChild5, styles.notificationsChildLayout]}
      />
      <Image
        style={[styles.featuredSeasonalAndGifts16Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/featured-seasonal-and-gifts-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.diversity316dp006270Fill0Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/diversity-3-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.notificationsChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.train16dp006270Fill0Wght30Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/train-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  wrapperLayout1: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  notificationsLayout: {
    height: 71,
    width: 348,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  dontMissOutTypo: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    left: 54,
    position: "absolute",
  },
  getUpToTypo: {
    width: 291,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    left: 54,
    position: "absolute",
  },
  payTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    position: "absolute",
  },
  fill0IconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 44,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  notificationsChildLayout: {
    height: 35,
    width: 35,
    left: 12,
    position: "absolute",
  },
  notificationsChild: {
    top: 0,
    height: 156,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 306,
  },
  container: {
    left: 276,
  },
  notifications1: {
    top: 99,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    width: 223,
    height: 48,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    left: 54,
    position: "absolute",
  },
  frame: {
    top: 104,
    height: 38,
    width: 38,
    left: 15,
    position: "absolute",
  },
  notificationsItem: {
    top: 179,
    left: 6,
    height: 71,
  },
  notificationsInner: {
    top: 442,
    left: 4,
  },
  rectangleView: {
    top: 345,
    height: 85,
    width: 348,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    left: 6,
    position: "absolute",
  },
  notificationsChild1: {
    top: 262,
    left: 6,
    height: 71,
  },
  dontMissOut: {
    top: 193,
    width: 304,
    textAlign: "left",
  },
  paymentRequestOf: {
    top: 450,
  },
  getUpTo: {
    top: 360,
  },
  paymentRequestOf1: {
    top: 273,
    textAlign: "center",
  },
  goToThe: {
    top: 228,
    left: 54,
    fontSize: FontSize.size_xs,
  },
  payNow: {
    top: 490,
    left: 55,
  },
  inviteYourFriends: {
    top: 400,
    left: 53,
  },
  payNow1: {
    top: 299,
    left: 54,
    fontSize: FontSize.size_xs,
  },
  rectangleIcon: {
    top: 274,
    left: 10,
    width: 40,
    height: 40,
    position: "absolute",
  },
  notificationsChild2: {
    top: 12,
    left: 241,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkseagreen,
  },
  notificationsChild3: {
    left: 246,
  },
  rectanglePressable: {
    left: 234,
    top: 11,
    width: 25,
  },
  home: {
    left: 31,
    textAlign: "left",
    width: 38,
  },
  profile: {
    left: 286,
    width: 42,
    textAlign: "left",
  },
  history: {
    left: 223,
    width: 47,
    textAlign: "left",
  },
  loans: {
    left: 145,
    width: 63,
    textAlign: "center",
  },
  cards: {
    left: 93,
    textAlign: "left",
    width: 38,
  },
  wrapper1: {
    left: 292,
    top: 13,
  },
  wrapper2: {
    left: 101,
    top: 11,
    width: 25,
  },
  wrapper3: {
    left: 37,
    top: 14,
  },
  vectorIcon: {
    left: 168,
    top: 11,
    width: 25,
  },
  rectangleParent: {
    top: 723,
    backgroundColor: Color.colorDarkslategray_100,
    height: 77,
    overflow: "hidden",
  },
  notificationsChild4: {
    top: 196,
    borderWidth: 2,
    borderColor: Color.colorDarkslategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    width: 35,
    left: 12,
    backgroundColor: Color.schemesOnPrimary,
  },
  notificationsChild5: {
    top: 361,
    borderWidth: 2,
    borderColor: Color.colorDarkslategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    width: 35,
    left: 12,
    backgroundColor: Color.schemesOnPrimary,
  },
  featuredSeasonalAndGifts16Icon: {
    top: 199,
    left: 15,
  },
  diversity316dp006270Fill0Icon: {
    top: 363,
    left: 15,
  },
  ellipseIcon: {
    top: 452,
    width: 35,
    left: 12,
  },
  train16dp006270Fill0Wght30Icon: {
    top: 454,
    left: 15,
  },
  notifications: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notifications1;
