import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CardsPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cardsPage}>
      <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
      <Pressable
        style={[styles.cardsPageChild, styles.cardsLayout]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      />
      <Pressable
        style={[styles.cardsPageItem, styles.cardsLayout]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      />
      <Text style={[styles.axisBank, styles.bankLayout]}> Axis Bank</Text>
      <Text style={[styles.text, styles.textTypo1]}>2456 2456 2456 2456</Text>
      <Image
        style={[styles.image24Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>30,000</Text>
      <Image
        style={[styles.bankLogosSmall, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/bank-logos-small4.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.cardsLayout]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-1271.png")}
        />
      </Pressable>
      <Text style={[styles.text2, styles.textTypo1]}>2456 2456 2456 2456</Text>
      <Image
        style={[styles.image25Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>30,000</Text>
      <Text style={[styles.iciciBank, styles.bankTypo1]}>ICICI Bank</Text>
      <Image
        style={[styles.bankLogosSmall1, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/bank-logos-small5.png")}
      />
      <Text style={[styles.text4, styles.textTypo1]}>2456 2456 2456 2456</Text>
      <Image
        style={[styles.image26Icon, styles.bankPosition]}
        contentFit="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={[styles.text5, styles.textTypo]}>30,000</Text>
      <Text style={[styles.stateBank, styles.bankPosition]}>State Bank</Text>
      <Image
        style={[styles.bankLogosSmall2, styles.bankPosition]}
        contentFit="cover"
        source={require("../assets/bank-logos-small6.png")}
      />
      <Text style={[styles.moreOption, styles.moreTypo]}>More Option</Text>
      <Text style={[styles.moreOption1, styles.moreTypo]}>More Option</Text>
      <Image
        style={[styles.cardsPageInner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-55.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.payPhonePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-55.png")}
      />
      <Text style={[styles.bank, styles.bankTypo]}> Bank</Text>
      <Text style={[styles.transfer, styles.numberTypo]}>Transfer</Text>
      <Text style={[styles.payPhone, styles.payPhonePosition]}>Pay Phone</Text>
      <Text style={[styles.number, styles.numberTypo]}>Number</Text>
      <Image
        style={[styles.image28Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={styles.image31Icon}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Pressable
          style={[styles.container, styles.frameLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        <Text style={[styles.profile, styles.loanTypo]}>Profile</Text>
        <Text style={[styles.history, styles.loanTypo]}>History</Text>
        <Text style={[styles.cards1, styles.homeLayout]}>Cards</Text>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.homeLayout]} />
        <Pressable
          style={[styles.rectanglePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper1, styles.frameLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.loan, styles.loanTypo]}>{`Loan
`}</Text>
      </View>
      <Image
        style={styles.image32Icon}
        contentFit="cover"
        source={require("../assets/image-32.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Image
        style={[styles.cardsPageChild1, styles.cardsPageChild1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-44.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector20.png")}
        />
      </Pressable>
      <Text
        style={[styles.welcomeBeckyHills, styles.cardsPageChild1Position]}
      >{`Welcome, Becky Hills!
`}</Text>
      <Image
        style={[styles.image20Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-20.png")}
      />
      <Image
        style={[styles.image19Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsTypo: {
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
  },
  cardsLayout: {
    height: 100,
    width: 100,
  },
  bankLayout: {
    height: 12,
    position: "absolute",
  },
  textTypo1: {
    width: 81,
    fontSize: FontSize.size_9xs,
    height: 4,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout2: {
    height: 10,
    width: 10,
  },
  textTypo: {
    width: 26,
    top: 238,
    height: 4,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_9xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  bankTypo1: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  bankPosition: {
    left: 259,
    position: "absolute",
  },
  moreTypo: {
    textDecoration: "underline",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 44,
    width: 44,
    top: 314,
  },
  payPhonePosition: {
    left: 203,
    position: "absolute",
  },
  bankTypo: {
    fontSize: FontSize.size_3xs,
    height: 9,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
  },
  numberTypo: {
    top: 377,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  rectangleLayout: {
    width: 360,
    position: "absolute",
  },
  frameLayout: {
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
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  cardsPageChild1Position: {
    top: 18,
    position: "absolute",
  },
  cards: {
    top: 148,
    left: 25,
    width: 111,
    height: 16,
    position: "absolute",
  },
  cardsPageChild: {
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_3xs,
    left: 13,
    top: 182,
    width: 100,
    position: "absolute",
  },
  cardsPageItem: {
    left: 252,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_3xs,
    top: 182,
    width: 100,
    position: "absolute",
  },
  axisBank: {
    width: 76,
    top: 201,
    left: 13,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
  },
  text: {
    top: 219,
    height: 4,
    left: 21,
  },
  image24Icon: {
    top: 235,
    width: 10,
    left: 21,
    position: "absolute",
  },
  text1: {
    left: 34,
  },
  bankLogosSmall: {
    top: 186,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_3xs,
  },
  wrapper: {
    left: 135,
    top: 180,
    position: "absolute",
  },
  text2: {
    top: 218,
    left: 144,
    height: 4,
  },
  image25Icon: {
    top: 234,
    left: 145,
    position: "absolute",
  },
  text3: {
    left: 161,
  },
  iciciBank: {
    top: 202,
    left: 143,
    color: Color.colorGray_200,
    width: 63,
    height: 12,
    position: "absolute",
  },
  bankLogosSmall1: {
    top: 187,
    left: 139,
    position: "absolute",
    overflow: "hidden",
  },
  text4: {
    top: 216,
    left: 262,
    height: 4,
  },
  image26Icon: {
    height: 10,
    width: 10,
    top: 235,
  },
  text5: {
    left: 274,
  },
  stateBank: {
    color: "#1e1e1e",
    height: 13,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    width: 76,
    top: 201,
  },
  bankLogosSmall2: {
    top: 190,
    height: 10,
    width: 10,
    overflow: "hidden",
  },
  moreOption: {
    top: 152,
    left: 290,
    width: 60,
    height: 4,
  },
  moreOption1: {
    top: 292,
    left: 297,
    height: 100,
    width: 100,
  },
  cardsPageInner: {
    left: 100,
    position: "absolute",
  },
  ellipseIcon: {
    height: 44,
    width: 44,
    top: 314,
  },
  bank: {
    top: 367,
    left: 108,
    width: 33,
    height: 9,
    position: "absolute",
  },
  transfer: {
    left: 102,
    width: 40,
    height: 9,
  },
  payPhone: {
    top: 366,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    width: 63,
  },
  number: {
    left: 209,
    width: 48,
    height: 5,
  },
  image28Icon: {
    left: 113,
    height: 20,
    top: 327,
  },
  image31Icon: {
    left: 210,
    width: 30,
    height: 30,
    top: 327,
    position: "absolute",
  },
  container: {
    left: 234,
    top: 11,
  },
  home: {
    left: 31,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 43,
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontSize: FontSize.size_smi,
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
  cards1: {
    left: 93,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 43,
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  frame: {
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
  rectanglePressable: {
    left: 292,
    top: 13,
  },
  wrapper1: {
    left: 101,
    top: 11,
  },
  vectorIcon: {
    left: 168,
    top: 11,
  },
  loan: {
    left: 162,
    width: 75,
    height: 29,
  },
  rectangleParent: {
    top: 723,
    left: 4,
    backgroundColor: Color.colorDarkslategray_100,
    height: 77,
    overflow: "hidden",
  },
  image32Icon: {
    top: 445,
    left: 83,
    width: 194,
    height: 224,
    position: "absolute",
  },
  rectangleIcon: {
    top: 66,
    left: 430,
    width: 21,
    height: 132,
    position: "absolute",
  },
  rectangleView: {
    top: 0,
    left: 0,
    height: 110,
    backgroundColor: Color.colorDarkcyan,
  },
  cardsPageChild1: {
    left: 43,
    width: 80,
    height: 80,
  },
  icon5: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "1.94%",
    top: "1%",
    right: "89.72%",
    bottom: "97.13%",
    width: "8.33%",
    height: "1.88%",
    position: "absolute",
  },
  welcomeBeckyHills: {
    left: 124,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "center",
    width: 193,
    height: 89,
    color: Color.schemesOnPrimary,
    top: 18,
  },
  image20Icon: {
    top: 122,
    left: 267,
    height: 20,
  },
  image19Icon: {
    top: 121,
    left: 307,
    height: 20,
  },
  cardsPage: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default CardsPage;
