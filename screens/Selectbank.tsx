import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Selectbank = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.selectbank}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <View style={styles.selectbankChild} />
      <Text style={styles.selectYourBankContainer}>
        <Text style={styles.selectYour}>{`      Select Your `}</Text>
        <Text style={styles.bank}>Bank</Text>
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.componentChild} />
        <Image
          style={styles.bankPosition}
          contentFit="cover"
          source={require("../assets/bank-logos-small1.png")}
        />
        <Text style={[styles.axisBank, styles.axisBankTypo]}> Axis Bank</Text>
        <Image
          style={styles.outlineinterfacecaretRightIcon}
          contentFit="cover"
          source={require("../assets/outlineinterfacecaret-right.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.componentChild} />
        <Image
          style={[styles.bankLogosSmall1, styles.bankPosition]}
          contentFit="cover"
          source={require("../assets/bank-logos-small1.png")}
        />
        <Text style={[styles.axisBank, styles.axisBankTypo]}> ICICI Bank</Text>
        <Image
          style={styles.outlineinterfacecaretRightIcon}
          contentFit="cover"
          source={require("../assets/outlineinterfacecaret-right.png")}
        />
      </View>
      <Image
        style={[styles.bankLogosSmall2, styles.bankLayout]}
        contentFit="cover"
        source={require("../assets/bank-logos-small2.png")}
      />
      <Pressable
        style={[styles.rectangleContainer, styles.rectanglePosition]}
        onPress={() => navigation.navigate("TandC")}
      >
        <View style={styles.componentChild} />
        <Image
          style={[styles.bankLogosSmall1, styles.bankPosition]}
          contentFit="cover"
          source={require("../assets/bank-logos-small1.png")}
        />
        <Text style={[styles.axisBank, styles.axisBankTypo]}> State Bank</Text>
        <Image
          style={styles.outlineinterfacecaretRightIcon}
          contentFit="cover"
          source={require("../assets/outlineinterfacecaret-right.png")}
        />
      </Pressable>
      <Image
        style={[styles.bankLogosSmall4, styles.bankLayout]}
        contentFit="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <View style={styles.selectbankItem} />
      <Image
        style={styles.image40Icon}
        contentFit="cover"
        source={require("../assets/image-40.png")}
      />
      <Text
        style={[styles.searchForYour, styles.axisBankTypo]}
      >{`Search for your bank `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  axisBankTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition: {
    marginLeft: -174,
    height: 43,
    width: 349,
    left: "50%",
    position: "absolute",
  },
  bankPosition: {
    height: 20,
    width: 19,
    left: 10,
    bottom: 8,
    position: "absolute",
  },
  bankLayout: {
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  imageIcon: {
    marginLeft: -90,
    bottom: 507,
    width: 180,
    height: 180,
    left: "50%",
    position: "absolute",
  },
  selectbankChild: {
    top: 319,
    height: 60,
    width: 349,
    marginLeft: -175,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_8xs,
    left: "50%",
    position: "absolute",
  },
  selectYour: {
    fontFamily: FontFamily.interRegular,
  },
  bank: {
    fontFamily: FontFamily.poppinsRegular,
  },
  selectYourBankContainer: {
    top: 331,
    fontSize: FontSize.size_11xl,
    color: Color.schemesOnPrimary,
    height: 37,
    textAlign: "left",
    width: 349,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  componentChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: "100%",
  },
  axisBank: {
    marginLeft: -66.5,
    top: "23.26%",
    color: Color.colorWhitesmoke_400,
    width: 132,
    height: "69.77%",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  outlineinterfacecaretRightIcon: {
    top: "13.95%",
    right: 0,
    bottom: "16.28%",
    maxHeight: "100%",
    width: 29,
    height: "69.77%",
    position: "absolute",
  },
  rectangleParent: {
    top: 420,
    height: 43,
    width: 349,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  bankLogosSmall1: {
    display: "none",
  },
  rectangleGroup: {
    top: 501,
  },
  bankLogosSmall2: {
    top: 510,
    left: 16,
  },
  rectangleContainer: {
    top: 582,
  },
  bankLogosSmall4: {
    top: 593,
    left: 19,
  },
  selectbankItem: {
    top: 16,
    left: -1,
    backgroundColor: Color.colorGainsboro_200,
    width: 360,
    height: 30,
    position: "absolute",
  },
  image40Icon: {
    top: 18,
    left: 6,
    width: 25,
    height: 25,
    position: "absolute",
  },
  searchForYour: {
    top: 20,
    left: 48,
    color: "#b6a0a0",
    width: 278,
    height: 44,
    fontFamily: FontFamily.interRegular,
  },
  selectbank: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Selectbank;
