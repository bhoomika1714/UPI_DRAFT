import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Rewards2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rewards4, styles.rewards4Transform]}>
      <View style={[styles.rewards4Child, styles.rewards4Position]} />
      <View style={[styles.rewards4Child, styles.rewards4Position]} />
      <Image
        style={[styles.rewards4Inner, styles.rewards4Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("Rewards")}
      />
      <Pressable
        style={[
          styles.backToRewardsContainer,
          styles.rectanglePressablePosition,
        ]}
        onPress={() => navigation.navigate("Rewards")}
      >
        <Text
          style={[styles.backToRewards, styles.backToRewardsFlexBox]}
        >{`BACK TO REWARDS `}</Text>
      </Pressable>
      <View style={styles.rectangleView} />
      <Text
        style={[
          styles.congratulationsYouContainer,
          styles.backToRewardsFlexBox,
        ]}
      >
        <Text style={styles.congratulations}>
          <Text style={styles.congratulations1}>{`      
      CONGRATULATIONS !!!
          You   have   availed 
               this reward 
`}</Text>
          <Text style={styles.text}>{`    
      `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.refrenceIdabcd12341}>{`Refrence ID:ABCD1234
`}</Text>
          <Text style={styles.congratulations}>{`
     `}</Text>
        </Text>
      </Text>
      <Image
        style={[styles.frameIcon, styles.rewards4Position]}
        resizeMode="cover"
        source={require("../assets/frame-143.png")}
      />
      <Image
        style={[
          styles.httpslottiefilescomanimatIcon,
          styles.rectanglePressablePosition,
        ]}
        resizeMode="cover"
        source={require("../assets/httpslottiefilescomanimationsrewardswithconfettiea78qtmu0q.png")}
      />
      <Image
        style={styles.whatsappImage20240814At0}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20240814-at-005623-1a241f1e-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rewards4Transform: {
    overflow: "hidden",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rewards4Position: {
    left: 0,
    position: "absolute",
  },
  rectanglePressablePosition: {
    left: "50%",
    position: "absolute",
  },
  backToRewardsFlexBox: {
    textAlign: "left",
    color: Color.schemesOnPrimary,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rewards4Child: {
    top: 2,
    backgroundColor: Color.colorMidnightblue,
    width: 360,
    height: 148,
  },
  rewards4Inner: {
    top: -4,
    width: 361,
    height: 204,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rectanglePressable: {
    marginLeft: -100.9,
    top: 638,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray_200,
    width: 200,
    height: 43,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  backToRewards: {
    marginLeft: -91,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    width: 189,
    height: 36,
  },
  backToRewardsContainer: {
    top: 645,
  },
  rectangleView: {
    top: 275,
    left: -62,
    backgroundColor: Color.colorDarkcyan,
    width: 487,
    height: 162,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  congratulations1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  congratulations: {
    fontSize: FontSize.size_3xl,
  },
  refrenceIdabcd12341: {
    fontSize: 19,
  },
  congratulationsYouContainer: {
    top: 248,
    left: 21,
    width: 327,
    height: 108,
    position: "absolute",
  },
  frameIcon: {
    top: 724,
    width: 371,
    height: 77,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  httpslottiefilescomanimatIcon: {
    marginLeft: -129.1,
    top: 455,
    width: 257,
    height: 152,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  whatsappImage20240814At0: {
    top: 492,
    left: 6,
    width: 364,
    height: 131,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rewards4: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    width: "100%",
    height: 801,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
});

export default Rewards2;
