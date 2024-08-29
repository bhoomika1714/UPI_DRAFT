import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Rewards1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rewards2}>
      <View style={styles.frame}>
        <Pressable
          style={styles.show}
          onPress={() => navigation.navigate("Rewards3")}
        >
          <Text style={styles.show1}>SHOW</Text>
        </Pressable>
      </View>
      <View style={[styles.frame1, styles.frame1Layout]}>
        <View style={styles.frame2}>
          <Image
            style={styles.pocketsIcon}
            resizeMode="cover"
            source={require("../assets/pockets.png")}
          />
        </View>
        <View style={[styles.footer, styles.frame1Layout]}>
          <View style={[styles.frame3, styles.frameLayout1]}>
            <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
            <Pressable
              style={[styles.wrapper, styles.wrapperLayout]}
              onPress={() => navigation.navigate("")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/rectangle-35.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.frame4, styles.frameLayout1]}>
            <View style={[styles.frame5, styles.framePosition]}>
              <Text style={[styles.home, styles.framePosition]}>Home</Text>
              <Pressable
                style={[styles.container, styles.wrapperLayout]}
                onPress={() => navigation.navigate("Home1")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/rectangle-371.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.frame6, styles.frameLayout1]}>
              <View style={[styles.frame7, styles.frame7Layout]}>
                <Pressable
                  style={[styles.rectanglePressable, styles.wrapperLayout]}
                  onPress={() => navigation.navigate("History1")}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/rectangle-34.png")}
                  />
                </Pressable>
                <Text style={[styles.history, styles.frame7Layout]}>
                  History
                </Text>
              </View>
              <View style={[styles.frame8, styles.frameLayout]}>
                <View style={[styles.frame9, styles.frameLayout]}>
                  <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
                  <Pressable
                    style={[styles.wrapper, styles.wrapperLayout]}
                    onPress={() => navigation.navigate("MyCardsBalance")}
                  >
                    <Image
                      style={styles.icon}
                      resizeMode="cover"
                      source={require("../assets/rectangle-331.png")}
                    />
                  </Pressable>
                </View>
                <View style={[styles.frame10, styles.loansLayout]}>
                  <Text style={[styles.loans, styles.loansLayout]}>{`Loans
`}</Text>
                  <Image
                    style={[styles.vectorIcon, styles.wrapperLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector4.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Layout: {
    width: 371,
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout1: {
    height: 53,
    overflow: "hidden",
  },
  homeTypo: {
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  wrapperLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  framePosition: {
    width: 38,
    left: 0,
    position: "absolute",
  },
  frame7Layout: {
    width: 47,
    position: "absolute",
  },
  frameLayout: {
    height: 52,
    top: 0,
    overflow: "hidden",
  },
  cardsTypo: {
    top: 32,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  loansLayout: {
    width: 63,
    position: "absolute",
  },
  show1: {
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorWhitesmoke_400,
    textAlign: "center",
    width: 77,
    height: 44,
  },
  show: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 359,
    left: 259,
    width: 108,
    overflow: "hidden",
    height: 44,
    position: "absolute",
  },
  pocketsIcon: {
    borderRadius: Border.br_5xs,
    width: 366,
    height: 803,
    top: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  frame2: {
    width: 367,
    top: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
    height: 801,
  },
  profile: {
    top: 33,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    left: 0,
    width: 42,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 8,
    top: 0,
  },
  frame3: {
    left: 286,
    width: 42,
    position: "absolute",
    top: 11,
    height: 53,
  },
  home: {
    top: 29,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  container: {
    left: 6,
    top: 0,
  },
  frame5: {
    top: 3,
    height: 49,
    overflow: "hidden",
  },
  rectanglePressable: {
    left: 11,
    top: 0,
  },
  history: {
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 33,
    left: 0,
  },
  frame7: {
    left: 130,
    height: 53,
    overflow: "hidden",
    top: 0,
  },
  cards: {
    width: 38,
    left: 0,
    position: "absolute",
  },
  frame9: {
    width: 38,
    left: 0,
    position: "absolute",
  },
  loans: {
    left: 12,
    top: 32,
    height: 20,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  vectorIcon: {
    top: 1,
    left: 19,
  },
  frame10: {
    left: 50,
    height: 52,
    top: 0,
    overflow: "hidden",
  },
  frame8: {
    width: 113,
    left: 0,
    position: "absolute",
  },
  frame6: {
    left: 62,
    width: 177,
    top: 0,
    position: "absolute",
  },
  frame4: {
    left: 31,
    width: 239,
    top: 11,
    height: 53,
    position: "absolute",
  },
  footer: {
    top: 720,
    backgroundColor: Color.colorDarkslategray_100,
    height: 80,
    left: 0,
  },
  frame1: {
    left: -4,
    top: 0,
    height: 801,
  },
  rewards2: {
    flex: 1,
    height: 801,
    width: "100%",
  },
});

export default Rewards1;
