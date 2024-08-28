import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TandC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.tandc}>
      <View style={styles.tandcChild} />
      <Text style={[styles.iAccept, styles.nextTypo]}>[ ] I accept</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Register")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-225.png")}
        />
      </Pressable>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <Text
        style={[
          styles.eligibilityapplicantsMustBeContainer,
          styles.termsAndConditionsClr,
        ]}
      >
        <Text style={styles.eligibility}>Eligibility:</Text>
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
      <Text style={[styles.termsAndConditions, styles.termsAndConditionsClr]}>
        Terms and Conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    top: 754,
    position: "absolute",
  },
  termsAndConditionsClr: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    position: "absolute",
  },
  tandcChild: {
    marginLeft: -180,
    top: 37,
    left: "50%",
    backgroundColor: Color.colorGainsboro_200,
    width: 357,
    height: 700,
    position: "absolute",
  },
  iAccept: {
    fontSize: FontSize.size_sm,
    color: "#181616",
    width: 289,
    height: 39,
    left: 4,
  },
  image1Icon: {
    width: 15,
    height: 15,
    left: 4,
    top: 754,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_8xs,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 234,
    top: 752,
    width: 110,
    height: 21,
    position: "absolute",
  },
  next: {
    left: 268,
    color: "#f5ebeb",
    width: 60,
    height: 12,
    fontSize: FontSize.size_smi,
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
    width: 382,
    height: 708,
    fontSize: FontSize.size_smi,
  },
  termsAndConditions: {
    top: 5,
    left: 50,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    width: 566,
    height: 45,
  },
  tandc: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TandC;
