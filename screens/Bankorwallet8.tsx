import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Bankorwallet8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.bankorwallet}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.frame1}>
          <View style={[styles.iconArrowLeft, styles.frame5FlexBox]}>
            <Pressable
              style={styles.group}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
            </Pressable>
            <Text style={styles.checkBalance}>Check Balance</Text>
          </View>
          <View style={[styles.frame2, styles.frameFlexBox]} />
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={styles.frame4}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame5.png")}
            />
            <View style={[styles.frame5, styles.frame5FlexBox]}>
              <Text
                style={[styles.bank, styles.bankTypo]}
              >{`Bank       `}</Text>
              <Text
                style={[styles.digitalWallets, styles.bankTypo]}
              >{`    Digital 
    Wallets     `}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame6, styles.frameLayout1]}>
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame6.png")}
        />
        <View style={[styles.frameParent, styles.frameLayout1]}>
          <View style={styles.frame7}>
            <View style={[styles.frame8, styles.frameLayout]}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("Home")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-371.png")}
                />
              </Pressable>
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
            <View style={[styles.frame8, styles.frameLayout]}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("MyCardsBalance")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-331.png")}
                />
              </Pressable>
              <Text style={[styles.home, styles.homeTypo]}>Cards</Text>
            </View>
          </View>
          <View style={styles.frame10}>
            <View style={[styles.frame11, styles.frameLayout]}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("Transactions")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-32.png")}
                />
              </Pressable>
              <Text style={[styles.transac, styles.homeTypo]}>Transac...</Text>
            </View>
            <View style={styles.frame12}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("History1")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-34.png")}
                />
              </Pressable>
              <Text style={[styles.history, styles.homeTypo]}>History</Text>
            </View>
            <View style={styles.frame13}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-351.png")}
                />
              </Pressable>
              <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    position: "absolute",
  },
  frame5FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  bankTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameLayout1: {
    width: 366,
    overflow: "hidden",
  },
  frameLayout: {
    gap: Gap.gap_7xs,
    height: 52,
    alignItems: "center",
    overflow: "hidden",
  },
  homeTypo: {
    height: 20,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontWeight: "700",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  group: {
    height: 21,
    width: 25,
  },
  checkBalance: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.poppinsBold,
    width: 281,
    height: 46,
    textAlign: "left",
    color: Color.schemesOnPrimary,
    fontWeight: "700",
  },
  iconArrowLeft: {
    width: 331,
    alignItems: "center",
  },
  frame2: {
    width: 380,
    marginLeft: -391,
    height: 46,
  },
  frame1: {
    backgroundColor: Color.colorDarkcyan,
    height: 141,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameIcon: {
    width: 167,
    height: 42,
    overflow: "hidden",
  },
  bank: {
    width: 50,
    height: 45,
  },
  digitalWallets: {
    width: 91,
    height: 53,
  },
  frame5: {
    width: 195,
    overflow: "hidden",
  },
  frame4: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    height: 159,
    paddingLeft: 85,
    paddingTop: 49,
    paddingRight: 65,
    paddingBottom: 5,
    gap: 10,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame3: {
    alignSelf: "stretch",
  },
  frame: {
    top: 0,
    width: 391,
    gap: 29,
    overflow: "hidden",
  },
  frameIcon1: {
    width: 365,
    height: 187,
    overflow: "hidden",
  },
  wrapper: {
    height: 31,
    width: 25,
  },
  home: {
    width: 38,
  },
  frame8: {
    width: 38,
  },
  frame7: {
    width: 100,
    gap: Gap.gap_5xl,
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  transac: {
    width: 63,
  },
  frame11: {
    width: 63,
  },
  history: {
    width: 47,
  },
  frame12: {
    gap: Gap.gap_6xs,
    width: 47,
    height: 53,
    alignItems: "center",
    overflow: "hidden",
  },
  profile: {
    width: 42,
  },
  frame13: {
    width: 42,
    alignItems: "center",
    overflow: "hidden",
  },
  frame10: {
    width: 185,
    gap: Gap.gap_xl,
    height: 53,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 77,
    paddingHorizontal: Padding.p_12xl,
    paddingVertical: Padding.p_2xs,
    gap: Gap.gap_md,
    flexDirection: "row",
  },
  frame6: {
    top: 407,
    height: 397,
    paddingRight: 0,
    gap: 133,
    justifyContent: "flex-end",
    left: 0,
    position: "absolute",
  },
  bankorwallet: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Bankorwallet8;
