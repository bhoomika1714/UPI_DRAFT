import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Selectbank = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.selectbank, styles.iconLayout]}>
      <View style={[styles.selectbankChild, styles.selectbankChildPosition]} />
      <Text style={[styles.selectYourBankContainer, styles.bankFlexBox]}>
        <Text style={styles.selectYour}>{`      Select Your `}</Text>
        <Text style={styles.bank}>Bank</Text>
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.componentChild} />
        <Image
          style={styles.bankPosition}
          resizeMode="cover"
          source={require("../assets/bank-logos-small5.png")}
        />
        <Text style={[styles.axisBank, styles.bankTypo]}> Axis Bank</Text>
        <Image
          style={styles.outlineinterfacecaretRightIcon}
          resizeMode="cover"
          source={require("../assets/outlineinterfacecaret-right5.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.componentChild} />
        <Image
          style={[styles.bankLogosSmall1, styles.bankPosition]}
          resizeMode="cover"
          source={require("../assets/bank-logos-small5.png")}
        />
        <Text style={[styles.axisBank, styles.bankTypo]}> ICICI Bank</Text>
        <Image
          style={styles.outlineinterfacecaretRightIcon}
          resizeMode="cover"
          source={require("../assets/outlineinterfacecaret-right5.png")}
        />
      </View>
      <Image
        style={[styles.bankLogosSmall2, styles.bankLayout]}
        resizeMode="cover"
        source={require("../assets/bank-logos-small6.png")}
      />
      <Pressable
        style={[styles.rectangleContainer, styles.rectanglePosition]}
        onPress={() => navigation.navigate("TandC")}
      >
        <View style={styles.componentChild} />
        <Image
          style={[styles.bankLogosSmall1, styles.bankPosition]}
          resizeMode="cover"
          source={require("../assets/bank-logos-small5.png")}
        />
        <Text style={[styles.axisBank, styles.bankTypo]}> State Bank</Text>
        <Image
          style={styles.outlineinterfacecaretRightIcon}
          resizeMode="cover"
          source={require("../assets/outlineinterfacecaret-right5.png")}
        />
      </Pressable>
      <Image
        style={[styles.bankLogosSmall4, styles.bankLayout]}
        resizeMode="cover"
        source={require("../assets/bank-logos-small1.png")}
      />
      <View style={styles.selectbankItem} />
      <Image
        style={styles.search24dp434343Fill0Wght4Icon}
        resizeMode="cover"
        source={require("../assets/search-24dp-434343-fill0-wght400-grad0-opsz24-1.png")}
      />
      <Text style={[styles.searchByBank, styles.bankTypo]}>
        Search by Bank Name
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Map4")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
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
  selectbankChildPosition: {
    width: 349,
    marginLeft: -175,
    position: "absolute",
  },
  bankFlexBox: {
    textAlign: "left",
    color: Color.colorDarkcyan,
    left: "50%",
  },
  bankTypo: {
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectanglePosition: {
    marginLeft: -174,
    height: 43,
    width: 360,
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
  selectbankChild: {
    top: 319,
    backgroundColor: "#f6f9f9",
    height: 60,
    borderRadius: Border.br_8xs,
    width: 349,
    left: "50%",
    marginLeft: -175,
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
    height: 37,
    width: 349,
    marginLeft: -175,
    position: "absolute",
    color: Color.colorDarkcyan,
  },
  componentChild: {
    marginLeft: -180,
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.colorWhitesmoke_300,
    height: "100%",
    width: 360,
    borderRadius: Border.br_8xs,
    left: "50%",
    position: "absolute",
  },
  axisBank: {
    marginLeft: -67,
    top: "23.26%",
    width: 132,
    height: "69.77%",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorDarkcyan,
    left: "50%",
  },
  outlineinterfacecaretRightIcon: {
    top: "13.95%",
    right: 0,
    bottom: "16.28%",
    width: 29,
    maxHeight: "100%",
    height: "69.77%",
    position: "absolute",
  },
  rectangleParent: {
    top: 420,
    height: 43,
    width: 360,
    left: "50%",
    marginLeft: -175,
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
    marginLeft: -172,
    top: 28,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.schemesOnPrimary,
    width: 344,
    height: 44,
    left: "50%",
    position: "absolute",
  },
  search24dp434343Fill0Wght4Icon: {
    top: 42,
    left: 20,
    width: 24,
    height: 25,
    position: "absolute",
  },
  searchByBank: {
    top: 43,
    left: 27,
    color: Color.colorGainsboro_100,
    textAlign: "center",
    width: 254,
    fontFamily: FontFamily.interRegular,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
  },
  vector: {
    left: "31.39%",
    top: "15%",
    right: "26.94%",
    bottom: "66.25%",
    width: "41.67%",
    height: "18.75%",
    position: "absolute",
  },
  selectbank: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
  },
});

export default Selectbank;
