import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const StatYear2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.statYear, styles.iconLayout]}>
      <Pressable
        style={[styles.statYearChild, styles.statChildLayout]}
        onPress={() => navigation.navigate("StatementYear")}
      />
      <Text style={[styles.year2021, styles.yearTypo]}> Year 2021</Text>
      <View style={styles.statYearItem} />
      <Text style={[styles.selectAYear, styles.yearFlexBox]}>
        Select a year
      </Text>
      <View style={[styles.statYearInner, styles.statChildLayout]} />
      <View style={[styles.rectangleView, styles.statChildLayout]} />
      <View style={[styles.statYearChild1, styles.statChildLayout]} />
      <Text style={[styles.year2022, styles.yearTypo]}> Year 2022</Text>
      <Text style={[styles.year2023, styles.yearFlexBox]}>Year 2023</Text>
      <Text style={[styles.year2024, styles.yearFlexBox]}>Year 2024</Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  statChildLayout: {
    height: 33,
    width: 275,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xl,
    left: 42,
    position: "absolute",
  },
  yearTypo: {
    height: 29,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  yearFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  statYearChild: {
    top: 152,
  },
  year2021: {
    top: 156,
    left: 94,
    width: 160,
  },
  statYearItem: {
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
  statYearInner: {
    top: 215,
  },
  rectangleView: {
    top: 278,
  },
  statYearChild1: {
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
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  year2024: {
    top: 344,
    left: 110,
    width: 100,
    height: 30,
    color: Color.miscellaneousFloatingTabTextUnselected,
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
  statYear: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
  },
});

export default StatYear2;
