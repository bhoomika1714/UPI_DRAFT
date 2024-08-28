import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Congrats = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.congrats, styles.iconLayout]}>
      <View style={[styles.congratsChild, styles.congratsPosition]} />
      <Text style={[styles.applyingForPersonal, styles.sbiLoanTypo]}>
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
      <Text style={[styles.sbiLoan, styles.sbiLoanTypo]}>SBI LOAN</Text>
      <Text style={[styles.incomeDetails, styles.sbiLoanTypo]}>
        <Text style={styles.text}>{`5/5  `}</Text>
        <Text style={styles.incomeDetails1}> Income Details</Text>
      </Text>
      <View style={[styles.congratsItem, styles.congratsPosition]} />
      <Image
        style={styles.image45Icon}
        contentFit="cover"
        source={require("../assets/image-45.png")}
      />
      <Text
        style={[styles.congratulationYourApplicat, styles.sbiLoanTypo]}
      >{`                  Congratulation!!         
                
Your application form has been submited successfully,you will get the  amount soon`}</Text>
      <Image
        style={[
          styles.httpslottiefilescomanimatIcon,
          styles.congratsInnerPosition,
        ]}
        contentFit="cover"
        source={require("../assets/httpslottiefilescomanimationssuccessiqagdnrrmh.png")}
      />
      <Pressable
        style={[styles.congratsInner, styles.congratsInnerPosition]}
        onPress={() => navigation.navigate("Application")}
      />
      <Text style={[styles.trackForm, styles.sbiLoanTypo]}>Track Form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  congratsPosition: {
    backgroundColor: Color.colorDarkcyan,
    left: "50%",
    position: "absolute",
  },
  sbiLoanTypo: {
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
  congratsInnerPosition: {
    height: 50,
    left: "50%",
    position: "absolute",
  },
  congratsChild: {
    marginLeft: -180,
    top: 0,
    width: 360,
    height: 60,
  },
  applyingForPersonal: {
    left: 39,
    width: 315,
    height: 28,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 27,
  },
  image20Icon: {
    left: 310,
    top: 27,
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
    textAlign: "left",
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
  },
  congratsItem: {
    marginLeft: -175,
    top: 207,
    borderRadius: Border.br_3xs,
    width: 350,
    height: 510,
  },
  image45Icon: {
    marginLeft: -150,
    top: 229,
    width: 300,
    height: 300,
    left: "50%",
    position: "absolute",
  },
  congratulationYourApplicat: {
    top: 557,
    left: 22,
    width: 308,
    height: 163,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  httpslottiefilescomanimatIcon: {
    marginLeft: 31,
    top: 547,
    width: 50,
  },
  congratsInner: {
    marginLeft: -80,
    top: 702,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
  },
  trackForm: {
    top: 717,
    left: 135,
    width: 139,
    height: 35,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  congrats: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default Congrats;
