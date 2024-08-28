import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DataAnalysis10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.dataAnalysis, styles.iconTransform]}>
      <View style={styles.dataAnalysisChild} />
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("DataAnalysis7")}
      >
        <Image
          style={[styles.icon, styles.iconTransform]}
          contentFit="cover"
          source={require("../assets/arrow-left4.png")}
        />
      </Pressable>
      <Text style={styles.analysis}>ANALYSIS</Text>
      <Image
        style={[styles.barChart2Icon, styles.iconTransform]}
        contentFit="cover"
        source={require("../assets/bar-chart2.png")}
      />
      <Image
        style={[styles.footerIcon, styles.iconTransform]}
        contentFit="cover"
        source={require("../assets/footer.png")}
      />
      <Image
        style={[styles.dataAnalysisItem, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line-18.png")}
      />
      <Image
        style={[styles.dataAnalysisInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line-18.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <View style={[styles.dataAnalysisChild1, styles.rectangleViewBg]} />
      <Text style={[styles.food, styles.foodTypo]}>Food :</Text>
      <Image
        style={styles.personIcon}
        contentFit="cover"
        source={require("../assets/person.png")}
      />
      <Text style={styles.kolapuriFlavors}>Kolapuri Flavors</Text>
      <Image
        style={[styles.g22Icon, styles.g22IconLayout]}
        contentFit="cover"
        source={require("../assets/g22.png")}
      />
      <Text style={[styles.paidOn8, styles.textFlexBox]}>
        Paid on 8 aug,01:20 PM
      </Text>
      <Text style={[styles.paidOn3, styles.paidTypo]}>
        Paid on 3 aug,01:20 PM
      </Text>
      <Text style={[styles.text, styles.textTypo1]}>-</Text>
      <Image
        style={[styles.vectorIcon, styles.g22IconLayout]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.image11Icon, styles.shoppingPosition]}
        contentFit="cover"
        source={require("../assets/image-111.png")}
      />
      <Image
        style={[styles.lineIcon, styles.dataChildLayout]}
        contentFit="cover"
        source={require("../assets/line-181.png")}
      />
      <Image
        style={[styles.dataAnalysisChild2, styles.dataChildLayout]}
        contentFit="cover"
        source={require("../assets/line-181.png")}
      />
      <Text style={[styles.zomatoLtd, styles.zomatoLtdTypo]}>Zomato ltd</Text>
      <Text style={styles.text1}>-</Text>
      <Text style={[styles.shopping, styles.shoppingPosition]}>Shopping:</Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Text
        style={[styles.amazonService, styles.zomatoLtdTypo]}
      >{`Amazon service `}</Text>
      <Text style={[styles.paidOn31, styles.paidTypo]}>
        Paid on 31 jul,01:20 PM
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.g22IconLayout]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Text style={[styles.text2, styles.textTypo1]}>-</Text>
      <Image
        style={[styles.dataAnalysisChild3, styles.dataChildLayout]}
        contentFit="cover"
        source={require("../assets/line-17.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <Text style={[styles.paidOn28, styles.paidTypo]}>
        Paid on 28 jul,08:31 PM
      </Text>
      <Text style={[styles.text3, styles.textTypo1]}>-</Text>
      <Image
        style={[styles.g22Icon1, styles.g22IconLayout]}
        contentFit="cover"
        source={require("../assets/g22.png")}
      />
      <Text style={[styles.seeAll, styles.seeTypo]}>See All....</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-130.png")}
      />
      <Text style={[styles.recentSpending, styles.textFlexBox]}>
        Recent spending
      </Text>
      <Text style={[styles.seeAll1, styles.seeTypo]}>See All....</Text>
      <Image
        style={[styles.dataAnalysisChild4, styles.dataChildLayout]}
        contentFit="cover"
        source={require("../assets/line-16.png")}
      />
      <Text style={[styles.text4, styles.textTypo]}>₹180.8</Text>
      <Text style={[styles.from, styles.fromTypo]}>From</Text>
      <Text style={[styles.from1, styles.fromTypo]}>From</Text>
      <Text style={[styles.text5, styles.textTypo]}>₹450.1</Text>
      <Text style={[styles.text6, styles.textTypo]}>₹345.6</Text>
      <Text style={[styles.text7, styles.textTypo]}>₹950.2</Text>
      <Text style={[styles.from2, styles.fromTypo]}>From</Text>
      <Text style={[styles.from3, styles.fromTypo]}>From</Text>
      <Image
        style={styles.groupIcon1}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconTransform: {
    overflow: "hidden",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  iconLayout: {
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
  foodTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 52,
    textAlign: "center",
  },
  g22IconLayout: {
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
  textFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
  },
  paidTypo: {
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  textTypo1: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkslategray_100,
    lineHeight: 52,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  shoppingPosition: {
    left: 19,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  dataChildLayout: {
    right: "3.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "0.13%",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  zomatoLtdTypo: {
    height: "7.25%",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 52,
    textAlign: "center",
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: "50%",
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
    lineHeight: 52,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  fromTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkcyan,
    lineHeight: 52,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  dataAnalysisChild: {
    top: 2,
    left: 0,
    backgroundColor: Color.colorDarkcyan,
    width: 360,
    height: 109,
    position: "absolute",
  },
  icon: {
    height: "100%",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    width: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: 11,
    top: 66,
    width: 40,
    height: 29,
    position: "absolute",
  },
  analysis: {
    top: 59,
    left: 51,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.schemesOnPrimary,
    width: 160,
    height: 28,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  barChart2Icon: {
    top: 41,
    left: 281,
    width: 50,
    height: 50,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  footerIcon: {
    top: 722,
    left: -1,
    width: 368,
    height: 77,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  dataAnalysisItem: {
    top: "83.43%",
    right: "5.83%",
    bottom: "16.45%",
    left: "3.89%",
    maxWidth: "100%",
    width: "90.28%",
    height: "0.13%",
  },
  dataAnalysisInner: {
    top: "82.3%",
    right: "5%",
    bottom: "17.58%",
    left: "4.72%",
    width: "90.28%",
    height: "0.13%",
    maxWidth: "100%",
  },
  rectangleView: {
    top: 188,
    left: 352,
    width: 345,
    height: 219,
  },
  dataAnalysisChild1: {
    top: 437,
    left: 351,
    width: 342,
    height: 237,
  },
  food: {
    top: 178,
    left: 20,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 52,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  personIcon: {
    top: 311,
    left: 29,
    width: 39,
    height: 35,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  kolapuriFlavors: {
    marginLeft: -77.4,
    top: 297,
    fontSize: FontSize.size_base,
    left: "50%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 52,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  g22Icon: {
    top: "43.93%",
    bottom: "53.95%",
  },
  paidOn8: {
    width: "42.5%",
    top: "29.73%",
    left: "24.42%",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 52,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  paidOn3: {
    top: "39.98%",
    left: "27.08%",
  },
  text: {
    top: "26.58%",
    left: "75.28%",
  },
  vectorIcon: {
    top: "33.8%",
    bottom: "64.08%",
  },
  image11Icon: {
    top: 232,
    width: 57,
    height: 36,
  },
  lineIcon: {
    top: "37.05%",
    bottom: "62.83%",
    width: "92.22%",
    right: "3.89%",
    left: "3.89%",
  },
  dataAnalysisChild2: {
    top: "46.8%",
    bottom: "53.08%",
    width: "92.22%",
    right: "3.89%",
    left: "3.89%",
  },
  zomatoLtd: {
    marginLeft: -111,
    top: "26.09%",
    width: 191,
    left: "50%",
  },
  text1: {
    left: "74.06%",
    top: "37.2%",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray_100,
    lineHeight: 52,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  shopping: {
    top: 431,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 52,
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  groupIcon: {
    height: "3.63%",
    width: "19.44%",
    top: "61.05%",
    right: "74.17%",
    bottom: "35.33%",
    left: "6.39%",
  },
  amazonService: {
    width: "53.06%",
    top: "57.84%",
    left: "23.31%",
  },
  paidOn31: {
    top: "61.48%",
    left: "29.64%",
  },
  vectorIcon1: {
    top: "66.05%",
    bottom: "31.83%",
  },
  text2: {
    width: "1.11%",
    top: "58.7%",
    left: "74.69%",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
  },
  dataAnalysisChild3: {
    width: "91.11%",
    top: "69.3%",
    bottom: "30.58%",
    left: "5%",
  },
  vectorIcon2: {
    height: "4.38%",
    width: "9.72%",
    top: "72.43%",
    right: "81.39%",
    bottom: "23.2%",
    left: "8.89%",
  },
  paidOn28: {
    top: "73.6%",
    left: "27.58%",
  },
  text3: {
    width: "3.89%",
    left: "73.17%",
    top: "70.7%",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
  },
  g22Icon1: {
    top: "77.68%",
    bottom: "20.2%",
  },
  seeAll: {
    marginLeft: -34.7,
    top: 375,
  },
  rectangleIcon: {
    top: 120,
    left: 10,
    width: 343,
    height: 48,
    borderRadius: Border.br_mini,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  recentSpending: {
    marginLeft: -123.6,
    top: 129,
    fontSize: FontSize.size_5xl,
    width: 250,
    height: 40,
    left: "50%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 52,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  seeAll1: {
    marginLeft: -35.9,
    top: 644,
  },
  dataAnalysisChild4: {
    width: "90.83%",
    top: "80.43%",
    bottom: "19.45%",
    left: "5.28%",
  },
  text4: {
    left: "77.39%",
    top: "37.2%",
  },
  from: {
    width: "11.39%",
    top: "41.83%",
    left: "76.25%",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
  },
  from1: {
    top: "31.7%",
    left: "76.33%",
  },
  text5: {
    top: "26.95%",
    left: "77.5%",
  },
  text6: {
    top: "58.83%",
    left: "77.17%",
  },
  text7: {
    left: "77.06%",
    top: "70.7%",
  },
  from2: {
    top: "64.08%",
    left: "76.03%",
  },
  from3: {
    top: "75.58%",
    left: "75.89%",
  },
  groupIcon1: {
    width: "17.78%",
    top: "72.3%",
    right: "42.78%",
    bottom: "25.58%",
    left: "39.44%",
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
  dataAnalysis: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    width: "100%",
    overflow: "hidden",
  },
});

export default DataAnalysis10;
