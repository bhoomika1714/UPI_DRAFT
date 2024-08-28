import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const History1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.history}>
      <Image
        style={styles.historyChild}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame16.png")}
        />
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.frame3} />
          <View style={styles.frame4} />
          <View style={styles.frame4} />
          <View style={styles.frame6}>
            <View style={styles.frame7}>
              <View style={styles.frameChild} />
              <View style={styles.frame8}>
                <View style={styles.frame9}>
                  <Image
                    style={styles.image12Icon}
                    contentFit="cover"
                    source={require("../assets/image-12.png")}
                  />
                </View>
                <View style={styles.frame10}>
                  <Text style={styles.text}>₹450.1</Text>
                  <View style={styles.frame11}>
                    <Image
                      style={styles.frameIcon1}
                      contentFit="cover"
                      source={require("../assets/frame17.png")}
                    />
                    <Text style={styles.from}>From</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame12}>
              <View style={styles.frameItem} />
              <View style={styles.frame13}>
                <View style={styles.frame14}>
                  <Image
                    style={styles.frameIcon2}
                    contentFit="cover"
                    source={require("../assets/frame18.png")}
                  />
                  <View style={styles.frame15}>
                    <View style={styles.frame16}>
                      <View style={styles.frame17}>
                        <Text style={styles.jioPrepaidRecharges}>
                          Jio Prepaid Recharges
                        </Text>
                      </View>
                      <View style={styles.frame18}>
                        <Text style={styles.paidOn5}>
                          Paid on 5 Aug, 11:36 PM
                        </Text>
                      </View>
                    </View>
                    <View style={styles.frame19}>
                      <Image
                        style={styles.frameIcon3}
                        contentFit="cover"
                        source={require("../assets/frame19.png")}
                      />
                      <View style={styles.frame20}>
                        <Text style={styles.from1}>From</Text>
                        <View style={styles.frame21}>
                          <Text style={styles.text1}>₹300.8</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.frame22}>
                  <Image
                    style={styles.frameIcon4}
                    contentFit="cover"
                    source={require("../assets/frame20.png")}
                  />
                  <View style={styles.frame23}>
                    <View style={styles.frame24}>
                      <Text style={styles.kolapuriFlavors}>
                        Kolapuri Flavors
                      </Text>
                      <Text style={styles.paidOn3}>Paid on 3 aug,01:20 PM</Text>
                    </View>
                    <View style={styles.frame25}>
                      <Image
                        style={styles.frameIcon5}
                        contentFit="cover"
                        source={require("../assets/frame21.png")}
                      />
                      <View style={styles.frame26}>
                        <Text style={styles.text1}>₹180.8</Text>
                      </View>
                      <Text style={styles.from2}>From</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame27}>
          <View style={styles.frame28} />
          <View style={styles.frame29} />
          <View style={styles.frame29} />
          <View style={styles.frame31}>
            <View style={styles.frame32}>
              <View style={styles.frame33}>
                <Image
                  style={styles.frameIcon6}
                  contentFit="cover"
                  source={require("../assets/frame22.png")}
                />
                <View style={styles.frame34}>
                  <View style={styles.frame35}>
                    <View style={styles.frame36}>
                      <Text
                        style={styles.amazonService}
                      >{`Amazon service `}</Text>
                    </View>
                    <View style={styles.frame37}>
                      <Text style={styles.paidOn31}>
                        Paid on 31 jul,01:20 PM
                      </Text>
                    </View>
                  </View>
                  <View style={styles.frame38}>
                    <Image
                      style={styles.frameIcon3}
                      contentFit="cover"
                      source={require("../assets/frame19.png")}
                    />
                    <View style={styles.frame39}>
                      <Text style={styles.from3}>From</Text>
                      <Text style={styles.text3}>₹345.6</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.frame40}>
                <View style={styles.frame41}>
                  <Image
                    style={styles.image11Icon}
                    contentFit="cover"
                    source={require("../assets/image-11.png")}
                  />
                </View>
                <View style={styles.frame42}>
                  <View style={styles.frame43}>
                    <Text style={styles.kolapuriFlavors}>APOLLO PHARMACY</Text>
                    <Text style={styles.paidOn311}>
                      Paid on 31 jul, 2:36 PM
                    </Text>
                  </View>
                  <View style={styles.frame44}>
                    <View style={styles.frame45}>
                      <Text style={styles.text1}>₹589.8</Text>
                    </View>
                    <Image
                      style={styles.frameIcon8}
                      contentFit="cover"
                      source={require("../assets/frame23.png")}
                    />
                    <View style={styles.frame46}>
                      <Text style={styles.from4}>From</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame47}>
              <Text style={styles.seeAll}>See All....</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.zomatoLtdPaidContainer}>
        <Text style={styles.zomatoLtd}>{`Zomato ltd
`}</Text>
        <Text style={styles.paidOn8}>Paid on 8 Aug, 01:20 PM</Text>
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.frame48}>
          <View style={styles.frame49}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/rectangle-371.png")}
              />
            </Pressable>
            <Text style={styles.home}>Home</Text>
          </View>
          <View style={styles.frame50}>
            <View style={styles.frame51}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("MyCardsBalance")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-331.png")}
                />
              </Pressable>
              <Text style={styles.cards}>Cards</Text>
            </View>
            <View style={styles.frame52}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("Transactions")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-324.png")}
                />
              </Pressable>
              <Text style={styles.transac}>Transac...</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame53}>
          <View style={styles.frame54}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/rectangle-181.png")}
            />
            <Text style={styles.history1}>History</Text>
          </View>
          <View style={styles.frame55}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/rectangle-351.png")}
              />
            </Pressable>
            <Text style={styles.profile}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyChild: {
    position: "absolute",
    height: "0.25%",
    width: "96.39%",
    top: "52.63%",
    right: "1.39%",
    bottom: "47.13%",
    left: "2.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  frameIcon: {
    position: "relative",
    width: 359,
    height: 110,
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: -700,
    left: 0,
    width: 360,
    height: 801,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingTop: 2,
  },
  frame3: {
    position: "relative",
    width: 347,
    height: 298,
    overflow: "hidden",
  },
  frame4: {
    position: "relative",
    width: 347,
    height: 298,
    overflow: "hidden",
    marginTop: -298,
  },
  frameChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 92,
    height: 87,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    marginTop: 5,
  },
  image12Icon: {
    width: 50,
    height: 27,
    marginBottom: 23,
  },
  frame9: {
    width: 236,
    height: 80,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 52,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    height: 52,
    marginLeft: 4,
  },
  frameIcon1: {
    position: "absolute",
    top: 18,
    left: 0,
    width: 62,
    height: 17,
    overflow: "hidden",
  },
  from: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_mini,
    lineHeight: 52,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
  },
  frame11: {
    position: "relative",
    width: 62,
    height: 52,
    overflow: "hidden",
    marginTop: -18,
  },
  frame10: {
    width: 98,
    height: 93,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 7,
    marginTop: 5,
  },
  frame8: {
    width: 318,
    height: 98,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
    marginTop: -92,
  },
  frame7: {
    width: 345,
    height: 98,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_7xs,
  },
  frameItem: {
    position: "absolute",
    height: "45.08%",
    width: "99.42%",
    top: "51.3%",
    right: "-99.42%",
    bottom: "3.63%",
    left: "100%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  frameIcon2: {
    position: "relative",
    borderRadius: Border.br_mini,
    width: 345,
    height: 87,
    overflow: "hidden",
  },
  jioPrepaidRecharges: {
    position: "relative",
    fontSize: FontSize.size_mini,
    lineHeight: 52,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 176,
    height: 47,
  },
  frame17: {
    width: 176,
    height: 63,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  paidOn5: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 52,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 161,
    height: 47,
  },
  frame18: {
    width: 161,
    height: 86,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -63,
  },
  frame16: {
    width: 176,
    height: 86,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameIcon3: {
    position: "absolute",
    top: 0,
    left: 45,
    width: 17,
    height: 77,
    overflow: "hidden",
  },
  from1: {
    fontSize: FontSize.size_mini,
    lineHeight: 52,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
    width: 94,
    marginTop: 42,
  },
  text1: {
    position: "relative",
    fontSize: FontSize.size_base,
    lineHeight: 52,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  frame21: {
    width: 56,
    height: 65,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    marginLeft: -33,
  },
  frame20: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 62,
    height: 98,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 25,
  },
  frame19: {
    position: "relative",
    width: 68,
    height: 94,
    overflow: "hidden",
  },
  frame15: {
    width: 287,
    height: 94,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_4xl,
    marginLeft: -275,
  },
  frame14: {
    width: 345,
    height: 94,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameIcon4: {
    position: "relative",
    width: 39,
    height: 51,
    overflow: "hidden",
  },
  kolapuriFlavors: {
    position: "relative",
    fontSize: FontSize.size_base,
    lineHeight: 52,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  paidOn3: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 52,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
    marginTop: -29,
  },
  frame24: {
    width: 145,
    height: 75,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameIcon5: {
    position: "absolute",
    top: 54,
    left: 0,
    width: 62,
    height: 17,
    overflow: "hidden",
  },
  frame26: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 57,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  from2: {
    position: "absolute",
    top: "40.91%",
    left: "0%",
    fontSize: FontSize.size_mini,
    lineHeight: 52,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
  },
  frame25: {
    position: "relative",
    width: 62,
    height: 88,
    overflow: "hidden",
  },
  frame23: {
    width: 239,
    height: 88,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 32,
  },
  frame22: {
    width: 318,
    height: 88,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_7xl,
  },
  frame13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 345,
    height: 193,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_sm,
  },
  frame12: {
    position: "relative",
    width: 347,
    height: 193,
    overflow: "hidden",
  },
  frame6: {
    width: 347,
    height: 298,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: Gap.gap_xs,
    marginTop: -298,
  },
  frame2: {
    width: 347,
    height: 298,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame28: {
    position: "relative",
    width: 347,
    height: 240,
    overflow: "hidden",
  },
  frame29: {
    position: "relative",
    width: 347,
    height: 240,
    overflow: "hidden",
    marginTop: -240,
  },
  frameIcon6: {
    position: "relative",
    width: 345,
    height: 87,
    overflow: "hidden",
  },
  amazonService: {
    position: "relative",
    fontSize: FontSize.size_base,
    lineHeight: 52,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 191,
    height: 58,
  },
  frame36: {
    width: 191,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  paidOn31: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 52,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
  },
  frame37: {
    width: 144,
    height: 81,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -58,
  },
  frame35: {
    width: 191,
    height: 81,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  from3: {
    fontSize: FontSize.size_mini,
    lineHeight: 52,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
    width: 96,
    marginTop: 44,
  },
  text3: {
    fontSize: FontSize.size_base,
    lineHeight: 52,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: 59,
    marginTop: 7,
    marginLeft: -33,
  },
  frame39: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 58,
    height: 96,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 21,
  },
  frame38: {
    position: "relative",
    width: 62,
    height: 96,
    overflow: "hidden",
  },
  frame34: {
    width: 258,
    height: 96,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_3xs,
    marginLeft: -275,
  },
  frame33: {
    width: 345,
    height: 96,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  image11Icon: {
    position: "relative",
    width: 37,
    height: 35,
  },
  frame41: {
    width: 37,
    height: 52,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  paidOn311: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 52,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
    marginTop: -30,
  },
  frame43: {
    width: 78,
    height: 74,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 4,
  },
  frame45: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 59,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon8: {
    position: "absolute",
    top: 53,
    left: 0,
    width: 60,
    height: 15,
    overflow: "hidden",
  },
  from4: {
    fontSize: FontSize.size_mini,
    lineHeight: 52,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkcyan,
    textAlign: "center",
    width: 52,
    marginTop: 0,
  },
  frame46: {
    position: "absolute",
    top: 34,
    left: 0,
    width: 37,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame44: {
    position: "relative",
    width: 60,
    height: 86,
    overflow: "hidden",
  },
  frame42: {
    width: 239,
    height: 86,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 0,
    gap: Gap.gap_4xl,
  },
  frame40: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 345,
    height: 87,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingTop: 0,
    gap: Gap.gap_7xl,
  },
  frame32: {
    width: 347,
    height: 189,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: Gap.gap_2xs,
  },
  seeAll: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miscellaneousAlertMenuActionSheetSeparators,
    textAlign: "left",
  },
  frame47: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 130,
    height: 33,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
  },
  frame31: {
    width: 347,
    height: 240,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_3xl,
    marginTop: -240,
  },
  frame27: {
    width: 347,
    height: 240,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame1: {
    position: "absolute",
    top: 148,
    left: 8,
    width: 347,
    height: 543,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_3xs,
  },
  zomatoLtd: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  paidOn8: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
  },
  zomatoLtdPaidContainer: {
    position: "absolute",
    top: 170,
    left: 90,
    lineHeight: 26,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "relative",
    width: 25,
    height: 31,
  },
  home: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 38,
    height: 20,
    marginTop: -2,
  },
  frame49: {
    width: 38,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cards: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 38,
    height: 20,
  },
  frame51: {
    width: 38,
    height: 52,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_7xs,
  },
  transac: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 63,
    height: 20,
  },
  frame52: {
    width: 63,
    height: 52,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_7xs,
  },
  frame50: {
    width: 113,
    height: 52,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_md,
  },
  frame48: {
    width: 175,
    height: 52,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_5xl,
  },
  frameInner: {
    position: "relative",
    borderRadius: Border.br_3xs,
    width: 38,
    height: 32,
  },
  history1: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 47,
    height: 20,
    marginTop: -1,
  },
  frame54: {
    width: 47,
    height: 51,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profile: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 42,
    height: 20,
  },
  frame55: {
    width: 42,
    height: 53,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_6xs,
  },
  frame53: {
    width: 105,
    height: 53,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_xl,
  },
  frameParent: {
    position: "absolute",
    top: 725,
    left: -4,
    backgroundColor: Color.colorDarkslategray_100,
    width: 371,
    height: 77,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_12xl,
    paddingBottom: Padding.p_2xs,
    gap: Gap.gap_2xl,
  },
  history: {
    position: "relative",
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default History1;
