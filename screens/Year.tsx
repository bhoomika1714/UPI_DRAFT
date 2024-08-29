import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Year = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.year, styles.yearLayout]}>
      <Pressable
        style={[styles.yearChild, styles.yearChildLayout]}
        onPress={() => navigation.navigate("GraphYear")}
      />
      <Text style={[styles.year2021, styles.yearTypo]}> Year 2021</Text>
      <View style={styles.yearItem} />
      <Text style={[styles.selectAYear, styles.yearFlexBox]}>
        Select a year
      </Text>
      <View style={[styles.yearInner, styles.yearChildLayout]} />
      <View style={[styles.rectangleView, styles.yearChildLayout]} />
      <View style={[styles.yearChild1, styles.yearChildLayout]} />
      <Text style={[styles.year2022, styles.yearTypo]}> Year 2022</Text>
      <Text style={[styles.year2023, styles.yearFlexBox]}>Year 2023</Text>
      <Text style={[styles.year2024, styles.yearFlexBox]}>Year 2024</Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Image
          style={[styles.icon, styles.yearLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  yearLayout: {
    overflow: "hidden",
    width: "100%",
  },
  yearChildLayout: {
    height: 33,
    width: 275,
    backgroundColor: Color.colorSnow_500,
    borderRadius: Border.br_xl,
    left: 42,
    position: "absolute",
  },
  yearTypo: {
    height: 29,
    textAlign: "left",
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  yearFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  yearChild: {
    top: 152,
  },
  year2021: {
    top: 156,
    left: 94,
    width: 160,
  },
  yearItem: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorTeal_100,
    width: 360,
    height: 86,
    position: "absolute",
  },
  selectAYear: {
    top: 43,
    left: 88,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.schemesOnPrimary,
    width: 372,
    height: 59,
  },
  yearInner: {
    top: 215,
  },
  rectangleView: {
    top: 278,
  },
  yearChild1: {
    top: 341,
  },
  year2022: {
    top: 219,
    left: 99,
    width: 128,
  },
  year2023: {
    top: 280,
    left: 107,
    width: 103,
    height: 31,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  year2024: {
    top: 344,
    left: 110,
    width: 100,
    height: 30,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrowLeft: {
    left: "0%",
    top: "2%",
    right: "86.11%",
    bottom: "91.75%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  year: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
  },
});

export default Year;
