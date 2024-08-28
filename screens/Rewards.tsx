import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Rewards = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rewards}>
      <View style={[styles.rewardsChild, styles.arrowLeftPosition]} />
      <Pressable
        style={[styles.arrowLeft, styles.arrowLeftPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left16.png")}
        />
      </Pressable>
      <View style={[styles.rewardsItem, styles.footerIconPosition]} />
      <Image
        style={styles.rewardsInner}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Rewards1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-121.png")}
      />
      <Image
        style={styles.rewardsChild1}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Text
        style={[styles.totalCashbackWon, styles.rewards1FlexBox]}
      >{`Total Cashback Won   $ 17.99
Last Updated 2 mins ago`}</Text>
      <Image
        style={[styles.footerIcon, styles.footerIconPosition]}
        contentFit="cover"
        source={require("../assets/footer.png")}
      />
      <Text style={[styles.rewards1, styles.rewards1FlexBox]}>{`Rewards
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLeftPosition: {
    left: -1,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    width: "100%",
  },
  footerIconPosition: {
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    width: 331,
    height: 105,
    position: "absolute",
  },
  rewards1FlexBox: {
    textAlign: "left",
    color: Color.schemesOnPrimary,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rewardsChild: {
    top: 0,
    backgroundColor: Color.colorTeal_200,
    width: 362,
    height: 120,
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft: {
    top: 17,
    width: 40,
    height: 29,
  },
  rewardsItem: {
    top: 2,
    backgroundColor: Color.colorMidnightblue,
    width: 360,
    height: 148,
    display: "none",
  },
  rewardsInner: {
    top: 159,
    left: 12,
    width: 334,
    height: 105,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  wrapper: {
    left: 9,
    top: 274,
  },
  rectangleIcon: {
    top: 394,
    left: 15,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  rewardsChild1: {
    top: 529,
    left: 18,
    width: 332,
    height: 97,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  totalCashbackWon: {
    top: 64,
    left: 46,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    width: 245,
    height: 56,
  },
  footerIcon: {
    top: 723,
    width: 368,
    height: 77,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
  },
  rewards1: {
    marginLeft: -135.3,
    top: 13,
    left: "50%",
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 145,
    height: 67,
  },
  rewards: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 801,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
});

export default Rewards;
