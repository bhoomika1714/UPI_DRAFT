import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const StatementYear = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.statementYear, styles.iconLayout]}>
      <View style={[styles.statementYearChild, styles.statementChildLayout3]} />
      <Text style={[styles.year2021, styles.year2021Typo]}> Year 2021</Text>
      <View style={styles.statementYearItem} />
      <Text style={[styles.selectAYear, styles.yearFlexBox]}>
        Select a year
      </Text>
      <View style={[styles.statementYearInner, styles.statementChildLayout2]} />
      <Pressable
        style={styles.january}
        onPress={() => navigation.navigate("GraphicalOverview1")}
      >
        <Text style={[styles.january1, styles.julyTypo]}>January</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.statementChildLayout2]}
        onPress={() => navigation.navigate("StatementOverview")}
      />
      <Text style={[styles.february, styles.octoberTypo]}>February</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.statementYearChild1, styles.rectangleViewLayout]} />
      <View
        style={[styles.statementYearChild2, styles.statementChildLayout1]}
      />
      <View
        style={[styles.statementYearChild3, styles.statementChildLayout1]}
      />
      <View
        style={[styles.statementYearChild4, styles.statementChildLayout2]}
      />
      <View
        style={[styles.statementYearChild5, styles.statementChildLayout2]}
      />
      <View
        style={[styles.statementYearChild6, styles.statementChildLayout2]}
      />
      <View
        style={[styles.statementYearChild7, styles.statementChildLayout2]}
      />
      <View style={[styles.statementYearChild8, styles.statementChildLayout]} />
      <View style={[styles.statementYearChild9, styles.statementChildLayout]} />
      <View
        style={[styles.statementYearChild10, styles.statementChildLayout3]}
      />
      <Text style={[styles.year2022, styles.yearFlexBox]}>Year 2022</Text>
      <View
        style={[styles.statementYearChild11, styles.statementChildLayout3]}
      />
      <Text style={[styles.year2023, styles.yearFlexBox]}> Year 2023</Text>
      <View
        style={[styles.statementYearChild12, styles.statementChildLayout3]}
      />
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
          resizeMode="cover"
          source={require("../assets/arrow-left6.png")}
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
  statementChildLayout3: {
    height: 33,
    width: 275,
    backgroundColor: Color.colorSnow_500,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  year2021Typo: {
    height: 29,
    textAlign: "left",
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  yearFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  statementChildLayout2: {
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorSnow_500,
    position: "absolute",
  },
  julyTypo: {
    height: 23,
    textAlign: "left",
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
  },
  octoberTypo: {
    height: 27,
    textAlign: "left",
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleViewLayout: {
    top: 209,
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorSnow_500,
    position: "absolute",
  },
  statementChildLayout1: {
    top: 247,
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorSnow_500,
    position: "absolute",
  },
  statementChildLayout: {
    top: 373,
    width: 153,
    borderRadius: Border.br_3xs,
    height: 29,
    backgroundColor: Color.colorSnow_500,
    position: "absolute",
  },
  juneTypo: {
    height: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  statementYearChild: {
    top: 115,
    left: 45,
  },
  year2021: {
    top: 119,
    left: 94,
    width: 160,
    fontSize: FontSize.size_xl,
  },
  statementYearItem: {
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
  statementYearInner: {
    top: 168,
    left: 11,
    width: 153,
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
  rectanglePressable: {
    top: 171,
    left: 187,
  },
  february: {
    top: 173,
    left: 220,
    width: 134,
    fontSize: FontSize.size_base,
  },
  rectangleView: {
    left: 8,
  },
  statementYearChild1: {
    left: 187,
  },
  statementYearChild2: {
    left: 7,
  },
  statementYearChild3: {
    left: 188,
  },
  statementYearChild4: {
    top: 288,
    left: 7,
  },
  statementYearChild5: {
    top: 291,
    left: 187,
  },
  statementYearChild6: {
    top: 329,
    left: 11,
    width: 153,
    borderRadius: Border.br_3xs,
  },
  statementYearChild7: {
    top: 331,
    left: 188,
  },
  statementYearChild8: {
    left: 7,
  },
  statementYearChild9: {
    left: 188,
  },
  statementYearChild10: {
    top: 426,
    left: 36,
  },
  year2022: {
    top: 431,
    left: 114,
    width: 177,
    height: 28,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  statementYearChild11: {
    top: 477,
    left: 36,
  },
  year2023: {
    top: 482,
    left: 101,
    width: 132,
    height: 31,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  statementYearChild12: {
    top: 533,
    left: 36,
  },
  year2024: {
    top: 535,
    left: 64,
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
    color: Color.colorDarkcyan,
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
    color: Color.colorDarkcyan,
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
  statementYear: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
  },
});

export default StatementYear;
