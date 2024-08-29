import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Ai1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ai2}>
      <View
        style={[
          styles.explainTheCurrentStockMarkWrapper,
          styles.stockWrapperLayout,
        ]}
      >
        <Text style={[styles.explainTheCurrent, styles.isItGoodTypo]}>
          Explain the current stock market trend
        </Text>
      </View>
      <View
        style={[
          styles.isItGoodToInvestInStockWrapper,
          styles.stockWrapperLayout,
        ]}
      >
        <Text style={[styles.isItGood, styles.isItGoodLayout]}>
          Is it good to invest in stock market or Real estate
        </Text>
      </View>
      <Pressable
        style={[styles.helloAiBotHowAreYouTodaParent, styles.ai2ItemBg]}
        onPress={() => navigation.navigate("Ai2")}
      >
        <Text
          style={[styles.helloAiBot, styles.botTypo]}
        >{`Hello AI Bot, how are
 you today?`}</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector19.png")}
        />
      </Pressable>
      <Image
        style={styles.ai2Child}
        resizeMode="cover"
        source={require("../assets/rectangle-325.png")}
      />
      <Text style={[styles.aiBot, styles.botTypo]}>AI BOT</Text>
      <Image
        style={styles.robot224dpFfffffFill0WghtIcon}
        resizeMode="cover"
        source={require("../assets/robot-2-24dp-ffffff-fill0-wght300-grad0-opsz24-5.png")}
      />
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-left7.png")}
        />
      </Pressable>
      <View style={[styles.ai2Item, styles.ai2ItemBg]} />
      <Text style={[styles.hii, styles.hiiClr]}>Hii!</Text>
      <View style={[styles.ai2Inner, styles.stockWrapperLayout]} />
      <Text style={[styles.usuallyAskedQuestions, styles.hiiClr]}>
        Usually asked questions:
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stockWrapperLayout: {
    width: 323,
    left: 20,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  isItGoodTypo: {
    textAlign: "left",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  isItGoodLayout: {
    width: 290,
    fontFamily: FontFamily.poppinsRegular,
  },
  ai2ItemBg: {
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  botTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  hiiClr: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  explainTheCurrent: {
    top: -1,
    left: 11,
    width: 312,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkcyan,
  },
  explainTheCurrentStockMarkWrapper: {
    top: 355,
    height: 53,
    overflow: "hidden",
  },
  isItGood: {
    top: 9,
    left: 22,
    textAlign: "left",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  isItGoodToInvestInStockWrapper: {
    top: 430,
    height: 72,
    overflow: "hidden",
  },
  helloAiBot: {
    top: 2,
    left: 15,
    color: Color.colorGainsboro_100,
    width: 290,
    fontFamily: FontFamily.poppinsRegular,
  },
  vectorIcon: {
    height: "39.46%",
    width: "9.54%",
    top: "30.27%",
    right: "3.48%",
    bottom: "30.27%",
    left: "86.99%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  helloAiBotHowAreYouTodaParent: {
    top: 692,
    left: 5,
    width: 345,
    height: 74,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    backgroundColor: Color.schemesOnPrimary,
  },
  ai2Child: {
    top: 0,
    left: 0,
    width: 360,
    height: 152,
    position: "absolute",
  },
  aiBot: {
    marginLeft: -39,
    top: 113,
    left: "50%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.schemesOnPrimary,
  },
  robot224dpFfffffFill0WghtIcon: {
    top: 51,
    left: 150,
    width: 60,
    height: 60,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeft: {
    left: 17,
    top: 26,
    width: 40,
    height: 29,
    position: "absolute",
  },
  ai2Item: {
    top: 163,
    left: 16,
    borderRadius: Border.br_mini,
    width: 125,
    height: 73,
  },
  hii: {
    top: 175,
    left: 42,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.montserratRegular,
    width: 80,
    height: 61,
  },
  ai2Inner: {
    top: 297,
    height: 40,
  },
  usuallyAskedQuestions: {
    top: 303,
    left: 81,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_100,
  },
  ai2: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Ai1;
