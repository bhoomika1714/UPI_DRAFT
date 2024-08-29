import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const TandC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tandc}>
      <View style={styles.tandcChild} />
      <Text style={[styles.iAccept, styles.iAcceptFlexBox]}>[ ] I accept</Text>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Register")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-225.png")}
        />
      </Pressable>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <Text
        style={[styles.eligibilityapplicantsMustBeContainer, styles.nextTypo]}
      >
        <Text style={styles.eligibility}>{`

Eligibility:`}</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`Applicants must be 18-65 years old with
a stable income. A minimum credit score is required.
`}</Text>
        <Text style={styles.eligibility}>Loan Amount:</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`:Subject to bank's discretion, within
the prescribed limits.
`}</Text>
        <Text style={styles.eligibility}>Interest Rates:</Text>
        <Text
          style={styles.applicantsMustBe}
        >{` Fixed or floating rates, subject to
change as per market conditions.
`}</Text>
        <Text style={styles.eligibility}>Repayment</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`:EMI based on loan amount, tenure, 
and interest. Prepayment allowed with applicable charges.
`}</Text>
        <Text style={styles.eligibility}>Fees</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`:Non-refundable processing fee applies.
Additional charges may include late fees,
prepayment penalties, etc.
`}</Text>
        <Text style={styles.eligibility}>Documentation:</Text>
        <Text
          style={styles.applicantsMustBe}
        >{` Required valid ID, address, and 
income proof. Loan approval is based on document verification.
`}</Text>
        <Text style={styles.eligibility}>Collateral:</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`Security may be required for certain 
loans. A guarantor might be needed.
`}</Text>
        <Text style={styles.eligibility}>Disbursement:</Text>
        <Text style={styles.applicantsMustBe}>{` Loan amount credited after
approval, within a set time frame.
`}</Text>
        <Text style={styles.eligibility}>Default:</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`Non-repayment may lead to penalties,
legal action, and negative credit impact.
`}</Text>
        <Text style={styles.eligibility}>Cancellation:</Text>
        <Text
          style={styles.applicantsMustBe}
        >{` Loan application can be canceled 
within a specific period, with possible charges. Fees
paid are non-refundable.
`}</Text>
        <Text style={styles.eligibility}>Rights</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`: Bank can modify terms anytime with prior 
notice. Breach of terms can lead to loan 
termination.
`}</Text>
        <Text style={styles.eligibility}>Law:</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`Governed by local jurisdiction laws. Disputes 
resolved through arbitration or courts.
`}</Text>
        <Text style={styles.eligibility}>Consent</Text>
        <Text
          style={styles.applicantsMustBe}
        >{`:Applying for the loan means agreeing to
these terms and conditions, with consent for
electronic signatures.

`}</Text>
      </Text>
      <View style={styles.tandcItem} />
      <Text style={[styles.termsAndConditions, styles.iAcceptFlexBox]}>
        Terms and Conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iAcceptFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  nextTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  tandcChild: {
    marginLeft: -179,
    top: 96,
    left: "50%",
    backgroundColor: Color.colorSnow_400,
    width: 357,
    height: 660,
    position: "absolute",
  },
  iAccept: {
    fontSize: FontSize.size_sm,
    color: "#181616",
    width: 289,
    height: 39,
    fontFamily: FontFamily.poppinsRegular,
    left: 19,
    top: 773,
  },
  image1Icon: {
    top: 772,
    width: 15,
    height: 15,
    left: 19,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_8xs,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 238,
    width: 110,
    height: 21,
    top: 773,
    position: "absolute",
  },
  next: {
    left: 265,
    color: "#f5ebeb",
    width: 60,
    height: 12,
    fontFamily: FontFamily.poppinsRegular,
    top: 773,
  },
  eligibility: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  applicantsMustBe: {
    fontFamily: FontFamily.poppinsRegular,
  },
  eligibilityapplicantsMustBeContainer: {
    bottom: 31,
    left: 10,
    color: Color.miscellaneousFloatingTabTextUnselected,
    width: 382,
    height: 708,
  },
  tandcItem: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkcyan,
    width: 358,
    height: 61,
    position: "absolute",
  },
  termsAndConditions: {
    top: 16,
    left: 61,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: "#fcf4f4",
    width: 566,
    height: 45,
  },
  tandc: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TandC;
