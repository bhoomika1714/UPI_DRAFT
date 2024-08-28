import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ViewStatement5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.viewStatement}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame7.png")}
        />
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Pressable
              style={[styles.frameChild, styles.frameLayout]}
              onPress={() => navigation.navigate("Year1")}
            />
            <Text style={[styles.graphicalOverview, styles.overviewPosition]}>
              Graphical Overview
            </Text>
          </View>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Pressable
              style={[styles.frameChild, styles.frameLayout]}
              onPress={() => navigation.navigate("StatYear1")}
            />
            <Text style={[styles.statementOverview, styles.overviewPosition]}>
              Statement Overview
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        <Text style={[styles.profile, styles.loanTypo]}>Profile</Text>
        <Text style={[styles.history, styles.loanTypo]}>History</Text>
        <Text style={[styles.cards, styles.homeLayout]}>Cards</Text>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
        <View style={[styles.frameInner, styles.homeLayout]} />
        <Pressable
          style={[styles.rectanglePressable, styles.wrapperLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper1, styles.wrapperLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.loan, styles.loanTypo]}>{`Loan
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout: {
    height: 150,
    width: 350,
  },
  overviewPosition: {
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_11xl,
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  homeLayout: {
    width: 38,
    position: "absolute",
  },
  loanTypo: {
    top: 44,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  frameIcon: {
    width: 338,
    height: 50,
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorTeal_200,
    zIndex: 0,
  },
  graphicalOverview: {
    marginLeft: -141,
    top: 59,
    color: "#f9f7f7",
    width: 282,
    height: 32,
  },
  frame2: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  statementOverview: {
    marginLeft: -153,
    top: 58,
    color: "#f7f2f2",
    width: 306,
    height: 34,
  },
  frame1: {
    height: 380,
    gap: 80,
    width: 350,
    alignItems: "center",
  },
  frame: {
    top: 12,
    left: 5,
    height: 523,
    justifyContent: "center",
    gap: 93,
    width: 350,
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 234,
    top: 11,
  },
  home: {
    left: 31,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 43,
    width: 38,
    textAlign: "left",
  },
  profile: {
    left: 286,
    width: 42,
    height: 20,
  },
  history: {
    left: 223,
    width: 47,
    height: 20,
  },
  cards: {
    left: 93,
    height: 20,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 43,
    width: 38,
    textAlign: "left",
  },
  container: {
    left: 38,
    top: 11,
  },
  frameInner: {
    left: 95,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTurquoise,
    top: 11,
    height: 32,
  },
  rectanglePressable: {
    left: 292,
    top: 13,
  },
  wrapper1: {
    left: 101,
    top: 11,
  },
  vectorIcon: {
    left: 168,
    top: 11,
  },
  loan: {
    left: 162,
    width: 75,
    height: 29,
  },
  rectangleParent: {
    top: 723,
    left: -5,
    backgroundColor: Color.colorDarkslategray_100,
    width: 360,
    height: 77,
    position: "absolute",
    overflow: "hidden",
  },
  viewStatement: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewStatement5;
