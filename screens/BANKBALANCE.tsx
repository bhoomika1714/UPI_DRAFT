import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Gap } from "../GlobalStyles";

const BANKBALANCE = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.bankBalance}
      onPress={() => navigation.navigate("Pockets")}
    >
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.frameLayout}>
          <Pressable
            style={styles.arrowLeft}
            onPress={() => navigation.navigate("Pockets")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.frame2, styles.frameLayout]}>
          <ImageBackground
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          >
            <View style={styles.frameChild} />
          </ImageBackground>
        </View>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text style={[styles.amountOfRs1000, styles.pleaseDoNotFlexBox]}>
          Amount of Rs.1,000 sucessfully fetched
        </Text>
        <Text style={[styles.pleaseDoNot, styles.pleaseDoNotFlexBox]}>
          Please do not press back or close the app
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
  },
  frameLayout: {
    width: 360,
    justifyContent: "center",
    overflow: "hidden",
  },
  pleaseDoNotFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  icon: {
    position: "absolute",
    height: "58.33%",
    width: "58.39%",
    top: "20.83%",
    right: "20.72%",
    bottom: "20.83%",
    left: "20.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    width: 58,
    height: 48,
    overflow: "hidden",
  },
  frameChild: {
    backgroundColor: Color.colorGainsboro_200,
    width: 200,
    height: 200,
  },
  frameIcon: {
    width: 331,
    height: 239,
    overflow: "hidden",
    alignItems: "center",
  },
  frame2: {
    alignItems: "center",
  },
  frame: {
    gap: 112,
  },
  amountOfRs1000: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslategray_100,
  },
  pleaseDoNot: {
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  frame3: {
    backgroundColor: Color.schemesOnPrimary,
    gap: 260,
  },
  bankBalance: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xl,
    gap: Gap.gap_8xs,
    alignItems: "center",
  },
});

export default BANKBALANCE;
