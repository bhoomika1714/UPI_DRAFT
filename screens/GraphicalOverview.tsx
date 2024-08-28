import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GraphicalOverview = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.graphicalOverview, styles.iconLayout1]}>
      <Image
        style={[styles.image33Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-33.png")}
      />
      <Image
        style={[styles.image34Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-34.png")}
      />
      <Image
        style={[styles.image35Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-35.png")}
      />
      <Image
        style={[styles.image36Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-36.png")}
      />
      <Text style={styles.saveToGoogle}>{`Save to Google         
`}</Text>
      <Text style={[styles.drive, styles.linkTypo]}>Drive</Text>
      <Text style={[styles.shareDownload, styles.deleteItNowTypo]}>
        share download
      </Text>
      <Text style={[styles.link, styles.linkTypo]}>{`link
`}</Text>
      <Text style={[styles.saveTo, styles.saveToTypo]}> Save to</Text>
      <Text style={[styles.dropbox, styles.saveToTypo]}> dropbox</Text>
      <Text style={[styles.deleteItNow, styles.deleteItNowTypo]}>
        Delete it now
      </Text>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <View style={[styles.graphicalOverviewChild, styles.graphicalBg]} />
      <View style={[styles.graphicalOverviewItem, styles.graphicalBg]} />
      <Text style={[styles.graphicalRepresentation, styles.january2021Typo]}>
        {" "}
        Graphical Representation
      </Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("ViewStatement")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrow-left7.png")}
        />
      </Pressable>
      <Text style={[styles.january2021, styles.january2021Typo]}>
        {" "}
        January 2021
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 609,
    position: "absolute",
  },
  linkTypo: {
    top: 652,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  deleteItNowTypo: {
    height: 10,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  saveToTypo: {
    width: 86,
    left: 197,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  graphicalBg: {
    backgroundColor: Color.colorDarkcyan,
    position: "absolute",
  },
  january2021Typo: {
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  image33Icon: {
    left: 28,
  },
  image34Icon: {
    left: 124,
  },
  image35Icon: {
    left: 220,
  },
  image36Icon: {
    left: 299,
  },
  saveToGoogle: {
    left: 10,
    width: 80,
    textAlign: "left",
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    top: 641,
    height: 20,
    position: "absolute",
  },
  drive: {
    left: 22,
    width: 63,
    height: 14,
  },
  shareDownload: {
    left: 110,
    width: 87,
    top: 641,
  },
  link: {
    left: 134,
    width: 46,
    height: 12,
  },
  saveTo: {
    height: 8,
    top: 641,
  },
  dropbox: {
    top: 651,
    height: 15,
  },
  deleteItNow: {
    top: 645,
    left: 282,
    width: 74,
  },
  imageIcon: {
    top: 206,
    left: 3,
    borderRadius: Border.br_8xs,
    width: 350,
    height: 350,
    position: "absolute",
  },
  graphicalOverviewChild: {
    top: 108,
    left: 33,
    borderRadius: Border.br_11xl,
    width: 287,
    height: 58,
  },
  graphicalOverviewItem: {
    top: 0,
    left: 0,
    width: 356,
    height: 49,
  },
  graphicalRepresentation: {
    top: 6,
    left: 21,
    width: 324,
    height: 49,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrowLeft: {
    left: "-3.33%",
    top: "-0.75%",
    right: "89.44%",
    bottom: "94.5%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  january2021: {
    top: 120,
    left: 57,
    width: 242,
    height: 33,
  },
  graphicalOverview: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
  },
});

export default GraphicalOverview;
