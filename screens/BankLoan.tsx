import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BankLoan = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.bankLoan}>
      <Image
        style={styles.screenshot202408191517551}
        contentFit="cover"
        source={require("../assets/screenshot-20240819-151755-1.png")}
      />
      <View style={styles.bankLoanChild} />
      <Pressable
        style={styles.bankLoanItem}
        onPress={() => navigation.navigate("Selectbank")}
      />
      <Image
        style={styles.outlineinterfacecaretRightIcon}
        contentFit="cover"
        source={require("../assets/outlineinterfacecaret-right3.png")}
      />
      <Text style={[styles.getStarted, styles.getStartedPosition]}>
        <Text style={styles.get}>{`     Get `}</Text>
        <Text style={styles.started}>Started!</Text>
      </Text>
      <Text style={[styles.bankLoan4u, styles.getStartedPosition]}>
        BANK LOAN 4U
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedPosition: {
    textAlign: "left",
    marginLeft: -116,
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
    marginLeft: -150,
    top: 400,
    borderRadius: Border.br_3xs,
    width: 300,
    height: 70,
    left: "50%",
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
    top: 414,
    fontSize: FontSize.size_5xl,
    color: Color.schemesOnPrimary,
    width: 278,
    height: 43,
  },
  bankLoan4u: {
    top: 27,
    fontSize: FontSize.size_11xl,
    color: "#fcf7f7",
    width: 253,
    height: 54,
    fontFamily: FontFamily.poppinsRegular,
  },
  bankLoan: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default BankLoan;
