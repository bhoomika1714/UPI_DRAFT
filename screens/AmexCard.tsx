import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AmexCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.amexCard}>
      <View style={styles.amexCardChild} />
      <Text style={styles.text}>{`02/24
`}</Text>
      <Image
        style={[styles.amexCardItem, styles.amexCardLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.amexCardInner, styles.amexCardLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.amexCardLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.amexCardChild2Layout]}
        onPress={() => navigation.navigate("MakePayment")}
      />
      <Text style={[styles.makePayment430Container, styles.changePinLayout]}>
        <Text
          style={styles.makePayment}
        >{`Make Payment                    `}</Text>
        <Text style={styles.text1}>$430</Text>
      </Text>
      <Text style={[styles.dueMarch7, styles.dueMarch7Typo]}>
        Due March 7 2024
      </Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.setting, styles.settingPosition]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={[styles.setting1, styles.cardsTypo]}>Setting</Text>
      </Pressable>
      <Text style={[styles.transactions, styles.cardsTypo]}>Transactions</Text>
      <View style={styles.amexCardChild1} />
      <View style={[styles.amexCardChild2, styles.amexCardChild2Layout]} />
      <Image
        style={[styles.amexCardChild3, styles.amexCardLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.amexCardChild4, styles.amexCardLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.amexCardChild5, styles.amexCardLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={[styles.lineView, styles.linePosition]} />
      <Image
        style={[styles.lineIcon, styles.linePosition]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.menuIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <View style={styles.frameView} />
      <Image
        style={[styles.outlineinterfaceother1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/outlineinterfaceother-1.png")}
      />
      <Image
        style={[styles.removeIcon, styles.removePosition]}
        resizeMode="cover"
        source={require("../assets/remove.png")}
      />
      <Pressable
        style={styles.viewStatement}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Text style={[styles.viewStatement1, styles.dueMarch7Typo]}>
          View Statement
        </Text>
      </Pressable>
      <Text style={[styles.changePin, styles.dueMarch7Typo]}>Change Pin</Text>
      <Text style={[styles.removeCard, styles.removePosition]}>
        Remove Card
      </Text>
      <Image
        style={[
          styles.outlineinterfacecaretRightIcon,
          styles.outlineinterfacecaretIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/outlineinterfacecaret-right.png")}
      />
      <Image
        style={[
          styles.outlineinterfacecaretRightIcon1,
          styles.outlineinterfacecaretIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/outlineinterfacecaret-right1.png")}
      />
      <Image
        style={[
          styles.outlineinterfacecaretRightIcon2,
          styles.outlineinterfacecaretIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/outlineinterfacecaret-right2.png")}
      />
      <View style={[styles.amexCardChild6, styles.viewCardsPosition]} />
      <Pressable
        style={[styles.viewCards, styles.viewCardsPosition]}
        onPress={() => navigation.navigate("Cards")}
      >
        <Text style={[styles.viewCards1, styles.cardsTypo]}>View Cards</Text>
      </Pressable>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={[styles.text2, styles.cardsTypo]}>**** *******2332</Text>
      <Text style={[styles.expiryDate, styles.expiryDateTypo]}>
        Expiry Date
      </Text>
      <View style={[styles.rectangleParent, styles.amexCardChild7Layout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        <Text style={[styles.profile, styles.loanTypo]}>Profile</Text>
        <Text style={[styles.history, styles.loanTypo]}>History</Text>
        <Text style={[styles.cards, styles.homeLayout]}>Cards</Text>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.homeLayout]} />
        <Pressable
          style={[styles.frame, styles.framePosition]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper1, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <Text style={[styles.loan, styles.loanTypo]}>{`Loan
`}</Text>
      </View>
      <View style={[styles.amexCardChild7, styles.amexCardChild7Layout]} />
      <Text style={[styles.myCards, styles.framePosition]}> My Cards</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CardsPage")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
      </Pressable>
      <View style={styles.amexCardChild8} />
      <Pressable
        style={styles.checkBalance}
        onPress={() => navigation.navigate("Bankorwallet")}
      >
        <Text style={[styles.checkBalance1, styles.expiryDateTypo]}>
          Check Balance
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    position: "absolute",
  },
  dueMarch7Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  settingPosition: {
    top: 412,
    position: "absolute",
  },
  cardsTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
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
  expiryDateTypo: {
    height: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  amexCardChild7Layout: {
    width: 360,
    position: "absolute",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
  },
  homeLayout: {
    width: 38,
    position: "absolute",
  },
  loanTypo: {
    top: 44,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  framePosition: {
    top: 13,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
    fontFamily: FontFamily.interRegular,
    width: 44,
    height: 11,
    textAlign: "left",
    color: Color.schemesOnPrimary,
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
    height: 30,
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  dueMarch7: {
    top: 330,
    left: 208,
    width: 119,
    height: 10,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  rectangleIcon: {
    top: 384,
    width: 139,
    height: 75,
    left: 21,
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
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
  },
  setting: {
    left: 46,
  },
  transactions: {
    left: 191,
    width: 154,
    height: 29,
    top: 412,
    position: "absolute",
    fontSize: FontSize.size_xl,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
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
    height: 30,
    position: "absolute",
  },
  removeCard: {
    width: 187,
    height: 37,
    left: 93,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_xl,
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
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
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
    position: "absolute",
  },
  home: {
    left: 31,
    top: 43,
    width: 38,
    height: 20,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.schemesOnPrimary,
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
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.schemesOnPrimary,
    left: 93,
  },
  container: {
    left: 38,
    top: 11,
    position: "absolute",
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
    height: 31,
    width: 25,
  },
  wrapper1: {
    left: 101,
    top: 11,
    position: "absolute",
  },
  vectorIcon: {
    left: 165,
    top: 11,
    position: "absolute",
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
    height: 77,
    overflow: "hidden",
  },
  amexCardChild7: {
    marginLeft: -180,
    top: 0,
    left: "50%",
    height: 47,
    backgroundColor: Color.colorDarkcyan,
  },
  myCards: {
    left: 68,
    fontSize: FontSize.size_5xl,
    color: Color.colorSnow_900,
    width: 238,
    height: 53,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  icon4: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "3.89%",
    top: "0.38%",
    right: "87.78%",
    bottom: "97.13%",
    width: "8.33%",
    height: "2.5%",
    position: "absolute",
  },
  amexCardChild8: {
    top: 71,
    width: 160,
    height: 17,
    borderRadius: Border.br_3xs,
    left: 21,
    backgroundColor: Color.colorDarkcyan,
    position: "absolute",
  },
  checkBalance1: {
    color: Color.colorLavenderblush_200,
    width: 126,
  },
  checkBalance: {
    top: 72,
    left: 36,
    position: "absolute",
  },
  amexCard: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AmexCard;
