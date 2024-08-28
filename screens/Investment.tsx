import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Investment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.investment}>
      <View style={styles.stockMarket}>
        <View style={[styles.frame, styles.frameLayout9]}>
          <View style={styles.frame1}>
            <View style={[styles.frame2, styles.framePosition6]}>
              <View style={styles.frame3}>
                <View style={[styles.frame4, styles.frame4Position]}>
                  <Pressable
                    style={[styles.arrowLeft, styles.frame4Position]}
                    onPress={() => navigation.navigate("Home")}
                  >
                    <Image
                      style={styles.icon}
                      contentFit="cover"
                      source={require("../assets/arrow-left14.png")}
                    />
                  </Pressable>
                </View>
                <View style={[styles.frame5, styles.framePosition6]}>
                  <Image
                    style={[styles.frameIcon, styles.framePosition6]}
                    contentFit="cover"
                    source={require("../assets/frame11.png")}
                  />
                  <View style={[styles.frame6, styles.frameLayout8]}>
                    <View style={[styles.frame7, styles.framePosition5]}>
                      <Text style={[styles.back, styles.backTypo]}>{`Back
`}</Text>
                      <View style={[styles.frame8, styles.framePosition5]}>
                        <Text style={[styles.hiBecky, styles.hiBeckyTypo]}>
                          Hi Becky,
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.yourBalance, styles.textPosition]}>
              Your Balance
            </Text>
            <View style={styles.frame9}>
              <View style={styles.frame10}>
                <Image
                  style={[styles.vectorIcon, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector9.png")}
                />
                <Text style={[styles.text, styles.textPosition]}>25,000</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame11, styles.frameLayout9]}>
            <View style={[styles.frame12, styles.frameLayout7]}>
              <Text style={[styles.transactionHistory, styles.hiBeckyTypo]}>
                Transaction history
              </Text>
            </View>
            <View style={[styles.frame13, styles.framePosition4]}>
              <View style={[styles.frame14, styles.framePosition4]}>
                <View style={[styles.frame15, styles.frameLayout6]}>
                  <Image
                    style={[styles.vectorIcon1, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector10.png")}
                  />
                  <View style={[styles.frame15, styles.frameLayout6]}>
                    <Image
                      style={[styles.vectorIcon2, styles.groupIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector11.png")}
                    />
                    <View style={[styles.vectorParent, styles.parentShadowBox]}>
                      <Image
                        style={[styles.frameChild, styles.groupIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-1.png")}
                      />
                      <View style={styles.frame17}>
                        <Text style={[styles.text1, styles.textTypo1]}>
                          +5.65%
                        </Text>
                      </View>
                      <View style={styles.frame18}>
                        <View style={[styles.frame19, styles.framePosition3]}>
                          <Image
                            style={[styles.vectorIcon3, styles.groupIconLayout]}
                            contentFit="cover"
                            source={require("../assets/vector12.png")}
                          />
                          <Text style={[styles.text2, styles.backTypo]}>
                            5000
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frame20, styles.frameLayout6]}>
                  <View style={[styles.parent, styles.parentShadowBox]}>
                    <Text style={[styles.text3, styles.textTypo1]}>-3.78%</Text>
                    <View style={[styles.frame21, styles.frameLayout5]}>
                      <Text style={[styles.text4, styles.textPosition]}>{`3000
`}</Text>
                      <Image
                        style={[styles.vectorIcon4, styles.groupIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector13.png")}
                      />
                      <Image
                        style={[styles.frameItem, styles.frameLayout5]}
                        contentFit="cover"
                        source={require("../assets/vector-2.png")}
                      />
                    </View>
                  </View>
                  <Image
                    style={[styles.groupIcon, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame22}>
          <View style={[styles.frame23, styles.frameLayout4]}>
            <View style={[styles.frameParent, styles.frameLayout4]}>
              <View style={[styles.frame24, styles.frameLayout3]}>
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                <Pressable
                  style={[styles.wrapper, styles.wrapperLayout]}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/rectangle-37.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.frame25, styles.frameLayout3]}>
                <Text style={[styles.home, styles.homeTypo]}>Cards</Text>
                <Pressable
                  style={[styles.container, styles.wrapperLayout]}
                  onPress={() => navigation.navigate("MyCardsBalance")}
                >
                  <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/rectangle-33.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.frame26, styles.frameLayout2]}>
                <Text style={[styles.profile, styles.frameLayout2]}>
                  Profile
                </Text>
                <Pressable
                  style={[styles.rectanglePressable, styles.wrapperLayout]}
                  onPress={() => navigation.navigate("")}
                >
                  <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/rectangle-35.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.frame27, styles.frame27Layout]}>
                <Pressable
                  style={[styles.wrapper1, styles.wrapperLayout]}
                  onPress={() => navigation.navigate("History1")}
                >
                  <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/rectangle-34.png")}
                  />
                </Pressable>
                <Text style={[styles.history, styles.frame27Layout]}>
                  History
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frame28}>
            <View style={[styles.frame29, styles.framePosition2]}>
              <View style={[styles.frameGroup, styles.framePosition2]}>
                <View style={[styles.frame30, styles.frameLayout1]}>
                  <Text style={[styles.btcrupees, styles.textClr]}>
                    BTC/RUPEES
                  </Text>
                  <Text style={[styles.june2023, styles.textClr]}>
                    13 June 2023
                  </Text>
                </View>
                <View style={[styles.frame31, styles.frameLayout]}>
                  <View style={styles.frame32}>
                    <Text style={[styles.text5, styles.textTypo]}>{`

`}</Text>
                    <Text style={[styles.text6, styles.textTypo]}>
                      +0.01657
                    </Text>
                    <Text style={[styles.text7, styles.textClr]}>70.8</Text>
                    <Image
                      style={[styles.vectorIcon5, styles.groupIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector14.png")}
                    />
                  </View>
                </View>
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame12.png")}
                />
                <View style={styles.frameInner} />
              </View>
            </View>
            <View style={styles.frame33}>
              <View style={[styles.frame34, styles.frame34Position]}>
                <View style={[styles.lineParent, styles.parentBorder]}>
                  <View style={[styles.lineView, styles.frameChildLayout]} />
                  <View style={styles.frame35}>
                    <View style={styles.frame36}>
                      <View style={[styles.frame37, styles.framePosition1]}>
                        <Text style={[styles.text8, styles.textTypo]}>
                          +3.56
                        </Text>
                      </View>
                      <View style={[styles.frame38, styles.framePosition1]}>
                        <Image
                          style={[styles.vectorIcon6, styles.groupIconLayout]}
                          contentFit="cover"
                          source={require("../assets/vector14.png")}
                        />
                        <View style={[styles.frame39, styles.framePosition1]}>
                          <Text style={[styles.text9, styles.textTypo]}>
                            200.0
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.frame40, styles.framePosition]}>
                      <Image
                        style={[styles.frameIcon2, styles.framePosition]}
                        contentFit="cover"
                        source={require("../assets/frame13.png")}
                      />
                      <View style={[styles.frame41, styles.frameLayout1]}>
                        <Text style={[styles.amrupees, styles.amrupeesTypo]}>
                          AM/RUPEES
                        </Text>
                        <Text style={[styles.july2023, styles.textClr]}>
                          21 July 2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frame42, styles.frame42Layout]}>
              <View style={[styles.amrupeesParent, styles.frame42Layout]}>
                <Text style={[styles.amrupees1, styles.text14Position]}>
                  AM/RUPEES
                </Text>
                <View style={styles.frameContainer}>
                  <View style={[styles.frame43, styles.frameLayout1]}>
                    <View style={[styles.frame44, styles.frameLayout1]}>
                      <Text style={[styles.btcrupees1, styles.amrupeesTypo]}>
                        BTC/RUPEES
                      </Text>
                      <Text style={[styles.june20231, styles.textClr]}>
                        13 June 2023
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.frameIcon3, styles.frameLayout2]}
                    contentFit="cover"
                    source={require("../assets/frame14.png")}
                  />
                  <View style={[styles.frameChild1, styles.frameChildLayout]} />
                  <View style={[styles.frame45, styles.frameLayout]}>
                    <Text style={[styles.text6, styles.textTypo]}>
                      +0.01657
                    </Text>
                    <View style={[styles.frame46, styles.wrapperLayout]}>
                      <Text style={[styles.text11, styles.textClr]}>70.8</Text>
                    </View>
                    <View style={[styles.frame47, styles.framePosition3]}>
                      <Text style={[styles.text12, styles.textClr]}>-</Text>
                    </View>
                    <Image
                      style={[styles.frameIcon4, styles.frameLayout7]}
                      contentFit="cover"
                      source={require("../assets/frame15.png")}
                    />
                    <View style={styles.group}>
                      <Text style={[styles.text13, styles.textTypo]}>{`

`}</Text>
                    </View>
                  </View>
                </View>
                <Text style={[styles.july20231, styles.textClr]}>
                  17 July 2023
                </Text>
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
                <Text style={[styles.text14, styles.text14Position]}>
                  -2.32057
                </Text>
                <Text style={[styles.text15, styles.textClr]}>170.8</Text>
                <View style={[styles.frameChild2, styles.frameChildLayout]} />
                <Image
                  style={[styles.vectorIcon7, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector14.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout9: {
    width: 314,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition6: {
    height: 91,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame4Position: {
    width: 30,
    left: 0,
    position: "absolute",
  },
  frameLayout8: {
    width: 165,
    left: 0,
  },
  framePosition5: {
    height: 71,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  backTypo: {
    textAlign: "center",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  hiBeckyTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.miscellaneousFloatingTabTextUnselected,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    textAlign: "center",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout7: {
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition4: {
    height: 164,
    left: 0,
    top: 0,
  },
  frameLayout6: {
    width: 143,
    position: "absolute",
    overflow: "hidden",
  },
  parentShadowBox: {
    height: 141,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 3,
    borderColor: Color.colorTurquoise,
    borderRadius: Border.br_mini,
    width: 143,
    left: 0,
    position: "absolute",
    borderStyle: "solid",
  },
  textTypo1: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  framePosition3: {
    left: 9,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout5: {
    width: 131,
    position: "absolute",
  },
  frameLayout4: {
    height: 74,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout3: {
    height: 52,
    top: 11,
    width: 38,
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
  },
  wrapperLayout: {
    width: 25,
    position: "absolute",
  },
  frameLayout2: {
    width: 42,
    position: "absolute",
  },
  frame27Layout: {
    width: 47,
    position: "absolute",
  },
  framePosition2: {
    height: 63,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    width: 78,
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.schemesOnPrimary,
    textAlign: "center",
    position: "absolute",
  },
  frameLayout: {
    height: 77,
    width: 62,
    top: 14,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  frame34Position: {
    height: 65,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  parentBorder: {
    width: 304,
    backgroundColor: Color.colorDarkslategray_100,
    borderWidth: 3,
    borderColor: Color.colorTurquoise,
    borderRadius: Border.br_mini,
    top: 0,
    borderStyle: "solid",
  },
  frameChildLayout: {
    width: "0.99%",
    borderRightWidth: 3,
    position: "absolute",
    borderStyle: "solid",
  },
  framePosition1: {
    height: 17,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    height: 38,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  amrupeesTypo: {
    width: "98.72%",
    fontSize: FontSize.size_xs,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "0%",
    textAlign: "center",
    position: "absolute",
  },
  frame42Layout: {
    height: 66,
    position: "absolute",
    overflow: "hidden",
  },
  text14Position: {
    top: "16.67%",
    color: Color.schemesOnPrimary,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeft: {
    height: 26,
    top: 0,
  },
  frame4: {
    top: 5,
    height: 81,
    overflow: "hidden",
  },
  frameIcon: {
    left: 174,
    width: 80,
  },
  back: {
    left: 0,
    top: 0,
  },
  hiBecky: {
    top: 42,
    fontFamily: FontFamily.interRegular,
  },
  frame8: {
    left: 59,
    width: 106,
  },
  frame7: {
    width: 165,
    left: 0,
  },
  frame6: {
    height: 91,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame5: {
    left: 43,
    width: 254,
  },
  frame3: {
    width: 297,
    height: 91,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    left: 0,
    width: 300,
  },
  yourBalance: {
    marginLeft: -62,
    top: 97,
    fontSize: FontSize.size_xl,
  },
  vectorIcon: {
    height: "72.58%",
    width: "13.64%",
    top: "16.13%",
    right: "86.36%",
    bottom: "11.29%",
    left: "0%",
  },
  text: {
    marginLeft: -32,
    fontSize: FontSize.size_7xl,
    left: "50%",
    top: 0,
  },
  frame10: {
    width: 110,
    height: 31,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame9: {
    top: 127,
    left: 89,
    width: 122,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    height: 158,
    width: 300,
    left: 7,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  transactionHistory: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: 0,
  },
  frame12: {
    top: 196,
    left: 4,
    width: 306,
  },
  vectorIcon1: {
    height: "19.51%",
    width: "13.29%",
    top: "2.44%",
    right: "40.56%",
    bottom: "78.05%",
    left: "46.15%",
  },
  vectorIcon2: {
    height: "24.39%",
    width: "27.97%",
    right: "33.57%",
    bottom: "75.61%",
    left: "38.46%",
    top: "0%",
  },
  frameChild: {
    height: "19.72%",
    width: "94.41%",
    top: "50.35%",
    right: "2.8%",
    bottom: "29.93%",
    left: "2.8%",
  },
  text1: {
    width: "63.23%",
    color: "#34c759",
    top: "0%",
    left: "0%",
    height: "100%",
  },
  frame17: {
    top: 114,
    left: -6,
    width: 155,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    height: "50.9%",
    width: "18.75%",
    top: "25.15%",
    right: "81.25%",
    bottom: "23.95%",
    left: "0%",
  },
  text2: {
    width: "81.25%",
    left: "18.75%",
    top: "0%",
    height: "100%",
  },
  frame19: {
    height: 33,
    width: 80,
  },
  frame18: {
    left: 27,
    width: 89,
    height: 33,
    top: 23,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    top: 23,
  },
  frame15: {
    height: 164,
    left: 0,
    top: 0,
  },
  text3: {
    top: 115,
    color: Color.colorTomato,
    left: 6,
  },
  text4: {
    marginLeft: -33.5,
    fontSize: FontSize.size_7xl,
    left: "50%",
    top: 0,
  },
  vectorIcon4: {
    height: "23.03%",
    width: "11.45%",
    top: "7.27%",
    right: "75.57%",
    bottom: "69.7%",
    left: "12.98%",
  },
  frameItem: {
    top: 41,
    height: 42,
    left: 0,
  },
  frame21: {
    height: 83,
    left: 6,
    top: 19,
    overflow: "hidden",
  },
  parent: {
    top: 19,
    overflow: "hidden",
  },
  groupIcon: {
    height: "23.44%",
    width: "23.78%",
    right: "38.46%",
    bottom: "76.56%",
    left: "37.76%",
    top: "0%",
  },
  frame20: {
    top: 4,
    left: 170,
    height: 160,
  },
  frame14: {
    width: 313,
    position: "absolute",
    overflow: "hidden",
  },
  frame13: {
    width: 314,
    position: "absolute",
    overflow: "hidden",
  },
  frame11: {
    top: 172,
    height: 225,
    left: 0,
  },
  frame: {
    left: 23,
    height: 397,
    top: 19,
  },
  home: {
    top: 32,
    width: 38,
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    height: 31,
    left: 7,
    top: 0,
  },
  frame24: {
    left: 31,
  },
  container: {
    left: 8,
    height: 31,
    top: 0,
  },
  frame25: {
    left: 106,
  },
  profile: {
    top: 31,
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
  },
  rectanglePressable: {
    left: 6,
    height: 31,
    top: 0,
  },
  frame26: {
    top: 13,
    left: 286,
    height: 51,
    overflow: "hidden",
  },
  wrapper1: {
    left: 11,
    top: 2,
    height: 31,
  },
  history: {
    top: 33,
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
  },
  frame27: {
    top: 10,
    left: 198,
    height: 53,
    overflow: "hidden",
  },
  frameParent: {
    backgroundColor: Color.colorDarkslategray_100,
    left: 2,
    top: 0,
    width: 360,
  },
  frame23: {
    top: 296,
    width: 362,
    left: 0,
  },
  btcrupees: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "0%",
    left: "0%",
  },
  june2023: {
    height: "35.47%",
    top: "64.15%",
    fontSize: FontSize.size_xs,
    left: "0%",
    fontFamily: FontFamily.interRegular,
    width: "100%",
  },
  frame30: {
    left: 58,
    top: 14,
    height: 26,
  },
  text5: {
    top: "32%",
    left: "55.48%",
    color: Color.schemesOnPrimary,
    textAlign: "center",
    position: "absolute",
  },
  text6: {
    color: Color.schemesOnPrimary,
    textAlign: "center",
    position: "absolute",
    top: "0%",
    left: "0%",
  },
  text7: {
    width: "39.35%",
    top: "24%",
    left: "40.32%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon5: {
    height: "13.33%",
    width: "16.13%",
    top: "28%",
    right: "69.35%",
    bottom: "58.67%",
    left: "14.52%",
  },
  frame32: {
    height: 75,
    width: 62,
    top: 2,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame31: {
    left: 205,
  },
  frameIcon1: {
    width: 41,
    height: 35,
    top: 14,
    left: 7,
    position: "absolute",
    overflow: "hidden",
  },
  frameInner: {
    width: "1.01%",
    right: "5.42%",
    left: "93.57%",
    borderRightWidth: 3,
    bottom: "23.02%",
    top: "27.78%",
    height: "49.21%",
    borderColor: Color.colorTurquoise,
    position: "absolute",
    borderStyle: "solid",
  },
  frameGroup: {
    backgroundColor: Color.colorDarkslategray_100,
    borderWidth: 3,
    height: 63,
    borderColor: Color.colorTurquoise,
    borderRadius: Border.br_mini,
    width: 297,
    borderStyle: "solid",
  },
  frame29: {
    width: 306,
  },
  lineView: {
    height: "47.69%",
    top: "20.77%",
    right: "4.11%",
    bottom: "31.54%",
    left: "94.9%",
    borderColor: Color.colorTurquoise,
    width: "0.99%",
  },
  text8: {
    left: "11.36%",
    color: Color.schemesOnPrimary,
    textAlign: "center",
    position: "absolute",
    top: "0%",
  },
  frame37: {
    width: 44,
    top: 0,
  },
  vectorIcon6: {
    height: "58.82%",
    width: "18.87%",
    top: "23.53%",
    right: "81.13%",
    bottom: "17.65%",
    left: "0%",
  },
  text9: {
    left: "28.3%",
    color: Color.schemesOnPrimary,
    textAlign: "center",
    position: "absolute",
    top: "0%",
  },
  frame39: {
    width: 53,
    top: 0,
  },
  frame38: {
    top: 17,
    width: 53,
  },
  frame36: {
    left: 221,
    height: 34,
    width: 53,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon2: {
    width: 34,
    top: 0,
  },
  amrupees: {
    height: "28.07%",
    left: "0%",
  },
  july2023: {
    height: "32.98%",
    top: "66.67%",
    fontSize: FontSize.size_xs,
    left: "0%",
    fontFamily: FontFamily.interRegular,
    width: "100%",
  },
  frame41: {
    left: 55,
    height: 28,
    top: 0,
  },
  frame40: {
    width: 133,
    top: 2,
  },
  frame35: {
    top: 12,
    width: 274,
    height: 40,
    left: 6,
    position: "absolute",
    overflow: "hidden",
  },
  lineParent: {
    height: 65,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame34: {
    top: 96,
    width: 306,
  },
  frame33: {
    top: 100,
    height: 161,
    width: 306,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  amrupees1: {
    height: "12.12%",
    width: "25.33%",
    left: "21.05%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  btcrupees1: {
    height: "29.79%",
    left: "1.28%",
  },
  june20231: {
    height: "40%",
    top: "59.57%",
    fontSize: FontSize.size_xs,
    left: "0%",
    fontFamily: FontFamily.interRegular,
    width: "100%",
  },
  frame44: {
    height: 23,
    top: 2,
    left: 0,
  },
  frame43: {
    left: 60,
    height: 25,
    top: 14,
  },
  frameIcon3: {
    top: 14,
    height: 31,
    left: 7,
    overflow: "hidden",
  },
  frameChild1: {
    right: "5.43%",
    left: "93.59%",
    bottom: "23.02%",
    top: "27.78%",
    height: "49.21%",
    width: "0.99%",
    borderColor: Color.colorTurquoise,
  },
  text11: {
    top: "54.55%",
    fontSize: FontSize.size_xs,
    left: "0%",
    fontFamily: FontFamily.interRegular,
  },
  frame46: {
    left: 31,
    height: 33,
    top: 0,
    overflow: "hidden",
  },
  text12: {
    top: "51.61%",
    fontSize: FontSize.size_xs,
    left: "0%",
    fontFamily: FontFamily.interRegular,
  },
  frame47: {
    width: 6,
    height: 31,
  },
  frameIcon4: {
    left: 18,
    width: 10,
    top: 0,
  },
  text13: {
    color: Color.schemesOnPrimary,
    textAlign: "center",
    position: "absolute",
    top: "0%",
  },
  group: {
    height: "66.23%",
    top: "33.77%",
    bottom: "0%",
    left: "80.65%",
    width: 0,
    position: "absolute",
  },
  frame45: {
    left: 195,
  },
  frameContainer: {
    height: "95.45%",
    top: "72.73%",
    right: "-34.54%",
    bottom: "-68.18%",
    left: "34.54%",
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  july20231: {
    height: "14.24%",
    width: "25.66%",
    top: "42.42%",
    left: "20.72%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  groupIcon1: {
    height: "56.82%",
    width: "11.18%",
    top: "15.15%",
    right: "85.53%",
    bottom: "28.03%",
    left: "3.29%",
  },
  text14: {
    left: "71.71%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  text15: {
    top: "50%",
    left: "77.96%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  frameChild2: {
    height: "46.97%",
    top: "26.52%",
    right: "4.77%",
    bottom: "26.52%",
    left: "94.24%",
    borderColor: Color.colorTomato,
  },
  vectorIcon7: {
    height: "15.15%",
    width: "3.29%",
    top: "53.03%",
    right: "22.04%",
    bottom: "31.82%",
    left: "74.67%",
  },
  amrupeesParent: {
    width: 304,
    backgroundColor: Color.colorDarkslategray_100,
    borderWidth: 3,
    borderColor: Color.colorTurquoise,
    borderRadius: Border.br_mini,
    top: 0,
    borderStyle: "solid",
    left: 2,
  },
  frame42: {
    top: 91,
    left: -9,
    width: 306,
  },
  frame28: {
    left: 28,
    height: 261,
    width: 306,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame22: {
    top: 430,
    left: -1,
    height: 370,
    width: 362,
    position: "absolute",
    overflow: "hidden",
  },
  stockMarket: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderWidth: 1,
    overflow: "hidden",
    width: 360,
    borderStyle: "solid",
    height: 800,
  },
  investment: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 800,
    width: "100%",
  },
});

export default Investment;
