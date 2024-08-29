import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Padding,
  Border,
} from "../GlobalStyles";

const Pockets1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pockets}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector20.png")}
            />
            <View style={styles.frame3}>
              <Pressable
                style={styles.arrowLeft}
                onPress={() => navigation.navigate("Home1")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/arrow-left14.png")}
                />
              </Pressable>
              <Text style={styles.wallet}>Wallet</Text>
            </View>
          </View>
          <View style={styles.frame4}>
            <Text style={styles.sections}>Sections</Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame26.png")}
            />
            <View style={styles.frame5}>
              <Text style={styles.food}>Food</Text>
              <View style={styles.frame6}>
                <Text style={styles.shopping}>Shopping</Text>
                <Text style={styles.medicine}>Medicine</Text>
                <Text style={styles.saving}>Saving</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame7} />
      </View>
      <View style={styles.frame8}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-100.png")}
        />
        <View style={styles.footer}>
          <View style={styles.footerChild} />
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("History1")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/rectangle-34.png")}
            />
          </Pressable>
          <Text style={styles.home}>Home</Text>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.history}>History</Text>
          <Text style={styles.loans}>{`      Loans
`}</Text>
          <Text style={styles.cards}>Cards</Text>
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("MyCardsBalance")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/rectangle-331.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectanglePressable}
            onPress={() => navigation.navigate("Home1")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/rectangle-371.png")}
            />
          </Pressable>
          <Pressable
            style={styles.wrapper1}
            onPress={() => navigation.navigate("")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/rectangle-35.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "relative",
    width: 50,
    height: 50,
    zIndex: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    position: "relative",
    width: 40,
    height: 29,
  },
  wallet: {
    position: "relative",
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 192,
  },
  frame3: {
    position: "absolute",
    top: 71,
    left: 0,
    width: 239,
    height: 60,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_2xs,
    zIndex: 1,
  },
  frame2: {
    backgroundColor: Color.colorDarkcyan,
    width: 360,
    height: 148,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_9xs,
    paddingTop: 71,
    paddingBottom: 17,
    position: "relative",
    gap: Gap.gap_6xl,
  },
  sections: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "center",
    height: 29,
    marginLeft: 14,
  },
  frameIcon: {
    position: "relative",
    width: 317,
    height: 43,
    overflow: "hidden",
  },
  food: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: 93,
    height: 31,
  },
  shopping: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: 70,
    height: 12,
  },
  medicine: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: 110,
    height: 23,
    marginLeft: -7,
  },
  saving: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: 67,
    height: 11,
    marginLeft: -7,
  },
  frame6: {
    width: 232,
    height: 23,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame5: {
    width: 328,
    height: 31,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_6xs,
  },
  frame4: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 345,
    height: 181,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 13,
    gap: Gap.gap_4xl,
    marginRight: 1,
  },
  frame1: {
    width: 360,
    height: 351,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_3xl,
  },
  frame7: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginRight: 326,
  },
  frame: {
    width: 360,
    height: 417,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 42,
  },
  frameChild: {
    position: "relative",
    width: 360,
    height: 180,
  },
  footerChild: {
    position: "absolute",
    top: 11,
    left: 165,
    width: 25,
    height: 31,
  },
  vectorIcon1: {
    position: "absolute",
    top: 11,
    left: 171,
    width: 25,
    height: 31,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "absolute",
    left: 234,
    top: 11,
    width: 25,
    height: 31,
  },
  home: {
    position: "absolute",
    top: 43,
    left: 31,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 38,
    height: 20,
  },
  profile: {
    position: "absolute",
    top: 44,
    left: 286,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 42,
    height: 20,
  },
  history: {
    position: "absolute",
    top: 44,
    left: 223,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 47,
    height: 20,
  },
  loans: {
    position: "absolute",
    top: 44,
    left: 142,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 63,
    height: 20,
  },
  cards: {
    position: "absolute",
    top: 43,
    left: 93,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    width: 38,
    height: 20,
  },
  container: {
    position: "absolute",
    left: 101,
    top: 11,
    width: 25,
    height: 31,
  },
  rectanglePressable: {
    position: "absolute",
    left: 37,
    top: 14,
    width: 25,
    height: 31,
  },
  wrapper1: {
    position: "absolute",
    left: 294,
    top: 11,
    width: 25,
    height: 31,
  },
  footer: {
    position: "relative",
    backgroundColor: Color.colorDarkslategray_100,
    width: 368,
    height: 77,
    overflow: "hidden",
  },
  frame8: {
    width: 360,
    height: 367,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 110,
  },
  pockets: {
    position: "relative",
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_12xs,
    gap: Gap.gap_md,
  },
});

export default Pockets1;
