import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const GraphYear = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.graphYear, styles.iconLayout]}>
      <View style={[styles.graphYearChild, styles.graphChildLayout4]} />
      <Text style={[styles.year2021, styles.year2021Typo]}> Year 2021</Text>
      <View style={styles.graphYearItem} />
      <Text style={[styles.selectAYear, styles.yearFlexBox]}>
        Select a year
      </Text>
      <Pressable
        style={[styles.graphYearInner, styles.graphChildLayout3]}
        onPress={() => navigation.navigate("GraphicalOverview1")}
      />
      <Pressable
        style={styles.january}
        onPress={() => navigation.navigate("GraphicalOverview1")}
      >
        <Text style={[styles.january1, styles.julyTypo]}>January</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.graphChildLayout3]} />
      <Text style={[styles.february, styles.octoberTypo]}>February</Text>
      <View style={[styles.graphYearChild1, styles.graphChildLayout2]} />
      <View style={[styles.graphYearChild2, styles.graphChildLayout2]} />
      <View style={[styles.graphYearChild3, styles.graphChildLayout1]} />
      <View style={[styles.graphYearChild4, styles.graphChildLayout1]} />
      <View style={[styles.graphYearChild5, styles.graphChildLayout3]} />
      <View style={[styles.graphYearChild6, styles.graphChildLayout3]} />
      <View style={[styles.graphYearChild7, styles.graphChildLayout3]} />
      <View style={[styles.graphYearChild8, styles.graphChildLayout3]} />
      <View style={[styles.graphYearChild9, styles.graphChildLayout]} />
      <View style={[styles.graphYearChild10, styles.graphChildLayout]} />
      <View style={[styles.graphYearChild11, styles.graphChildLayout4]} />
      <Text style={[styles.year2022, styles.yearFlexBox]}>Year 2022</Text>
      <View style={[styles.graphYearChild12, styles.graphChildLayout4]} />
      <Text style={[styles.year2023, styles.yearFlexBox]}> Year 2023</Text>
      <View style={[styles.graphYearChild13, styles.graphChildLayout4]} />
      <Text style={[styles.year2024, styles.octoberTypo]}> Year 2024</Text>
      <Text style={[styles.march, styles.juneTypo]}>March</Text>
      <Text style={[styles.april, styles.juneTypo]}>April</Text>
      <Text style={[styles.may, styles.yearFlexBox]}>May</Text>
      <Text style={[styles.june, styles.juneTypo]}>June</Text>
      <Text style={[styles.july, styles.julyTypo]}>July</Text>
      <Text style={[styles.august, styles.yearFlexBox]}>August</Text>
      <Text style={[styles.september, styles.juneTypo]}>September</Text>
      <Text style={[styles.october, styles.octoberTypo]}>October</Text>
      <Text style={[styles.november, styles.juneTypo]}>November</Text>
      <Text style={[styles.december, styles.year2021Typo]}> December</Text>
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
  graphChildLayout4: {
    height: 33,
    width: 275,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  year2021Typo: {
    height: 29,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  yearFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  graphChildLayout3: {
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  julyTypo: {
    height: 23,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
  },
  octoberTypo: {
    height: 27,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  graphChildLayout2: {
    top: 209,
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  graphChildLayout1: {
    top: 247,
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  graphChildLayout: {
    top: 373,
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  juneTypo: {
    height: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  graphYearChild: {
    top: 115,
    left: 45,
  },
  year2021: {
    top: 119,
    left: 94,
    width: 160,
    fontSize: FontSize.size_xl,
  },
  graphYearItem: {
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
  graphYearInner: {
    top: 168,
    left: 11,
    borderRadius: Border.br_3xs,
  },
  january1: {
    fontSize: FontSize.size_mini,
    width: 149,
  },
  january: {
    left: 49,
    top: 177,
    position: "absolute",
  },
  rectangleView: {
    top: 171,
    left: 187,
  },
  february: {
    top: 173,
    left: 220,
    width: 134,
    fontSize: FontSize.size_base,
  },
  graphYearChild1: {
    left: 8,
  },
  graphYearChild2: {
    left: 187,
  },
  graphYearChild3: {
    left: 7,
  },
  graphYearChild4: {
    left: 188,
  },
  graphYearChild5: {
    top: 288,
    left: 7,
  },
  graphYearChild6: {
    top: 291,
    left: 187,
  },
  graphYearChild7: {
    top: 329,
    left: 11,
    borderRadius: Border.br_3xs,
  },
  graphYearChild8: {
    top: 331,
    left: 188,
  },
  graphYearChild9: {
    left: 7,
  },
  graphYearChild10: {
    left: 188,
  },
  graphYearChild11: {
    top: 426,
    left: 36,
  },
  year2022: {
    top: 431,
    left: 114,
    width: 177,
    height: 28,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  graphYearChild12: {
    top: 477,
    left: 36,
  },
  year2023: {
    top: 482,
    left: 101,
    width: 132,
    height: 31,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  graphYearChild13: {
    top: 533,
    left: 36,
  },
  year2024: {
    top: 535,
    left: 69,
    width: 228,
    fontSize: FontSize.size_xl,
  },
  march: {
    top: 214,
    left: 50,
    width: 138,
  },
  april: {
    top: 213,
    left: 233,
    width: 121,
  },
  may: {
    top: 252,
    left: 55,
    width: 133,
    height: 30,
    fontSize: FontSize.size_base,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  june: {
    top: 255,
    left: 230,
    width: 140,
  },
  july: {
    top: 290,
    left: 56,
    width: 119,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  august: {
    top: 296,
    left: 227,
    width: 111,
    height: 26,
    fontSize: FontSize.size_base,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  september: {
    top: 335,
    left: 37,
    width: 146,
  },
  october: {
    top: 337,
    left: 224,
    width: 136,
    fontSize: FontSize.size_base,
  },
  november: {
    top: 376,
    width: 155,
    left: 36,
  },
  december: {
    top: 374,
    left: 196,
    width: 168,
    fontSize: FontSize.size_base,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrowLeft: {
    left: "1.39%",
    top: "0.75%",
    right: "84.72%",
    bottom: "93%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  graphYear: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
  },
});

export default GraphYear;
