import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Feedback = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

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
      >{`         Satisfied                                   Neutral                                           Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackItem, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackInner, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text
        style={[
          styles.satisfiedNeutralDissatisfied1,
          styles.feedbackChild1Position,
        ]}
      >{`         Satisfied                                   Neutral                                           Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackChild1, styles.feedbackChild1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-89.png")}
      />
      <Image
        style={[styles.feedbackChild2, styles.feedbackChildPosition4]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild3, styles.feedbackChildPosition4]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text
        style={[
          styles.satisfiedNeutralDissatisfied2,
          styles.feedbackChild4Position,
        ]}
      >{`         Satisfied                                   Neutral                                           Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackChild4, styles.feedbackChild4Position]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild5, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild6, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text
        style={[styles.reasonableNeutralUnreasonabl, styles.satisfiedTypo]}
      >{`         Reasonable                            Neutral                                           Unreasonable   
`}</Text>
      <Image
        style={[styles.feedbackChild7, styles.feedbackChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild8, styles.feedbackChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild9, styles.feedbackChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text style={[styles.goodAveragePoor, styles.goodAveragePoorPosition]}>
        {" "}
        Good Average Poor
      </Text>
      <Image
        style={[styles.feedbackChild10, styles.goodAveragePoorPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild11, styles.feedbackChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild12, styles.feedbackChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text style={[styles.didYouEncounterContainer, styles.howTypo2]}>
        <Text
          style={styles.didYouEncounter}
        >{`6. Did you encounter any issues during the loan 
disbursement process?

`}</Text>
        <Text
          style={styles.yesPleaseSpecify}
        >{`      Yes (please specify)                                            
`}</Text>
      </Text>
      <Image
        style={[styles.feedbackChild13, styles.noPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild14, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Text style={[styles.no, styles.noPosition]}>No</Text>
      <Text
        style={[styles.satisfiedNeutralDissatisfied3, styles.satisfiedTypo]}
      >{`           Satisfied                                   Neutral                                           Dissatisfied    
`}</Text>
      <Image
        style={[styles.feedbackChild15, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild16, styles.feedbackChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild17, styles.feedbackChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild18, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild19, styles.feedbackChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-86.png")}
      />
      <Image
        style={[styles.feedbackChild20, styles.feedbackChildPosition]}
        contentFit="cover"
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
          contentFit="cover"
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
        style={[styles.howReasonableDo, styles.howTypo2]}
      >{`4. How reasonable do you find the loan interest 
rates?`}</Text>
      <Text
        style={[styles.howWouldYou, styles.howTypo]}
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
      <Text
        style={[styles.likelyNeutralUnlikely, styles.howTypo2]}
      >{`Likely                                        Neutral                                            Unlikely
`}</Text>
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  satisfiedTypo: {
    width: 352,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  feedbackChildLayout: {
    height: 10,
    width: 10,
  },
  feedbackChild1Position: {
    top: 195,
    position: "absolute",
  },
  feedbackChildPosition4: {
    top: 198,
    height: 10,
    width: 10,
    position: "absolute",
  },
  feedbackChild4Position: {
    top: 274,
    position: "absolute",
  },
  feedbackChildPosition3: {
    top: 335,
    height: 10,
    width: 10,
    position: "absolute",
  },
  goodAveragePoorPosition: {
    top: 400,
    left: 9,
    position: "absolute",
  },
  feedbackChildPosition2: {
    top: 403,
    height: 10,
    width: 10,
    position: "absolute",
  },
  noPosition: {
    top: 478,
    position: "absolute",
  },
  feedbackChildPosition1: {
    top: 553,
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
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  submitPosition: {
    top: 777,
    position: "absolute",
  },
  howTypo1: {
    height: 36,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  howTypo: {
    left: 11,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  whatImprovementsWouldTypo: {
    height: 26,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
    fontSize: FontSize.size_smi,
    left: 13,
    color: Color.miscellaneousFloatingTabTextUnselected,
    position: "absolute",
  },
  satisfiedNeutralDissatisfied: {
    top: 120,
    left: 4,
    width: 352,
    position: "absolute",
  },
  feedbackItem: {
    left: 129,
    top: 122,
    width: 10,
    position: "absolute",
  },
  feedbackInner: {
    left: 261,
    top: 122,
    width: 10,
    position: "absolute",
  },
  ellipseIcon: {
    left: 8,
    top: 122,
    width: 10,
    position: "absolute",
  },
  satisfiedNeutralDissatisfied1: {
    width: 352,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 4,
  },
  feedbackChild1: {
    left: 10,
    height: 10,
    width: 10,
  },
  feedbackChild2: {
    left: 129,
  },
  feedbackChild3: {
    left: 261,
  },
  satisfiedNeutralDissatisfied2: {
    width: 352,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 4,
  },
  feedbackChild4: {
    left: 10,
    height: 10,
    width: 10,
  },
  feedbackChild5: {
    top: 279,
    left: 129,
    position: "absolute",
  },
  feedbackChild6: {
    top: 275,
    left: 261,
    position: "absolute",
  },
  reasonableNeutralUnreasonabl: {
    top: 334,
    left: 0,
    position: "absolute",
  },
  feedbackChild7: {
    left: 8,
  },
  feedbackChild8: {
    left: 129,
  },
  feedbackChild9: {
    left: 256,
  },
  goodAveragePoor: {
    width: 347,
    height: 11,
    left: 9,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  feedbackChild10: {
    left: 9,
    height: 10,
    width: 10,
  },
  feedbackChild11: {
    left: 129,
  },
  feedbackChild12: {
    left: 261,
  },
  didYouEncounter: {
    fontSize: FontSize.size_smi,
  },
  yesPleaseSpecify: {
    fontSize: FontSize.size_3xs,
  },
  didYouEncounterContainer: {
    top: 420,
    width: 318,
    height: 82,
    left: 10,
    position: "absolute",
  },
  feedbackChild13: {
    left: 9,
    height: 10,
    width: 10,
  },
  feedbackChild14: {
    top: 479,
    left: 170,
    position: "absolute",
  },
  no: {
    left: 186,
    width: 30,
    height: 9,
    fontSize: FontSize.size_3xs,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  satisfiedNeutralDissatisfied3: {
    top: 552,
    left: -5,
    position: "absolute",
  },
  feedbackChild15: {
    top: 554,
    left: 9,
    position: "absolute",
  },
  feedbackChild16: {
    left: 124,
  },
  feedbackChild17: {
    left: 254,
  },
  feedbackChild18: {
    top: 617,
    left: 14,
    position: "absolute",
  },
  feedbackChild19: {
    left: 134,
  },
  feedbackChild20: {
    left: 266,
  },
  rectangleView: {
    top: 686,
    left: 12,
  },
  feedbackChild21: {
    top: 743,
    left: 10,
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
    top: 149,
    width: 392,
    left: 12,
  },
  howDoYou: {
    top: 221,
    width: 484,
    left: 14,
  },
  howReasonableDo: {
    top: 298,
    width: 394,
    height: 29,
    fontSize: FontSize.size_smi,
    left: 13,
    color: Color.miscellaneousFloatingTabTextUnselected,
    position: "absolute",
  },
  howWouldYou: {
    top: 352,
    width: 477,
    height: 41,
  },
  howSatisfiedAre1: {
    top: 502,
    width: 405,
    height: 29,
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
  likelyNeutralUnlikely: {
    top: 616,
    left: 35,
    width: 400,
    height: 19,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  feedback: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Feedback;
