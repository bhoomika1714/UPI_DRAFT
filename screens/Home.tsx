import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={styles.homeChild}
        resizeMode="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <View style={[styles.homeParent, styles.homeParentLayout]}>
        <Text style={[styles.home1, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Text style={[styles.history, styles.homeTypo]}>History</Text>
        <Text style={[styles.transac, styles.loansTypo]}>Transac...</Text>
        <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
      </View>
      <View style={[styles.homeParent, styles.homeParentLayout]}>
        <Text style={[styles.home1, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Text style={[styles.history, styles.homeTypo]}>History</Text>
        <Text style={[styles.transac, styles.loansTypo]}>Transac...</Text>
        <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Rewards")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-111.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.framePosition]}
        onPress={() => navigation.navigate("ReferralPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-19.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => navigation.navigate("Offers")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-111.png")}
        />
      </Pressable>
      <Text style={styles.rewards}>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rewards1}>Rewards</Text>
      </Text>
      <Text style={[styles.referrals, styles.offersTypo]}>Referrals</Text>
      <Text style={[styles.offers, styles.offersTypo]}>Offers</Text>
      <View style={[styles.homeItem, styles.rectangleLayout]} />
      <Text style={[styles.rechargeAndBills, styles.travelTypo]}>
        Recharge and Bills
      </Text>
      <Pressable
        style={[styles.viewAll, styles.viewPosition]}
        onPress={() => navigation.navigate("RechargeAndBills")}
      >
        <Text style={[styles.viewAll1, styles.viewTypo]}>View All</Text>
      </Pressable>
      <Pressable
        style={[styles.ellipsePressable, styles.homeChildLayout1]}
        onPress={() => navigation.navigate("MobileRecharge")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeInner, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.homeChild1, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.homeChild2, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Pressable
        style={[styles.mobileRecharge, styles.billPosition]}
        onPress={() => navigation.navigate("MobileRecharge")}
      >
        <Text style={styles.houseRentTypo}>Mobile Recharge</Text>
      </Pressable>
      <Text style={[styles.groceryBill, styles.houseRentTypo]}>
        Grocery Bill
      </Text>
      <Text style={[styles.waterBill, styles.dthTypo]}>Water Bill</Text>
      <Text style={[styles.dth, styles.dthTypo]}>DTH</Text>
      <Text style={[styles.houseRent, styles.houseRentTypo]}>House Rent</Text>
      <Image
        style={[styles.call16dp006270Fill0Wght300Icon, styles.fill0IconLayout3]}
        resizeMode="cover"
        source={require("../assets/call-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.grocery16dp006270Fill0WghtIcon, styles.fill0IconLayout3]}
        resizeMode="cover"
        source={require("../assets/grocery-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.waterDrop16dp006270Fill0WIcon, styles.fill0IconLayout3]}
        resizeMode="cover"
        source={require("../assets/water-drop-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.tv16dp006270Fill0Wght300GIcon, styles.fill0IconLayout3]}
        resizeMode="cover"
        source={require("../assets/tv-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[
          styles.house16dp006270Fill0Wght30Icon,
          styles.homeChildPosition1,
        ]}
        resizeMode="cover"
        source={require("../assets/house-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.travel, styles.travelTypo]}>Travel</Text>
      <Pressable
        style={[styles.viewAll2, styles.viewPosition]}
        onPress={() => navigation.navigate("Travel")}
      >
        <Text style={[styles.viewAll1, styles.viewTypo]}>View All</Text>
      </Pressable>
      <Image
        style={[styles.homeChild3, styles.homeChild3Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Pressable
        style={[styles.wrapper1, styles.homeChildPosition]}
        onPress={() => navigation.navigate("Trains1")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeChild4, styles.homeChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.homeChild5, styles.homeChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.homeChild6, styles.homeChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Text style={[styles.flights, styles.taxiPosition]}>Flights</Text>
      <Pressable
        style={[styles.train, styles.taxiPosition]}
        onPress={() => navigation.navigate("Trains1")}
      >
        <Text style={[styles.train1, styles.dthTypo]}>Train</Text>
      </Pressable>
      <Text style={[styles.taxi, styles.taxiPosition]}>Taxi</Text>
      <Text style={[styles.rentacar, styles.taxiPosition]}>RentACar</Text>
      <Text style={[styles.boat, styles.taxiPosition]}>Boat</Text>
      <Image
        style={[
          styles.flight16dp006270Fill0Wght3Icon,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/flight-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[
          styles.train16dp006270Fill0Wght30Icon,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/train-16dp-006270-fill0-wght300-grad0-opsz20-31.png")}
      />
      <Image
        style={[
          styles.train16dp006270Fill0Wght30Icon1,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/train-16dp-006270-fill0-wght300-grad0-opsz20-4.png")}
      />
      <Image
        style={[styles.carRental16dp006270Fill0WIcon, styles.homeChildPosition]}
        resizeMode="cover"
        source={require("../assets/car-rental-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[
          styles.directionsBoat16dp006270FiIcon,
          styles.homeChild3Position,
        ]}
        resizeMode="cover"
        source={require("../assets/directions-boat-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.componentChild, styles.homeItemBg]} />
        <Text style={[styles.insurance, styles.viewAll4Position]}>
          Insurance
        </Text>
        <Pressable
          style={[styles.viewAll4, styles.viewAll4Position]}
          onPress={() => navigation.navigate("Insurance")}
        >
          <Text style={[styles.viewAll5, styles.viewTypo]}>View All</Text>
        </Pressable>
        <Pressable
          style={[styles.life, styles.carPosition]}
          onPress={() => navigation.navigate("Life1")}
        >
          <Text style={styles.carTypo}>Life</Text>
        </Pressable>
        <Pressable
          style={[styles.wrapper2, styles.componentChildPosition]}
          onPress={() => navigation.navigate("Life1")}
        >
          <Image
            style={[styles.icon5, styles.componentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-45.png")}
          />
        </Pressable>
        <Image
          style={[styles.componentItem, styles.componentChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Image
          style={[styles.componentInner, styles.componentChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Image
          style={[styles.componentChild1, styles.componentChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Image
          style={[styles.componentChild2, styles.componentChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Text style={[styles.car, styles.carTypo]}>Car</Text>
        <Text style={[styles.health, styles.carTypo]}>Health</Text>
        <Text style={[styles.bike, styles.carTypo]}>Bike</Text>
        <Text style={[styles.credit, styles.carTypo]}>Credit</Text>
        <Image
          style={[
            styles.motorcycle16dp006270Fill0WIcon,
            styles.fill0IconLayout2,
          ]}
          resizeMode="cover"
          source={require("../assets/motorcycle-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.heartCheck16dp006270Fill0Icon,
            styles.fill0IconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/heart-check-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.healthAndSafety16dp006270Icon,
            styles.fill0IconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/health-and-safety-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.noCrash16dp006270Fill0WghIcon,
            styles.fill0IconLayout2,
          ]}
          resizeMode="cover"
          source={require("../assets/no-crash-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.creditScore16dp006270Fill0Icon,
            styles.fill0IconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/credit-score-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
      </View>
      <Image
        style={[styles.diversity316dp006270Fill0Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/diversity-3-16dp-006270-fill0-wght300-grad0-opsz20-21.png")}
      />
      <Text style={styles.others}>Others</Text>
      <View style={styles.robot224dp006270Fill0Wght} />
      <Image
        style={styles.robot224dp006270Fill0WghtIcon}
        resizeMode="cover"
        source={require("../assets/robot-2-24dp-006270-fill0-wght300-grad0-opsz24-1.png")}
      />
      <Image
        style={[styles.featuredSeasonalAndGifts16Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/featured-seasonal-and-gifts-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.sell16dp006270Fill0Wght300Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/sell-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Image
        style={styles.homeChild7}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper3, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Help1")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper4, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <View style={[styles.homeChild8, styles.homeChildLayout]} />
      <Text style={styles.text1}>*****</Text>
      <Pressable
        style={[styles.homeChild9, styles.homeChildLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.upiIdLayout]}>Wallet</Text>
      <View style={[styles.rectangleGroup, styles.homeParentLayout]}>
        <Pressable
          style={[styles.wrapper5, styles.wrapperPosition]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home3, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Text style={[styles.history, styles.homeTypo]}>History</Text>
        <Text style={[styles.loans, styles.loansTypo]}>Loans</Text>
        <Text style={[styles.cards2, styles.cardsTypo]}>Cards</Text>
        <Pressable
          style={[styles.wrapper6, styles.wrapperPosition]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper7, styles.wrapperPosition]}
          onPress={() => navigation.navigate("CardsPage")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <View style={styles.frameChild} />
        <Pressable
          style={[styles.wrapper8, styles.wrapperPosition]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.wrapperPosition]}
          resizeMode="cover"
          source={require("../assets/vector18.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeParentLayout: {
    overflow: "hidden",
    height: 75,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  loansTypo: {
    width: 63,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  cardsTypo: {
    left: 93,
    height: 20,
    width: 38,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  framePosition: {
    top: 642,
    height: 40,
    width: 40,
    position: "absolute",
  },
  offersTypo: {
    top: 640,
    color: Color.colorDarkslategray_100,
    height: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleLayout: {
    height: 125,
    width: 348,
    left: 6,
    position: "absolute",
  },
  travelTypo: {
    height: 30,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  viewPosition: {
    left: 279,
    position: "absolute",
  },
  viewTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
  },
  homeChildLayout1: {
    height: 35,
    width: 35,
  },
  billPosition: {
    top: 268,
    position: "absolute",
  },
  houseRentTypo: {
    height: 32,
    width: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
  },
  dthTypo: {
    height: 16,
    width: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
  },
  fill0IconLayout3: {
    width: 30,
    height: 30,
  },
  homeChildPosition1: {
    top: 217,
    position: "absolute",
  },
  homeChild3Position: {
    top: 359,
    position: "absolute",
  },
  homeChildPosition: {
    top: 358,
    position: "absolute",
  },
  taxiPosition: {
    top: 409,
    position: "absolute",
  },
  fill0IconPosition: {
    top: 361,
    width: 30,
    height: 30,
    position: "absolute",
  },
  homeItemBg: {
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
  },
  viewAll4Position: {
    top: "4.8%",
    position: "absolute",
  },
  carPosition: {
    top: "75.2%",
    position: "absolute",
  },
  componentChildPosition: {
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  componentChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  carTypo: {
    width: "16.38%",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
  },
  fill0IconLayout2: {
    width: "8.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "24%",
    overflow: "hidden",
    position: "absolute",
  },
  fill0IconLayout1: {
    bottom: "39.2%",
    top: "36.8%",
    width: "8.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "24%",
    overflow: "hidden",
    position: "absolute",
  },
  fill0IconLayout: {
    height: 37,
    width: 37,
    position: "absolute",
  },
  wrapperLayout1: {
    height: 25,
    width: 20,
    top: 16,
    position: "absolute",
  },
  homeChildLayout: {
    height: 28,
    width: 165,
    borderRadius: Border.br_xs,
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  upiIdLayout: {
    width: 45,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    height: 21,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  wrapperPosition: {
    height: 31,
    top: 11,
    position: "absolute",
  },
  homeChild: {
    top: 593,
    height: 132,
    width: 348,
    left: 6,
    position: "absolute",
  },
  home1: {
    width: 38,
    left: 31,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 43,
  },
  profile: {
    left: 286,
    width: 42,
    top: 44,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  history: {
    left: 223,
    width: 47,
    top: 44,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  transac: {
    left: 143,
    textAlign: "left",
    top: 43,
  },
  cards: {
    top: 43,
  },
  homeParent: {
    top: 1249,
    left: -427,
    backgroundColor: Color.colorMidnightblue,
    width: 360,
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 641,
    height: 40,
    width: 40,
    left: 15,
    position: "absolute",
  },
  container: {
    left: 240,
  },
  frame: {
    left: 134,
  },
  text: {
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  rewards1: {
    color: Color.colorDarkslategray_100,
  },
  rewards: {
    top: 639,
    left: 59,
    height: 21,
    fontSize: FontSize.size_sm,
    width: 63,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  referrals: {
    left: 288,
    width: 62,
  },
  offers: {
    left: 179,
    width: 44,
  },
  homeItem: {
    top: 176,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
  },
  rechargeAndBills: {
    width: 215,
    top: 181,
    left: 6,
    height: 30,
  },
  viewAll1: {
    width: 46,
    height: 19,
  },
  viewAll: {
    top: 181,
  },
  ellipsePressable: {
    left: 24,
    top: 217,
    position: "absolute",
  },
  homeInner: {
    left: 97,
    top: 217,
    position: "absolute",
  },
  ellipseIcon: {
    left: 169,
    top: 217,
    position: "absolute",
  },
  homeChild1: {
    left: 241,
    top: 217,
    position: "absolute",
  },
  homeChild2: {
    left: 306,
    top: 217,
    position: "absolute",
  },
  mobileRecharge: {
    left: 13,
  },
  groceryBill: {
    left: 89,
    top: 268,
    position: "absolute",
  },
  waterBill: {
    left: 160,
    height: 16,
    top: 268,
    position: "absolute",
    textAlign: "left",
  },
  dth: {
    left: 229,
    top: 268,
    position: "absolute",
    textAlign: "center",
  },
  houseRent: {
    left: 295,
    top: 268,
    position: "absolute",
  },
  call16dp006270Fill0Wght300Icon: {
    left: 27,
    top: 219,
    width: 30,
    position: "absolute",
  },
  grocery16dp006270Fill0WghtIcon: {
    left: 100,
    top: 219,
    width: 30,
    position: "absolute",
  },
  waterDrop16dp006270Fill0WIcon: {
    left: 171,
    top: 219,
    width: 30,
    position: "absolute",
  },
  tv16dp006270Fill0Wght300GIcon: {
    top: 221,
    left: 244,
    position: "absolute",
  },
  house16dp006270Fill0Wght30Icon: {
    left: 307,
    width: 33,
    height: 33,
  },
  rectangleView: {
    top: 313,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
  },
  travel: {
    top: 318,
    left: 9,
    width: 82,
  },
  viewAll2: {
    top: 317,
  },
  homeChild3: {
    left: 26,
    height: 35,
    width: 35,
  },
  wrapper1: {
    left: 99,
    height: 35,
    width: 35,
  },
  homeChild4: {
    left: 171,
    height: 35,
    width: 35,
  },
  homeChild5: {
    left: 243,
    height: 35,
    width: 35,
  },
  homeChild6: {
    left: 308,
    height: 35,
    width: 35,
  },
  flights: {
    height: 16,
    width: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    left: 15,
    top: 409,
  },
  train1: {
    textAlign: "center",
  },
  train: {
    left: 88,
  },
  taxi: {
    opacity: 0.92,
    height: 16,
    width: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
    left: 160,
    textAlign: "center",
  },
  rentacar: {
    left: 238,
    height: 16,
    width: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  boat: {
    left: 297,
    height: 16,
    width: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  flight16dp006270Fill0Wght3Icon: {
    left: 29,
  },
  train16dp006270Fill0Wght30Icon: {
    left: 102,
  },
  train16dp006270Fill0Wght30Icon1: {
    left: 174,
  },
  carRental16dp006270Fill0WIcon: {
    left: 245,
    width: 30,
    height: 30,
  },
  directionsBoat16dp006270FiIcon: {
    left: 311,
    width: 30,
    height: 30,
  },
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  insurance: {
    width: "34.77%",
    left: "1.44%",
    height: "24%",
    top: "4.8%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
  },
  viewAll5: {
    height: "14.4%",
    width: "13.22%",
  },
  viewAll4: {
    left: "78.74%",
  },
  life: {
    left: "2.59%",
  },
  icon5: {
    height: "100%",
    width: "100%",
  },
  wrapper2: {
    left: "6.32%",
    right: "83.62%",
  },
  componentItem: {
    right: "42.82%",
    left: "47.13%",
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  componentInner: {
    right: "62.07%",
    left: "27.87%",
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  componentChild1: {
    right: "22.13%",
    left: "67.82%",
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  componentChild2: {
    right: "3.45%",
    left: "86.49%",
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  car: {
    left: "44.25%",
    top: "75.2%",
    position: "absolute",
  },
  health: {
    left: "24.14%",
    top: "75.2%",
    position: "absolute",
  },
  bike: {
    left: "64.37%",
    top: "75.2%",
    position: "absolute",
  },
  credit: {
    left: "83.33%",
    top: "75.2%",
    position: "absolute",
  },
  motorcycle16dp006270Fill0WIcon: {
    top: "36%",
    right: "22.7%",
    bottom: "40%",
    left: "68.68%",
  },
  heartCheck16dp006270Fill0Icon: {
    right: "84.34%",
    left: "7.04%",
  },
  healthAndSafety16dp006270Icon: {
    right: "62.64%",
    left: "28.74%",
  },
  noCrash16dp006270Fill0WghIcon: {
    right: "43.53%",
    bottom: "41.6%",
    left: "47.84%",
    top: "34.4%",
    width: "8.62%",
  },
  creditScore16dp006270Fill0Icon: {
    right: "4.02%",
    left: "87.36%",
  },
  rectangleParent: {
    top: 447,
  },
  diversity316dp006270Fill0Icon: {
    left: 242,
    top: 643,
    height: 37,
    width: 37,
  },
  others: {
    height: "3.75%",
    width: "28.06%",
    top: "74.38%",
    left: "1.39%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  robot224dp006270Fill0Wght: {
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
    height: 41,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.schemesOnPrimary,
    width: 40,
    position: "absolute",
  },
  robot224dp006270Fill0WghtIcon: {
    top: 653,
    left: 305,
    width: 34,
    height: 34,
    position: "absolute",
  },
  featuredSeasonalAndGifts16Icon: {
    left: 17,
    top: 643,
    height: 37,
    width: 37,
  },
  sell16dp006270Fill0Wght300Icon: {
    top: 645,
    left: 135,
  },
  rectangleIcon: {
    top: 0,
    left: 0,
    height: 154,
    width: 360,
    position: "absolute",
  },
  homeChild7: {
    top: 58,
    left: 260,
    width: 80,
    height: 80,
    position: "absolute",
  },
  rectanglePressable: {
    left: 257,
  },
  wrapper3: {
    left: 317,
  },
  wrapper4: {
    left: 287,
  },
  homeChild8: {
    top: 69,
    left: 36,
  },
  text1: {
    top: 74,
    left: 98,
    fontFamily: FontFamily.interRegular,
    width: 35,
    textAlign: "center",
    color: Color.miscellaneousFloatingTabTextUnselected,
    height: 21,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  homeChild9: {
    top: 100,
    left: 37,
  },
  upiId1: {
    textDecoration: "underline",
  },
  upiId: {
    top: 72,
    left: 43,
    fontFamily: FontFamily.interRegular,
  },
  wallet: {
    top: 104,
    left: 91,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
  },
  wrapper5: {
    left: 234,
    width: 25,
    height: 31,
  },
  home3: {
    top: 44,
    width: 38,
    left: 31,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  loans: {
    left: 145,
    textAlign: "center",
    top: 44,
  },
  cards2: {
    top: 44,
  },
  wrapper6: {
    left: 292,
    width: 25,
    height: 31,
  },
  wrapper7: {
    left: 101,
    width: 25,
    height: 31,
  },
  frameChild: {
    backgroundColor: Color.colorTurquoise,
    top: 11,
    borderRadius: Border.br_3xs,
    height: 32,
    width: 38,
    left: 31,
    position: "absolute",
  },
  wrapper8: {
    width: 25,
    height: 31,
    left: 37,
  },
  vectorIcon: {
    left: 168,
    width: 22,
  },
  rectangleGroup: {
    top: 725,
    left: 1,
    backgroundColor: Color.colorDarkslategray_100,
    width: 359,
  },
  home: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Home;
