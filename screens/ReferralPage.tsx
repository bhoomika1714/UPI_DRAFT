import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ReferralPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.referralPage}>
      <View style={[styles.frame, styles.framePosition2]} />
      <View style={[styles.frame1, styles.framePosition1]}>
        <Text style={styles.inviteFriendsTo}>Invite friends to use Upay</Text>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.frame2, styles.frameLayout2]}>
        <Image
          style={[styles.frameChild, styles.frameLayout2]}
          contentFit="cover"
          source={require("../assets/rectangle-99.png")}
        />
      </View>
      <View style={[styles.referralPageChild, styles.referralPosition]} />
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={[styles.frameItem, styles.framePosition]} />
      </View>
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <View style={styles.frame4}>
        <Text style={styles.refferals}>Refferals</Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Text style={[styles.inviteFriendsTo1, styles.srfed45Clr]}>
        Invite friends to Upay and get Rs.101 when your friends send their first
        payment.They get Rs.21
      </Text>
      <View style={[styles.referralPageItem, styles.referralPosition]} />
      <Image
        style={styles.frameIcon3}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <View style={[styles.frame5, styles.frame5Layout]}>
        <Text style={[styles.beckyHills, styles.frame5Layout]}>
          Becky Hills
        </Text>
      </View>
      <View style={[styles.frame6, styles.frame6Layout]}>
        <Text style={[styles.srfed45, styles.frame6Layout]}>8srfed45</Text>
      </View>
      <View style={[styles.frame7, styles.frame7Layout]}>
        <View style={[styles.rectangleParent, styles.frame7Layout]}>
          <Pressable
            style={[styles.frameInner, styles.wrapperLayout]}
            onPress={() => navigation.navigate("Transactions")}
          />
          <Image
            style={[styles.vectorIcon, styles.wrapperLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={() => navigation.navigate("History1")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/rectangle-34.png")}
            />
          </Pressable>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Text style={[styles.profile, styles.loansTypo]}>Profile</Text>
          <Text style={[styles.history, styles.loansTypo]}>History</Text>
          <Text style={[styles.loans, styles.loansTypo]}>{`Loans

`}</Text>
          <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
          <Pressable
            style={[styles.container, styles.wrapperLayout]}
            onPress={() => navigation.navigate("MyCardsBalance")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/rectangle-33.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.rectanglePressable, styles.wrapperLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/rectangle-37.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wrapper1, styles.wrapperLayout]}
            onPress={() => navigation.navigate("")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/rectangle-35.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    left: 0,
    top: 0,
  },
  framePosition1: {
    left: -19,
    overflow: "hidden",
  },
  frameLayout2: {
    height: 252,
    position: "absolute",
  },
  referralPosition: {
    width: 326,
    backgroundColor: Color.schemesOnPrimary,
    marginLeft: -163,
    left: "50%",
    position: "absolute",
  },
  framePosition: {
    height: 81,
    top: 0,
    position: "absolute",
  },
  frameIconLayout: {
    height: 39,
    position: "absolute",
    overflow: "hidden",
  },
  srfed45Clr: {
    color: Color.colorDarkcyan,
    textAlign: "center",
  },
  frame5Layout: {
    height: 17,
    position: "absolute",
  },
  frame6Layout: {
    height: 19,
    position: "absolute",
  },
  frame7Layout: {
    height: 77,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    width: 38,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 43,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  loansTypo: {
    top: 44,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  frame: {
    backgroundColor: "rgba(255, 255, 255, 0.57)",
    width: 359,
    height: 721,
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  inviteFriendsTo: {
    marginLeft: -205,
    fontSize: FontSize.size_6xl,
    color: Color.miscellaneousFloatingTabTextUnselected,
    width: 411,
    height: 55,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frame1: {
    top: 92,
    width: 412,
    height: 37,
    position: "absolute",
  },
  frameIcon: {
    top: 277,
    left: -23,
    width: 406,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    left: 24,
    width: 374,
    top: 0,
    height: 252,
  },
  frame2: {
    top: 400,
    width: 398,
    left: -19,
    overflow: "hidden",
  },
  referralPageChild: {
    top: 139,
    height: 138,
    borderRadius: Border.br_mini,
  },
  frameItem: {
    left: 12,
    backgroundColor: Color.colorTeal_200,
    width: 362,
  },
  frame3: {
    left: -7,
    width: 374,
    overflow: "hidden",
  },
  frameIcon1: {
    left: 7,
    width: 346,
    top: 14,
  },
  refferals: {
    fontSize: FontSize.size_11xl,
    width: 218,
    color: Color.schemesOnPrimary,
    height: 50,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame4: {
    top: 16,
    width: 334,
    height: 50,
    left: 13,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon2: {
    top: 17,
    left: 9,
    width: 342,
  },
  inviteFriendsTo1: {
    marginLeft: -145,
    top: 157,
    width: 290,
    height: 104,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  referralPageItem: {
    top: 297,
    height: 71,
  },
  frameIcon3: {
    top: 320,
    left: 40,
    width: 280,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  beckyHills: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 130,
    color: Color.colorDarkcyan,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
  },
  frame5: {
    top: 312,
    width: 190,
    left: 85,
    overflow: "hidden",
  },
  srfed45: {
    fontSize: FontSize.size_mini,
    width: 115,
    color: Color.colorDarkcyan,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
  },
  frame6: {
    top: 342,
    width: 190,
    left: 85,
    overflow: "hidden",
  },
  frameInner: {
    left: 165,
    width: 25,
    top: 11,
  },
  vectorIcon: {
    top: 13,
    left: 165,
    width: 25,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 234,
    top: 11,
  },
  home: {
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
  loans: {
    left: 158,
    width: 63,
  },
  cards: {
    left: 93,
  },
  container: {
    left: 101,
    top: 11,
  },
  rectanglePressable: {
    left: 37,
    top: 14,
  },
  wrapper1: {
    left: 294,
    top: 11,
  },
  rectangleParent: {
    backgroundColor: Color.colorDarkslategray_100,
    width: 371,
    left: 13,
    height: 77,
    top: 0,
  },
  frame7: {
    top: 721,
    left: -12,
    width: 384,
  },
  referralPage: {
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ReferralPage;
