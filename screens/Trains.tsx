import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Trains = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.trains}>
      <Image
        style={styles.trainsChild}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("Help1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.frameChild, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-321.png")}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <Text style={[styles.history, styles.profileTypo]}>History</Text>
        <Text style={[styles.transac, styles.homeTypo]}>Transac...</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={styles.wrapper1}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper2, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <View style={styles.frameItem} />
        <Pressable
          style={[styles.wrapper3, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.train, styles.trainFlexBox]}>Train</Text>
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon7, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left2.png")}
        />
      </Pressable>
      <View style={[styles.trainsItem, styles.trainsLayout1]} />
      <View style={[styles.trainsInner, styles.trainsLayout]} />
      <View style={[styles.lineView, styles.trainsLayout]} />
      <View style={[styles.trainsChild1, styles.trainsLayout]} />
      <Image
        style={[styles.arrow11, styles.arrow11Layout]}
        resizeMode="cover"
        source={require("../assets/arrow-1-1.png")}
      />
      <Image
        style={[styles.arrow1Icon, styles.arrow11Layout]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={styles.calendarMonth24dp000000FilIcon}
        resizeMode="cover"
        source={require("../assets/calendar-month-24dp-000000-fill0-wght200-grad0-opsz24-1.png")}
      />
      <Text style={[styles.enterFrom, styles.enterTypo]}>Enter From</Text>
      <Text style={styles.fri16}>Fri, 16</Text>
      <Text style={[styles.enterTo, styles.enterTypo]}>Enter To</Text>
      <View style={[styles.rectangleView, styles.trainsChild2Layout]} />
      <View style={[styles.trainsChild2, styles.trainsChild2Layout]} />
      <Text style={[styles.tomorrow, styles.todayTypo]}>Tomorrow</Text>
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <View style={[styles.trainsChild3, styles.trainsChildPosition]} />
      <Text style={[styles.optForFree, styles.todayTypo]}>
        Opt for Free cancellation and get full refund.
      </Text>
      <View style={[styles.trainsChild4, styles.trainsChildPosition]} />
      <Text style={[styles.searchTrains, styles.trainFlexBox]}>
        Search Trains
      </Text>
      <View style={[styles.trainsChild5, styles.trainsLayout1]} />
      <Text style={[styles.createIrctcId, styles.irctcTypo]}>
        Create IRCTC ID
      </Text>
      <Text style={[styles.resetIrctcPassword, styles.irctcTypo]}>
        Reset IRCTC Password
      </Text>
      <Text style={[styles.irctcServices, styles.trainTypo]}>
        IRCTC SERVICES
      </Text>
      <Image
        style={[styles.addUser1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/adduser-1.png")}
      />
      <Image
        style={[styles.resetPassword1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/resetpassword-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  profileTypo: {
    top: 44,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  trainFlexBox: {
    textAlign: "center",
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  trainsLayout1: {
    width: 344,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    left: 7,
    position: "absolute",
  },
  trainsLayout: {
    height: 1,
    width: 345,
    borderTopWidth: 1,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    borderStyle: "solid",
    position: "absolute",
  },
  arrow11Layout: {
    width: 32,
    left: 20,
    height: 32,
    position: "absolute",
  },
  enterTypo: {
    color: Color.miscellaneousBarBorder,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 69,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  trainsChild2Layout: {
    height: 30,
    top: 371,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  todayTypo: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    position: "absolute",
  },
  trainsChildPosition: {
    left: 20,
    position: "absolute",
  },
  irctcTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 624,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    position: "absolute",
  },
  trainTypo: {
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
  },
  iconPosition: {
    top: 622,
    height: 40,
    width: 40,
    position: "absolute",
  },
  trainsChild: {
    top: 0,
    height: 156,
    width: 360,
    left: 0,
    position: "absolute",
  },
  wrapper: {
    left: 246,
  },
  container: {
    left: 306,
  },
  frame: {
    left: 276,
  },
  frameChild: {
    left: 165,
    top: 11,
    width: 25,
  },
  rectanglePressable: {
    left: 234,
    top: 11,
    width: 25,
  },
  home: {
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
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
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
  },
  cards: {
    left: 93,
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
  },
  wrapper1: {
    left: 292,
    top: 13,
    height: 31,
    width: 25,
    position: "absolute",
  },
  wrapper2: {
    left: 101,
    top: 11,
    width: 25,
  },
  frameItem: {
    backgroundColor: Color.colorTurquoise,
    height: 32,
    borderRadius: Border.br_3xs,
    top: 13,
    width: 38,
    left: 31,
    position: "absolute",
  },
  wrapper3: {
    left: 37,
    top: 14,
  },
  rectangleParent: {
    top: 723,
    height: 77,
    backgroundColor: Color.colorDarkslategray_100,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  train: {
    top: 119,
    left: 29,
    width: 90,
    height: 36,
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
  },
  icon7: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 5,
    top: 121,
    width: 30,
    height: 26,
    position: "absolute",
  },
  trainsItem: {
    top: 187,
    borderColor: Color.schemesOnPrimary,
    height: 360,
    borderWidth: 1,
    borderStyle: "solid",
  },
  trainsInner: {
    top: 421,
    left: 7,
    width: 345,
    borderTopWidth: 1,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
  },
  lineView: {
    top: 262,
    left: 7,
    width: 345,
    borderTopWidth: 1,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
  },
  trainsChild1: {
    top: 342,
    left: 6,
  },
  arrow11: {
    top: 205,
  },
  arrow1Icon: {
    top: 286,
  },
  calendarMonth24dp000000FilIcon: {
    top: 363,
    left: 17,
    height: 40,
    width: 40,
    position: "absolute",
  },
  enterFrom: {
    top: 209,
  },
  fri16: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    top: 371,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 69,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  enterTo: {
    top: 289,
  },
  rectangleView: {
    left: 151,
    borderColor: Color.miscellaneousTabUnselected,
    width: 72,
    backgroundColor: Color.schemesOnPrimary,
  },
  trainsChild2: {
    left: 230,
    backgroundColor: "#84d7d7",
    borderColor: Color.colorDarkslategray_100,
    width: 107,
  },
  tomorrow: {
    left: 239,
    color: Color.colorDarkslategray_100,
    top: 375,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
  },
  today: {
    left: 149,
    color: Color.miscellaneousTabUnselected,
    width: 75,
    height: 28,
    top: 375,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
  },
  trainsChild3: {
    top: 442,
    borderColor: "#646267",
    width: 15,
    height: 15,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.schemesOnPrimary,
  },
  optForFree: {
    top: 431,
    left: 50,
    fontFamily: FontFamily.poppinsMedium,
    width: 297,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
  },
  trainsChild4: {
    top: 489,
    width: 317,
    height: 46,
    borderRadius: Border.br_mini,
    left: 20,
    backgroundColor: Color.colorDarkslategray_100,
  },
  searchTrains: {
    top: 493,
    left: 62,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
  },
  trainsChild5: {
    top: 565,
    height: 139,
  },
  createIrctcId: {
    left: 78,
    width: 78,
  },
  resetIrctcPassword: {
    left: 225,
    width: 99,
  },
  irctcServices: {
    top: 572,
    left: 24,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    position: "absolute",
  },
  addUser1Icon: {
    left: 28,
  },
  resetPassword1Icon: {
    left: 175,
  },
  trains: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Trains;
