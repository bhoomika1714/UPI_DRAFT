import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Cards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cards}>
      <Pressable
        style={[styles.screenshot202407161223321, styles.image5Position]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/screenshot-20240716-122332-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image3}
        onPress={() => navigation.navigate("Mastercard")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <Pressable
        style={[styles.image5, styles.image5Position]}
        onPress={() => navigation.navigate("AmexCard")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
      </Pressable>
      <View style={[styles.cardsChild, styles.cardsLayout]} />
      <View style={[styles.cardsItem, styles.cardsLayout]} />
      <Text style={[styles.addCard, styles.cardTypo1]}>ADD CARD</Text>
      <Text style={[styles.removeCard, styles.cardTypo1]}>{`REMOVE CARD
`}</Text>
      <View style={[styles.cardsInner, styles.cardsLayout]} />
      <Text style={[styles.cards1, styles.cardTypo]}>CARDS</Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left8.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.cardsChildLayout]} />
      <View style={[styles.cardsChild1, styles.cardsChildLayout]} />
      <View style={[styles.cardsChild2, styles.cardsChildLayout]} />
      <Text style={[styles.visaCard, styles.cardTypo]}>VISA CARD:</Text>
      <Text style={[styles.masterCard, styles.cardTypo]}>MASTER CARD:</Text>
      <Text style={[styles.amexCard, styles.cardTypo]}>AMEX CARD:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image5Position: {
    left: 212,
    position: "absolute",
  },
  cardsLayout: {
    width: 360,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  cardTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  cardTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  cardsChildLayout: {
    height: 45,
    width: 164,
    left: 7,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  screenshot202407161223321: {
    width: 70,
    height: 30,
    top: 128,
  },
  image3: {
    left: 215,
    top: 210,
    width: 67,
    height: 40,
    position: "absolute",
  },
  image4Icon: {
    top: 766,
    left: 599,
    width: 890,
    height: 521,
    position: "absolute",
  },
  image5: {
    top: 302,
    width: 100,
    height: 63,
  },
  cardsChild: {
    top: 409,
    height: 50,
  },
  cardsItem: {
    top: 474,
    height: 50,
  },
  addCard: {
    top: 428,
    left: 137,
    color: "#fefcfc",
    width: 133,
    height: 21,
  },
  removeCard: {
    top: 489,
    left: 132,
    color: Color.colorGray_100,
    width: 130,
    height: 20,
  },
  cardsInner: {
    top: 0,
    height: 95,
  },
  cards1: {
    top: 35,
    left: 128,
    color: Color.schemesOnPrimary,
  },
  icon3: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: "1.94%",
    top: "1.38%",
    right: "84.17%",
    bottom: "92.38%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  rectangleView: {
    top: 128,
  },
  cardsChild1: {
    top: 213,
  },
  cardsChild2: {
    top: 309,
  },
  visaCard: {
    top: 137,
    left: 12,
    color: "#f8ebeb",
    width: 141,
    height: 43,
  },
  masterCard: {
    top: 227,
    left: 11,
    color: "#efeaea",
    width: 163,
    height: 42,
  },
  amexCard: {
    top: 319,
    left: 17,
    color: "#faf3f3",
    width: 152,
    height: 50,
  },
  cards: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cards;
