import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

const MyCardsBalance1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mycardsbalance}>
      <View style={[styles.mycardsbalanceChild, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.cardsTypo]}>*** ** *****4286</Text>
      <Image
        style={[styles.screenshot202407161223321, styles.changePinLayout]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240716-122332-1.png")}
      />
      <Text style={[styles.text1, styles.text1Typo]}>{`02/24
`}</Text>
      <Image
        style={[styles.mycardsbalanceItem, styles.mycardsbalanceLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.mycardsbalanceInner, styles.mycardsbalanceLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.mycardsbalanceLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("MakePayment")}
      />
      <Text style={[styles.makePayment430Container, styles.changePinLayout]}>
        <Text
          style={styles.makePayment}
        >{`Make Payment                    `}</Text>
        <Text style={styles.text2}>$430</Text>
      </Text>
      <Text style={[styles.dueMarch7, styles.text1Typo]}>Due March 7 2024</Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <View style={[styles.rectangleView, styles.expiryDateLayout]} />
      <Pressable
        style={[styles.setting, styles.textPosition]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={[styles.setting1, styles.home1Layout]}>Setting</Text>
      </Pressable>
      <Text style={[styles.transactions, styles.loanLayout]}>Transactions</Text>
      <View style={styles.mycardsbalanceChild1} />
      <View
        style={[styles.mycardsbalanceChild2, styles.rectanglePressableLayout]}
      />
      <Image
        style={[styles.mycardsbalanceChild3, styles.mycardsbalanceChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.mycardsbalanceChild4, styles.mycardsbalanceChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.mycardsbalanceChild5, styles.mycardsbalanceChildLayout]}
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
        <Text style={[styles.viewStatement1, styles.text1Typo]}>
          View Statement
        </Text>
      </Pressable>
      <Text style={[styles.changePin, styles.text1Typo]}>Change Pin</Text>
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
      <View style={[styles.mycardsbalanceChild6, styles.viewCardsPosition]} />
      <Pressable
        style={[styles.viewCards, styles.viewCardsPosition]}
        onPress={() => navigation.navigate("Cards")}
      >
        <Text style={[styles.viewCards1, styles.cardsTypo]}>View Cards</Text>
      </Pressable>
      <Text style={[styles.expiryDate, styles.loanTypo]}>Expiry Date</Text>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-321.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <Text style={[styles.history, styles.profileTypo]}>History</Text>
        <Text style={[styles.transac, styles.homeTypo]}>Transac...</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Image
          style={[styles.frameInner, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-371.png")}
        />
        <View style={[styles.frameChild1, styles.frameChildPosition]} />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-331.png")}
        />
      </View>
      <View style={[styles.mycardsbalanceChild7, styles.frame5Position]} />
      <Text style={[styles.myCards, styles.cardsTypo]}> My Cards</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CardsPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={[styles.frameParent, styles.frameFlexBox1]}>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={[styles.frame1, styles.frameFlexBox1]}>
            <Pressable
              style={styles.frameChildLayout}
              onPress={() => navigation.navigate("Home1")}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/rectangle-372.png")}
              />
            </Pressable>
            <Text style={[styles.home1, styles.loanTypo]}>Home</Text>
          </View>
          <View style={[styles.frame2, styles.frameFlexBox1]}>
            <View style={styles.frame3}>
              <View style={[styles.frame4, styles.frameLayout]}>
                <Pressable
                  style={styles.frameChildLayout}
                  onPress={() => navigation.navigate("MyCardsBalance")}
                >
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/rectangle-33.png")}
                  />
                </Pressable>
                <Text style={[styles.cards1, styles.loanTypo]}>Cards</Text>
              </View>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={styles.frameChildLayout}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
                <View style={styles.frameChildLayout} />
                <Text style={[styles.transac1, styles.loanTypo]}>
                  Transac...
                </Text>
              </View>
              <Text style={[styles.loan, styles.loanTypo]}>{`Loan
`}</Text>
            </View>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <Pressable
                style={styles.frameChildLayout}
                onPress={() => navigation.navigate("History1")}
              >
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/rectangle-341.png")}
                />
              </Pressable>
              <Text style={[styles.history1, styles.loanTypo]}>History</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame7, styles.frameFlexBox]}>
          <Pressable
            style={styles.frameChildLayout}
            onPress={() => navigation.navigate("")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/rectangle-352.png")}
            />
          </Pressable>
          <Text style={[styles.profile1, styles.loanTypo]}>Profile</Text>
        </View>
      </View>
      <View
        style={[styles.mycardsbalanceChild8, styles.checkBalancePosition]}
      />
      <Pressable
        style={[styles.checkBalance, styles.checkBalancePosition]}
        onPress={() => navigation.navigate("Bankorwallet")}
      >
        <Text style={[styles.checkBalance1, styles.cardsTypo]}>
          Check Balance
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkcyan,
  },
  cardsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  changePinLayout: {
    height: 30,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  mycardsbalanceLayout: {
    width: 14,
    top: 235,
    height: 14,
    position: "absolute",
  },
  rectanglePressableLayout: {
    width: 326,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  expiryDateLayout: {
    width: 175,
    position: "absolute",
  },
  textPosition: {
    left: 46,
    position: "absolute",
  },
  home1Layout: {
    height: 20,
    color: Color.schemesOnPrimary,
  },
  loanLayout: {
    height: 29,
    position: "absolute",
  },
  mycardsbalanceChildLayout: {
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
  loanTypo: {
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  parentLayout: {
    height: 77,
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  frameChildLayout: {
    height: 31,
    width: 25,
  },
  homeTypo: {
    top: 43,
    fontFamily: FontFamily.interBold,
    height: 20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontWeight: "700",
    position: "absolute",
  },
  profileTypo: {
    top: 44,
    fontFamily: FontFamily.interBold,
    height: 20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontWeight: "700",
    position: "absolute",
  },
  frameChildPosition: {
    top: 11,
    position: "absolute",
  },
  frame5Position: {
    top: 0,
    position: "absolute",
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
    gap: Gap.gap_8xs,
    height: 52,
    alignItems: "center",
    overflow: "hidden",
  },
  frameFlexBox: {
    gap: Gap.gap_7xs,
    alignItems: "center",
    height: 53,
    overflow: "hidden",
  },
  checkBalancePosition: {
    top: 73,
    position: "absolute",
  },
  mycardsbalanceChild: {
    top: 100,
    width: 329,
    height: 114,
    backgroundColor: Color.colorDarkcyan,
    left: 16,
    position: "absolute",
  },
  text: {
    width: 218,
    height: 16,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_xl,
    left: 46,
    position: "absolute",
    top: 121,
  },
  screenshot202407161223321: {
    left: 264,
    width: 70,
    top: 121,
  },
  text1: {
    left: 288,
    width: 44,
    height: 11,
    fontSize: FontSize.size_sm,
    top: 192,
    position: "absolute",
  },
  mycardsbalanceItem: {
    left: 132,
    height: 14,
  },
  mycardsbalanceInner: {
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
  text2: {
    fontSize: FontSize.size_sm,
  },
  makePayment430Container: {
    top: 280,
    left: 48,
    width: 279,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.schemesOnPrimary,
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
    width: 139,
    height: 75,
    left: 21,
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  setting: {
    top: 412,
  },
  transactions: {
    left: 191,
    width: 154,
    top: 412,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_xl,
  },
  mycardsbalanceChild1: {
    top: 489,
    width: 319,
    height: 217,
    left: 20,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  mycardsbalanceChild2: {
    top: 476,
    left: 17,
    height: 203,
  },
  mycardsbalanceChild3: {
    top: 495,
  },
  mycardsbalanceChild4: {
    top: 557,
  },
  mycardsbalanceChild5: {
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
    height: 30,
    position: "absolute",
    fontSize: FontSize.size_xl,
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
  mycardsbalanceChild6: {
    left: 240,
    width: 97,
    borderRadius: Border.br_3xs,
    height: 14,
    backgroundColor: Color.colorDarkcyan,
  },
  viewCards1: {
    color: "#f9f3f3",
    width: 87,
    height: 14,
    fontSize: FontSize.size_sm,
  },
  viewCards: {
    left: 245,
  },
  expiryDate: {
    left: 37,
    width: 175,
    position: "absolute",
    fontSize: FontSize.size_sm,
    top: 192,
    height: 16,
    color: Color.schemesOnPrimary,
  },
  frameChild: {
    left: 165,
    top: 11,
    position: "absolute",
  },
  frameItem: {
    left: 234,
    top: 11,
    position: "absolute",
  },
  home: {
    width: 38,
    left: 31,
  },
  profile: {
    left: 286,
    width: 42,
  },
  history: {
    left: 223,
    width: 47,
  },
  transac: {
    left: 143,
    width: 63,
  },
  cards: {
    width: 38,
    left: 93,
  },
  frameInner: {
    left: 38,
    top: 11,
    position: "absolute",
  },
  frameChild1: {
    left: 95,
    backgroundColor: Color.colorTurquoise,
    height: 32,
    width: 38,
    borderRadius: Border.br_3xs,
  },
  frameChild2: {
    top: 13,
    left: 292,
    position: "absolute",
  },
  frameChild3: {
    left: 101,
    top: 11,
    position: "absolute",
  },
  rectangleParent: {
    top: 952,
    left: -43,
    width: 360,
    overflow: "hidden",
  },
  mycardsbalanceChild7: {
    left: 0,
    height: 47,
    width: 360,
    backgroundColor: Color.colorDarkcyan,
  },
  myCards: {
    top: 9,
    left: 65,
    fontSize: FontSize.size_5xl,
    color: "#f0ecec",
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
    left: "1.94%",
    top: "1.13%",
    right: "89.72%",
    bottom: "97%",
    width: "8.33%",
    height: "1.88%",
    position: "absolute",
  },
  home1: {
    marginTop: -2,
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
  },
  frame1: {
    height: 49,
    width: 38,
  },
  cards1: {
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
  },
  frame4: {
    zIndex: 0,
    width: 38,
  },
  transac1: {
    width: 63,
    height: 20,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
  },
  frame5: {
    left: 57,
    zIndex: 1,
    top: 0,
    position: "absolute",
    width: 63,
  },
  loan: {
    top: 34,
    left: 75,
    color: Color.colorWhitesmoke_900,
    width: 75,
    zIndex: 2,
    height: 29,
    position: "absolute",
    fontSize: FontSize.size_smi,
  },
  frame3: {
    width: 113,
    gap: Gap.gap_sm,
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  history1: {
    width: 47,
    height: 20,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
  },
  frame6: {
    width: 47,
  },
  frame2: {
    width: 177,
    gap: Gap.gap_xl,
    flexDirection: "row",
    alignItems: "center",
    height: 53,
  },
  frame: {
    width: 239,
    gap: Gap.gap_4xl,
    flexDirection: "row",
    alignItems: "center",
    height: 53,
  },
  profile1: {
    width: 42,
    height: 20,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
  },
  frame7: {
    width: 42,
  },
  frameParent: {
    marginLeft: -188,
    top: 723,
    left: "50%",
    width: 371,
    paddingHorizontal: Padding.p_12xl,
    paddingBottom: Padding.p_2xs,
    gap: Gap.gap_lg,
    flexDirection: "row",
    alignItems: "center",
    height: 77,
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  mycardsbalanceChild8: {
    width: 160,
    height: 17,
    borderRadius: Border.br_3xs,
    left: 21,
    backgroundColor: Color.colorDarkcyan,
  },
  checkBalance1: {
    color: Color.colorWhitesmoke_700,
    width: 126,
    fontSize: FontSize.size_sm,
    height: 16,
  },
  checkBalance: {
    left: 31,
  },
  mycardsbalance: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyCardsBalance1;
