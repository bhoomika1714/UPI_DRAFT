import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Transactions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.transactions}>
      <Text style={[styles.recentTransaction, styles.billTypo]}>
        Recent Transaction
      </Text>
      <Text style={styles.selectTimeRange}>Select Time Range</Text>
      <View style={styles.transactionsInner}>
        <View style={[styles.frameChild, styles.frameChildBg]} />
      </View>
      <View style={[styles.transactionsChild, styles.transactionsLayout]} />
      <View style={[styles.transactionsItem, styles.transactionsLayout]} />
      <Image
        style={[
          styles.solidinterfacearrowDownIcon,
          styles.solidinterfacearrowIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/solidinterfacearrow-down.png")}
      />
      <Image
        style={[
          styles.solidinterfacearrowUpIcon,
          styles.solidinterfacearrowIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/solidinterfacearrow-up.png")}
      />
      <Text style={[styles.all, styles.allPosition]}>{`All
`}</Text>
      <Text style={[styles.income, styles.incomeTypo]}>{`Income
`}</Text>
      <Text style={[styles.expense, styles.incomeTypo]}>Expense</Text>
      <View style={[styles.rectangleView, styles.frameChildBg]} />
      <Image
        style={[styles.ellipseIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Image
        style={[styles.lineIcon, styles.transactionsChildLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.transactionsChild1, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Image
        style={[styles.transactionsChild2, styles.transactionsChildLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.transactionsChild3, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Image
        style={[styles.transactionsChild4, styles.transactionsChildPosition]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.transactionsChild5, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Image
        style={[styles.transactionsChild6, styles.transactionsChildPosition]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={styles.transactionsChild7}
        contentFit="cover"
        source={require("../assets/ellipse-52.png")}
      />
      <View style={[styles.transactionsChild8, styles.transactionsChildBg]} />
      <View style={[styles.transactionsChild9, styles.transactionsChildBg]} />
      <Image
        style={[styles.transactionsChild10, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Image
        style={[styles.transactionsChild11, styles.transactionsChildLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Text style={[styles.grocery, styles.groceryTypo]}>Grocery</Text>
      <Text style={[styles.fundTransfer, styles.groceryTypo]}>
        Fund Transfer
      </Text>
      <Text style={[styles.salary, styles.textClr]}>Salary</Text>
      <Text style={[styles.waterBill, styles.textClr]}>Water Bill</Text>
      <Text style={[styles.cardPayment, styles.textClr]}>Card Payment</Text>
      <Text style={[styles.mobileBill, styles.textClr]}>Mobile Bill</Text>
      <Text style={[styles.text, styles.textTypo2]}>
        <Text style={styles.text1}>-</Text>
        <Text style={styles.text2}>$700</Text>
      </Text>
      <Text style={[styles.text3, styles.textTypo2]}>$2200</Text>
      <Text style={[styles.text4, styles.textTypo1]}>$7500</Text>
      <Text style={[styles.text5, styles.textTypo]}>-$100</Text>
      <Text style={[styles.text6, styles.textTypo]}>$200</Text>
      <Text style={[styles.text7, styles.textClr]}>-$153</Text>
      <Image
        style={[styles.outlinegeneralshoppingCartIcon, styles.allPosition]}
        contentFit="cover"
        source={require("../assets/outlinegeneralshoppingcart.png")}
      />
      <Image
        style={[styles.outlineinterfaceexchangeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/outlineinterfaceexchange.png")}
      />
      <Image
        style={styles.solidinterfacemenuIcon}
        contentFit="cover"
        source={require("../assets/solidinterfacemenu.png")}
      />
      <Image
        style={[styles.outlinegeneralcardIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/outlinegeneralcard.png")}
      />
      <Image
        style={[styles.outlinedevicesmobilePhoneIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/outlinedevicesmobilephone.png")}
      />
      <Text style={[styles.text8, styles.text8Layout]}>$</Text>
      <Image
        style={styles.currencydollarUsdIcon}
        contentFit="cover"
        source={require("../assets/currencydollar-usd.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.text8Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-35.png")}
      />
      <Text style={styles.profile}>Profile</Text>
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        <Text style={[styles.profile1, styles.historyTypo]}>Profile</Text>
        <Text style={[styles.history, styles.historyTypo]}>History</Text>
        <Text style={[styles.cards, styles.homeLayout]}>Cards</Text>
        <Pressable
          style={[styles.container, styles.wrapperPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
        <Image
          style={[styles.frameItem, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <Pressable
          style={[styles.frame, styles.text8Layout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectanglePressable, styles.wrapperPosition]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.wrapperPosition]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.loan, styles.homeTypo]}>{`Loan
`}</Text>
      </View>
      <View style={styles.transactionsChild12} />
      <Text style={[styles.transactions1, styles.billTypo]}>Transactions</Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left9.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  billTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  frameChildBg: {
    backgroundColor: Color.colorTeal_200,
    borderRadius: Border.br_xl,
  },
  transactionsLayout: {
    width: 102,
    top: 142,
    height: 57,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  solidinterfacearrowIconLayout: {
    width: 30,
    height: 30,
  },
  allPosition: {
    left: 41,
    position: "absolute",
  },
  incomeTypo: {
    fontFamily: FontFamily.interRegular,
    top: 163,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconChildLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  transactionsChildLayout: {
    height: 1,
    width: 328,
    position: "absolute",
  },
  transactionsChildPosition: {
    left: 16,
    height: 1,
    width: 328,
    position: "absolute",
  },
  transactionsChildBg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  groceryTypo: {
    width: 145,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textClr: {
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  textTypo2: {
    height: 34,
    left: 281,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo1: {
    top: 400,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  textTypo: {
    width: 65,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconPosition: {
    left: 40,
    width: 30,
    height: 30,
    position: "absolute",
  },
  text8Layout: {
    width: 25,
    position: "absolute",
  },
  wrapperPosition: {
    top: 11,
    width: 25,
    height: 31,
    position: "absolute",
  },
  homeLayout: {
    width: 38,
    position: "absolute",
  },
  historyTypo: {
    top: 44,
    height: 20,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  homeTypo: {
    top: 43,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  recentTransaction: {
    top: 91,
    width: 163,
    height: 30,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    left: 17,
    position: "absolute",
  },
  selectTimeRange: {
    top: 92,
    left: 206,
    fontSize: FontSize.size_mini,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 154,
    height: 17,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    position: "absolute",
  },
  frameChild: {
    alignSelf: "stretch",
    height: 57,
  },
  transactionsInner: {
    top: 132,
    left: 9,
    width: 96,
    padding: Padding.p_3xs,
    position: "absolute",
    backgroundColor: Color.schemesOnPrimary,
  },
  transactionsChild: {
    backgroundColor: "rgba(175, 168, 187, 0.34)",
    left: 119,
  },
  transactionsItem: {
    left: 245,
    backgroundColor: "#eae7ef",
  },
  solidinterfacearrowDownIcon: {
    top: 156,
    width: 30,
    position: "absolute",
    left: 119,
  },
  solidinterfacearrowUpIcon: {
    left: 246,
    top: 156,
    width: 30,
    position: "absolute",
  },
  all: {
    top: 160,
    color: "#f8f4f4",
    width: 87,
    height: 84,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  income: {
    left: 149,
    width: 112,
    height: 25,
  },
  expense: {
    width: 99,
    height: 19,
    left: 275,
  },
  rectangleView: {
    top: 229,
    left: 13,
    width: 334,
    height: 457,
    position: "absolute",
  },
  ellipseIcon: {
    top: 544,
    left: 32,
    width: 50,
  },
  groupIcon: {
    top: 244,
    left: 31,
  },
  lineIcon: {
    top: 308,
    left: 19,
    height: 1,
    width: 328,
  },
  transactionsChild1: {
    top: 324,
    left: 32,
    width: 50,
  },
  transactionsChild2: {
    top: 384,
    left: 17,
  },
  transactionsChild3: {
    top: 393,
    left: 32,
    width: 50,
  },
  transactionsChild4: {
    top: 457,
  },
  transactionsChild5: {
    top: 468,
    left: 32,
    width: 50,
  },
  transactionsChild6: {
    top: 535,
  },
  transactionsChild7: {
    top: 605,
    left: 59,
    height: 60,
    display: "none",
    width: 60,
    position: "absolute",
  },
  transactionsChild8: {
    top: 922,
    left: 244,
    width: 151,
    height: 167,
  },
  transactionsChild9: {
    top: 620,
    left: 463,
    width: 7,
    height: 105,
  },
  transactionsChild10: {
    top: 623,
    left: 32,
    width: 50,
  },
  transactionsChild11: {
    top: 611,
    left: 19,
    height: 1,
    width: 328,
  },
  grocery: {
    top: 255,
    height: 32,
    left: 93,
  },
  fundTransfer: {
    top: 337,
    left: 89,
    height: 30,
  },
  salary: {
    top: 410,
    width: 158,
    height: 43,
    left: 93,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  waterBill: {
    top: 490,
    width: 176,
    height: 41,
    left: 93,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  cardPayment: {
    top: 564,
    left: 95,
    width: 174,
    height: 40,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mobileBill: {
    top: 640,
    left: 99,
    width: 182,
    height: 37,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text1: {
    fontSize: FontSize.size_xl,
  },
  text2: {
    fontSize: FontSize.size_base,
  },
  text: {
    top: 253,
    width: 66,
  },
  text3: {
    top: 330,
    width: 57,
    fontSize: FontSize.size_base,
  },
  text4: {
    left: 278,
    height: 32,
    color: Color.schemesOnPrimary,
    position: "absolute",
    width: 60,
  },
  text5: {
    top: 478,
    left: 275,
    height: 30,
  },
  text6: {
    top: 554,
    height: 27,
    left: 281,
    width: 65,
  },
  text7: {
    top: 628,
    width: 49,
    height: 31,
    left: 275,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  outlinegeneralshoppingCartIcon: {
    top: 256,
    width: 30,
    height: 30,
  },
  outlineinterfaceexchangeIcon: {
    top: 334,
  },
  solidinterfacemenuIcon: {
    top: 475,
    left: 36,
    width: 40,
    height: 39,
    position: "absolute",
  },
  outlinegeneralcardIcon: {
    top: 557,
  },
  outlinedevicesmobilePhoneIcon: {
    top: 629,
  },
  text8: {
    left: -194,
    height: 67,
    top: 400,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  currencydollarUsdIcon: {
    top: 406,
    left: 46,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 738,
    left: 295,
    height: 31,
  },
  profile: {
    top: 771,
    left: 289,
    height: 20,
    width: 42,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  wrapper: {
    left: 234,
  },
  home: {
    top: 43,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 20,
    left: 31,
  },
  profile1: {
    left: 286,
    width: 42,
  },
  history: {
    left: 223,
    width: 47,
  },
  cards: {
    top: 43,
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 20,
    left: 93,
  },
  container: {
    left: 38,
  },
  frameItem: {
    top: 68,
    left: -167,
    borderRadius: Border.br_3xs,
    height: 32,
  },
  frame: {
    left: 292,
    top: 13,
    height: 31,
  },
  rectanglePressable: {
    left: 101,
  },
  vectorIcon: {
    left: 167,
  },
  loan: {
    left: 161,
    width: 75,
    height: 29,
    position: "absolute",
  },
  rectangleParent: {
    top: 719,
    left: -5,
    backgroundColor: Color.colorDarkslategray_100,
    width: 370,
    height: 134,
    position: "absolute",
    overflow: "hidden",
  },
  transactionsChild12: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkcyan,
    width: 360,
    height: 57,
    position: "absolute",
  },
  transactions1: {
    top: 16,
    left: 107,
    fontSize: FontSize.size_5xl,
    color: "#fef9f9",
    width: 261,
    height: 89,
    textAlign: "left",
    position: "absolute",
  },
  icon4: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: "0.83%",
    top: "-0.75%",
    right: "85.28%",
    bottom: "94.5%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  transactions: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.schemesOnPrimary,
  },
});

export default Transactions;
