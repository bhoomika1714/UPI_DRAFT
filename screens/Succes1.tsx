import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Text,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Succes1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.succes}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Pressable
            style={styles.arrowLeft}
            onPress={() => navigation.navigate("Transactions")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </Pressable>
        </View>
        <ImageBackground
          style={[styles.frameIcon, styles.frameFlexBox]}
          resizeMode="cover"
          source={require("../assets/frame8.png")}
        >
          <View style={styles.frameChild} />
        </ImageBackground>
      </View>
      <View style={styles.frame2}>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <Text style={[styles.paymentOfRs1000, styles.pleaseDoNotFlexBox]}>
              Payment of Rs.1000 is Successful
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("TransactionDetails")}>
            <Text
              style={[styles.transactionDetails1, styles.pleaseDoNotFlexBox]}
            >
              Transaction Details
            </Text>
          </Pressable>
        </View>
      </View>
      <Text style={[styles.pleaseDoNot, styles.pleaseDoNotFlexBox]}>
        Please do not press back or close the app
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  pleaseDoNotFlexBox: {
    textAlign: "center",
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  icon: {
    height: "58.4%",
    width: "58.36%",
    top: "20.8%",
    right: "20.73%",
    bottom: "20.8%",
    left: "20.91%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  arrowLeft: {
    width: 57,
    height: 50,
    overflow: "hidden",
  },
  frame1: {
    width: 402,
    justifyContent: "center",
  },
  frameChild: {
    marginLeft: -100,
    top: 39,
    left: "50%",
    backgroundColor: "rgba(217, 217, 217, 0.14)",
    width: 200,
    height: 200,
    zIndex: 0,
    position: "absolute",
  },
  frameIcon: {
    alignSelf: "stretch",
    height: 278,
    alignItems: "center",
  },
  frame: {
    top: 51,
    left: -10,
    gap: 61,
    alignItems: "center",
    width: 402,
    justifyContent: "center",
    position: "absolute",
  },
  paymentOfRs1000: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.interRegular,
    width: 350,
    height: 47,
  },
  frame4: {
    width: 352,
    height: 139,
  },
  transactionDetails1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    height: 63,
    width: 360,
  },
  frame3: {
    gap: 92,
    width: 360,
    alignItems: "center",
  },
  frame2: {
    top: 384,
    left: 0,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  pleaseDoNot: {
    top: 718,
    left: 11,
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    height: 32,
    width: 360,
    position: "absolute",
  },
  succes: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Succes1;
