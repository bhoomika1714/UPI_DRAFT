import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VerifyAcc = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.verifyAcc, styles.iconLayout]}>
      <View style={[styles.verifyAccChild, styles.verifyPosition]} />
      <Text style={[styles.applyingForPersonal, styles.verifyAccountTypo]}>
        APPLYING FOR PERSONAL LOAN
      </Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left1.png")}
        />
      </Pressable>
      <Image
        style={[styles.image20Icon, styles.image20IconLayout]}
        contentFit="cover"
        source={require("../assets/image-20.png")}
      />
      <Text style={styles.sbiLoan}>SBI LOAN</Text>
      <Image
        style={[styles.bankLogosSmall, styles.image20IconLayout]}
        contentFit="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <Text style={[styles.verifyAccount, styles.verifyAccountTypo]}>
        <Text style={styles.text}>{`2/5 `}</Text>
        <Text style={styles.verifyAccount1}> Verify Account</Text>
      </Text>
      <View style={[styles.verifyAccItem, styles.verifyPosition]} />
      <Text style={[styles.fullName, styles.nameTypo]}>Full Name</Text>
      <View style={[styles.verifyAccInner, styles.verifyChildPosition]} />
      <Text style={[styles.bankName, styles.nameTypo]}>Bank Name</Text>
      <Text style={styles.accountNumber}>Account Number</Text>
      <Text style={[styles.ifscCode, styles.ifscCodeTypo]}>IFSC Code</Text>
      <Text style={[styles.branchLocation, styles.changeLayout]}>
        Branch Location
      </Text>
      <View style={[styles.lineView, styles.verifyChildPosition]} />
      <View style={[styles.verifyAccChild1, styles.verifyChildPosition]} />
      <View style={[styles.verifyAccChild2, styles.verifyChildPosition]} />
      <View style={[styles.verifyAccChild3, styles.verifyChildPosition]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("IncomeDetails")}
      />
      <Text style={[styles.next, styles.nextTypo]}>
        <Text style={styles.text1}>{`       `}</Text>
        <Text style={styles.next1}>Next</Text>
      </Text>
      <Text style={[styles.change, styles.nextTypo]}>Change</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  verifyPosition: {
    backgroundColor: Color.colorDarkcyan,
    left: "50%",
    position: "absolute",
  },
  verifyAccountTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  image20IconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  nameTypo: {
    height: 18,
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  verifyChildPosition: {
    height: 1,
    width: 331,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    marginLeft: -165.5,
    left: "50%",
    position: "absolute",
  },
  ifscCodeTypo: {
    height: 12,
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  changeLayout: {
    width: 139,
    fontSize: FontSize.size_base,
  },
  nextTypo: {
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  verifyAccChild: {
    marginLeft: -180,
    top: 0,
    width: 360,
    height: 60,
  },
  applyingForPersonal: {
    left: 33,
    color: Color.schemesOnPrimary,
    width: 315,
    height: 28,
    fontSize: FontSize.size_base,
    top: 27,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: "-2.5%",
    top: "-1.12%",
    right: "88.61%",
    bottom: "94.88%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  image20Icon: {
    left: 303,
    top: 27,
  },
  sbiLoan: {
    top: 93,
    left: 58,
    width: 66,
    height: 15,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  bankLogosSmall: {
    marginLeft: -154,
    top: 88,
    left: "50%",
    overflow: "hidden",
  },
  text: {
    color: "#4fb74d",
  },
  verifyAccount1: {
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  verifyAccount: {
    top: 138,
    left: 19,
    fontSize: FontSize.size_lg,
    width: 209,
    height: 24,
  },
  verifyAccItem: {
    marginLeft: -176,
    top: 173,
    borderRadius: Border.br_3xs,
    width: 352,
    height: 433,
  },
  fullName: {
    top: 211,
    color: Color.colorSnow_500,
    width: 154,
  },
  verifyAccInner: {
    top: 239,
  },
  bankName: {
    top: 266,
    color: Color.colorSnow_600,
    width: 126,
  },
  accountNumber: {
    top: 320,
    color: "#f4e7e7",
    width: 201,
    left: 16,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ifscCode: {
    top: 383,
    color: "#fffcfc",
    width: 153,
    fontSize: FontSize.size_base,
  },
  branchLocation: {
    top: 440,
    color: Color.colorWhitesmoke_200,
    height: 12,
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  lineView: {
    top: 294,
  },
  verifyAccChild1: {
    top: 349,
  },
  verifyAccChild2: {
    top: 413,
  },
  verifyAccChild3: {
    top: 477,
  },
  rectanglePressable: {
    marginLeft: -80,
    top: 588,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_smi,
  },
  next1: {
    fontSize: FontSize.size_base,
  },
  next: {
    marginLeft: -47,
    top: 602,
    width: 120,
    height: 22,
    color: Color.miscellaneousFloatingTabTextUnselected,
    left: "50%",
  },
  change: {
    top: 663,
    left: 147,
    color: Color.colorPaleturquoise_100,
    height: 31,
    width: 139,
    fontSize: FontSize.size_base,
  },
  verifyAcc: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default VerifyAcc;
