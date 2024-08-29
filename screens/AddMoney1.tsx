import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AddMoney1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addMoney1}>
      <View style={[styles.addMoney1Child, styles.addPosition]} />
      <View style={[styles.addMoney1Child, styles.addPosition]} />
      <View style={[styles.addMoney1Inner, styles.addPosition]} />
      <Text style={[styles.addMoney, styles.amountFlexBox]}>Add money</Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("Pockets")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/arrow-left10.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Text style={[styles.proceed, styles.amountFlexBox]}>Proceed</Text>
      <Pressable
        style={styles.heroiconsdocumentCurrencyRu}
        onPress={() => navigation.navigate("AddMoney")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/heroiconsdocumentcurrencyrupee16solid.png")}
        />
      </Pressable>
      <Image
        style={styles.footerIcon}
        resizeMode="cover"
        source={require("../assets/footer.png")}
      />
      <View style={styles.addMoney1Child1} />
      <Image
        style={[styles.assistiveChipIcon, styles.assistiveIconLayout]}
        resizeMode="cover"
        source={require("../assets/assistive-chip.png")}
      />
      <View style={[styles.addMoney1Child2, styles.rectangleViewBorder]} />
      <Text style={[styles.amount, styles.amountFlexBox]}>Amount:</Text>
      <Image
        style={[styles.assistiveChipIcon1, styles.assistiveIconLayout]}
        resizeMode="cover"
        source={require("../assets/assistive-chip1.png")}
      />
      <Image
        style={[styles.assistiveChipIcon2, styles.assistiveIconLayout]}
        resizeMode="cover"
        source={require("../assets/assistive-chip2.png")}
      />
      <Image
        style={[styles.assistiveChipIcon3, styles.assistiveIconLayout]}
        resizeMode="cover"
        source={require("../assets/assistive-chip3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  amountFlexBox: {
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rectangleViewBorder: {
    borderWidth: 1,
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderStyle: "solid",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  assistiveIconLayout: {
    height: 32,
    borderRadius: Border.br_5xs,
    top: 333,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  addMoney1Child: {
    top: 2,
    backgroundColor: Color.schemesSurfaceTint,
    height: 148,
  },
  addMoney1Inner: {
    top: -18,
    backgroundColor: Color.colorDarkcyan,
    height: 169,
  },
  addMoney: {
    top: 46,
    left: 47,
    fontSize: FontSize.size_17xl,
    display: "flex",
    alignItems: "flex-end",
    width: 218,
    height: 91,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    textAlign: "left",
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
    left: 7,
    top: 94,
    width: 40,
    height: 29,
    position: "absolute",
  },
  rectangleView: {
    top: 499,
    left: 62,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 229,
    height: 48,
  },
  proceed: {
    top: 504,
    left: 117,
    fontSize: FontSize.size_9xl,
    width: 138,
    height: 43,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  heroiconsdocumentCurrencyRu: {
    left: 289,
    top: 90,
    width: 50,
    height: 50,
    position: "absolute",
  },
  footerIcon: {
    top: 723,
    width: 368,
    height: 77,
    left: 0,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  addMoney1Child1: {
    top: 179,
    left: 6,
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 345,
    height: 220,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  assistiveChipIcon: {
    left: 20,
    width: 65,
    height: 32,
    borderRadius: Border.br_5xs,
    top: 333,
  },
  addMoney1Child2: {
    top: 246,
    left: 10,
    backgroundColor: "#f7f3f3",
    width: 333,
    height: 49,
  },
  amount: {
    top: 208,
    left: 17,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslategray_100,
    width: 165,
    height: 38,
  },
  assistiveChipIcon1: {
    left: 103,
    width: 65,
    height: 32,
    borderRadius: Border.br_5xs,
    top: 333,
  },
  assistiveChipIcon2: {
    left: 189,
    width: 65,
    height: 32,
    borderRadius: Border.br_5xs,
    top: 333,
  },
  assistiveChipIcon3: {
    left: 273,
    width: 73,
    height: 32,
    borderRadius: Border.br_5xs,
    top: 333,
  },
  addMoney1: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
});

export default AddMoney1;
