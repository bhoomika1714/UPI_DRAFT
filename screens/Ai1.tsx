import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Ai1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ai}>
      <Image
        style={[styles.aiChild, styles.aiChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-323.png")}
      />
      <Text style={styles.welcomeToOur}>Welcome to our AI bot!</Text>
      <Image
        style={styles.robot224dpFfffffFill0WghtIcon}
        contentFit="cover"
        source={require("../assets/robot-2-24dp-ffffff-fill0-wght300-grad0-opsz24-3.png")}
      />
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left3.png")}
        />
      </Pressable>
      <View style={[styles.aiItem, styles.aiItemLayout]} />
      <Text style={[styles.wereExcitedTo, styles.tapOnMicClr]}>
        We're excited to assist you with personalized support and insights to
        enhance your experience with our app.
      </Text>
      <View style={[styles.aiInner, styles.aiItemLayout]} />
      <Pressable
        style={styles.image}
        onPress={() => navigation.navigate("Ai2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image13.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.aiItemBg]}
        onPress={() => navigation.navigate("Ai21")}
      />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame10.png")}
      />
      <Text style={styles.typeToGet}>Type to get answes</Text>
      <Text style={[styles.tapOnMic, styles.tapOnMicClr]}>
        Tap on mic to get quick answers
      </Text>
      <Image
        style={[styles.whatsappImage20240817At2, styles.aiChildLayout]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240817-at-224229-c348e263-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aiChildLayout: {
    width: 360,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  aiItemLayout: {
    width: 345,
    left: 8,
  },
  tapOnMicClr: {
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  aiItemBg: {
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
  },
  aiChild: {
    top: 0,
    left: 0,
    height: 172,
  },
  welcomeToOur: {
    top: 76,
    left: 45,
    fontSize: FontSize.size_13xl,
    color: Color.schemesOnPrimary,
    width: 281,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  robot224dpFfffffFill0WghtIcon: {
    top: 15,
    left: 150,
    width: 60,
    height: 60,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 13,
    top: 22,
    width: 40,
    height: 29,
    position: "absolute",
  },
  aiItem: {
    top: 218,
    height: 142,
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
    borderRadius: Border.br_mini,
    width: 345,
    left: 8,
  },
  wereExcitedTo: {
    top: 228,
    height: 132,
    fontSize: FontSize.size_xl,
    width: 345,
    left: 8,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  aiInner: {
    top: 378,
    height: 200,
    backgroundColor: Color.schemesOnPrimary,
    position: "absolute",
    borderRadius: Border.br_mini,
    width: 345,
    left: 8,
  },
  image: {
    left: 155,
    top: 400,
    width: 50,
    height: 50,
    position: "absolute",
  },
  rectanglePressable: {
    top: 618,
    left: 14,
    borderRadius: Border.br_11xl,
    width: 344,
    height: 44,
  },
  frameIcon: {
    top: 628,
    left: 29,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  typeToGet: {
    top: 629,
    left: 64,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    width: 254,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  tapOnMic: {
    top: 475,
    left: 33,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 306,
    height: 87,
  },
  whatsappImage20240817At2: {
    top: 709,
    left: 1,
    height: 91,
  },
  ai: {
    backgroundColor: Color.stateLayersSurfaceVariantOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Ai1;
