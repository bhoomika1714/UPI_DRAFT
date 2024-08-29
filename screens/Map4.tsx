import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Map4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.map4}>
      <Image
        style={[styles.basemapImageIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/basemap-image.png")}
      />
      <View style={[styles.map4Child, styles.map4Layout]} />
      <Text style={[styles.nearByLocations, styles.bankFlexBox]}>
        Near by locations
      </Text>
      <View style={[styles.map4Item, styles.map4Layout]} />
      <Text style={[styles.bank, styles.bankFlexBox]}>BANK</Text>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.iconPosition]}>
            <View style={[styles.border, styles.iconPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/cap1.png")}
            />
            <View style={[styles.capacity, styles.iconPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/cellular-connection1.png")}
          />
        </View>
      </View>
      <View style={styles.emoji} />
      <Image
        style={styles.map4Inner}
        resizeMode="cover"
        source={require("../assets/rectangle-128.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.search24dp434343Fill0Wght4Icon}
        resizeMode="cover"
        source={require("../assets/search-24dp-434343-fill0-wght400-grad0-opsz24-1.png")}
      />
      <Text style={[styles.searchBankatm, styles.bankFlexBox]}>
        Search Bank/ATM
      </Text>
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  map4Layout: {
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  bankFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    width: "35.75%",
    marginTop: -27,
    height: 54,
    position: "absolute",
  },
  basemapImageIcon: {
    marginLeft: -378,
    top: -379,
    width: 1280,
    height: 1280,
  },
  map4Child: {
    top: 570,
    left: 22,
    backgroundColor: Color.colorGainsboro_100,
    width: 315,
    height: 217,
  },
  nearByLocations: {
    top: 588,
    left: 72,
    fontSize: FontSize.size_5xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "left",
  },
  map4Item: {
    top: 623,
    left: 118,
    width: 126,
    height: 138,
    backgroundColor: Color.schemesOnPrimary,
  },
  bank: {
    top: 709,
    left: 137,
    fontSize: FontSize.size_13xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "left",
  },
  time1: {
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    textAlign: "center",
    color: Color.miscellaneousFloatingTabTextUnselected,
    position: "absolute",
  },
  time: {
    right: "64.25%",
    left: "0%",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: "100%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    maxHeight: "100%",
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: 3,
    backgroundColor: Color.miscellaneousFloatingTabTextUnselected,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.75,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.55,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
    maxHeight: "100%",
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.25,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
    maxHeight: "100%",
  },
  levels: {
    right: "0%",
    left: "64.25%",
  },
  statusBarIphone: {
    top: 652,
    left: 360,
    width: 393,
    height: 54,
    position: "absolute",
    backgroundColor: Color.schemesOnPrimary,
  },
  emoji: {
    width: 60,
    height: 60,
  },
  map4Inner: {
    top: 302,
    left: 145,
    width: 58,
    height: 57,
    position: "absolute",
  },
  rectangleView: {
    top: 52,
    left: 8,
    borderRadius: Border.br_11xl,
    width: 344,
    height: 44,
    position: "absolute",
    backgroundColor: Color.schemesOnPrimary,
  },
  search24dp434343Fill0Wght4Icon: {
    top: 62,
    left: 23,
    width: 24,
    height: 25,
    position: "absolute",
  },
  searchBankatm: {
    top: 63,
    left: 58,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_100,
    width: 254,
  },
  icon1: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  icon: {
    left: "2.5%",
    top: "2.24%",
    right: "91%",
    bottom: "95.64%",
    width: "6.5%",
    height: "2.13%",
    position: "absolute",
  },
  map4: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.schemesOnPrimary,
  },
});

export default Map4;
