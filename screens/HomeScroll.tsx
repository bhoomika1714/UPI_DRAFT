import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeScroll = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeScroll}>
      <View style={styles.homeScrollChild} />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Rewards")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Investment")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => navigation.navigate("DataAnalysis7")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeScrollItem, styles.wrapperLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.framePosition]}
        onPress={() => navigation.navigate("ReferralPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper1, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Offers")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Text style={[styles.rewards, styles.atm1Typo]}> Rewards</Text>
      <Pressable style={styles.atm} onPress={() => navigation.navigate("Map1")}>
        <Text style={[styles.atm1, styles.atm1Typo]}>ATM</Text>
      </Pressable>
      <Text style={[styles.analysis, styles.analysisTypo]}>Analysis</Text>
      <Text style={[styles.stocks, styles.atm1Typo]}>Stocks</Text>
      <Text style={[styles.referrals, styles.analysisTypo]}>Referrals</Text>
      <Text style={[styles.offers, styles.atm1Typo]}>Offers</Text>
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <Pressable
          style={[styles.wrapper2, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Text style={[styles.history, styles.homeTypo]}>History</Text>
        <Text style={[styles.loans, styles.homeTypo]}>Loans</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={[styles.wrapper3, styles.wrapperLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper4, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.childLayout]} />
        <Pressable
          style={[styles.wrapper5, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.homeScrollInner, styles.rectangleParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-222.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={styles.travel}>Travel</Text>
      <Pressable
        style={styles.viewAll}
        onPress={() => navigation.navigate("Travel")}
      >
        <Text style={[styles.viewAll1, styles.viewTypo]}>View All</Text>
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Pressable
        style={[styles.ellipsePressable, styles.ellipseChildLayout]}
        onPress={() => navigation.navigate("Trains")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-45.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeScrollChild1, styles.ellipseChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.homeScrollChild2, styles.ellipseChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.homeScrollChild3, styles.ellipseChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Text style={[styles.flights, styles.taxiTypo]}>Flights</Text>
      <Pressable
        style={[styles.train, styles.taxiPosition]}
        onPress={() => navigation.navigate("Trains")}
      >
        <Text style={[styles.train1, styles.taxiTypo]}>Train</Text>
      </Pressable>
      <Text style={[styles.taxi, styles.taxiTypo]}>Taxi</Text>
      <Text style={[styles.rentacar, styles.taxiTypo]}>RentACar</Text>
      <Text style={[styles.boat, styles.taxiTypo]}>Boat</Text>
      <Image
        style={[styles.flight16dp006270Fill0Wght3Icon, styles.fill0IconLayout3]}
        contentFit="cover"
        source={require("../assets/flight-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.train16dp006270Fill0Wght30Icon, styles.fill0IconLayout3]}
        contentFit="cover"
        source={require("../assets/train-16dp-006270-fill0-wght300-grad0-opsz20-31.png")}
      />
      <Image
        style={[
          styles.train16dp006270Fill0Wght30Icon1,
          styles.fill0IconLayout3,
        ]}
        contentFit="cover"
        source={require("../assets/train-16dp-006270-fill0-wght300-grad0-opsz20-4.png")}
      />
      <Image
        style={[styles.carRental16dp006270Fill0WIcon, styles.fill0IconLayout3]}
        contentFit="cover"
        source={require("../assets/car-rental-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.directionsBoat16dp006270FiIcon, styles.fill0IconLayout3]}
        contentFit="cover"
        source={require("../assets/directions-boat-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.instanceChild, styles.iconLayout]} />
        <Text style={[styles.insurance, styles.viewAll2Position]}>
          Insurance
        </Text>
        <Pressable
          style={[styles.viewAll2, styles.viewAll2Position]}
          onPress={() => navigation.navigate("Insurance")}
        >
          <Text style={[styles.viewAll3, styles.viewTypo]}>View All</Text>
        </Pressable>
        <Pressable
          style={[styles.life, styles.carPosition]}
          onPress={() => navigation.navigate("Life")}
        >
          <Text style={styles.carTypo}>Life</Text>
        </Pressable>
        <Pressable
          style={[styles.wrapper6, styles.instanceChildPosition]}
          onPress={() => navigation.navigate("Life")}
        >
          <Image
            style={[styles.icon10, styles.instanceChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-45.png")}
          />
        </Pressable>
        <Image
          style={[styles.instanceItem, styles.instanceChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Image
          style={[styles.instanceInner, styles.instanceChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Image
          style={[styles.instanceChild1, styles.instanceChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Image
          style={[styles.instanceChild2, styles.instanceChildLayout]}
          contentFit="cover"
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
          contentFit="cover"
          source={require("../assets/motorcycle-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.heartCheck16dp006270Fill0Icon,
            styles.fill0IconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/heart-check-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.healthAndSafety16dp006270Icon,
            styles.fill0IconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/health-and-safety-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.noCrash16dp006270Fill0WghIcon,
            styles.fill0IconLayout2,
          ]}
          contentFit="cover"
          source={require("../assets/no-crash-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
        <Image
          style={[
            styles.creditScore16dp006270Fill0Icon,
            styles.fill0IconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/credit-score-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
        />
      </View>
      <Text style={styles.others}>Others</Text>
      <Image
        style={[styles.diversity316dp006270Fill0Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/diversity-3-16dp-006270-fill0-wght300-grad0-opsz20-21.png")}
      />
      <Image
        style={[styles.sell16dp006270Fill0Wght300Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/sell-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.featuredSeasonalAndGifts16Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/featured-seasonal-and-gifts-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.barChart16dp006270Fill0WgIcon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/bar-chart-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.monitoring16dp006270Fill0WIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/monitoring-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.atm16dp006270Fill0Wght300Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/atm-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Pressable
        style={[styles.homeScrollChild4, styles.childLayout]}
        onPress={() => navigation.navigate("Ai1")}
      />
      <Image
        style={styles.robot224dp006270Fill0WghtIcon}
        contentFit="cover"
        source={require("../assets/robot-2-24dp-006270-fill0-wght300-grad0-opsz24-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout1: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  framePosition: {
    left: 241,
    height: 40,
    width: 40,
    position: "absolute",
  },
  atm1Typo: {
    height: 21,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  analysisTypo: {
    left: 287,
    height: 21,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
    top: 11,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
    top: 44,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleLayout: {
    height: 125,
    width: 348,
    left: 6,
    position: "absolute",
  },
  viewTypo: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  ellipseChildLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  taxiTypo: {
    height: 16,
    width: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
  },
  taxiPosition: {
    top: 134,
    position: "absolute",
  },
  fill0IconLayout3: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  viewAll2Position: {
    top: "4.8%",
    position: "absolute",
  },
  carPosition: {
    top: "75.2%",
    position: "absolute",
  },
  instanceChildPosition: {
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  instanceChildLayout: {
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
    position: "absolute",
    overflow: "hidden",
  },
  fill0IconLayout1: {
    bottom: "39.2%",
    top: "36.8%",
    width: "8.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "24%",
    position: "absolute",
    overflow: "hidden",
  },
  fill0IconLayout: {
    height: 37,
    width: 37,
    position: "absolute",
  },
  iconPosition: {
    left: 17,
    height: 37,
    width: 37,
    position: "absolute",
  },
  homeScrollChild: {
    top: 319,
    height: 210,
    width: 348,
    left: 6,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 377,
    left: 16,
    width: 40,
  },
  container: {
    top: 465,
    left: 16,
    width: 40,
  },
  frame: {
    top: 465,
  },
  homeScrollItem: {
    left: 138,
    top: 465,
    borderRadius: Border.br_8xs,
  },
  rectanglePressable: {
    top: 377,
  },
  wrapper1: {
    left: 138,
    top: 377,
  },
  rewards: {
    left: 60,
    width: 63,
    top: 378,
    position: "absolute",
  },
  atm1: {
    width: 32,
  },
  atm: {
    left: 185,
    top: 469,
    position: "absolute",
  },
  analysis: {
    width: 59,
    top: 469,
  },
  stocks: {
    left: 62,
    width: 48,
    top: 469,
    position: "absolute",
  },
  referrals: {
    width: 62,
    top: 378,
  },
  offers: {
    left: 184,
    width: 44,
    top: 378,
    position: "absolute",
  },
  wrapper2: {
    left: 234,
  },
  home: {
    width: 38,
    left: 31,
    textAlign: "left",
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
    left: 143,
    textAlign: "center",
    width: 63,
  },
  cards: {
    left: 93,
    width: 38,
    textAlign: "left",
  },
  wrapper3: {
    left: 292,
  },
  wrapper4: {
    left: 101,
  },
  frameChild: {
    top: 13,
    backgroundColor: Color.colorTurquoise,
    height: 32,
    width: 38,
    left: 31,
  },
  wrapper5: {
    left: 37,
  },
  rectangleParent: {
    top: 724,
    backgroundColor: Color.colorDarkslategray_100,
    height: 76,
    overflow: "hidden",
  },
  homeScrollInner: {
    top: 0,
    height: 24,
  },
  rectangleView: {
    top: 38,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
  },
  travel: {
    top: 45,
    width: 78,
    height: 30,
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    left: 6,
    position: "absolute",
  },
  viewAll1: {
    width: 46,
    height: 19,
  },
  viewAll: {
    left: 279,
    top: 42,
    position: "absolute",
  },
  ellipseIcon: {
    left: 26,
    top: 84,
  },
  ellipsePressable: {
    left: 99,
    top: 83,
  },
  homeScrollChild1: {
    left: 171,
    top: 83,
  },
  homeScrollChild2: {
    left: 243,
    top: 83,
  },
  homeScrollChild3: {
    left: 308,
    top: 83,
  },
  flights: {
    left: 15,
    top: 134,
    position: "absolute",
    textAlign: "center",
  },
  train1: {
    textAlign: "center",
  },
  train: {
    left: 88,
  },
  taxi: {
    left: 160,
    opacity: 0.92,
    top: 134,
    position: "absolute",
    textAlign: "center",
  },
  rentacar: {
    left: 238,
    top: 134,
    position: "absolute",
    textAlign: "left",
  },
  boat: {
    left: 297,
    top: 134,
    position: "absolute",
    textAlign: "center",
  },
  flight16dp006270Fill0Wght3Icon: {
    left: 29,
    top: 86,
    width: 30,
  },
  train16dp006270Fill0Wght30Icon: {
    left: 102,
    top: 86,
    width: 30,
  },
  train16dp006270Fill0Wght30Icon1: {
    left: 174,
    top: 86,
    width: 30,
  },
  carRental16dp006270Fill0WIcon: {
    left: 245,
    top: 83,
  },
  directionsBoat16dp006270FiIcon: {
    left: 311,
    top: 84,
  },
  instanceChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  insurance: {
    width: "34.77%",
    left: "1.44%",
    height: "24%",
    top: "4.8%",
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
  },
  viewAll3: {
    height: "14.4%",
    width: "13.22%",
  },
  viewAll2: {
    left: "78.74%",
  },
  life: {
    left: "2.59%",
  },
  icon10: {
    height: "100%",
    width: "100%",
  },
  wrapper6: {
    left: "6.32%",
    right: "83.62%",
  },
  instanceItem: {
    right: "42.82%",
    left: "47.13%",
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  instanceInner: {
    right: "62.07%",
    left: "27.87%",
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  instanceChild1: {
    right: "22.13%",
    left: "67.82%",
    height: "28%",
    width: "10.06%",
    bottom: "37.6%",
    top: "34.4%",
    position: "absolute",
  },
  instanceChild2: {
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
  rectangleGroup: {
    top: 176,
  },
  others: {
    height: "3.75%",
    width: "28.06%",
    top: "40.75%",
    left: "1.11%",
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  diversity316dp006270Fill0Icon: {
    left: 242,
    top: 378,
  },
  sell16dp006270Fill0Wght300Icon: {
    top: 378,
    left: 138,
  },
  featuredSeasonalAndGifts16Icon: {
    top: 379,
  },
  barChart16dp006270Fill0WgIcon: {
    left: 244,
    top: 465,
  },
  monitoring16dp006270Fill0WIcon: {
    top: 465,
  },
  atm16dp006270Fill0Wght300Icon: {
    left: 140,
    top: 465,
  },
  homeScrollChild4: {
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
    backgroundColor: Color.schemesOnPrimary,
  },
  robot224dp006270Fill0WghtIcon: {
    top: 653,
    left: 305,
    width: 34,
    height: 34,
    position: "absolute",
  },
  homeScroll: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScroll;
