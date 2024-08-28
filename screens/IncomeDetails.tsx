import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IncomeDetails = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.incomeDetails}>
      <View style={[styles.incomeDetailsChild, styles.incomePosition]} />
      <Text style={[styles.applyingForPersonal, styles.nextFlexBox]}>
        APPLYING FOR PERSONAL LOAN
      </Text>
      <Image
        style={[styles.image20Icon, styles.image20IconLayout]}
        contentFit="cover"
        source={require("../assets/image-20.png")}
      />
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
        style={[styles.bankLogosSmall, styles.image20IconLayout]}
        contentFit="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <Text style={[styles.sbiLoan, styles.nextFlexBox]}>SBI LOAN</Text>
      <Text style={[styles.incomeDetails1, styles.nextFlexBox]}>
        <Text style={styles.text}>{`3/5  `}</Text>
        <Text style={styles.incomeDetails2}> Income Details</Text>
      </Text>
      <View style={[styles.incomeDetailsItem, styles.incomePosition]} />
      <Image
        style={[styles.incomeDetailsInner, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Incomedetails2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-73.png")}
        />
      </Pressable>
      <Text style={[styles.salaryperson, styles.studentTypo]}>
        SalaryPerson
      </Text>
      <Text style={[styles.buissnessman, styles.studentTypo]}>
        Buissnessman
      </Text>
      <Text style={[styles.companyName, styles.companyNameTypo]}>
        Company Name
      </Text>
      <Text style={[styles.totalWorkExperience, styles.companyNameTypo]}>
        Total Work Experience
      </Text>
      <Text style={styles.grossSalary}>Gross Salary</Text>
      <View style={[styles.lineView, styles.incomeChildPosition]} />
      <View style={[styles.incomeDetailsChild1, styles.incomeChildPosition]} />
      <View style={[styles.incomeDetailsChild2, styles.incomeChildPosition]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Incomedetails2")}
      />
      <Text style={[styles.next, styles.nextFlexBox]}>
        <Text style={styles.text1Typo}>{`       `}</Text>
        <Text style={styles.next1Typo}>Next</Text>
      </Text>
      <Text style={[styles.change, styles.nextFlexBox]}>Change</Text>
      <Text style={[styles.student, styles.text1Typo]}>Student</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  incomePosition: {
    backgroundColor: Color.colorDarkcyan,
    left: "50%",
    position: "absolute",
  },
  nextFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  image20IconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapperPosition: {
    top: 224,
    height: 20,
    width: 20,
    position: "absolute",
  },
  studentTypo: {
    fontSize: FontSize.size_2xs,
    top: 230,
    textAlign: "left",
    position: "absolute",
  },
  companyNameTypo: {
    height: 17,
    left: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  incomeChildPosition: {
    height: 1,
    width: 311,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    marginLeft: -155.5,
    left: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  incomeDetailsChild: {
    marginLeft: -180,
    top: 0,
    width: 360,
    height: 60,
  },
  applyingForPersonal: {
    left: 35,
    width: 315,
    height: 28,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 24,
  },
  image20Icon: {
    left: 310,
    top: 24,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: "-2.22%",
    top: "-1.5%",
    right: "88.33%",
    bottom: "95.25%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  bankLogosSmall: {
    marginLeft: -160,
    top: 100,
    left: "50%",
    overflow: "hidden",
  },
  sbiLoan: {
    top: 105,
    left: 53,
    fontSize: FontSize.size_smi,
    width: 66,
    height: 15,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text: {
    color: Color.colorMediumseagreen_100,
  },
  incomeDetails2: {
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  incomeDetails1: {
    top: 160,
    left: 23,
    fontSize: FontSize.size_lg,
    width: 238,
    height: 24,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  incomeDetailsItem: {
    marginLeft: -167,
    top: 212,
    borderRadius: Border.br_3xs,
    width: 335,
    height: 260,
  },
  incomeDetailsInner: {
    left: 29,
  },
  ellipseIcon: {
    left: 132,
  },
  wrapper: {
    left: 251,
  },
  salaryperson: {
    left: 54,
    width: 79,
    height: 9,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  buissnessman: {
    left: 162,
    width: 89,
    height: 5,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  companyName: {
    top: 269,
    color: "#f6f3f3",
    width: 176,
  },
  totalWorkExperience: {
    top: 325,
    color: Color.colorWhitesmoke_300,
    width: 231,
  },
  grossSalary: {
    top: 382,
    color: "#fbf5f5",
    width: 107,
    height: 16,
    left: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  lineView: {
    top: 297,
  },
  incomeDetailsChild1: {
    top: 352,
  },
  incomeDetailsChild2: {
    top: 411,
  },
  rectanglePressable: {
    marginLeft: -80,
    top: 457,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  next1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  next: {
    marginLeft: -49,
    top: 471,
    width: 120,
    height: 22,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: "50%",
  },
  change: {
    top: 526,
    left: 146,
    color: Color.colorPaleturquoise_100,
    width: 139,
    height: 31,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  student: {
    left: 281,
    color: "#f5e9e9",
    width: 88,
    height: 19,
    fontSize: FontSize.size_2xs,
    top: 230,
    textAlign: "left",
    position: "absolute",
  },
  incomeDetails: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IncomeDetails;
