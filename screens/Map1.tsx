import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.map} onPress={() => navigation.navigate("Home")}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame24.png")}
            />
            <View style={styles.frame3}>
              <Image
                style={styles.rectangleIcon}
                contentFit="cover"
                source={require("../assets/rectangle.png")}
              />
            </View>
          </View>
          <Text style={styles.findingBankatmFaster}>
            Finding Bank/ATM faster and easier so you can do more
          </Text>
        </View>
        <View style={styles.frame4}>
          <Image
            style={styles.search24dp434343Fill0Wght4Icon}
            contentFit="cover"
            source={require("../assets/search-24dp-434343-fill0-wght400-grad0-opsz24-1.png")}
          />
          <Text style={styles.searchBankatm}>Search Bank/ATM</Text>
        </View>
      </View>
      <View style={styles.frame5}>
        <View style={styles.frame6}>
          <Text style={styles.yourPerfectFinding}>
            Your perfect finding ways
          </Text>
        </View>
        <View style={styles.frame7}>
          <View style={styles.frame8}>
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require("../assets/frame25.png")}
            />
            <Text style={styles.findYourBank}>{`Find your 
Bank`}</Text>
          </View>
          <View style={styles.frame9}>
            <Text style={styles.findYourAtm}>{`Find your
 ATM`}</Text>
            <View style={styles.frame10} />
            <Image
              style={styles.frame10}
              contentFit="cover"
              source={require("../assets/frame26.png")}
            />
          </View>
        </View>
        <View style={styles.frame11}>
          <View style={styles.frame12}>
            <View style={styles.frame13}>
              <Image
                style={styles.frameIcon3}
                contentFit="cover"
                source={require("../assets/frame27.png")}
              />
              <View style={styles.frame14}>
                <Text style={styles.atm}> ATM</Text>
                <View style={styles.frame15}>
                  <Text style={styles.reviews}>5 Reviews</Text>
                  <Image
                    style={styles.frameIcon4}
                    contentFit="cover"
                    source={require("../assets/frame28.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frame16}>
              <Image
                style={styles.lyraIconLocationPoint09}
                contentFit="cover"
                source={require("../assets/lyraiconlocation-point09.png")}
              />
              <Text style={styles.rajeevNagar}>Rajeev Nagar</Text>
            </View>
          </View>
          <View style={styles.frame17}>
            <View style={styles.frame18}>
              <Image
                style={styles.lyraIconLocationPoint09}
                contentFit="cover"
                source={require("../assets/lyraiconphonecall.png")}
              />
              <Text style={styles.rajeevNagar}>880 2-47110465</Text>
            </View>
            <View style={styles.frame19}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector18.png")}
              />
              <Text style={styles.rajeevNagar}>00 -00 -24 -00</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 40,
    height: 29,
    overflow: "hidden",
  },
  rectangleIcon: {
    position: "relative",
    borderRadius: 78,
    width: 100,
    height: 100,
  },
  frame3: {
    width: 100,
    height: 115,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame2: {
    width: 230,
    height: 115,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 0,
    gap: 90,
  },
  findingBankatmFaster: {
    position: "relative",
    fontSize: FontSize.size_13xl,
    lineHeight: 52,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.schemesOnPrimary,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 360,
    height: 155,
  },
  frame1: {
    backgroundColor: Color.colorDarkcyan,
    width: 360,
    height: 297,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_lg,
  },
  search24dp434343Fill0Wght4Icon: {
    position: "relative",
    width: 24,
    height: 25,
  },
  searchBankatm: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    width: 254,
  },
  frame4: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.schemesOnPrimary,
    width: 344,
    height: 44,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_sm,
  },
  frame: {
    alignSelf: "stretch",
    height: 357,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_xl,
  },
  yourPerfectFinding: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 345,
    height: 36,
  },
  frame6: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 345,
    height: 53,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  frameIcon1: {
    position: "relative",
    width: 45,
    height: 45,
    overflow: "hidden",
  },
  findYourBank: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  frame8: {
    width: 66,
    height: 90,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 13,
  },
  findYourAtm: {
    position: "absolute",
    top: 55,
    left: 0,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 67,
  },
  frame10: {
    position: "absolute",
    top: 0,
    left: 11,
    width: 45,
    height: 45,
    overflow: "hidden",
  },
  frame9: {
    position: "relative",
    width: 67,
    height: 87,
    overflow: "hidden",
  },
  frame7: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 345,
    height: 110,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 94,
    paddingTop: Padding.p_mini,
    paddingRight: 82,
    paddingBottom: Padding.p_mini,
    gap: 36,
  },
  frameIcon3: {
    position: "relative",
    width: 66,
    height: 35,
    overflow: "hidden",
  },
  atm: {
    position: "relative",
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  reviews: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkcyan,
    textAlign: "left",
    height: 19,
    marginLeft: 42,
  },
  frameIcon4: {
    position: "relative",
    width: 36,
    height: 15,
    overflow: "hidden",
    marginLeft: -119,
  },
  frame15: {
    width: 119,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -5,
  },
  frame14: {
    width: 119,
    height: 62,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame13: {
    width: 194,
    height: 62,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 8,
    marginRight: 82,
  },
  lyraIconLocationPoint09: {
    position: "relative",
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  rajeevNagar: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  frame16: {
    width: 109,
    height: 16,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_4xs,
    marginRight: 11,
  },
  frame12: {
    width: 276,
    height: 108,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: Gap.gap_6xl,
  },
  frame18: {
    width: 120,
    height: 18,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_5xs,
  },
  vectorIcon: {
    position: "relative",
    width: 15,
    height: 15,
  },
  frame19: {
    width: 116,
    height: 16,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_5xs,
    marginRight: 4,
  },
  frame17: {
    width: 120,
    height: 39,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_3xs,
  },
  frame11: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.schemesOnPrimary,
    width: 345,
    height: 198,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 20,
    gap: Gap.gap_3xs,
  },
  frame5: {
    width: 346,
    height: 397,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: 1,
    gap: Gap.gap_3xl,
  },
  map: {
    position: "relative",
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 23,
  },
});

export default Map1;
