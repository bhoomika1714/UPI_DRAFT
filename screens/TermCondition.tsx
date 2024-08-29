import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Gap, Border } from "../GlobalStyles";

const TermCondition = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termCondition}>
      <Text style={styles.welcomeToUpay}>
        Welcome to UPay It, a UPI-based payment application designed to provide
        a seamless and secure digital payment experience. By downloading,
        installing, and using the UPayIt App, you agree to comply with and be
        bound by these Terms and Conditions.
      </Text>
      <Text style={styles.eligibilityToUseContainer}>
        <Text style={styles.eligibilityToUseUpayItYo}>
          <Text style={styles.eligibility}>{`  Eligibility
`}</Text>
          <Text style={styles.toUseUpay}>{`To use UPay It, you must:
Be at least 18 years of age.
Have a valid bank account linked with UPI.
Ensure that all information provided during the registration process is accurate and up-to-date.
`}</Text>
          <Text style={styles.eligibility}>{`  User Account
`}</Text>
          <Text
            style={styles.toUseUpay}
          >{`You are responsible for maintaining the confidentiality of your account credentials, including your UPI PIN.
Any activity conducted through your account is your responsibility. UPay It is not liable for any unauthorized transactions.
You agree to notify us immediately if you suspect any unauthorized use of your account.
`}</Text>
          <Text style={styles.eligibility}>{`   Services Provided
`}</Text>
          <Text
            style={styles.upayItAllows}
          >{`UPay It allows users to send and receive payments, view transaction history, manage linked accounts, and access `}</Text>
        </Text>
        <Text style={styles.upayItAllows}>
          <Text
            style={styles.variousFinancialServicesUp1}
          >{`various financial services.
UPay It may also offer additional services like rewards, offers, and analysis of your spending patterns. These features may be subject to separate terms and conditions.`}</Text>
        </Text>
      </Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.statusIconsFlexBox]}>
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
      <View style={[styles.groupParent, styles.statusIconsFlexBox]}>
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-42.png")}
          />
        </Pressable>
        <Text style={styles.termsCondition}>{`Terms & Condition`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusIconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  welcomeToUpay: {
    top: 111,
    left: 5,
    fontFamily: FontFamily.montserratRegular,
    width: 356,
    height: 144,
    textAlign: "left",
    lineHeight: 24,
    color: Color.colorGray_200,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  eligibility: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_mini,
  },
  toUseUpay: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  upayItAllows: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_xs,
  },
  eligibilityToUseUpayItYo: {
    color: Color.colorGray_200,
  },
  variousFinancialServicesUp1: {
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  eligibilityToUseContainer: {
    top: 272,
    height: 599,
    width: 360,
    left: 0,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
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
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    height: 40,
  },
  termsCondition: {
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.schemesOnPrimary,
    textAlign: "center",
    width: 258,
    height: 20,
  },
  groupParent: {
    top: 23,
    left: 25,
    width: 303,
    gap: Gap.gap_5xl,
    height: 40,
  },
  termCondition: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TermCondition;
