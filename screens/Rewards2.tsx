import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Rewards2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rewards5}>
      <Image
        style={[styles.pocketsIcon, styles.footerLayout]}
        contentFit="cover"
        source={require("../assets/pockets1.png")}
      />
      <Pressable
        style={styles.hide}
        onPress={() => navigation.navigate("Rewards1")}
      >
        <Text style={styles.hide1}>HIDE</Text>
      </Pressable>
      <View style={[styles.footer, styles.footerLayout]}>
        <Pressable
          style={[styles.wrapper, styles.frameLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <Text style={[styles.history, styles.profileTypo]}>History</Text>
        <Text style={[styles.loans, styles.homeTypo]}>{`Loans
`}</Text>
        <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
        <Pressable
          style={[styles.container, styles.frameLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-37.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectanglePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLayout: {
    overflow: "hidden",
    width: 364,
    position: "absolute",
  },
  frameLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  homeTypo: {
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
    fontWeight: "700",
    position: "absolute",
  },
  profileTypo: {
    top: 44,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    position: "absolute",
  },
  pocketsIcon: {
    top: -12,
    left: -59,
    borderRadius: Border.br_5xs,
    height: 801,
  },
  hide1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    width: 77,
    height: 44,
    fontWeight: "700",
  },
  hide: {
    left: 202,
    top: 350,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 234,
    top: 11,
    width: 25,
  },
  home: {
    left: 31,
    width: 38,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
  },
  profile: {
    left: 286,
    width: 42,
  },
  history: {
    left: 223,
    width: 47,
  },
  loans: {
    left: 155,
    width: 63,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
  },
  cards: {
    left: 93,
    width: 38,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    top: 43,
  },
  container: {
    left: 101,
    top: 11,
    width: 25,
  },
  frame: {
    left: 37,
    top: 14,
  },
  rectanglePressable: {
    left: 294,
    top: 11,
    width: 25,
  },
  vectorIcon: {
    top: 9,
    left: 162,
  },
  footer: {
    top: 720,
    left: -57,
    backgroundColor: Color.colorDarkslategray_100,
    height: 81,
  },
  rewards5: {
    flex: 1,
    height: 801,
    width: "100%",
  },
});

export default Rewards2;
