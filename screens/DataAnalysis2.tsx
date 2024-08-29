import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const DataAnalysis2 = () => {
  return (
    <View style={styles.dataAnalysis3}>
      <Image
        style={styles.footerIcon}
        resizeMode="cover"
        source={require("../assets/footer.png")}
      />
      <Image
        style={styles.dataAnalysis3Child}
        resizeMode="cover"
        source={require("../assets/rectangle-2011.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.dataAnalysis3Item, styles.dataLayout]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <Text style={[styles.paidOn28, styles.paidTypo]}>
        Paid on 28 jul,08:31 PM
      </Text>
      <Text style={styles.text}>-</Text>
      <Image
        style={[styles.g22Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/g22.png")}
      />
      <View style={[styles.dataAnalysis3Inner, styles.rectangleViewBg]} />
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Text style={styles.medicine}>Medicine:</Text>
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Text style={[styles.paidOn31, styles.paidTypo]}>
        Paid on 31 jul, 2:36 PM
      </Text>
      <Text style={[styles.apolloPharmacy, styles.medplusTypo]}>
        APOLLO PHARMACY
      </Text>
      <Text style={[styles.paidOn25, styles.paidTypo]}>
        Paid on 25 jul, 7:56 PM
      </Text>
      <Text style={[styles.medplus, styles.medplusTypo]}>Medplus</Text>
      <Text style={[styles.text1, styles.paidTypo]}>-</Text>
      <Text style={styles.text2}>-</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.image9Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.dataAnalysis3Child1, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Text style={[styles.others, styles.othersFlexBox]}>Others :</Text>
      <Image
        style={styles.dataAnalysis3Child2}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <Image
        style={[styles.dataAnalysis3Child3, styles.dataLayout]}
        resizeMode="cover"
        source={require("../assets/line-14.png")}
      />
      <Image
        style={[styles.g12Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/g12.png")}
      />
      <Text style={[styles.jioPrepaidRecharges, styles.othersFlexBox]}>
        Jio Prepaid Recharges
      </Text>
      <Text style={[styles.hescomLtd, styles.medplusTypo]}>HESCOM Ltd</Text>
      <Text style={[styles.paidOn5, styles.paidTypo]}>
        Paid on 5 Aug, 11:36 PM
      </Text>
      <Text style={[styles.paidOn15, styles.paidTypo]}>
        Paid on 15 jul, 11:36 PM
      </Text>
      <Text style={[styles.text3, styles.textTypo1]}>-</Text>
      <Text style={[styles.text4, styles.textTypo1]}>-</Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.image10Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <Text style={[styles.seeAll, styles.seeTypo]}>See All....</Text>
      <Text style={[styles.seeAll1, styles.seeTypo]}>See All....</Text>
      <Text style={[styles.text5, styles.textTypo]}>₹950.2</Text>
      <Text style={[styles.text6, styles.textTypo]}>₹589.8</Text>
      <Text style={[styles.text7, styles.textTypo]}>₹306.1</Text>
      <Text style={[styles.text8, styles.textTypo]}>₹300.8</Text>
      <Text style={[styles.text9, styles.textTypo]}>₹1546.1</Text>
      <Text style={[styles.from, styles.fromTypo]}>From</Text>
      <Text style={[styles.from1, styles.fromTypo]}>From</Text>
      <Text style={[styles.from2, styles.fromTypo]}>From</Text>
      <Text style={[styles.from3, styles.fromTypo]}>From</Text>
      <Text style={[styles.from4, styles.fromTypo]}>From</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxWidth: "100%",
    left: "6.94%",
    right: "83.33%",
    width: "9.72%",
    height: "4.38%",
    maxHeight: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  dataLayout: {
    width: "91.94%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  paidTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  iconLayout1: {
    left: "89.17%",
    right: "6.11%",
    width: "4.72%",
    height: "2.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  rectangleViewBg: {
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  medplusTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  lineIconLayout: {
    left: "4.17%",
    width: "92.22%",
    right: "3.61%",
    height: "0.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  iconLayout: {
    width: 44,
    height: 35,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  othersFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  textTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  seeTypo: {
    textAlign: "left",
    color: Color.miscellaneousAlertMenuActionSheetSeparators,
    left: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  fromTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorDarkcyan,
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  vectorIconLayout: {
    height: 15,
    width: 15,
    left: 321,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  footerIcon: {
    top: 723,
    left: -4,
    width: 368,
    height: 77,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  dataAnalysis3Child: {
    top: 52,
    left: 8,
    width: 346,
    height: 103,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  vectorIcon: {
    bottom: "87.2%",
    maxHeight: "100%",
    top: "8.43%",
    left: "6.94%",
    right: "83.33%",
    width: "9.72%",
    height: "4.38%",
  },
  dataAnalysis3Item: {
    height: "0.14%",
    top: "15.55%",
    right: "4.72%",
    bottom: "84.31%",
    left: "3.33%",
    maxHeight: "100%",
  },
  groupIcon: {
    width: "17.78%",
    right: "44.72%",
    bottom: "89.45%",
    left: "37.5%",
    height: "2.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "8.43%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  paidOn28: {
    top: "9.23%",
    left: "27.42%",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
  },
  text: {
    top: "6.58%",
    left: "75.5%",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  g22Icon: {
    top: "12.3%",
    bottom: "85.58%",
  },
  dataAnalysis3Inner: {
    top: 179,
    left: 7,
    width: 345,
    height: 250,
  },
  rectangleView: {
    top: 460,
    left: 6,
    width: 342,
    height: 232,
  },
  medicine: {
    top: 180,
    left: 20,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  image8Icon: {
    top: 232,
    left: 23,
    width: 37,
    height: 35,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  paidOn31: {
    top: "30.35%",
    left: "27.75%",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
  },
  apolloPharmacy: {
    top: "27.23%",
    left: "25.28%",
    color: Color.colorDarkslategray_100,
  },
  paidOn25: {
    top: "41.6%",
    left: "25.14%",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
  },
  medplus: {
    top: "38.61%",
    left: "35.44%",
    color: Color.colorDarkslategray_100,
  },
  text1: {
    left: "74.17%",
    top: "27.33%",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
  },
  text2: {
    top: "38.58%",
    left: "74.61%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  lineIcon: {
    top: "38.3%",
    bottom: "61.58%",
  },
  image9Icon: {
    top: 325,
    left: 21,
  },
  dataAnalysis3Child1: {
    top: "49.93%",
    bottom: "49.95%",
  },
  others: {
    top: 452,
    left: 19,
    width: 96,
    fontSize: FontSize.size_xl,
  },
  dataAnalysis3Child2: {
    width: "91.39%",
    top: "71.93%",
    bottom: "27.95%",
    left: "5%",
    right: "3.61%",
    height: "0.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  dataAnalysis3Child3: {
    top: "82.93%",
    right: "3.33%",
    left: "4.72%",
    height: 0,
  },
  g12Icon: {
    top: "63.43%",
    bottom: "32.2%",
    maxHeight: "100%",
    left: "6.94%",
    right: "83.33%",
    width: "9.72%",
    height: "4.38%",
  },
  jioPrepaidRecharges: {
    width: "48.89%",
    top: "61.71%",
    left: "21.31%",
    fontSize: FontSize.size_sm,
  },
  hescomLtd: {
    top: "72.11%",
    left: "30.94%",
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  paidOn5: {
    top: "64.22%",
    left: "24.89%",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
  },
  paidOn15: {
    top: "75.35%",
    left: "24.78%",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
  },
  text3: {
    width: "3.06%",
    top: "61.7%",
    left: "74.08%",
  },
  text4: {
    width: "2.22%",
    top: "71.95%",
    left: "74.28%",
  },
  vectorIcon1: {
    top: "68.55%",
    bottom: "29.33%",
  },
  vectorIcon2: {
    top: "78.93%",
    bottom: "18.95%",
  },
  image10Icon: {
    top: 596,
    left: 18,
  },
  seeAll: {
    marginLeft: -34.8,
    top: 400,
  },
  seeAll1: {
    marginLeft: -33.6,
    top: 126,
  },
  text5: {
    top: "6.7%",
    left: "77.72%",
  },
  text6: {
    left: "77.5%",
    top: "27.33%",
  },
  text7: {
    top: "38.7%",
    left: "77.39%",
  },
  text8: {
    top: "61.83%",
    left: "77.14%",
  },
  text9: {
    top: "72.08%",
    left: "77.06%",
  },
  from: {
    top: "10.2%",
    left: "76.56%",
  },
  from1: {
    top: "32.7%",
    left: "76.33%",
  },
  from2: {
    top: "44.33%",
    left: "76.22%",
  },
  from3: {
    top: "66.45%",
    left: "76%",
  },
  from4: {
    top: "76.95%",
    left: "75.89%",
  },
  vectorIcon3: {
    top: 279,
  },
  vectorIcon4: {
    top: 372,
  },
  dataAnalysis3: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
});

export default DataAnalysis2;
