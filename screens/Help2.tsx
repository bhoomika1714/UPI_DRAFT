import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Help2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.help}>
      <Image
        style={styles.helpChild}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.help1, styles.help1Layout]}>{`Help
`}</Text>
      <Pressable
        style={[styles.wrapper, styles.help1Layout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-61.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <View style={[styles.helpItem, styles.helpChildLayout1]} />
      <View style={[styles.helpItem, styles.helpChildLayout1]} />
      <View style={styles.rectangleView} />
      <View style={[styles.helpChild1, styles.helpChildLayout1]} />
      <View style={[styles.helpChild2, styles.helpChildLayout1]} />
      <View style={[styles.helpChild3, styles.helpChildLayout1]} />
      <View style={[styles.helpChild4, styles.helpChildLayout1]} />
      <View style={[styles.helpChild5, styles.helpChildLayout1]} />
      <View style={[styles.helpChild6, styles.helpChildLayout1]} />
      <Text
        style={[styles.payingBillsUsing, styles.issuesTypo1]}
      >{`Paying bills using UPayIt.  `}</Text>
      <Text style={[styles.qrCodeIssues, styles.issuesTypo1]}>
        QR code issues.
      </Text>
      <View style={[styles.helpChild7, styles.helpChildLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.helpChildLayout1]}
        onPress={() => navigation.navigate("TermCondition")}
      />
      <View style={[styles.helpChild8, styles.helpChildLayout]} />
      <Text style={[styles.invoiceIssues, styles.issuesTypo1]}>
        Invoice issues.
      </Text>
      <Text
        style={[styles.protectionAgainstFraud, styles.termsConditionsFlexBox]}
      >
        Protection against Fraud or unauthorized activity.
      </Text>
      <Text style={[styles.settlementIssues, styles.issuesTypo]}>
        Settlement issues.
      </Text>
      <Text style={[styles.accountDetailsRelated, styles.issuesTypo1]}>
        Account details related.
      </Text>
      <Text style={[styles.resettingUpiPin, styles.issuesTypo1]}>
        Resetting UPI Pin.
      </Text>
      <Text style={[styles.frequentlyAskedQuestions, styles.issuesTypo1]}>
        Frequently Asked Questions
      </Text>
      <Text style={[styles.addOrRemove, styles.issuesTypo1]}>
        Add or remove bank account on UPayIt.
      </Text>
      <Text style={[styles.transactionIssues, styles.issuesTypo]}>
        Transaction issues.
      </Text>
      <View style={styles.helpChild9} />
      <View style={styles.helpChild10} />
      <Image
        style={[styles.rectangleIcon, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Text
        style={[styles.termsConditions, styles.termsConditionsFlexBox]}
      >{`Terms & Conditions`}</Text>
      <Image
        style={[styles.arrowForwardIos16dp006270Icon, styles.arrowIconPosition]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon1,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon2,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon3,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon4,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon5,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon6,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon7,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon8,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
      <Image
        style={[
          styles.arrowForwardIos16dp006270Icon9,
          styles.arrowIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-forward-ios-16dp-006270-fill0-wght300-grad0-opsz20-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  help1Layout: {
    height: 38,
    position: "absolute",
  },
  frameLayout: {
    height: 25,
    width: 20,
    top: 15,
    position: "absolute",
  },
  helpChildLayout1: {
    height: 45,
    width: 348,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  issuesTypo1: {
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  helpChildLayout: {
    left: 4,
    height: 45,
    width: 348,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  termsConditionsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  issuesTypo: {
    left: 14,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  arrowIconPosition: {
    left: 316,
    height: 20,
    width: 20,
    position: "absolute",
  },
  helpChild: {
    top: 0,
    left: 0,
    width: 360,
    height: 156,
    position: "absolute",
  },
  help1: {
    top: 99,
    left: 54,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.schemesOnPrimary,
    width: 89,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 100,
    width: 38,
    left: 17,
  },
  container: {
    left: 246,
  },
  frame: {
    left: 276,
  },
  helpItem: {
    top: 179,
    left: 6,
    height: 45,
  },
  rectangleView: {
    top: 536,
    height: 60,
    width: 348,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    left: 6,
    position: "absolute",
  },
  helpChild1: {
    top: 485,
    left: 6,
    height: 45,
  },
  helpChild2: {
    top: 434,
    left: 6,
    height: 45,
  },
  helpChild3: {
    top: 383,
    left: 6,
    height: 45,
  },
  helpChild4: {
    top: 332,
    left: 6,
    height: 45,
  },
  helpChild5: {
    top: 281,
    left: 6,
    height: 45,
  },
  helpChild6: {
    top: 230,
    left: 6,
    height: 45,
  },
  payingBillsUsing: {
    left: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
    top: 193,
  },
  qrCodeIssues: {
    top: 499,
    left: 17,
    textAlign: "center",
    position: "absolute",
  },
  helpChild7: {
    top: 653,
  },
  rectanglePressable: {
    top: 717,
    left: 7,
  },
  helpChild8: {
    top: 602,
  },
  invoiceIssues: {
    top: 615,
    left: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  protectionAgainstFraud: {
    top: 547,
    width: 294,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: 17,
  },
  settlementIssues: {
    top: 666,
  },
  accountDetailsRelated: {
    top: 447,
    left: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  resettingUpiPin: {
    left: 16,
    top: 397,
    textAlign: "center",
    position: "absolute",
  },
  frequentlyAskedQuestions: {
    top: 346,
    left: 17,
    textAlign: "center",
    position: "absolute",
  },
  addOrRemove: {
    top: 295,
    left: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  transactionIssues: {
    top: 243,
  },
  helpChild9: {
    left: 320,
    height: 20,
    top: 193,
    width: 20,
    position: "absolute",
  },
  helpChild10: {
    top: 12,
    left: 301,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkseagreen,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rectangleIcon: {
    left: 306,
  },
  termsConditions: {
    marginLeft: -131,
    top: 723,
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.colorDarkslategray_100,
    width: 262,
    height: 47,
  },
  arrowForwardIos16dp006270Icon: {
    top: 193,
  },
  arrowForwardIos16dp006270Icon1: {
    top: 665,
  },
  arrowForwardIos16dp006270Icon2: {
    top: 615,
  },
  arrowForwardIos16dp006270Icon3: {
    top: 555,
  },
  arrowForwardIos16dp006270Icon4: {
    top: 452,
  },
  arrowForwardIos16dp006270Icon5: {
    top: 499,
  },
  arrowForwardIos16dp006270Icon6: {
    top: 397,
  },
  arrowForwardIos16dp006270Icon7: {
    top: 346,
  },
  arrowForwardIos16dp006270Icon8: {
    top: 294,
  },
  arrowForwardIos16dp006270Icon9: {
    top: 243,
  },
  help: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Help2;
