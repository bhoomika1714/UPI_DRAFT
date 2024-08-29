import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BankLoan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bankLoan}>
      <Image
        style={styles.screenshot202408191517551}
        resizeMode="cover"
        source={require("../assets/screenshot-20240819-151755-1.png")}
      />
      <View style={styles.bankLoanChild} />
      <Pressable
        style={[styles.bankLoanItem, styles.getStartedLayout]}
        onPress={() => navigation.navigate("Selectbank")}
      />
      <Image
        style={styles.outlineinterfacecaretRightIcon}
        resizeMode="cover"
        source={require("../assets/outlineinterfacecaret-right3.png")}
      />
      <Text style={[styles.getStarted, styles.getStartedPosition]}>
        <Text style={styles.get}>{`     Get `}</Text>
        <Text style={styles.started}>Started!</Text>
      </Text>
      <Text style={[styles.bankLoanFor, styles.getStartedPosition]}>
        BANK LOAN FOR YOU
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedLayout: {
    height: 43,
    top: 417,
  },
  getStartedPosition: {
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  screenshot202408191517551: {
    top: 176,
    width: 360,
    height: 449,
    left: 0,
    position: "absolute",
  },
  bankLoanChild: {
    top: 0,
    width: 362,
    height: 81,
    backgroundColor: Color.colorDarkcyan,
    left: 0,
    position: "absolute",
  },
  bankLoanItem: {
    marginLeft: -111,
    borderRadius: Border.br_3xs,
    width: 236,
    left: "50%",
    height: 43,
    top: 417,
    backgroundColor: Color.colorDarkcyan,
    position: "absolute",
  },
  outlineinterfacecaretRightIcon: {
    top: 706,
    left: 305,
    width: 30,
    height: 30,
    position: "absolute",
  },
  get: {
    fontFamily: FontFamily.interRegular,
  },
  started: {
    fontFamily: FontFamily.poppinsRegular,
  },
  getStarted: {
    marginLeft: -98,
    fontSize: FontSize.size_5xl,
    color: Color.schemesOnPrimary,
    width: 278,
    height: 43,
    top: 417,
    textAlign: "left",
  },
  bankLoanFor: {
    marginLeft: -150,
    top: 27,
    fontSize: FontSize.size_11xl,
    color: "#fcf7f7",
    width: 312,
    height: 54,
    fontFamily: FontFamily.poppinsRegular,
  },
  bankLoan: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default BankLoan;
