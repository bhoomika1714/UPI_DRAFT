import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Application = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.application}>
      <View style={[styles.applicationChild, styles.applicationPosition1]} />
      <Text style={[styles.helloBecklyWelcome, styles.loanIdTypo]}>
        HELLO BECKLY! WELCOME TO SBI LOANS
      </Text>
      <Image
        style={styles.image20Icon}
        resizeMode="cover"
        source={require("../assets/image-20.png")}
      />
      <View style={[styles.applicationItem, styles.applicationPosition1]} />
      <Text style={[styles.loanId32894u3, styles.loanId32894u3Layout]}>
        <Text style={styles.loanIdTypo}>
          <Text style={styles.loanId1}>Loan ID</Text>
          <Text style={styles.text}>:</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.u31}>32894u3</Text>
        </Text>
      </Text>
      <Text style={[styles.amount20000, styles.amount20000Position]}>
        <Text style={styles.loanIdTypo}>
          <Text style={styles.loanId1}>Amount</Text>
          <Text style={styles.text}>:</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.u31}>20,000</Text>
        </Text>
      </Text>
      <Text style={[styles.applyDate20082024, styles.loanId32894u3Layout]}>
        <Text style={styles.loanIdTypo}>
          <Text style={styles.loanId1}>Apply date</Text>
          <Text style={styles.text}>:</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.u31}>20/08/2024</Text>
        </Text>
      </Text>
      <Text style={[styles.loanTypepersonal, styles.amount20000Position]}>
        <Text style={styles.loanIdTypo}>
          <Text style={styles.loanId1}>Loan type</Text>
          <Text style={styles.text7}>:</Text>
        </Text>
        <Text style={styles.text7}>
          <Text style={styles.u31}>{`Personal `}</Text>
        </Text>
      </Text>
      <Image
        style={[styles.applicationInner, styles.applicationPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-80.png")}
      />
      <Text style={[styles.text8, styles.textTypo3]}>1</Text>
      <Text style={[styles.applicationFormSubmitted, styles.applicationTypo]}>
        Application form submitted
      </Text>
      <Text style={[styles.text9, styles.textTypo2]}>-</Text>
      <Text style={[styles.text10, styles.textTypo2]}>-</Text>
      <Text style={[styles.text11, styles.textTypo2]}>-</Text>
      <Text style={[styles.text12, styles.textTypo2]}>-</Text>
      <Text style={[styles.text13, styles.textTypo2]}>-</Text>
      <Image
        style={[styles.ellipseIcon, styles.applicationPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.text14, styles.textTypo3]}>2</Text>
      <Text style={[styles.documentsSubmitted, styles.documentsSubmittedTypo]}>
        Documents submitted
      </Text>
      <Text style={[styles.text15, styles.textTypo1]}>-</Text>
      <Text style={[styles.text16, styles.textTypo1]}>-</Text>
      <Text style={styles.textTypo}>-</Text>
      <Text style={[styles.text18, styles.textTypo1]}>-</Text>
      <Text style={styles.textTypo}>-</Text>
      <Text style={[styles.text20, styles.text20Position]}>-</Text>
      <Image
        style={[styles.applicationChild1, styles.text20Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-82.png")}
      />
      <Text style={[styles.applicationUnderReview, styles.itMayTakeLayout]}>
        Application under review
      </Text>
      <Text style={[styles.itMayTake, styles.itMayTakeLayout]}>
        it may take 3-15 working days
      </Text>
      <Image
        style={[styles.screenshot202408200835041, styles.screenshotLayout]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240820-083504-1.png")}
      />
      <Image
        style={styles.applicationChild2}
        resizeMode="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Text style={[styles.approved, styles.approvedLayout]}>Approved</Text>
      <Text
        style={[styles.asPerBankfinancial, styles.approvedLayout]}
      >{`As per bank/financial services 
provided report`}</Text>
      <Image
        style={[styles.screenshot202408200835043, styles.screenshotLayout]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240820-083504-1.png")}
      />
      <Image
        style={[styles.applicationChild3, styles.applicationChild3Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Text
        style={[styles.totalLoanTransaction, styles.applicationChild3Position]}
      >
        Total loan transaction
      </Text>
      <Image
        style={[styles.screenshot202408200835042, styles.screenshotLayout]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240820-083504-1.png")}
      />
      <Image
        style={styles.image46Icon}
        resizeMode="cover"
        source={require("../assets/image-46.png")}
      />
      <Image
        style={styles.applicationChild4}
        resizeMode="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <Text style={[styles.completed, styles.applicationTypo]}>Completed</Text>
      <View style={styles.homeParent}>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.goBackTypo]}>Profile</Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-373.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-353.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconThumbsUpLikeVoteN}
          onPress={() => navigation.navigate("Feedback")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon--thumbs-up-like-vote--negative.png")}
          />
        </Pressable>
        <Text style={[styles.feedback, styles.goBackTypo]}>Feedback</Text>
        <Pressable
          style={styles.iconBackArrowResetReply}
          onPress={() => navigation.navigate("Selectbank")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon--back-arrow-reset-reply--neg.png")}
          />
        </Pressable>
        <Text style={[styles.goBack, styles.goBackTypo]}>Go back</Text>
        <Image
          style={styles.locationIcon}
          resizeMode="cover"
          source={require("../assets/location.png")}
        />
        <Text style={[styles.track, styles.homeTypo]}>Track</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  applicationPosition1: {
    width: 360,
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  loanIdTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  loanId32894u3Layout: {
    height: 19,
    textAlign: "left",
    position: "absolute",
  },
  amount20000Position: {
    left: 198,
    height: 19,
    width: 158,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  applicationPosition: {
    left: 26,
    height: 20,
  },
  textTypo3: {
    width: 14,
    color: Color.colorSnow_200,
    fontFamily: FontFamily.interBold,
    left: 33,
    height: 14,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  applicationTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  textTypo2: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    color: Color.colorMediumaquamarine,
    left: 29,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  documentsSubmittedTypo: {
    left: 52,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  textTypo1: {
    color: Color.colorLightgray,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: 29,
    height: 14,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "700",
  },
  text20Position: {
    top: 303,
    width: 20,
    position: "absolute",
  },
  itMayTakeLayout: {
    height: 21,
    width: 229,
    left: 57,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    position: "absolute",
  },
  screenshotLayout: {
    height: 30,
    width: 22,
    position: "absolute",
  },
  approvedLayout: {
    height: 36,
    width: 199,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
  },
  applicationChild3Position: {
    top: 408,
    position: "absolute",
  },
  homeTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  goBackTypo: {
    top: 45,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  wrapperLayout: {
    height: 25,
    width: 20,
    position: "absolute",
  },
  applicationChild: {
    top: 0,
    backgroundColor: Color.colorDarkcyan,
    height: 60,
  },
  helloBecklyWelcome: {
    top: 14,
    left: 12,
    width: 335,
    height: 42,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    position: "absolute",
  },
  image20Icon: {
    top: 36,
    left: 336,
    height: 20,
    width: 20,
    position: "absolute",
  },
  applicationItem: {
    bottom: 628,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    height: 100,
  },
  loanId1: {
    color: Color.colorDarkslategray_100,
  },
  text: {
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  u31: {
    fontFamily: FontFamily.poppinsRegular,
  },
  loanId32894u3: {
    top: 92,
    width: 158,
    height: 19,
    left: 5,
    fontSize: FontSize.size_base,
  },
  amount20000: {
    top: 96,
  },
  applyDate20082024: {
    top: 134,
    width: 197,
    left: 5,
    height: 19,
    fontSize: FontSize.size_base,
  },
  text7: {
    color: Color.colorGray_300,
  },
  loanTypepersonal: {
    top: 136,
  },
  applicationInner: {
    top: 207,
    width: 20,
    position: "absolute",
  },
  text8: {
    top: 210,
    height: 14,
  },
  applicationFormSubmitted: {
    top: 205,
    width: 159,
    left: 57,
    position: "absolute",
    color: Color.miscellaneousFloatingTabTextUnselected,
    height: 20,
    textAlign: "left",
  },
  text9: {
    top: 238,
    width: 66,
    height: 14,
  },
  text10: {
    top: 244,
    height: 4,
    width: 20,
  },
  text11: {
    top: 254,
    height: 14,
    width: 20,
  },
  text12: {
    top: 249,
    height: 14,
    width: 20,
  },
  text13: {
    top: 232,
    height: 14,
    width: 20,
  },
  ellipseIcon: {
    top: 256,
    width: 20,
    position: "absolute",
  },
  text14: {
    top: 261,
    height: 14,
  },
  documentsSubmitted: {
    top: 257,
    width: 221,
    color: Color.miscellaneousFloatingTabTextUnselected,
    height: 19,
    textAlign: "left",
    position: "absolute",
  },
  text15: {
    top: 286,
    width: 20,
    position: "absolute",
  },
  text16: {
    top: 298,
    width: 20,
    position: "absolute",
  },
  textTypo: {
    top: 292,
    color: Color.colorLightgray,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: 29,
    height: 14,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_3xs,
    width: 20,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  text18: {
    top: 281,
    width: 20,
    position: "absolute",
  },
  text20: {
    color: Color.colorLightgray,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: 29,
    height: 14,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "700",
  },
  applicationChild1: {
    left: 26,
    height: 20,
  },
  applicationUnderReview: {
    top: 302,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  itMayTake: {
    top: 323,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  screenshot202408200835041: {
    top: 325,
    left: 25,
  },
  applicationChild2: {
    top: 355,
    left: 25,
    height: 20,
    width: 20,
    position: "absolute",
  },
  approved: {
    top: 353,
    left: 59,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  asPerBankfinancial: {
    top: 371,
    left: 57,
    position: "absolute",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  screenshot202408200835043: {
    top: 378,
    left: 24,
  },
  applicationChild3: {
    left: 25,
    height: 20,
    width: 20,
  },
  totalLoanTransaction: {
    height: 36,
    width: 199,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    left: 52,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  screenshot202408200835042: {
    top: 431,
    left: 25,
  },
  image46Icon: {
    top: 546,
    left: 458,
    width: 429,
    height: 776,
    position: "absolute",
  },
  applicationChild4: {
    top: 461,
    left: 25,
    height: 20,
    width: 20,
    position: "absolute",
  },
  completed: {
    top: 464,
    left: 56,
    width: 187,
    height: 17,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    position: "absolute",
  },
  home: {
    top: 43,
    left: 31,
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
  },
  profile: {
    left: 238,
    width: 42,
    height: 20,
    color: Color.schemesOnPrimary,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 40,
    top: 18,
  },
  container: {
    left: 249,
    top: 15,
  },
  iconThumbsUpLikeVoteN: {
    left: 157,
    top: 3,
    width: 50,
    height: 50,
    position: "absolute",
  },
  feedback: {
    left: 155,
    color: Color.colorLavenderblush_100,
    width: 183,
    height: 16,
  },
  iconBackArrowResetReply: {
    left: 299,
    top: 4,
    width: 48,
    height: 48,
    position: "absolute",
  },
  goBack: {
    left: 297,
    color: Color.colorSnow_500,
    width: 74,
    height: 15,
  },
  locationIcon: {
    height: "37.14%",
    width: "5.39%",
    top: "23.38%",
    right: "66.31%",
    bottom: "39.48%",
    left: "28.3%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  track: {
    top: 46,
    left: 96,
    color: Color.colorSnow_600,
    width: 69,
    height: 13,
  },
  homeParent: {
    marginLeft: -186,
    bottom: 0,
    backgroundColor: Color.colorDarkslategray_100,
    width: 371,
    height: 77,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  application: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Application;
