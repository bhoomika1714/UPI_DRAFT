import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Offers = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.offers, styles.iconTransform]}>
      <View style={[styles.offersChild, styles.offersChildPosition]} />
      <View style={[styles.offersChild, styles.offersChildPosition]} />
      <View style={[styles.offersChild, styles.offersChildPosition]} />
      <View style={[styles.rectangleView, styles.offersChildPosition]} />
      <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconTransform]}
          resizeMode="cover"
          source={require("../assets/arrow-left3.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.offersChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-322.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
      <Text style={[styles.transactions, styles.homeTypo]}>Transactions</Text>
      <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
      <Image
        style={[styles.accountCircleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/account-circle.png")}
      />
      <Image
        style={[styles.checkSquareIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/check-square.png")}
      />
      <View style={[styles.offersChild1, styles.iconChildPosition]} />
      <Image
        style={[styles.offersChild2, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <Image
        style={[styles.offersChild3, styles.offersChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-322.png")}
      />
      <Image
        style={[styles.offersChild4, styles.offersChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-322.png")}
      />
      <Image
        style={[styles.offersChild5, styles.offersChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-322.png")}
      />
      <Image
        style={[styles.abhibuss1Icon, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/abhibuss-1.png")}
      />
      <Text style={[styles.abhibus, styles.nykaaTypo]}>Abhibus</Text>
      <Text style={[styles.saveUptoRs500, styles.get40DicountTypo]}>
        Save upto Rs.500 on Abhibus Spot
      </Text>
      <Image
        style={[styles.playArrowIcon, styles.playIconLayout]}
        resizeMode="cover"
        source={require("../assets/play-arrow3.png")}
      />
      <Text style={styles.offers1}>Offers</Text>
      <Image
        style={[styles.offersChild6, styles.myntra1IconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Text style={[styles.makeMyTrip, styles.nykaaTypo]}>Make my Trip</Text>
      <Text style={[styles.getInstantDiscount, styles.discountTypo]}>
        Get Instant discount of upto Rs.2500 using the code
      </Text>
      <Image
        style={[styles.playArrowIcon1, styles.playIconPosition]}
        resizeMode="cover"
        source={require("../assets/play-arrow4.png")}
      />
      <Image
        style={[styles.nykaaaa1Icon, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/nykaaaa-1.png")}
      />
      <Text style={[styles.nykaa, styles.nykaaTypo]}>NYKAA</Text>
      <Text style={[styles.get20Discount, styles.discountTypo]}>
        Get 20% discount on purchase above Rs.799
      </Text>
      <Image
        style={[styles.playArrowIcon2, styles.playIconPosition]}
        resizeMode="cover"
        source={require("../assets/play-arrow4.png")}
      />
      <Image
        style={[styles.myntra1Icon, styles.myntra1IconPosition]}
        resizeMode="cover"
        source={require("../assets/myntra-1.png")}
      />
      <Text style={[styles.myntra, styles.nykaaTypo]}>Myntra</Text>
      <Text style={[styles.get40Dicount, styles.get40DicountTypo]}>
        Get 40% dicount on purchase worth Rs.1999
      </Text>
      <Image
        style={[styles.playArrowIcon3, styles.playIconLayout]}
        resizeMode="cover"
        source={require("../assets/play-arrow4.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/frame-141.png")}
      />
      <Image
        style={[styles.httpslottiefilescomanimatIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/httpslottiefilescomanimationsgiftsandrewardsugnsuqksxg.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconTransform: {
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    width: "100%",
    overflow: "hidden",
  },
  offersChildPosition: {
    height: 148,
    backgroundColor: Color.colorMidnightblue,
    top: 2,
    position: "absolute",
  },
  offersChildLayout: {
    height: 116,
    width: 330,
    borderRadius: Border.br_mini,
    left: "50%",
    marginLeft: -163,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  homeTypo: {
    textAlign: "center",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 774,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    top: 729,
    width: 40,
  },
  iconPosition: {
    left: 221,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  iconChildPosition: {
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  nykaaTypo: {
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  get40DicountTypo: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  playIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  myntra1IconPosition: {
    width: 57,
    left: 43,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  discountTypo: {
    height: 47,
    left: 131,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  playIconPosition: {
    left: 320,
    height: 24,
    width: 24,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  offersChild: {
    left: 0,
    width: 360,
  },
  rectangleView: {
    left: -14,
    width: 374,
  },
  icon: {
    height: "100%",
  },
  arrowLeft: {
    left: 7,
    height: 29,
    width: 40,
    top: 27,
    position: "absolute",
  },
  rectangleIcon: {
    top: 590,
  },
  home: {
    left: 44,
  },
  profile: {
    left: 304,
  },
  transactions: {
    left: 198,
  },
  cards: {
    left: 125,
  },
  accountCircleIcon: {
    left: 306,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  checkSquareIcon: {
    height: 40,
    top: 729,
    width: 40,
    overflow: "hidden",
  },
  offersChild1: {
    top: 210,
    left: 14,
    width: 331,
    height: 105,
  },
  offersChild2: {
    top: -3,
    left: -56,
    width: 582,
    height: 151,
  },
  offersChild3: {
    top: 172,
  },
  offersChild4: {
    top: 452,
  },
  offersChild5: {
    top: 311,
  },
  abhibuss1Icon: {
    top: 217,
    width: 52,
    height: 36,
    left: 44,
  },
  abhibus: {
    top: 199,
    height: 12,
    width: 152,
    left: 125,
  },
  saveUptoRs500: {
    top: 231,
    left: 130,
    height: 58,
    width: 152,
  },
  playArrowIcon: {
    top: 223,
    left: 322,
  },
  offers1: {
    left: 33,
    fontSize: FontSize.size_11xl,
    width: 136,
    height: 23,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    top: 27,
    position: "absolute",
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
  },
  offersChild6: {
    top: 353,
    height: 36,
  },
  makeMyTrip: {
    top: 331,
    left: 129,
    width: 178,
    height: 21,
  },
  getInstantDiscount: {
    top: 365,
    width: 173,
  },
  playArrowIcon1: {
    top: 367,
  },
  nykaaaa1Icon: {
    top: 507,
    left: 52,
    width: 44,
    height: 36,
  },
  nykaa: {
    top: 468,
    left: 138,
    height: 13,
    width: 152,
  },
  get20Discount: {
    top: 501,
    width: 170,
  },
  playArrowIcon2: {
    top: 497,
  },
  myntra1Icon: {
    top: 628,
    height: 43,
  },
  myntra: {
    top: 599,
    left: 148,
    width: 130,
    height: 30,
  },
  get40Dicount: {
    top: 633,
    left: 136,
    width: 167,
    height: 44,
  },
  playArrowIcon3: {
    top: 626,
    left: 319,
  },
  frameIcon: {
    top: 721,
    left: -1,
    width: 371,
    height: 77,
    overflow: "hidden",
  },
  httpslottiefilescomanimatIcon: {
    top: 10,
    width: 146,
    height: 149,
  },
  offers: {
    backgroundColor: Color.stateLayersOutlineVariantOpacity08,
    flex: 1,
    height: 800,
  },
});

export default Offers;
