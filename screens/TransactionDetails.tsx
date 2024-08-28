import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Gap,
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../GlobalStyles";

const TransactionDetails = () => {
  return (
    <View style={styles.transactionDetails}>
      <View style={[styles.successfulPayment, styles.statusBarSpaceBlock]}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <View style={styles.iconSuccess}>
            <View style={styles.icon}>
              <Image
                style={styles.tickSquareIcon}
                contentFit="cover"
                source={require("../assets/ticksquare.png")}
              />
            </View>
          </View>
          <View style={styles.headerFlexBox}>
            <Text style={[styles.title, styles.titleClr]}>
              Successful Payment
            </Text>
            <Text style={[styles.description, styles.labelTypo2]}>
              <Text style={styles.descriptionTxt}>
                <Text style={styles.transferOf}>{`Transfer of `}</Text>
                <Text style={styles.text}>$1789</Text>
                <Text style={styles.transferOf}>{` To Disha Mehta 
Was Successful`}</Text>
              </Text>
            </Text>
          </View>
        </View>
        <View style={[styles.largeInfo, styles.largeInfoSpaceBlock]}>
          <View style={styles.recipientDetails}>
            <Text style={[styles.label, styles.labelTypo]}>
              recipient Details
            </Text>
            <View style={styles.infoCardName}>
              <Text style={[styles.name, styles.nameTypo]}>Disha Mehta</Text>
              <View style={styles.infoCard}>
                <Text style={[styles.visa, styles.labelTypo]}>Visa</Text>
                <Image
                  style={styles.dotsIcon}
                  contentFit="cover"
                  source={require("../assets/dots.png")}
                />
                <Text style={[styles.visa, styles.labelTypo]}>1234</Text>
              </View>
            </View>
          </View>
          <View style={styles.recipientDetails}>
            <Text style={[styles.label, styles.labelTypo]}>
              Transaction Type
            </Text>
            <Text style={[styles.name, styles.nameTypo]}>Transfer</Text>
          </View>
          <View style={styles.recipientDetails}>
            <Text style={[styles.label, styles.labelTypo]}>
              Transaction Code
            </Text>
            <Text style={[styles.name, styles.nameTypo]}>ABCD123456</Text>
          </View>
          <View style={styles.recipientDetails}>
            <Text style={[styles.label, styles.labelTypo]}>
              Transaction Date
            </Text>
            <Text style={[styles.name, styles.nameTypo]}>Nov 17 , 09:25</Text>
          </View>
          <View style={styles.recipientDetails}>
            <Text style={[styles.label, styles.labelTypo]}>Amount</Text>
            <Text style={styles.nameTypo}>
              <Text style={styles.text1}>₹ 1,789.</Text>
              <Text style={styles.text2}>00</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.buttonSend, styles.largeInfoSpaceBlock]}>
          <Text style={[styles.label5, styles.labelTypo1]}>continue</Text>
        </View>
        <Text style={[styles.label5, styles.labelTypo1]}>continue</Text>
      </View>
      <View style={[styles.statusBar, styles.title1Position]}>
        <View style={[styles.titleWrapper, styles.label7Position]}>
          <View style={[styles.title1, styles.titleLayout]}>
            <Text style={[styles.label7, styles.label7Position]}>
              Transaction Details
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarSpaceBlock: {
    padding: Padding.p_5xl,
    right: 0,
  },
  headerFlexBox: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleClr: {
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_xl,
  },
  labelTypo2: {
    display: "flex",
    fontSize: FontSize.size_sm,
    alignItems: "center",
  },
  largeInfoSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
  },
  labelTypo: {
    textAlign: "left",
    fontWeight: "500",
  },
  nameTypo: {
    color: Color.blackWhiteGray100,
    width: 115,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  labelTypo1: {
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratMedium,
  },
  title1Position: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  label7Position: {
    zIndex: 0,
    position: "absolute",
  },
  titleLayout: {
    height: 36,
    width: 206,
  },
  tickSquareIcon: {
    width: 71,
    height: 71,
  },
  icon: {
    borderRadius: 14,
    backgroundColor: "rgba(52, 193, 87, 0.1)",
    flexDirection: "row",
  },
  iconSuccess: {
    borderRadius: 29,
    backgroundColor: "rgba(52, 193, 87, 0.04)",
    padding: Padding.p_mini,
    flexDirection: "row",
  },
  title: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "center",
    alignSelf: "stretch",
  },
  transferOf: {
    color: Color.blackWhiteGray60,
  },
  text: {
    color: "#a87a30",
  },
  descriptionTxt: {
    width: "100%",
  },
  description: {
    width: 295,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  header: {
    justifyContent: "flex-end",
  },
  label: {
    width: 128,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratMedium,
    color: Color.blackWhiteGray60,
    display: "flex",
    fontSize: FontSize.size_sm,
    alignItems: "center",
  },
  name: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  visa: {
    fontSize: FontSize.size_xs,
    color: Color.blackWhiteGray70,
    fontFamily: FontFamily.montserratMedium,
  },
  dotsIcon: {
    width: 18,
    height: 4,
  },
  infoCard: {
    gap: Gap.gap_2xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  infoCardName: {
    gap: Gap.gap_3xs,
    width: 115,
    justifyContent: "center",
  },
  recipientDetails: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  text2: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  largeInfo: {
    borderRadius: Border.br_lg,
    backgroundColor: "rgba(247, 249, 251, 0.49)",
    paddingVertical: 32,
    gap: 48,
    alignSelf: "stretch",
  },
  label5: {
    fontSize: FontSize.size_lg,
    color: Color.schemesOnPrimary,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonSend: {
    borderRadius: Border.br_base,
    width: 327,
    height: 54,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorTeal_100,
    flexDirection: "row",
    alignItems: "center",
  },
  successfulPayment: {
    marginTop: -294,
    top: "50%",
    borderRadius: 24,
    height: 700,
    gap: Gap.gap_5xl,
    justifyContent: "flex-end",
    alignItems: "center",
    left: 0,
    position: "absolute",
    padding: Padding.p_5xl,
    right: 0,
    backgroundColor: Color.schemesOnPrimary,
  },
  label7: {
    top: 12,
    left: -12,
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    fontWeight: "500",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_xl,
  },
  title1: {
    borderRadius: Border.br_5xs,
    padding: Padding.p_7xs,
    top: 0,
    left: 0,
    position: "absolute",
    justifyContent: "center",
    width: 206,
    flexDirection: "row",
    alignItems: "center",
  },
  titleWrapper: {
    top: 24,
    left: 114,
    height: 36,
    width: 206,
  },
  statusBar: {
    height: 84,
    backgroundColor: Color.colorTeal_100,
    padding: Padding.p_5xl,
    right: 0,
    top: 0,
  },
  transactionDetails: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 44.8,
    elevation: 44.8,
    shadowOpacity: 1,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.schemesOnPrimary,
  },
});

export default TransactionDetails;
