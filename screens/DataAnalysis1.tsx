import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DataAnalysis1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dataAnalysis1, styles.iconTransform]}>
      <View style={styles.dataAnalysis1Child} />
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/arrow-left9.png")}
        />
      </Pressable>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
      <Text style={[styles.transactions, styles.homeTypo]}>Transactions</Text>
      <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
      <Text style={styles.analysis}>ANALYSIS</Text>
      <Image
        style={[styles.barChart2Icon, styles.iconTransform]}
        resizeMode="cover"
        source={require("../assets/bar-chart2.png")}
      />
      <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
      <Text style={[styles.profile1, styles.home1Typo]}>Profile</Text>
      <Text style={[styles.history, styles.home1Typo]}>History</Text>
      <Text style={[styles.transac, styles.home1Typo]}>Transac...</Text>
      <Text style={[styles.cards1, styles.home1Typo]}>Cards</Text>
      <Image
        style={[styles.footerIcon, styles.iconTransform]}
        resizeMode="cover"
        source={require("../assets/footer.png")}
      />
      <View style={[styles.dataAnalysis1Item, styles.image37IconLayout]} />
      <Text style={styles.chart}>Chart:</Text>
      <Image
        style={[styles.image37Icon, styles.image37IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={styles.dataAnalysis1Inner}
        resizeMode="cover"
        source={require("../assets/rectangle-1271.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      <Pressable
        style={[styles.update, styles.updatePosition]}
        onPress={() => navigation.navigate("AddMoney")}
      >
        <Text style={styles.detailsTypo}>Update</Text>
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-62.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/vector12.png")}
      />
      <Image
        style={[styles.dataAnalysis1Child1, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-62.png")}
      />
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("DataAnalysis")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/frame24.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconTransform: {
    overflow: "hidden",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  homeTypo: {
    textAlign: "center",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 774,
    position: "absolute",
  },
  home1Typo: {
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    color: Color.schemesOnPrimary,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  image37IconLayout: {
    width: 345,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  detailsTypo: {
    width: 119,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  updatePosition: {
    top: 678,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 35,
    width: 35,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  frameLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  dataAnalysis1Child: {
    top: 2,
    left: 0,
    backgroundColor: Color.colorDarkcyan,
    width: 361,
    height: 109,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
  arrowLeft: {
    left: 11,
    top: 66,
    width: 40,
    height: 29,
    position: "absolute",
  },
  home: {
    left: 44,
  },
  profile: {
    left: 304,
  },
  transactions: {
    left: 198,
  },
  cards: {
    left: 125,
  },
  analysis: {
    top: 59,
    left: 51,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poppinsBold,
    width: 160,
    height: 28,
    fontWeight: "700",
    textAlign: "center",
    color: Color.schemesOnPrimary,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  barChart2Icon: {
    top: 41,
    left: 281,
    width: 50,
    height: 50,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  home1: {
    left: 40,
    width: 38,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 768,
  },
  profile1: {
    top: 770,
    left: 295,
    width: 42,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    height: 20,
  },
  history: {
    top: 769,
    left: 232,
    width: 47,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    height: 20,
  },
  transac: {
    left: 152,
    width: 63,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    height: 20,
    top: 768,
  },
  cards1: {
    left: 102,
    width: 38,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 768,
  },
  footerIcon: {
    top: 723,
    left: -4,
    width: 368,
    height: 77,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  dataAnalysis1Item: {
    left: 7,
    height: 392,
    backgroundColor: Color.schemesOnPrimary,
    top: 124,
    width: 345,
  },
  chart: {
    left: 12,
    fontSize: FontSize.size_5xl,
    lineHeight: 52,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 93,
    height: 52,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 124,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  image37Icon: {
    top: 543,
    left: 8,
    height: 44,
  },
  dataAnalysis1Inner: {
    top: 190,
    left: 13,
    width: 338,
    height: 339,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rectangleView: {
    top: 618,
    left: 5,
    width: 346,
    height: 90,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  details: {
    left: 184,
    top: 678,
    position: "absolute",
  },
  update: {
    left: 58,
  },
  ellipseIcon: {
    top: 631,
    left: 105,
  },
  vectorIcon: {
    top: 633,
    left: 108,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  dataAnalysis1Child1: {
    top: 630,
    left: 230,
  },
  frame: {
    left: 233,
    top: 634,
  },
  dataAnalysis1: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    width: "100%",
    overflow: "hidden",
  },
});

export default DataAnalysis1;
