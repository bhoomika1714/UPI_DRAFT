import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const StatementOverview = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.statementOverview, styles.iconLayout]}>
      <View style={[styles.statementOverviewChild, styles.statementPosition]} />
      <Text style={styles.transactionReportMerchantContainer}>
        <Text style={styles.transactionReport}>{`Transaction Report:
`}</Text>
        <Text
          style={styles.merchantNameXyzRetail}
        >{`Merchant Name: XYZ Retail Store
Date: 2023-02-20
Time: 14:45:00 - 15:10:00
`}</Text>
        <Text style={styles.transactionReport}>{`Transaction Details:
`}</Text>
        <Text style={styles.merchantNameXyzRetail}>{`
- Transaction ID,Transaction Type,Amount,Card Type,Card Number,Status:


- TRX001,Card Payment, 500.00, Visa, **** **** **** 1234,Successful
- TRX002,Fund Transfer, 200.00, Amex, **** **** **** 2345,Successful
- TRX003,Card Payment, 800.00, Mastercard, **** **** **** 5678,Successful
- TRX004,Cloth Purchase, 300.00, Amex, **** **** **** 9012, Successful
- TRX005,Grocery Purchase, 400.00, Visa, **** **** **** 1234,Successful
  
  
  
Transaction Summary:
Total Number of Transactions: 5
Total Amount: 2,300.00
Successful Transactions: 5
Failed Transactions: 0
Transaction Timeline:
14:45:00 - TRX001: Card Payment of 500.00 using Visa card **** **** **** 1234
14:50:00 - TRX002: Fund Transfer of 200.00
14:55:00 - TRX003: Card Payment of 800.00 using Mastercard card **** **** **** 5678
15:00:00 - TRX004: Cloth Purchase of 300.00 using Amex card **** **** **** 9012
15:05:00 - TRX005: Grocery Purchase of 400.00 using Visa card **** **** **** 1234`}</Text>
      </Text>
      <View style={[styles.statementOverviewItem, styles.statementPosition]} />
      <Text style={[styles.statementRepresentation, styles.february2021Typo]}>
        {" "}
        Statement Representation
      </Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left17.png")}
        />
      </Pressable>
      <Text style={[styles.february2021, styles.february2021Typo]}>
        FEBRUARY 2021
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  statementPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  february2021Typo: {
    fontSize: FontSize.size_xl,
    left: 11,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  statementOverviewChild: {
    backgroundColor: Color.colorGainsboro_200,
    height: 738,
    top: 69,
    left: 0,
  },
  transactionReport: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  merchantNameXyzRetail: {
    fontFamily: FontFamily.interRegular,
  },
  transactionReportMerchantContainer: {
    top: 103,
    left: 19,
    fontSize: FontSize.size_sm,
    height: 667,
    width: 337,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    position: "absolute",
  },
  statementOverviewItem: {
    top: 0,
    backgroundColor: Color.colorDarkcyan,
    height: 69,
  },
  statementRepresentation: {
    top: 26,
    color: Color.schemesOnPrimary,
    height: 43,
    width: 337,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrowLeft: {
    left: "-1.67%",
    top: "-0.62%",
    right: "87.78%",
    bottom: "94.38%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  february2021: {
    width: 219,
    height: 21,
    color: Color.miscellaneousFloatingTabTextUnselected,
    left: 11,
    top: 69,
  },
  statementOverview: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
  },
});

export default StatementOverview;
