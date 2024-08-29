import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Gap, Border } from "../GlobalStyles";

const AboutUS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUs}>
      <Text style={[styles.aboutUs1, styles.aboutTypo]}>About US</Text>
      <Text
        style={[styles.ourGoalIs, styles.ourGoalIsFlexBox]}
      >{`Our goal is to make digital payments so easy, safe and universally accepted that people never feel the need to carry cash or cards again. We believe India is at the cusp of a new mobile revolution, which will change the way we manage our money on the go. We see ourselves facilitating this change, through technology and dogged customer centricity.

UPayIt is a brand owned by UPayItPrivate Limited (CIN – U67190MH2012PTC337657). It is licensed by the Reserve Bank of India for issuance and operation of a Semi Closed Prepaid Payment system.

Updated On: 14/9/2023, 9:29:34 am (IST)
`}</Text>
      <Text style={[styles.text, styles.textFlexBox]}>{`
`}</Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-1000000893.png")}
        />
      </Pressable>
      <Text style={[styles.aboutUs2, styles.aboutTypo]}>About Us</Text>
      <View style={[styles.statusBarWrapper, styles.statusLayout]}>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <Image
            style={[styles.notchIcon, styles.statusBarPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.statusIcons, styles.ourGoalIsFlexBox]}>
            <Image
              style={styles.networkSignalLight}
              resizeMode="cover"
              source={require("../assets/network-signal-light.png")}
            />
            <Image
              style={styles.wifiSignalLight}
              resizeMode="cover"
              source={require("../assets/wifi-signal--light.png")}
            />
            <Image
              style={styles.batteryLight}
              resizeMode="cover"
              source={require("../assets/battery--light.png")}
            />
          </View>
          <Image
            style={styles.indicatorIcon}
            resizeMode="cover"
            source={require("../assets/indicator.png")}
          />
          <Image
            style={styles.timeLight}
            resizeMode="cover"
            source={require("../assets/time--light.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.containerLayout]}>
        <Pressable
          style={[styles.container, styles.containerLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/group-42.png")}
          />
        </Pressable>
        <Text style={[styles.termsCondition, styles.aboutTypo]}>About Us</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ourGoalIsFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    letterSpacing: 0,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusLayout: {
    height: 81,
    width: 360,
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
    left: 0,
  },
  containerLayout: {
    height: 40,
    position: "absolute",
  },
  aboutUs1: {
    top: 46,
    left: 88,
    color: Color.schemesOnPrimary,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
  },
  ourGoalIs: {
    marginLeft: -174,
    top: 313,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    display: "flex",
    width: 357,
    height: 373,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    letterSpacing: 0,
    left: "50%",
  },
  text: {
    top: 462,
    left: 81,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "6.94%",
    top: "5.18%",
    right: "81.86%",
    bottom: "89.9%",
    width: "11.19%",
    height: "4.93%",
    position: "absolute",
  },
  aboutUs2: {
    marginLeft: -76,
    top: 109,
    color: Color.colorTeal_100,
    width: 152,
    height: 35,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
  },
  notchIcon: {
    right: 0,
    height: 30,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  networkSignalLight: {
    width: 20,
    display: "none",
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
    display: "none",
    height: 14,
  },
  batteryLight: {
    width: 25,
    display: "none",
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    width: 69,
    flexDirection: "row",
    gap: Gap.gap_5xs,
    height: 14,
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    backgroundColor: Color.colorDarkcyan,
    height: 81,
    width: 360,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarWrapper: {
    top: 1,
    left: 0,
    width: 360,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  container: {
    width: 40,
    top: 0,
    left: 0,
  },
  termsCondition: {
    marginLeft: -106.5,
    top: 10,
    fontSize: FontSize.size_11xl,
    lineHeight: 18,
    width: 258,
    height: 20,
    left: "50%",
    color: Color.schemesOnPrimary,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  groupParent: {
    top: 24,
    left: 9,
    width: 303,
  },
  aboutUs: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUS;
