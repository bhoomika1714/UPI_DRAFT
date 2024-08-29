import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Map2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.map2}>
      <Image
        style={styles.basemapImageIcon}
        resizeMode="cover"
        source={require("../assets/basemap-image.png")}
      />
      <View style={[styles.map2Child, styles.map2Layout]} />
      <Text style={[styles.nearByLocations, styles.atmFlexBox]}>
        Near by locations
      </Text>
      <View style={[styles.map2Item, styles.map2Layout]} />
      <Text style={[styles.atm, styles.atmFlexBox]}>ATM</Text>
      <View style={styles.emoji} />
      <Image
        style={styles.map2Inner}
        resizeMode="cover"
        source={require("../assets/rectangle-128.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.search24dp434343Fill0Wght4Icon}
        resizeMode="cover"
        source={require("../assets/search-24dp-434343-fill0-wght400-grad0-opsz24-1.png")}
      />
      <Text style={[styles.searchBankatm, styles.atmFlexBox]}>
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
  map2Layout: {
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  atmFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  basemapImageIcon: {
    marginLeft: -378,
    top: -379,
    width: 1280,
    height: 1280,
    left: "50%",
    position: "absolute",
  },
  map2Child: {
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
    fontFamily: FontFamily.poppinsRegular,
    color: Color.miscellaneousFloatingTabTextUnselected,
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "left",
  },
  map2Item: {
    marginLeft: -63,
    top: 627,
    width: 126,
    height: 138,
    left: "50%",
    backgroundColor: Color.schemesOnPrimary,
  },
  atm: {
    top: 720,
    left: 150,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.miscellaneousFloatingTabTextUnselected,
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "left",
  },
  emoji: {
    width: 60,
    height: 60,
  },
  map2Inner: {
    top: 302,
    left: 152,
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
    height: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  map2: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.schemesOnPrimary,
  },
});

export default Map2;
