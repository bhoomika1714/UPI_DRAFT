import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Ai = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.ai3, styles.ai3Layout]}>
      <Image
        style={styles.ai3Child}
        contentFit="cover"
        source={require("../assets/rectangle-321.png")}
      />
      <View
        style={[styles.helloAiBotHowAreYouTodaWrapper, styles.vectorParentBg]}
      >
        <Text
          style={[styles.helloAiBot, styles.botFlexBox]}
        >{`Hello AI Bot, how are
 you today?`}</Text>
      </View>
      <Text style={[styles.aiBot, styles.botFlexBox]}>AI BOT</Text>
      <Image
        style={[
          styles.robot224dpFfffffFill0WghtIcon,
          styles.vectorParentLayout,
        ]}
        contentFit="cover"
        source={require("../assets/robot-2-24dp-ffffff-fill0-wght300-grad0-opsz24-3.png")}
      />
      <Pressable
        style={[styles.arrowLeft, styles.arrowLeftPosition]}
        onPress={() => navigation.navigate("Ai21")}
      >
        <Image
          style={[styles.icon, styles.ai3Layout]}
          contentFit="cover"
          source={require("../assets/arrow-left3.png")}
        />
      </Pressable>
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.typeToGet, styles.botFlexBox]}>
          Type to get answes
        </Text>
      </View>
      <Image
        style={[styles.image38Icon, styles.arrowLeftPosition]}
        contentFit="cover"
        source={require("../assets/image-38.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ai3Layout: {
    width: "100%",
    overflow: "hidden",
  },
  vectorParentBg: {
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  botFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  vectorParentLayout: {
    height: 60,
    position: "absolute",
  },
  arrowLeftPosition: {
    left: 12,
    position: "absolute",
  },
  ai3Child: {
    top: 0,
    width: 360,
    height: 151,
    left: 0,
    position: "absolute",
  },
  helloAiBot: {
    top: 8,
    left: 16,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 290,
  },
  helloAiBotHowAreYouTodaWrapper: {
    top: 166,
    left: 60,
    height: 68,
    width: 290,
    position: "absolute",
  },
  aiBot: {
    marginLeft: -39,
    top: 113,
    left: "50%",
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.schemesOnPrimary,
  },
  robot224dpFfffffFill0WghtIcon: {
    top: 51,
    left: 150,
    width: 60,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    top: 18,
    width: 40,
    height: 29,
  },
  vectorIcon: {
    height: "39.5%",
    width: "9.54%",
    top: "30.33%",
    right: "3.48%",
    bottom: "30.17%",
    left: "86.99%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  typeToGet: {
    width: "73.62%",
    top: "30%",
    left: "3.48%",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  vectorParent: {
    top: 740,
    width: 345,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_xl,
    overflow: "hidden",
    left: 0,
  },
  image38Icon: {
    top: 267,
    width: 71,
    height: 27,
  },
  ai3: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default Ai;
