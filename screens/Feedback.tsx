import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Feedback = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.feedback}>
      <View style={styles.feedbackChild} />
      <Text style={[styles.loanAccountFeedback, styles.submitTypo]}>
        Loan Account Feedback Form
      </Text>
      <Text
        style={[styles.howSatisfiedAre, styles.howTypo2]}
      >{`1. How satisfied are you with the loan application
 process?`}</Text>
      <Text
        style={[styles.satisfiedNeutralDissatisfied, styles.satisfiedTypo]}
      >{`         Satisfied                           Neutral                                    Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackItem, styles.feedbackChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackInner, styles.feedbackChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.feedbackChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text
        style={[
          styles.satisfiedNeutralDissatisfied1,
          styles.feedbackChildPosition4,
        ]}
      >{`         Satisfied                           Neutral                                    Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackChild1, styles.feedbackChildPosition4]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild2, styles.feedbackChild2Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-90.png")}
      />
      <Image
        style={[styles.feedbackChild3, styles.feedbackChildPosition4]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text
        style={[
          styles.satisfiedNeutralDissatisfied2,
          styles.feedbackChild6Position,
        ]}
      >{`         Satisfied                           Neutral                                    Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackChild4, styles.feedbackChildPosition3]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild5, styles.feedbackChildPosition3]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild6, styles.feedbackChild6Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text
        style={[styles.reasonableNeutralUnreasonabl, styles.satisfiedTypo]}
      >{`         Reasonable                    Neutral                                   Unreasonable   
`}</Text>
      <Image
        style={[styles.feedbackChild7, styles.feedbackChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild8, styles.feedbackChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild9, styles.feedbackChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text style={[styles.goodAveragePoor, styles.feedbackChild2Layout]}>
        {" "}
        Good Average Poor
      </Text>
      <Image
        style={[styles.feedbackChild10, styles.feedbackChildPosition2]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild11, styles.feedbackChildPosition2]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild12, styles.feedbackChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text style={[styles.didYouEncounterContainer, styles.howTypo2]}>
        <Text
          style={styles.didYouEncounter}
        >{`6. Did you encounter any issues during the loan 
disbursement process?
`}</Text>
        <Text style={styles.yesPleaseSpecify}>{`
       Yes (please specify)                                            
`}</Text>
      </Text>
      <Image
        style={[styles.feedbackChild13, styles.feedbackChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild14, styles.feedbackChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text style={[styles.text, styles.howTypo2]}>{`          `}</Text>
      <Text
        style={[styles.satisfiedNeutralDissatisfied3, styles.satisfiedTypo]}
      >{`           Satisfied                        Neutral                                      Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackChild15, styles.feedbackChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild16, styles.feedbackChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild17, styles.feedbackChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild18, styles.feedbackChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild19, styles.feedbackChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild20, styles.feedbackChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.feedbackChild21, styles.rectangleViewLayout]} />
      <Pressable
        style={[styles.wrapper, styles.submitPosition]}
        onPress={() => navigation.navigate("BankLoan")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-253.png")}
        />
      </Pressable>
      <Text style={[styles.submit, styles.submitPosition]}>Submit</Text>
      <Text
        style={[styles.howClearAnd, styles.howTypo1]}
      >{`2. How clear and easy to understand was the loan
 documentation?`}</Text>
      <Text
        style={[styles.howDoYou, styles.howTypo1]}
      >{`3. How do you rate the customer service provided 
during the loan process?`}</Text>
      <Text
        style={[styles.howReasonableDo, styles.howTypo]}
      >{`4. How reasonable do you find the loan interest 
rates?`}</Text>
      <Text
        style={styles.howWouldYou}
      >{`5. How would you rate the online platform
 formanaging your loan account?`}</Text>
      <Text
        style={[styles.howSatisfiedAre1, styles.howTypo]}
      >{`7. How satisfied are you with the flexibility of 
repayment options?`}</Text>
      <Text
        style={[styles.howLikelyAre, styles.howTypo2]}
      >{`8. How likely are you to recommend our loan
 services to others?`}</Text>
      <Text
        style={[styles.whatImprovementsWould, styles.whatImprovementsWouldTypo]}
      >{`9. What improvements would you like to see in our 
loan services?`}</Text>
      <Text
        style={[styles.anyAdditionalComments, styles.whatImprovementsWouldTypo]}
      >
        10. Any additional comments or suggestions?
      </Text>
      <Text style={[styles.likelyUnlikelyNeutral, styles.howTypo2]}>
        likely Unlikely Neutral
      </Text>
      <Text style={[styles.no, styles.howTypo2]}>No</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  submitTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  howTypo2: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  satisfiedTypo: {
    width: 352,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  feedbackChildLayout1: {
    height: 10,
    width: 10,
  },
  feedbackChildLayout: {
    left: 261,
    height: 10,
    width: 10,
  },
  feedbackChildPosition4: {
    top: 184,
    position: "absolute",
  },
  feedbackChild2Layout: {
    height: 11,
    position: "absolute",
  },
  feedbackChild6Position: {
    top: 260,
    position: "absolute",
  },
  feedbackChildPosition3: {
    top: 257,
    height: 10,
    width: 10,
    position: "absolute",
  },
  feedbackChildPosition2: {
    top: 395,
    height: 10,
    width: 10,
    position: "absolute",
  },
  feedbackChildPosition1: {
    top: 548,
    height: 10,
    width: 10,
    position: "absolute",
  },
  feedbackChildPosition: {
    top: 615,
    height: 10,
    width: 10,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 22,
    width: 340,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  submitPosition: {
    top: 777,
    position: "absolute",
  },
  howTypo1: {
    height: 36,
    left: 11,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  howTypo: {
    height: 29,
    left: 11,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  whatImprovementsWouldTypo: {
    height: 26,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  feedbackChild: {
    marginLeft: -180,
    top: 0,
    left: "50%",
    backgroundColor: Color.colorDarkcyan,
    width: 360,
    height: 60,
    position: "absolute",
  },
  loanAccountFeedback: {
    top: 18,
    left: 58,
    fontSize: FontSize.size_base,
    color: "#fef4f4",
    position: "absolute",
  },
  howSatisfiedAre: {
    top: 72,
    left: 13,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  satisfiedNeutralDissatisfied: {
    top: 116,
    left: 4,
    width: 352,
    position: "absolute",
  },
  feedbackItem: {
    left: 129,
    top: 117,
    position: "absolute",
  },
  feedbackInner: {
    top: 117,
    position: "absolute",
  },
  ellipseIcon: {
    left: 15,
    top: 117,
    position: "absolute",
  },
  satisfiedNeutralDissatisfied1: {
    left: 7,
    width: 352,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  feedbackChild1: {
    left: 15,
    height: 10,
    width: 10,
  },
  feedbackChild2: {
    top: 183,
    width: 10,
    height: 11,
    left: 129,
  },
  feedbackChild3: {
    left: 261,
    height: 10,
    width: 10,
  },
  satisfiedNeutralDissatisfied2: {
    width: 352,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 4,
  },
  feedbackChild4: {
    left: 15,
  },
  feedbackChild5: {
    left: 129,
  },
  feedbackChild6: {
    left: 261,
    height: 10,
    width: 10,
  },
  reasonableNeutralUnreasonabl: {
    top: 329,
    left: 8,
    position: "absolute",
  },
  feedbackChild7: {
    top: 328,
    left: 15,
    position: "absolute",
  },
  feedbackChild8: {
    top: 324,
    left: 129,
    position: "absolute",
  },
  feedbackChild9: {
    top: 327,
    position: "absolute",
  },
  goodAveragePoor: {
    top: 399,
    left: 19,
    width: 347,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  feedbackChild10: {
    left: 15,
  },
  feedbackChild11: {
    left: 129,
  },
  feedbackChild12: {
    top: 392,
    position: "absolute",
  },
  didYouEncounter: {
    fontSize: FontSize.size_smi,
  },
  yesPleaseSpecify: {
    fontSize: FontSize.size_3xs,
  },
  didYouEncounterContainer: {
    top: 422,
    left: 9,
    width: 318,
    height: 82,
    position: "absolute",
  },
  feedbackChild13: {
    top: 467,
    left: 15,
    position: "absolute",
  },
  feedbackChild14: {
    top: 464,
    position: "absolute",
  },
  text: {
    top: 478,
    left: 186,
    width: 30,
    height: 9,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  satisfiedNeutralDissatisfied3: {
    top: 549,
    left: 0,
    position: "absolute",
  },
  feedbackChild15: {
    left: 15,
  },
  feedbackChild16: {
    left: 124,
  },
  feedbackChild17: {
    top: 544,
    position: "absolute",
  },
  feedbackChild18: {
    left: 15,
  },
  feedbackChild19: {
    left: 124,
  },
  feedbackChild20: {
    left: 256,
  },
  rectangleView: {
    top: 686,
    backgroundColor: Color.colorSnow_200,
    left: 12,
  },
  feedbackChild21: {
    top: 743,
    left: 10,
    backgroundColor: "#fffefe",
  },
  icon: {
    borderRadius: Border.br_8xs,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 280,
    width: 72,
    height: 20,
  },
  submit: {
    left: 293,
    color: Color.schemesOnPrimary,
    width: 62,
    height: 12,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  howClearAnd: {
    top: 140,
    width: 392,
  },
  howDoYou: {
    top: 209,
    width: 484,
  },
  howReasonableDo: {
    top: 283,
    width: 394,
  },
  howWouldYou: {
    top: 352,
    width: 477,
    height: 41,
    left: 11,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  howSatisfiedAre1: {
    top: 497,
    width: 405,
  },
  howLikelyAre: {
    top: 572,
    width: 493,
    height: 33,
    left: 12,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  whatImprovementsWould: {
    top: 640,
    left: 5,
    width: 411,
  },
  anyAdditionalComments: {
    top: 715,
    width: 368,
    left: 8,
  },
  likelyUnlikelyNeutral: {
    top: 621,
    left: 25,
    width: 400,
    height: 19,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  no: {
    top: 469,
    left: 275,
    width: 36,
    height: 13,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  feedback: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Feedback;
