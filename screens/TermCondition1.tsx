import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap, Border } from "../GlobalStyles";

const TermCondition1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termCondition2}>
      <View style={[styles.userConductYouAgreeToUseWrapper, styles.userLayout]}>
        <Text style={[styles.userConductYouContainer, styles.userLayout]}>
          <Text
            style={[styles.userConduct, styles.userConductTypo]}
          >{`  User Conduct
`}</Text>
          <Text
            style={styles.youAgreeTo}
          >{`You agree to use UPay It solely for lawful purposes and in a manner that does not infringe the rights of others.
You shall not engage in any fraudulent, abusive, or illegal activity while using the app.
`}</Text>
          <Text
            style={[styles.userConduct, styles.userConductTypo]}
          >{` Privacy and Data Security
`}</Text>
          <Text
            style={styles.youAgreeTo}
          >{`We prioritize the security of your personal and financial information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.
You consent to the collection and processing of your data in accordance with our Privacy Policy.
`}</Text>
          <Text
            style={[styles.intellectualProperty, styles.userConductTypo]}
          >{`  Intellectual Property
`}</Text>
          <Text
            style={styles.youAgreeTo}
          >{`All content, trademarks, and services provided by UPay It are the property of the app and its affiliates. Unauthorized use of any intellectual property is prohibited.
`}</Text>
          <Text
            style={[styles.userConduct, styles.userConductTypo]}
          >{`  Limitation of Liability
`}</Text>
          <Text
            style={styles.youAgreeTo}
          >{`UPay It is provided on an "as-is" and "as-available" basis. We do not warrant that the app will be error-free or uninterrupted.
UPay It is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the app, including but not limited to, loss of funds, data, or goodwill.
`}</Text>
        </Text>
      </View>
      <View style={styles.statusBarPosition}>
        <View style={styles.statusBarPosition}>
          <View style={[styles.statusBar, styles.statusBarPosition]}>
            <Image
              style={[styles.notchIcon, styles.wrapperPosition]}
              resizeMode="cover"
              source={require("../assets/notch1.png")}
            />
            <View style={styles.statusIcons}>
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
      </View>
      <View style={[styles.groupParent, styles.wrapperLayout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.goBack()}
        >
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
  userLayout: {
    width: 360,
    position: "absolute",
  },
  userConductTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  statusBarPosition: {
    height: 81,
    width: 362,
    top: 0,
    left: 0,
    position: "absolute",
  },
  wrapperPosition: {
    top: 0,
    left: 0,
  },
  wrapperLayout: {
    height: 40,
    position: "absolute",
  },
  userConduct: {
    fontFamily: FontFamily.poppinsBold,
  },
  youAgreeTo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
  },
  intellectualProperty: {
    fontFamily: FontFamily.interBold,
  },
  userConductYouContainer: {
    top: 37,
    left: 2,
    lineHeight: 24,
    color: Color.colorGray_200,
    textAlign: "left",
    height: 624,
  },
  userConductYouAgreeToUseWrapper: {
    top: 49,
    backgroundColor: Color.stateLayersBackgroundOpacity08,
    height: 699,
    left: 0,
    width: 360,
    overflow: "hidden",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    position: "absolute",
    overflow: "hidden",
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
    alignItems: "center",
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
    overflow: "hidden",
  },
  statusBar: {
    backgroundColor: Color.colorDarkcyan,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    top: 0,
    left: 0,
  },
  termsCondition: {
    marginLeft: -106.5,
    top: 10,
    left: "50%",
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.schemesOnPrimary,
    textAlign: "center",
    width: 258,
    height: 20,
    position: "absolute",
  },
  groupParent: {
    top: 23,
    left: 30,
    width: 303,
  },
  termCondition2: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TermCondition1;
