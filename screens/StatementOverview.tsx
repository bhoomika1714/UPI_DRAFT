import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const StatementOverview = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.statementOverview, styles.iconLayout]}>
      <View style={[styles.statementOverviewChild, styles.statementPosition]} />
      <View style={[styles.statementOverviewItem, styles.statementPosition]} />
      <Text style={styles.statementRepresentation}>
        {" "}
        Statement Representation
      </Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left5.png")}
        />
      </Pressable>
      <View style={styles.statementOverviewInner} />
      <Text
        style={[
          styles.transactionReportMerchantContainer,
          styles.february2021Clr,
        ]}
      >
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
      <Text style={[styles.february2021, styles.february2021Clr]}>
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
  february2021Clr: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    position: "absolute",
  },
  statementOverviewChild: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    height: 738,
    top: 69,
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
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    left: 11,
    position: "absolute",
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
  statementOverviewInner: {
    left: -44,
    backgroundColor: Color.colorGray_100,
    width: 447,
    height: 750,
    top: 69,
    position: "absolute",
  },
  transactionReport: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  merchantNameXyzRetail: {
    fontFamily: FontFamily.interRegular,
  },
  transactionReportMerchantContainer: {
    top: 152,
    left: 13,
    fontSize: FontSize.size_sm,
    height: 667,
    width: 337,
  },
  february2021: {
    top: 100,
    width: 219,
    height: 21,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    left: 11,
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  statementOverview: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
  },
});

export default StatementOverview;
