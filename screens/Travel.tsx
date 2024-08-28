import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Travel = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.travel}>
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.wrapper, styles.frameLayout]}
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
          style={[styles.container, styles.containerPosition]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.homePosition]} />
        <Pressable
          style={[styles.rectanglePressable, styles.containerPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.travelChild, styles.travelChildBg]} />
      <Text style={styles.travel1}>Travel</Text>
      <Image
        style={[styles.travelItem, styles.travelLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Pressable
        style={[styles.ellipsePressable, styles.travelLayout]}
        onPress={() => navigation.navigate("Trains")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-45.png")}
        />
      </Pressable>
      <Image
        style={[styles.travelInner, styles.travelLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.travelLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.travelChild1, styles.travelLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Text style={[styles.flights, styles.taxiTypo]}>Flights</Text>
      <Text style={[styles.hotels, styles.hotelsTypo]}>Hotels</Text>
      <Text style={[styles.miniVan, styles.hotelsTypo]}>Mini Van</Text>
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
        style={[styles.travelChild2, styles.travelChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.travelChild3, styles.travelChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left8.png")}
        />
      </Pressable>
      <Image
        style={[styles.flight16dp006270Fill0Wght3Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/flight-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.train16dp006270Fill0Wght30Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/train-16dp-006270-fill0-wght300-grad0-opsz20-31.png")}
      />
      <Image
        style={[styles.train16dp006270Fill0Wght30Icon1, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/train-16dp-006270-fill0-wght300-grad0-opsz20-4.png")}
      />
      <Image
        style={[styles.carRental16dp006270Fill0WIcon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/car-rental-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.directionsBoat16dp006270FiIcon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../assets/directions-boat-16dp-006270-fill0-wght300-grad0-opsz20-2.png")}
      />
      <Image
        style={[styles.airportShuttle16dp006270FiIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/airport-shuttle-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.locationCity16dp006270FillIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/location-city-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.travelChild6Position]}
        contentFit="cover"
        source={require("../assets/rectangle-188.png")}
      />
      <Image
        style={styles.travelChild4}
        contentFit="cover"
        source={require("../assets/ellipse-44.png")}
      />
      <Pressable
        style={[styles.wrapper1, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Notifications7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-26.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper2, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Help4")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-27.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper3, styles.wrapperLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-28.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.travelChildLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.travelChild5, styles.travelChildLayout]}
        onPress={() => navigation.navigate("Pockets7")}
      />
      <Text style={[styles.upiId, styles.upiIdTypo]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.upiIdTypo]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <Text
        style={[styles.welcomeBeckyHills, styles.wallet8Typo]}
      >{`Welcome, Becky Hills!
`}</Text>
      <Image
        style={[styles.travelChild6, styles.travelChild6Position]}
        contentFit="cover"
        source={require("../assets/rectangle-25.png")}
      />
      <Image
        style={styles.travelChild4}
        contentFit="cover"
        source={require("../assets/ellipse-44.png")}
      />
      <Pressable
        style={[styles.wrapper1, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Notifications7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-26.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper2, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Help4")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-27.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper3, styles.wrapperLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-28.png")}
        />
      </Pressable>
      <View style={[styles.travelChild8, styles.travelChildLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.travelChild9, styles.travelChildLayout]}
        onPress={() => navigation.navigate("Pockets7")}
      />
      <Text style={[styles.upiId2, styles.upiId2Typo]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet2, styles.upiId2Typo]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.travelChild8, styles.travelChildLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.travelChild9, styles.travelChildLayout]}
        onPress={() => navigation.navigate("Pockets7")}
      />
      <Text style={[styles.upiId2, styles.upiId2Typo]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet2, styles.upiId2Typo]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.travelChild8, styles.travelChildLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.travelChild9, styles.travelChildLayout]}
        onPress={() => navigation.navigate("Pockets7")}
      />
      <Text style={[styles.upiId2, styles.upiId2Typo]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet2, styles.upiId2Typo]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.travelChild8, styles.travelChildLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.travelChild9, styles.travelChildLayout]}
        onPress={() => navigation.navigate("Pockets7")}
      />
      <Text style={[styles.upiId2, styles.upiId2Typo]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet8, styles.wallet8Typo]}>Wallet</Text>
      <Pressable
        style={[styles.travelChild16, styles.travelChildBg]}
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
  frameLayout: {
    height: 31,
    width: 25,
    top: 11,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 44,
    position: "absolute",
  },
  containerPosition: {
    top: 13,
    height: 31,
    width: 25,
    position: "absolute",
  },
  homePosition: {
    left: 31,
    width: 38,
  },
  travelChildBg: {
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  travelLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  taxiTypo: {
    height: 16,
    width: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
  },
  hotelsTypo: {
    height: 17,
    top: 408,
    width: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  taxiPosition: {
    top: 292,
    position: "absolute",
  },
  travelChildPosition: {
    top: 356,
    height: 35,
    width: 35,
    position: "absolute",
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
  iconPosition: {
    top: 358,
    height: 30,
    width: 30,
    position: "absolute",
  },
  travelChild6Position: {
    height: 156,
    top: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  travelChildLayout: {
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
  },
  upiIdTypo: {
    width: 45,
    left: 23,
    height: 21,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  wallet8Typo: {
    fontWeight: "800",
    position: "absolute",
  },
  upiId2Typo: {
    left: 36,
    width: 45,
    height: 21,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  wrapper: {
    left: 234,
  },
  home: {
    width: 38,
    textAlign: "left",
    left: 31,
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
    width: 63,
    textAlign: "center",
  },
  cards: {
    left: 93,
    width: 38,
    textAlign: "left",
  },
  container: {
    left: 292,
  },
  frame: {
    left: 101,
  },
  frameChild: {
    backgroundColor: Color.colorTurquoise,
    height: 32,
    borderRadius: Border.br_3xs,
    width: 38,
    top: 11,
    left: 31,
    position: "absolute",
  },
  rectanglePressable: {
    left: 37,
  },
  rectangleParent: {
    top: 723,
    backgroundColor: Color.colorDarkslategray_100,
    width: 358,
    height: 77,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  travelChild: {
    top: 177,
    left: 7,
    borderRadius: Border.br_mini,
    width: 345,
    height: 524,
  },
  travel1: {
    top: 187,
    left: 51,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    width: 90,
    height: 36,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  travelItem: {
    left: 27,
    top: 242,
  },
  ellipsePressable: {
    top: 241,
    left: 102,
  },
  travelInner: {
    left: 169,
    top: 241,
  },
  ellipseIcon: {
    left: 241,
    top: 241,
  },
  travelChild1: {
    left: 306,
    top: 241,
  },
  flights: {
    left: 14,
    top: 292,
    position: "absolute",
    textAlign: "center",
  },
  hotels: {
    left: 89,
  },
  miniVan: {
    left: 16,
  },
  train1: {
    textAlign: "center",
  },
  train: {
    left: 89,
  },
  taxi: {
    left: 158,
    opacity: 0.92,
    top: 292,
    position: "absolute",
    textAlign: "center",
  },
  rentacar: {
    left: 236,
    top: 292,
    position: "absolute",
    textAlign: "left",
  },
  boat: {
    left: 295,
    top: 292,
    position: "absolute",
    textAlign: "center",
  },
  travelChild2: {
    left: 29,
  },
  travelChild3: {
    left: 102,
  },
  icon5: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 18,
    top: 195,
    width: 30,
    height: 20,
    position: "absolute",
  },
  flight16dp006270Fill0Wght3Icon: {
    top: 244,
    height: 30,
    left: 29,
  },
  train16dp006270Fill0Wght30Icon: {
    left: 104,
    top: 244,
    height: 30,
  },
  train16dp006270Fill0Wght30Icon1: {
    left: 172,
    top: 244,
    height: 30,
  },
  carRental16dp006270Fill0WIcon: {
    left: 243,
    top: 241,
  },
  directionsBoat16dp006270FiIcon: {
    left: 309,
    top: 242,
  },
  airportShuttle16dp006270FiIcon: {
    left: 32,
  },
  locationCity16dp006270FillIcon: {
    left: 105,
  },
  rectangleIcon: {
    left: 1,
    width: 359,
  },
  travelChild4: {
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
    top: 78,
    left: 16,
  },
  text: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    height: 21,
    fontSize: FontSize.size_sm,
    width: 35,
    position: "absolute",
    left: 80,
    top: 81,
  },
  travelChild5: {
    top: 109,
    left: 17,
  },
  upiId1: {
    textDecoration: "underline",
  },
  upiId: {
    top: 81,
    width: 45,
    left: 23,
  },
  wallet: {
    top: 113,
  },
  welcomeBeckyHills: {
    left: 15,
    fontFamily: FontFamily.interExtraBold,
    width: 258,
    height: 89,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    top: 13,
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  travelChild6: {
    width: 360,
    left: 0,
  },
  travelChild8: {
    top: 66,
    left: 29,
  },
  text1: {
    top: 71,
    left: 91,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    height: 21,
    fontSize: FontSize.size_sm,
    width: 35,
    position: "absolute",
  },
  travelChild9: {
    top: 97,
    left: 30,
  },
  upiId2: {
    top: 69,
  },
  wallet2: {
    top: 101,
  },
  wallet8: {
    top: 103,
    fontFamily: FontFamily.poppinsExtraBold,
    height: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "800",
    left: 80,
    width: 57,
    color: Color.colorDarkslategray_100,
  },
  travelChild16: {
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
    top: 653,
    left: 305,
    width: 34,
    height: 34,
    position: "absolute",
  },
  travel: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Travel;
