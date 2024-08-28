import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Seleconloan = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.seleconloan, styles.iconLayout]}>
      <View style={[styles.seleconloanChild, styles.seleconloanPosition]} />
      <Text style={styles.applyingForPersonal}>APPLYING FOR PERSONAL LOAN</Text>
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
      <Text style={[styles.sbiLoan, styles.loanFlexBox]}>SBI LOAN</Text>
      <Text style={[styles.selectLoanAmountContainer, styles.loanFlexBox]}>
        <Text style={styles.text}>{`4/5  `}</Text>
        <Text style={styles.selectLoanAmount}> Select Loan Amount</Text>
      </Text>
      <Text style={[styles.notWorking, styles.loanFlexBox]}>Not Working</Text>
      <View style={[styles.seleconloanItem, styles.seleconloanPosition]} />
      <Image
        style={[styles.seleconloanInner, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-74.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-41.png")}
      />
      <Text style={styles.howMuchAmount}>How much amount needed? Rs.5000</Text>
      <Text style={[styles.k, styles.kTypo]}>5k</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-74.png")}
      />
      <Image
        style={[styles.seleconloanChild1, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-41.png")}
      />
      <Text
        style={[styles.chooseTenure3, styles.yearTypo]}
      >{`Choose Tenure                                                              3 Month                            `}</Text>
      <Text style={[styles.month, styles.yearTypo]}>{` 3 Month    `}</Text>
      <Text style={styles.uploadDocument}>Upload Document</Text>
      <Text style={[styles.panCard, styles.kTypo]}>Pan Card</Text>
      <Text style={[styles.aadharFront, styles.aadharTypo]}>Aadhar front</Text>
      <Text style={[styles.aadharBack, styles.aadharTypo]}>Aadhar back</Text>
      <Text style={[styles.photo, styles.aadharTypo]}>Photo</Text>
      <Text style={[styles.cancelCheque, styles.aadharTypo]}>
        Cancel cheque
      </Text>
      <View style={[styles.rectangleView, styles.seleconloanChildLayout]} />
      <View style={[styles.seleconloanChild2, styles.seleconloanChildLayout]} />
      <Text style={[styles.upload, styles.uploadTypo1]}> Upload</Text>
      <View style={[styles.seleconloanChild3, styles.seleconloanChildLayout]} />
      <View style={[styles.seleconloanChild4, styles.seleconloanChildLayout]} />
      <View style={[styles.seleconloanChild5, styles.seleconloanChildLayout]} />
      <View style={[styles.seleconloanChild6, styles.seleconloanChildLayout]} />
      <Text style={[styles.upload1, styles.uploadTypo1]}> Upload</Text>
      <Text style={[styles.upload2, styles.uploadTypo1]}> Upload</Text>
      <Text style={[styles.upload3, styles.uploadTypo]}> Upload</Text>
      <Text style={[styles.upload4, styles.uploadTypo]}> Upload</Text>
      <Text style={[styles.upload5, styles.uploadTypo]}> Upload</Text>
      <Image
        style={[styles.image44Icon, styles.image44IconPosition]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image44Icon1, styles.image44IconPosition]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image44Icon2, styles.image44IconPosition]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image44Icon3, styles.image44IconPosition]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image44Icon4, styles.image44IconPosition]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image44Icon5, styles.image44IconPosition]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Congrats")}
      />
      <Text style={[styles.next, styles.loanFlexBox]}>
        <Text style={styles.text1}>{`       `}</Text>
        <Text style={styles.next1}>Next</Text>
      </Text>
      <Text style={[styles.change, styles.loanFlexBox]}>Change</Text>
      <Text style={[styles.lac, styles.loanFlexBox]}>5 lac</Text>
      <Text style={[styles.year, styles.yearTypo]}>3 year</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  seleconloanPosition: {
    backgroundColor: Color.colorDarkcyan,
    left: "50%",
    position: "absolute",
  },
  image20IconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  loanFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 27,
    height: 20,
    width: 20,
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 305,
    position: "absolute",
  },
  kTypo: {
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  yearTypo: {
    height: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  aadharTypo: {
    width: 181,
    height: 28,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  seleconloanChildLayout: {
    width: 143,
    left: 199,
    backgroundColor: Color.colorPaleturquoise_100,
    borderRadius: Border.br_8xs,
    height: 30,
    position: "absolute",
  },
  uploadTypo1: {
    height: 29,
    width: 109,
    left: 214,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  uploadTypo: {
    left: 212,
    height: 29,
    width: 109,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image44IconPosition: {
    left: 303,
    height: 20,
    width: 20,
    position: "absolute",
  },
  seleconloanChild: {
    marginLeft: -180,
    top: 0,
    width: 360,
    height: 60,
  },
  applyingForPersonal: {
    left: 35,
    height: 28,
    width: 315,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 24,
    position: "absolute",
  },
  image20Icon: {
    left: 310,
    top: 24,
    height: 20,
    width: 20,
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
  },
  text: {
    color: Color.colorMediumseagreen_100,
  },
  selectLoanAmount: {
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  selectLoanAmountContainer: {
    top: 160,
    left: 23,
    fontSize: FontSize.size_lg,
    width: 238,
    height: 24,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  notWorking: {
    top: 270,
    left: 164,
    fontSize: FontSize.size_3xs,
    width: 117,
    height: 13,
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    fontWeight: "700",
  },
  seleconloanItem: {
    marginLeft: -175,
    top: 192,
    borderRadius: Border.br_3xs,
    width: 350,
    height: 530,
  },
  seleconloanInner: {
    top: 244,
  },
  lineIcon: {
    top: 254,
    left: 47,
  },
  howMuchAmount: {
    top: 214,
    height: 7,
    fontSize: FontSize.size_xs,
    left: 20,
    width: 315,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  k: {
    top: 276,
    left: 31,
    width: 32,
    color: Color.colorPaleturquoise_100,
    fontSize: FontSize.size_xs,
  },
  ellipseIcon: {
    top: 323,
  },
  seleconloanChild1: {
    top: 332,
    left: 45,
  },
  chooseTenure3: {
    top: 295,
    left: 16,
    width: 322,
    height: 16,
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
  },
  month: {
    top: 355,
    left: 22,
    width: 322,
    height: 16,
    color: Color.colorPaleturquoise_100,
    fontFamily: FontFamily.poppinsBold,
  },
  uploadDocument: {
    height: 30,
    width: 161,
    top: 388,
    left: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  panCard: {
    top: 434,
    width: 145,
    left: 20,
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_base,
  },
  aadharFront: {
    top: 478,
    left: 20,
  },
  aadharBack: {
    top: 520,
    left: 20,
  },
  photo: {
    top: 566,
    left: 22,
  },
  cancelCheque: {
    top: 612,
    left: 20,
  },
  rectangleView: {
    top: 383,
  },
  seleconloanChild2: {
    top: 427,
  },
  upload: {
    top: 387,
  },
  seleconloanChild3: {
    top: 469,
  },
  seleconloanChild4: {
    top: 515,
  },
  seleconloanChild5: {
    top: 561,
  },
  seleconloanChild6: {
    top: 607,
  },
  upload1: {
    top: 429,
  },
  upload2: {
    top: 475,
  },
  upload3: {
    top: 519,
  },
  upload4: {
    top: 564,
  },
  upload5: {
    top: 611,
  },
  image44Icon: {
    top: 388,
    left: 303,
  },
  image44Icon1: {
    top: 431,
  },
  image44Icon2: {
    top: 478,
  },
  image44Icon3: {
    top: 521,
  },
  image44Icon4: {
    top: 570,
  },
  image44Icon5: {
    top: 614,
  },
  rectanglePressable: {
    marginLeft: -80,
    top: 701,
    height: 50,
    backgroundColor: Color.colorPaleturquoise_100,
    borderRadius: Border.br_8xs,
    width: 161,
    left: "50%",
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  next1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  next: {
    marginLeft: -51,
    top: 715,
    width: 120,
    height: 22,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    left: "50%",
  },
  change: {
    top: 762,
    left: 149,
    width: 139,
    height: 31,
    color: Color.colorPaleturquoise_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  lac: {
    top: 274,
    left: 288,
    width: 65,
    height: 9,
    color: Color.colorPaleturquoise_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  year: {
    top: 339,
    left: 285,
    width: 100,
    color: Color.colorPaleturquoise_100,
    fontFamily: FontFamily.poppinsBold,
  },
  seleconloan: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default Seleconloan;
