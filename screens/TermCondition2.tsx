import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Gap, Border, FontSize } from "../GlobalStyles";

const TermCondition2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termCondition3}>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={styles.frameLayout}>
          <View style={styles.statusLayout}>
            <Image
              style={[styles.notchIcon, styles.notchIconPosition]}
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
              style={[styles.timeLight, styles.notchIconPosition]}
              resizeMode="cover"
              source={require("../assets/time--light.png")}
            />
          </View>
          <View style={[styles.statusBar1, styles.statusLayout]}>
            <Image
              style={[styles.notchIcon, styles.notchIconPosition]}
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
              style={[styles.timeLight, styles.notchIconPosition]}
              resizeMode="cover"
              source={require("../assets/time--light.png")}
            />
          </View>
        </View>
        <View style={[styles.groupParent, styles.statusIconsFlexBox]}>
          <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-421.png")}
            />
          </Pressable>
          <Text
            style={[styles.termsCondition, styles.termsConditionTypo]}
          >{`Terms & Condition`}</Text>
        </View>
      </View>
      <Text style={styles.terminationWeReserveContainer}>
        <Text
          style={[styles.termination, styles.terminationTypo]}
        >{` Termination
`}</Text>
        <Text
          style={styles.weReserveThe}
        >{`We reserve the right to suspend or terminate your access to UPay It at any time without prior notice if you violate these Terms and Conditions.
You may terminate your account at any time by uninstalling the app and ceasing all use.
`}</Text>
        <Text
          style={[styles.termination, styles.terminationTypo]}
        >{`Governing Law
`}</Text>
        <Text
          style={styles.weReserveThe}
        >{`These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms will be resolved .
`}</Text>
        <Text style={styles.amendments}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.terminationTypo}>{`Amendments
`}</Text>
        </Text>
        <Text
          style={styles.weReserveThe}
        >{`UPay It reserves the right to modify these Terms and Conditions at any time. Any changes will be communicated through the app or via email. Continued use of the app after such changes constitutes your acceptance of the new terms.
`}</Text>
        <Text style={styles.amendments}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.terminationTypo}>{`Contact Information
`}</Text>
        </Text>
        <Text style={styles.forAnyQuestionsOrConcerns}>
          <Text
            style={styles.forAnyQuestions}
          >{` For any questions or concerns regarding these Terms    and Conditions, please contact us at  `}</Text>
          <Text style={styles.termsConditionTypo}>support@upayit.com</Text>
          <Text style={styles.forAnyQuestions}>{`  or `}</Text>
          <Text style={styles.termsConditionTypo}>{`080-1874569
`}</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 81,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
  },
  notchIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  statusIconsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusLayout: {
    backgroundColor: Color.colorDarkcyan,
    height: 81,
    width: 360,
    overflow: "hidden",
  },
  termsConditionTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  terminationTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  notchIcon: {
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    height: 30,
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
    gap: Gap.gap_5xs,
    height: 14,
    position: "absolute",
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
  },
  statusBar1: {
    marginTop: -81,
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
    color: Color.schemesOnPrimary,
    textAlign: "center",
    width: 258,
    height: 20,
  },
  groupParent: {
    width: 303,
    gap: 33,
    marginTop: -40,
    height: 40,
  },
  frame: {
    justifyContent: "flex-end",
  },
  termination: {
    fontSize: FontSize.size_mini,
  },
  weReserveThe: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  text: {
    fontFamily: FontFamily.interRegular,
  },
  amendments: {
    fontSize: FontSize.size_mini,
  },
  forAnyQuestions: {
    fontFamily: FontFamily.poppinsRegular,
  },
  forAnyQuestionsOrConcerns: {
    fontSize: FontSize.size_smi,
  },
  terminationWeReserveContainer: {
    lineHeight: 24,
    color: Color.colorGray_200,
    textAlign: "left",
    height: 685,
    width: 360,
  },
  termCondition3: {
    backgroundColor: Color.stateLayersInverseOnSurfaceOpacity08,
    flex: 1,
    height: 816,
    gap: Gap.gap_6xl,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default TermCondition2;
