import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

const Mastercard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mastercard}>
      <View style={[styles.mastercardChild, styles.rectangleViewLayout]} />
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>{`02/24
`}</Text>
      <Image
        style={[styles.mastercardItem, styles.mastercardLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.mastercardInner, styles.mastercardLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.mastercardLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.mastercardChild2Layout]}
        onPress={() => navigation.navigate("MakePayment10")}
      />
      <Text style={[styles.makePayment430Container, styles.cardsTypo]}>
        <Text
          style={styles.makePayment}
        >{`Make Payment                    `}</Text>
        <Text style={styles.text1}>$430</Text>
      </Text>
      <Text style={[styles.dueMarch7, styles.textTypo]}>Due March 7 2024</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <View style={[styles.rectangleView, styles.expiryDateLayout]} />
      <Pressable
        style={styles.setting}
        onPress={() => navigation.navigate("Settings3")}
      >
        <Text style={[styles.setting1, styles.homeTypo]}>Setting</Text>
      </Pressable>
      <Text style={[styles.transactions, styles.loanTypo]}>Transactions</Text>
      <View style={styles.mastercardChild1} />
      <View style={[styles.mastercardChild2, styles.mastercardChild2Layout]} />
      <Image
        style={[styles.mastercardChild3, styles.mastercardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.mastercardChild4, styles.mastercardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.mastercardChild5, styles.mastercardChildLayout]}
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
        style={[styles.removeIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/remove.png")}
      />
      <Pressable
        style={styles.viewStatement}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Text style={[styles.viewStatement1, styles.textTypo]}>
          View Statement
        </Text>
      </Pressable>
      <Text style={[styles.changePin, styles.changePinTypo]}>Change Pin</Text>
      <Text style={[styles.removeCard, styles.changePinTypo]}>Remove Card</Text>
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
      <View style={[styles.mastercardChild6, styles.viewCardsPosition]} />
      <Pressable
        style={[styles.viewCards, styles.viewCardsPosition]}
        onPress={() => navigation.navigate("Cards2")}
      >
        <Text style={[styles.viewCards1, styles.cardsTypo]}>View Cards</Text>
      </Pressable>
      <Text style={[styles.text2, styles.cardsTypo]}>** *** ***** 1452</Text>
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
      <View style={styles.mastercardChild7} />
      <Text style={[styles.myCards, styles.cardsTypo]}> My Cards</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CardsPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
      </Pressable>
      <View style={[styles.frameParent, styles.frameFlexBox1]}>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={[styles.frame1, styles.frameFlexBox1]}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/rectangle-373.png")}
              />
            </Pressable>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View style={[styles.frame2, styles.frameFlexBox1]}>
            <View style={styles.frame3}>
              <View style={[styles.frame4, styles.frameLayout]}>
                <Pressable
                  style={styles.wrapper}
                  onPress={() => navigation.navigate("MyCardsBalance")}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require("../assets/rectangle-331.png")}
                  />
                </Pressable>
                <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
              </View>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={styles.wrapper}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Pressable
                  style={styles.wrapper}
                  onPress={() => navigation.navigate("Transactions")}
                />
                <Text style={[styles.transac, styles.homeTypo]}>
                  Transac...
                </Text>
              </View>
              <Text style={[styles.loan, styles.loanTypo]}>{`Loan
`}</Text>
            </View>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("History1")}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/rectangle-341.png")}
                />
              </Pressable>
              <Text style={[styles.history, styles.homeTypo]}>History</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame7, styles.frameFlexBox]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/rectangle-353.png")}
            />
          </Pressable>
          <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkcyan,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.schemesOnPrimary,
  },
  mastercardLayout: {
    width: 14,
    top: 235,
    height: 14,
    position: "absolute",
  },
  mastercardChild2Layout: {
    width: 326,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  cardsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  expiryDateLayout: {
    width: 175,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  loanTypo: {
    height: 29,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  mastercardChildLayout: {
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
    position: "absolute",
  },
  changePinTypo: {
    left: 93,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interRegular,
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
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  frameFlexBox1: {
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout: {
    gap: Gap.gap_7xs,
    height: 52,
    alignItems: "center",
    overflow: "hidden",
  },
  frameFlexBox: {
    gap: Gap.gap_6xs,
    alignItems: "center",
    height: 53,
    overflow: "hidden",
  },
  mastercardChild: {
    top: 100,
    width: 329,
    height: 114,
    backgroundColor: Color.colorDarkcyan,
    left: 16,
    position: "absolute",
  },
  image3Icon: {
    top: 117,
    left: 246,
    width: 67,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 192,
    left: 288,
    width: 44,
    height: 11,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  mastercardItem: {
    left: 132,
    height: 14,
  },
  mastercardInner: {
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
    height: 30,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  dueMarch7: {
    top: 330,
    left: 208,
    width: 119,
    height: 10,
    fontSize: FontSize.size_smi,
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
    height: 75,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_xl,
  },
  setting1: {
    width: 111,
    fontSize: FontSize.size_xl,
  },
  setting: {
    left: 46,
    top: 412,
    position: "absolute",
  },
  transactions: {
    left: 191,
    width: 154,
    top: 412,
    fontSize: FontSize.size_xl,
  },
  mastercardChild1: {
    top: 489,
    width: 319,
    height: 217,
    left: 20,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  mastercardChild2: {
    top: 476,
    left: 17,
    height: 203,
  },
  mastercardChild3: {
    top: 495,
  },
  mastercardChild4: {
    top: 557,
  },
  mastercardChild5: {
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
  },
  removeIcon: {
    top: 633,
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
    height: 30,
  },
  removeCard: {
    width: 187,
    height: 37,
    top: 633,
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
  mastercardChild6: {
    left: 240,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_200,
    width: 97,
    height: 14,
  },
  viewCards1: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    width: 87,
    height: 14,
    fontSize: FontSize.size_sm,
  },
  viewCards: {
    left: 245,
  },
  text2: {
    top: 119,
    left: 35,
    width: 184,
    height: 18,
    fontSize: FontSize.size_xl,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  checkBalance1: {
    color: "#171616",
    width: 126,
  },
  checkBalance: {
    left: 33,
    top: 72,
    position: "absolute",
  },
  expiryDate: {
    top: 189,
    left: 39,
    width: 175,
    position: "absolute",
    color: Color.schemesOnPrimary,
  },
  mastercardChild7: {
    top: -2,
    left: 7,
    width: 345,
    height: 43,
    backgroundColor: Color.colorDarkcyan,
    position: "absolute",
  },
  myCards: {
    top: 7,
    left: 63,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhitesmoke_200,
    width: 238,
    height: 53,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.44%",
    top: "0.88%",
    right: "92.78%",
    bottom: "98.19%",
    width: "2.78%",
    height: "0.94%",
    position: "absolute",
  },
  wrapper: {
    width: 25,
    height: 31,
  },
  home: {
    marginTop: -2,
    width: 38,
    fontSize: FontSize.size_smi,
  },
  frame1: {
    height: 49,
    width: 38,
  },
  cards: {
    width: 38,
    fontSize: FontSize.size_smi,
  },
  frame4: {
    zIndex: 0,
    width: 38,
  },
  transac: {
    width: 63,
    fontSize: FontSize.size_smi,
  },
  frame5: {
    top: 0,
    left: 57,
    zIndex: 1,
    width: 63,
    position: "absolute",
  },
  loan: {
    top: 34,
    left: 75,
    width: 75,
    zIndex: 2,
    fontSize: FontSize.size_smi,
  },
  frame3: {
    width: 113,
    gap: Gap.gap_md,
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  history: {
    width: 47,
    fontSize: FontSize.size_smi,
  },
  frame6: {
    width: 47,
  },
  frame2: {
    width: 177,
    gap: Gap.gap_2xl,
    flexDirection: "row",
    alignItems: "center",
    height: 53,
  },
  frame: {
    width: 239,
    gap: Gap.gap_5xl,
    flexDirection: "row",
    alignItems: "center",
    height: 53,
  },
  profile: {
    width: 42,
    fontSize: FontSize.size_smi,
  },
  frame7: {
    width: 42,
  },
  frameParent: {
    marginLeft: -186,
    top: 720,
    left: "50%",
    backgroundColor: Color.colorDarkslategray_100,
    width: 371,
    height: 77,
    paddingHorizontal: Padding.p_12xl,
    paddingBottom: Padding.p_2xs,
    gap: Gap.gap_xl,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  mastercard: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Mastercard;
