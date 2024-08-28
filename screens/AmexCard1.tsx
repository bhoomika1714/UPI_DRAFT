import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const AmexCard1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.amexCard}>
      <Text style={[styles.myCards, styles.cardsTypo]}> My Cards</Text>
      <View style={styles.amexCardChild} />
      <Text style={[styles.text, styles.textClr]}>{`02/24
`}</Text>
      <Image
        style={[styles.amexCardItem, styles.amexCardLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.amexCardInner, styles.amexCardLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.amexCardLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.amexCardChild2Layout]}
        onPress={() => navigation.navigate("MakePayment10")}
      />
      <Text style={[styles.makePayment430Container, styles.changePinLayout]}>
        <Text
          style={styles.makePayment}
        >{`Make Payment                    `}</Text>
        <Text style={styles.text1}>$430</Text>
      </Text>
      <Text style={styles.dueMarch7}>Due March 7 2024</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.setting, styles.settingPosition]}
        onPress={() => navigation.navigate("Settings3")}
      >
        <Text style={[styles.setting1, styles.textClr]}>Setting</Text>
      </Pressable>
      <Pressable
        style={[styles.transactions, styles.settingPosition]}
        onPress={() => navigation.navigate("Transactions")}
      >
        <Text style={[styles.transactions1, styles.textClr]}>Transactions</Text>
      </Pressable>
      <View style={styles.amexCardChild1} />
      <View style={[styles.amexCardChild2, styles.amexCardChild2Layout]} />
      <Image
        style={[styles.amexCardChild3, styles.amexCardLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.amexCardChild4, styles.amexCardLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.amexCardChild5, styles.amexCardLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={[styles.lineView, styles.linePosition]} />
      <Image
        style={[styles.lineIcon, styles.linePosition]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.menuIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={styles.frameView} />
      <Image
        style={[styles.outlineinterfaceother1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/outlineinterfaceother-1.png")}
      />
      <Image
        style={[styles.removeIcon, styles.removePosition]}
        contentFit="cover"
        source={require("../assets/remove.png")}
      />
      <Pressable
        style={styles.viewStatement}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Text style={[styles.viewStatement1, styles.textClr]}>
          View Statement
        </Text>
      </Pressable>
      <Text style={[styles.changePin, styles.changePinLayout]}>Change Pin</Text>
      <Text style={[styles.removeCard, styles.removePosition]}>
        Remove Card
      </Text>
      <Image
        style={[
          styles.outlineinterfacecaretRightIcon,
          styles.outlineinterfacecaretIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/outlineinterfacecaret-right1.png")}
      />
      <Image
        style={[
          styles.outlineinterfacecaretRightIcon1,
          styles.outlineinterfacecaretIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/outlineinterfacecaret-right1.png")}
      />
      <Image
        style={[
          styles.outlineinterfacecaretRightIcon2,
          styles.outlineinterfacecaretIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/outlineinterfacecaret-right1.png")}
      />
      <View style={[styles.amexCardChild6, styles.viewCardsPosition]} />
      <Pressable
        style={[styles.viewCards, styles.viewCardsPosition]}
        onPress={() => navigation.navigate("Cards2")}
      >
        <Text style={[styles.viewCards1, styles.cardsTypo]}>View Cards</Text>
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CardsPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={[styles.text2, styles.textClr]}>**** *******2332</Text>
      <Pressable
        style={styles.checkBalance}
        onPress={() => navigation.navigate("Bankorwallet2")}
      >
        <Text style={[styles.checkBalance1, styles.expiryDateTypo]}>
          Check Balance
        </Text>
      </Pressable>
      <Text style={[styles.expiryDate, styles.expiryDateTypo]}>
        Expiry Date
      </Text>
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        <Text style={[styles.profile, styles.loanTypo]}>Profile</Text>
        <Text style={[styles.history, styles.loanTypo]}>History</Text>
        <Text style={[styles.cards, styles.homeLayout]}>Cards</Text>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.homeLayout]} />
        <Pressable
          style={[styles.frame, styles.wrapperLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper1, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.loan, styles.loanTypo]}>{`Loan
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textClr: {
    color: Color.schemesOnPrimary,
    textAlign: "left",
  },
  amexCardLayout1: {
    width: 14,
    top: 235,
    height: 14,
    position: "absolute",
  },
  amexCardChild2Layout: {
    width: 326,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  changePinLayout: {
    height: 30,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    position: "absolute",
  },
  settingPosition: {
    top: 412,
    position: "absolute",
  },
  amexCardLayout: {
    height: 38,
    width: 40,
    left: 36,
    position: "absolute",
  },
  linePosition: {
    height: 1,
    left: 20,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    left: 44,
  },
  removePosition: {
    top: 633,
    position: "absolute",
  },
  outlineinterfacecaretIconLayout: {
    width: 30,
    left: 294,
    height: 30,
    position: "absolute",
  },
  viewCardsPosition: {
    top: 221,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  expiryDateTypo: {
    height: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  homeLayout: {
    width: 38,
    position: "absolute",
  },
  loanTypo: {
    top: 44,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  myCards: {
    top: 23,
    left: 70,
    fontSize: FontSize.size_5xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    width: 238,
    height: 53,
    position: "absolute",
  },
  amexCardChild: {
    top: 100,
    width: 329,
    height: 114,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_xl,
    left: 16,
    position: "absolute",
  },
  text: {
    top: 192,
    left: 288,
    width: 44,
    height: 11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  amexCardItem: {
    left: 132,
    height: 14,
  },
  amexCardInner: {
    left: 173,
    height: 14,
  },
  ellipseIcon: {
    left: 214,
    height: 14,
  },
  rectanglePressable: {
    top: 265,
    height: 90,
    left: 16,
    width: 326,
  },
  makePayment: {
    fontSize: FontSize.size_xl,
  },
  text1: {
    fontSize: FontSize.size_sm,
  },
  makePayment430Container: {
    top: 280,
    left: 48,
    width: 279,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dueMarch7: {
    top: 330,
    left: 208,
    width: 119,
    height: 10,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  rectangleIcon: {
    top: 384,
    left: 21,
    width: 139,
    height: 75,
    position: "absolute",
  },
  rectangleView: {
    top: 385,
    left: 170,
    width: 175,
    height: 75,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  setting1: {
    width: 111,
    height: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  setting: {
    left: 46,
  },
  transactions1: {
    width: 154,
    height: 29,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  transactions: {
    left: 191,
  },
  amexCardChild1: {
    top: 489,
    width: 319,
    height: 217,
    left: 20,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  amexCardChild2: {
    top: 476,
    left: 17,
    height: 203,
  },
  amexCardChild3: {
    top: 495,
  },
  amexCardChild4: {
    top: 557,
  },
  amexCardChild5: {
    top: 625,
  },
  lineView: {
    top: 543,
    borderStyle: "solid",
    borderColor: Color.schemesOnPrimary,
    borderTopWidth: 1,
    width: 320,
  },
  lineIcon: {
    top: 611,
    width: 317,
  },
  menuIcon: {
    top: 502,
    position: "absolute",
  },
  frameView: {
    top: -133,
    left: -943,
    width: 340,
    height: 518,
    position: "absolute",
  },
  outlineinterfaceother1Icon: {
    top: 565,
    position: "absolute",
  },
  removeIcon: {
    height: 24,
    width: 24,
    left: 44,
  },
  viewStatement1: {
    width: 208,
    height: 33,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  viewStatement: {
    left: 90,
    top: 505,
    position: "absolute",
  },
  changePin: {
    top: 568,
    width: 209,
    left: 93,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  removeCard: {
    width: 187,
    height: 37,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  outlineinterfacecaretRightIcon: {
    top: 507,
  },
  outlineinterfacecaretRightIcon1: {
    top: 566,
  },
  outlineinterfacecaretRightIcon2: {
    top: 632,
  },
  amexCardChild6: {
    left: 240,
    width: 97,
    borderRadius: Border.br_3xs,
    height: 14,
    backgroundColor: Color.colorDarkcyan,
  },
  viewCards1: {
    color: "#f3eded",
    width: 87,
    height: 14,
    fontSize: FontSize.size_sm,
  },
  viewCards: {
    left: 245,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "7.22%",
    top: "5%",
    right: "84.44%",
    bottom: "92.5%",
    width: "8.33%",
    height: "2.5%",
    position: "absolute",
  },
  image5Icon: {
    top: 108,
    left: 237,
    width: 100,
    height: 63,
    position: "absolute",
  },
  text2: {
    top: 112,
    left: 26,
    width: 202,
    height: 15,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  checkBalance1: {
    color: Color.colorGray_300,
    width: 126,
  },
  checkBalance: {
    left: 27,
    top: 72,
    position: "absolute",
  },
  expiryDate: {
    top: 189,
    left: 44,
    height: 16,
    width: 175,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  wrapper: {
    left: 234,
    top: 11,
  },
  home: {
    left: 31,
    top: 43,
    width: 38,
    height: 20,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  profile: {
    left: 286,
    width: 42,
    height: 20,
  },
  history: {
    left: 223,
    width: 47,
    height: 20,
  },
  cards: {
    top: 43,
    width: 38,
    height: 20,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 93,
  },
  container: {
    left: 38,
    top: 11,
  },
  frameChild: {
    left: 95,
    backgroundColor: Color.colorTurquoise,
    height: 32,
    top: 11,
    borderRadius: Border.br_3xs,
  },
  frame: {
    left: 292,
    top: 13,
  },
  wrapper1: {
    left: 101,
    top: 11,
  },
  vectorIcon: {
    left: 165,
    top: 11,
  },
  loan: {
    left: 159,
    width: 75,
    height: 29,
  },
  rectangleParent: {
    top: 728,
    left: 0,
    backgroundColor: Color.colorDarkslategray_100,
    width: 360,
    height: 77,
    position: "absolute",
    overflow: "hidden",
  },
  amexCard: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AmexCard1;
