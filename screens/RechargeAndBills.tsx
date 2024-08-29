import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RechargeAndBills = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rechargeAndBills}>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <Pressable
          style={[styles.wrapper, styles.frameLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Text style={[styles.history, styles.homeTypo]}>History</Text>
        <Text style={[styles.loans, styles.homeTypo]}>Loans</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={[styles.container, styles.frameLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.homePosition]} />
        <Pressable
          style={[styles.rectanglePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Image
        style={[styles.rechargeAndBillsChild, styles.rechargeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-162.png")}
      />
      <View style={styles.rechargeAndBillsItem} />
      <Text style={styles.rechargeAndBills1}>Recharge and Bills</Text>
      <Pressable
        style={[styles.ellipsePressable, styles.rechargeChildLayout]}
        onPress={() => navigation.navigate("MobileRecharge")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
      </Pressable>
      <Image
        style={[styles.rechargeAndBillsInner, styles.rechargeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild1, styles.rechargeChildPosition2]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild2, styles.rechargeChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild3, styles.rechargeChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild4, styles.rechargeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild5, styles.rechargeChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild6, styles.rechargeChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild7, styles.rechargeChildPosition2]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild8, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Pressable
        style={[styles.mobileRecharge, styles.mobileRechargePosition]}
        onPress={() => navigation.navigate("MobileRecharge")}
      >
        <Text style={[styles.mobileRecharge1, styles.billTypo]}>
          Mobile Recharge
        </Text>
      </Pressable>
      <Text style={[styles.groceryBill, styles.billTypo]}>Grocery Bill</Text>
      <Text style={[styles.pipedGas, styles.dthPosition]}>{`Piped 
Gas`}</Text>
      <Text style={[styles.postPaid, styles.dthTypo]}>Post Paid</Text>
      <Text style={[styles.broadBand, styles.billTypo]}>{`Broad
band`}</Text>
      <Text style={[styles.bookACylinder, styles.billTypo]}>
        Book a cylinder
      </Text>
      <Text style={[styles.electricityBill, styles.billTypo]}>
        Electricity Bill
      </Text>
      <Text style={[styles.waterBill, styles.dthTypo]}>Water Bill</Text>
      <Text style={[styles.dth, styles.dthTypo]}>DTH</Text>
      <Text style={[styles.houseRent, styles.billTypo]}>House Rent</Text>
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon5, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left13.png")}
        />
      </Pressable>
      <Image
        style={[styles.call16dp006270Fill0Wght300Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/call-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.grocery16dp006270Fill0WghtIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/grocery-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.waterDrop16dp006270Fill0WIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/water-drop-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.tv16dp006270Fill0Wght300GIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/tv-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[
          styles.house16dp006270Fill0Wght30Icon,
          styles.rechargeAndBillsChild21Position,
        ]}
        resizeMode="cover"
        source={require("../assets/house-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Pressable
        style={[styles.ellipsePressable, styles.rechargeChildLayout]}
        onPress={() => navigation.navigate("MobileRecharge")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
      </Pressable>
      <Image
        style={[styles.rechargeAndBillsChild5, styles.rechargeChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild6, styles.rechargeChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild7, styles.rechargeChildPosition2]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.rechargeAndBillsChild8, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Pressable
        style={[styles.mobileRecharge, styles.mobileRechargePosition]}
        onPress={() => navigation.navigate("MobileRecharge")}
      >
        <Text style={[styles.mobileRecharge1, styles.billTypo]}>
          Mobile Recharge
        </Text>
      </Pressable>
      <Text style={[styles.groceryBill, styles.billTypo]}>Grocery Bill</Text>
      <Text style={[styles.waterBill, styles.dthTypo]}>Water Bill</Text>
      <Text style={[styles.dth, styles.dthTypo]}>DTH</Text>
      <Text style={[styles.houseRent, styles.billTypo]}>House Rent</Text>
      <Image
        style={[styles.call16dp006270Fill0Wght300Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/call-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.grocery16dp006270Fill0WghtIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/grocery-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.waterDrop16dp006270Fill0WIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/water-drop-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[styles.tv16dp006270Fill0Wght300GIcon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/tv-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[
          styles.house16dp006270Fill0Wght30Icon,
          styles.rechargeAndBillsChild21Position,
        ]}
        resizeMode="cover"
        source={require("../assets/house-16dp-006270-fill0-wght300-grad0-opsz20-3.png")}
      />
      <Image
        style={[
          styles.bolt16dp006270Fill0Wght300Icon,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/bolt-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.propaneTank16dp006270Fill0Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/propane-tank-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.cellTower16dp006270Fill0WIcon, styles.fill0IconPosition]}
        resizeMode="cover"
        source={require("../assets/cell-tower-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.valve16dp006270Fill0Wght30Icon,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/valve-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.mobileFriendly16dp006270FiIcon,
          styles.fill0IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/mobile-friendly-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[styles.realEstateAgent16dp006270Icon, styles.fill0IconLayout]}
        resizeMode="cover"
        source={require("../assets/real-estate-agent-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Text style={styles.loanRepayment}>Loan Repayment</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-188.png")}
      />
      <Image
        style={styles.rechargeAndBillsChild13}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={[styles.wrapper2, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper3, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Help1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper4, styles.wrapperLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.rechargeAndBillsChild14, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.rechargeAndBillsChild14, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.rechargeAndBillsChild14, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet, styles.walletPosition]}>
        <Text style={styles.upiId1}>Wallet</Text>:
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>*****</Text>
      <Pressable
        style={[styles.rechargeAndBillsChild14, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Pockets")}
      />
      <Text style={[styles.upiId, styles.upiIdLayout]}>
        <Text style={styles.upiId1}>UPI ID</Text>:
      </Text>
      <Text style={[styles.wallet6, styles.walletPosition]}>Wallet</Text>
      <Pressable
        style={[
          styles.rechargeAndBillsChild21,
          styles.rechargeAndBillsChild21Position,
        ]}
        onPress={() => navigation.navigate("Ai")}
      />
      <Image
        style={[
          styles.robot224dp006270Fill0WghtIcon,
          styles.rechargeAndBillsChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/robot-2-24dp-006270-fill0-wght300-grad0-opsz24-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 31,
    width: 25,
    top: 11,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 44,
    position: "absolute",
  },
  homePosition: {
    left: 31,
    width: 38,
  },
  rechargeChildLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 301,
    height: 35,
    width: 35,
    position: "absolute",
  },
  rechargeChildPosition2: {
    left: 236,
    height: 35,
    width: 35,
    position: "absolute",
  },
  rechargeChildPosition1: {
    left: 164,
    height: 35,
    width: 35,
    position: "absolute",
  },
  rechargeChildPosition: {
    left: 97,
    height: 35,
    width: 35,
    position: "absolute",
  },
  mobileRechargePosition: {
    left: 11,
    position: "absolute",
  },
  billTypo: {
    width: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
  },
  dthPosition: {
    left: 224,
    textAlign: "center",
  },
  dthTypo: {
    height: 16,
    width: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  fill0IconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  rechargeAndBillsChild21Position: {
    left: 302,
    position: "absolute",
  },
  fill0IconPosition: {
    top: 359,
    height: 30,
    width: 30,
    position: "absolute",
  },
  wrapperLayout: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 28,
    width: 165,
    borderRadius: Border.br_xs,
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  textTypo: {
    height: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  upiIdLayout: {
    width: 45,
    left: 39,
    fontFamily: FontFamily.interRegular,
  },
  walletPosition: {
    top: 103,
    height: 21,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  rechargeAndBillsChildPosition: {
    top: 653,
    left: 305,
  },
  wrapper: {
    left: 234,
  },
  home: {
    width: 38,
    textAlign: "left",
    left: 31,
  },
  profile: {
    left: 286,
    width: 42,
    textAlign: "left",
  },
  history: {
    left: 223,
    width: 47,
    textAlign: "left",
  },
  loans: {
    left: 145,
    width: 63,
    textAlign: "center",
  },
  cards: {
    left: 93,
    width: 38,
    textAlign: "left",
  },
  container: {
    left: 292,
  },
  frame: {
    left: 101,
  },
  frameChild: {
    top: 13,
    backgroundColor: Color.colorTurquoise,
    height: 32,
    borderRadius: Border.br_3xs,
    width: 38,
    position: "absolute",
  },
  rectanglePressable: {
    left: 37,
  },
  vectorIcon: {
    left: 168,
  },
  rectangleParent: {
    top: 723,
    backgroundColor: Color.colorDarkslategray_100,
    width: 360,
    height: 77,
    overflow: "hidden",
  },
  rechargeAndBillsChild: {
    left: 305,
    top: 653,
    borderRadius: Border.br_3xs,
  },
  rechargeAndBillsItem: {
    top: 178,
    left: 7,
    borderRadius: Border.br_mini,
    width: 345,
    height: 524,
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  rechargeAndBills1: {
    top: 187,
    left: 41,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    width: 254,
    height: 36,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  ellipsePressable: {
    left: 22,
    top: 242,
  },
  rechargeAndBillsInner: {
    top: 467,
    left: 24,
  },
  ellipseIcon: {
    top: 356,
  },
  rechargeAndBillsChild1: {
    top: 356,
  },
  rechargeAndBillsChild2: {
    top: 356,
  },
  rechargeAndBillsChild3: {
    top: 356,
  },
  rechargeAndBillsChild4: {
    top: 356,
    left: 24,
  },
  rechargeAndBillsChild5: {
    top: 241,
  },
  rechargeAndBillsChild6: {
    top: 241,
  },
  rechargeAndBillsChild7: {
    top: 241,
  },
  rechargeAndBillsChild8: {
    top: 241,
  },
  mobileRecharge1: {
    height: 32,
    textAlign: "center",
  },
  mobileRecharge: {
    top: 292,
  },
  groceryBill: {
    left: 84,
    top: 292,
    height: 32,
    textAlign: "center",
    position: "absolute",
  },
  pipedGas: {
    height: 33,
    top: 408,
    width: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  postPaid: {
    left: 291,
    top: 408,
    textAlign: "center",
  },
  broadBand: {
    left: 151,
    height: 33,
    top: 408,
    textAlign: "center",
    position: "absolute",
  },
  bookACylinder: {
    left: 86,
    height: 33,
    top: 408,
    textAlign: "center",
    position: "absolute",
  },
  electricityBill: {
    height: 33,
    top: 408,
    left: 11,
    position: "absolute",
    textAlign: "center",
  },
  waterBill: {
    left: 155,
    top: 292,
    textAlign: "left",
  },
  dth: {
    left: 224,
    textAlign: "center",
    top: 292,
  },
  houseRent: {
    left: 290,
    top: 292,
    height: 32,
    textAlign: "center",
    position: "absolute",
  },
  icon5: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 13,
    top: 195,
    width: 30,
    height: 20,
    position: "absolute",
  },
  call16dp006270Fill0Wght300Icon: {
    top: 246,
    left: 24,
  },
  grocery16dp006270Fill0WghtIcon: {
    top: 244,
    left: 100,
  },
  waterDrop16dp006270Fill0WIcon: {
    top: 243,
    left: 166,
  },
  tv16dp006270Fill0Wght300GIcon: {
    top: 245,
    left: 239,
  },
  house16dp006270Fill0Wght30Icon: {
    width: 33,
    height: 33,
    top: 241,
  },
  bolt16dp006270Fill0Wght300Icon: {
    left: 26,
  },
  propaneTank16dp006270Fill0Icon: {
    top: 358,
    left: 99,
  },
  cellTower16dp006270Fill0WIcon: {
    left: 167,
  },
  valve16dp006270Fill0Wght30Icon: {
    left: 239,
  },
  mobileFriendly16dp006270FiIcon: {
    left: 305,
  },
  realEstateAgent16dp006270Icon: {
    top: 469,
    left: 27,
  },
  loanRepayment: {
    top: 511,
    left: 12,
    width: 60,
    height: 33,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
    width: 359,
    height: 156,
  },
  rechargeAndBillsChild13: {
    top: 57,
    left: 248,
    width: 80,
    height: 80,
    position: "absolute",
  },
  wrapper2: {
    left: 245,
  },
  wrapper3: {
    left: 305,
  },
  wrapper4: {
    left: 275,
  },
  rectangleView: {
    top: 68,
    left: 32,
  },
  text: {
    top: 73,
    left: 94,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    height: 21,
    fontSize: FontSize.size_sm,
    width: 35,
  },
  rechargeAndBillsChild14: {
    top: 99,
    left: 33,
  },
  upiId1: {
    textDecoration: "underline",
  },
  upiId: {
    top: 71,
    height: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
    width: 45,
    left: 39,
    color: Color.colorDarkslategray_100,
  },
  wallet: {
    width: 45,
    left: 39,
    fontFamily: FontFamily.interRegular,
  },
  wallet6: {
    left: 80,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    width: 68,
  },
  rechargeAndBillsChild21: {
    top: 650,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 3,
    width: 41,
    height: 41,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_3xs,
  },
  robot224dp006270Fill0WghtIcon: {
    width: 34,
    height: 34,
    left: 305,
    position: "absolute",
  },
  rechargeAndBills: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default RechargeAndBills;
