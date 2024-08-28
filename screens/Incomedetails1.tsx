import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Incomedetails1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.incomedetails2, styles.iconLayout]}>
      <View
        style={[styles.incomedetails2Child, styles.incomedetails2Position1]}
      />
      <Text style={[styles.applyingForPersonal, styles.nextTypo]}>
        APPLYING FOR PERSONAL LOAN
      </Text>
      <Image
        style={[styles.image20Icon, styles.incomedetails2Layout]}
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
        style={[styles.bankLogosSmall, styles.incomedetails2Layout]}
        contentFit="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <Text style={[styles.sbiLoan, styles.nextTypo]}>SBI LOAN</Text>
      <Text style={[styles.incomeDetails, styles.nextTypo]}>
        <Text style={styles.text}>{`3/5  `}</Text>
        <Text style={styles.incomeDetails1}> Income Details</Text>
      </Text>
      <View
        style={[styles.incomedetails2Item, styles.incomedetails2Position1]}
      />
      <Image
        style={[styles.incomedetails2Inner, styles.incomedetails2Position]}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Image
        style={[
          styles.incomedetails2Child1,
          styles.incomedetails2ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Text style={styles.salaryperson}>SalaryPerson</Text>
      <Text style={[styles.buissnessman, styles.studentTypo]}>
        Buissnessman
      </Text>
      <Text style={[styles.student, styles.studentTypo]}>Student</Text>
      <Text style={[styles.familyMonthlyIncome, styles.fatherAgeTypo]}>
        Family Monthly Income
      </Text>
      <Text style={[styles.fatherAge, styles.fatherAgeTypo]}>Father Age</Text>
      <Text style={[styles.motherAge, styles.incomedetails2Position]}>
        Mother Age
      </Text>
      <View style={[styles.lineView, styles.incomedetails2ChildPosition]} />
      <View
        style={[
          styles.incomedetails2Child2,
          styles.incomedetails2ChildPosition,
        ]}
      />
      <View
        style={[
          styles.incomedetails2Child3,
          styles.incomedetails2ChildPosition,
        ]}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.nextPosition]}
        onPress={() => navigation.navigate("Seleconloan")}
      />
      <Text style={[styles.next, styles.nextTypo]}> Next</Text>
      <Text style={[styles.change, styles.nextTypo]}>Change</Text>
      <Image
        style={[styles.incomedetails2Child4, styles.incomedetails2Position]}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Text style={[styles.working, styles.workingTypo]}>Working</Text>
      <Text style={[styles.notWorking, styles.workingPosition]}>
        Not Working
      </Text>
      <Image
        style={[
          styles.incomedetails2Child1,
          styles.incomedetails2ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-78.png")}
      />
      <Image
        style={[styles.incomedetails2Child6, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-78.png")}
      />
      <Image
        style={[
          styles.incomedetails2Child7,
          styles.incomedetails2ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-78.png")}
      />
      <Text style={[styles.loanPurpose, styles.workingTypo]}>Loan Purpose</Text>
      <View
        style={[
          styles.incomedetails2Child8,
          styles.incomedetails2ChildPosition,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  incomedetails2Position1: {
    backgroundColor: Color.colorDarkcyan,
    left: "50%",
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  incomedetails2Layout: {
    height: 20,
    width: 20,
  },
  incomedetails2Position: {
    left: 29,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 132,
    height: 20,
    width: 20,
    position: "absolute",
  },
  incomedetails2ChildPosition1: {
    left: 251,
    height: 20,
    width: 20,
    position: "absolute",
  },
  studentTypo: {
    height: 5,
    fontSize: FontSize.size_2xs,
    top: 230,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  fatherAgeTypo: {
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  incomedetails2ChildPosition: {
    height: 1,
    width: 311,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    marginLeft: -155.5,
    left: "50%",
    position: "absolute",
  },
  nextPosition: {
    left: "50%",
    position: "absolute",
  },
  workingTypo: {
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  workingPosition: {
    top: 270,
    fontSize: FontSize.size_2xs,
    color: Color.schemesOnPrimary,
  },
  incomedetails2Child: {
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 24,
    position: "absolute",
  },
  image20Icon: {
    left: 293,
    top: 24,
    height: 20,
    width: 20,
    position: "absolute",
  },
  icon: {
    height: "100%",
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
    position: "absolute",
    overflow: "hidden",
  },
  sbiLoan: {
    top: 105,
    left: 53,
    fontSize: FontSize.size_smi,
    height: 15,
    width: 66,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    color: Color.colorMediumseagreen_100,
  },
  incomeDetails1: {
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  incomeDetails: {
    top: 160,
    left: 23,
    fontSize: FontSize.size_lg,
    width: 238,
    height: 24,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  incomedetails2Item: {
    marginLeft: -167,
    top: 210,
    borderRadius: Border.br_3xs,
    width: 335,
    height: 380,
  },
  incomedetails2Inner: {
    top: 224,
    height: 20,
    width: 20,
  },
  ellipseIcon: {
    top: 224,
  },
  incomedetails2Child1: {
    top: 224,
  },
  salaryperson: {
    left: 54,
    width: 82,
    height: 9,
    fontSize: FontSize.size_2xs,
    top: 230,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  buissnessman: {
    left: 162,
    width: 89,
  },
  student: {
    left: 281,
    width: 57,
  },
  familyMonthlyIncome: {
    top: 322,
    left: 25,
    color: "#fbf3f3",
    width: 194,
  },
  fatherAge: {
    top: 370,
    left: 27,
    color: "#f5eeee",
    width: 150,
  },
  motherAge: {
    top: 422,
    color: Color.colorSnow_200,
    width: 107,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  lineView: {
    top: 351,
  },
  incomedetails2Child2: {
    top: 400,
  },
  incomedetails2Child3: {
    top: 449,
  },
  rectanglePressable: {
    marginLeft: -80,
    top: 571,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 50,
  },
  next: {
    marginLeft: -53,
    top: 585,
    width: 120,
    height: 22,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  change: {
    top: 640,
    left: 137,
    color: Color.colorPaleturquoise_100,
    width: 139,
    height: 31,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  incomedetails2Child4: {
    top: 263,
    height: 20,
    width: 20,
  },
  working: {
    left: 55,
    top: 270,
    fontSize: FontSize.size_2xs,
    color: Color.schemesOnPrimary,
    width: 66,
  },
  notWorking: {
    left: 164,
    width: 117,
    height: 13,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  incomedetails2Child6: {
    top: 266,
  },
  incomedetails2Child7: {
    top: 225,
  },
  loanPurpose: {
    top: 471,
    left: 30,
    color: "#f9f2f2",
    width: 157,
    fontSize: FontSize.size_base,
  },
  incomedetails2Child8: {
    top: 501,
  },
  incomedetails2: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default Incomedetails1;
