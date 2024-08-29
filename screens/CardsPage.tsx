import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CardsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardsPage}>
      <Pressable
        style={[styles.cardsPageChild, styles.cardsLayout]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      />
      <Pressable
        style={[styles.cardsPageItem, styles.cardsLayout]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      />
      <Text style={[styles.axisBank, styles.bankTypo1]}> Axis Bank</Text>
      <Text style={[styles.text, styles.textTypo2]}>2456 2456 2456 2456</Text>
      <Text style={[styles.text1, styles.textTypo1]}>30,000</Text>
      <Image
        style={[styles.bankLogosSmall, styles.bankLayout]}
        resizeMode="cover"
        source={require("../assets/bank-logos-small2.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.cardsLayout]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/rectangle-127.png")}
        />
      </Pressable>
      <Text style={[styles.text2, styles.textTypo]}>2456 2456 2456 2456</Text>
      <Text style={[styles.text3, styles.textTypo1]}>30,000</Text>
      <Text style={[styles.iciciBank, styles.bankTypo1]}>ICICI Bank</Text>
      <Image
        style={[styles.bankLogosSmall1, styles.bankLayout]}
        resizeMode="cover"
        source={require("../assets/bank-logos-small3.png")}
      />
      <Text style={[styles.text4, styles.textTypo2]}>2456 2456 2456 2456</Text>
      <Image
        style={[styles.image26Icon, styles.bankPosition]}
        resizeMode="cover"
        source={require("../assets/image-26.png")}
      />
      <Text style={[styles.text5, styles.textTypo]}>30,000</Text>
      <Text style={[styles.stateBank, styles.bankPosition]}>State Bank</Text>
      <Image
        style={[styles.bankLogosSmall2, styles.bankPosition]}
        resizeMode="cover"
        source={require("../assets/bank-logos-small4.png")}
      />
      <Text style={styles.moreOption}>More Option</Text>
      <Text style={[styles.bank, styles.bankTypo]}> Bank</Text>
      <Text style={[styles.transfer, styles.numberTypo]}>Transfer</Text>
      <Text style={[styles.payPhone, styles.bankTypo]}>Pay Phone</Text>
      <Text style={[styles.number, styles.numberTypo]}>Number</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Pressable
          style={[styles.container, styles.frameLayout]}
          onPress={() => navigation.navigate("History1")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        <Text style={[styles.profile, styles.loanTypo]}>Profile</Text>
        <Text style={[styles.history, styles.loanTypo]}>History</Text>
        <Text style={[styles.cards, styles.homeLayout]}>Cards</Text>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </Pressable>
        <View style={[styles.frameChild, styles.homeLayout1]} />
        <Pressable
          style={[styles.rectanglePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/rectangle-35.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper1, styles.frameLayout]}
          onPress={() => navigation.navigate("MyCardsBalance")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/rectangle-331.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <Text style={[styles.loan, styles.loanTypo]}>{`Loan
`}</Text>
      </View>
      <Image
        style={styles.image32Icon}
        resizeMode="cover"
        source={require("../assets/image-32.png")}
      />
      <Image
        style={styles.cardsPageInner}
        resizeMode="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Home1")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Text style={styles.welcomeBeckyHills}>{`Welcome, Becky Hills!
`}</Text>
      <Image
        style={[styles.image20Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-20.png")}
      />
      <Pressable
        style={[styles.wrapper2, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper3, styles.wrapperLayout]}
        onPress={() => navigation.navigate("QrCode1")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper4, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Help1")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Text style={styles.cards1}>Cards</Text>
      <Image
        style={[styles.image19Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-19.png")}
      />
      <Pressable
        style={[styles.ellipsePressable, styles.wrapper5Layout]}
        onPress={() => navigation.navigate("Map3")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/ellipse-64.png")}
        />
      </Pressable>
      <Image
        style={styles.communicationPhone}
        resizeMode="cover"
        source={require("../assets/communication--phone.png")}
      />
      <Pressable
        style={[styles.wrapper5, styles.wrapper5Layout]}
        onPress={() => navigation.navigate("Map3")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/ellipse-64.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("Map4")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
      </Pressable>
      <Image
        style={styles.cardsPageChild1}
        resizeMode="cover"
        source={require("../assets/ellipse-58.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame18.png")}
      />
      <Text style={styles.text6}>30,000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsLayout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  bankTypo1: {
    height: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo2: {
    height: 4,
    fontSize: FontSize.size_9xs,
    width: 81,
    color: Color.colorWhitesmoke_400,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_6xs,
    width: 26,
    height: 4,
    color: Color.colorWhitesmoke_400,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  bankLayout: {
    height: 10,
    width: 10,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    height: 4,
    color: Color.colorWhitesmoke_400,
    fontSize: FontSize.size_9xs,
    textAlign: "left",
    position: "absolute",
  },
  bankPosition: {
    left: 259,
    position: "absolute",
  },
  bankTypo: {
    height: 9,
    top: 387,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  numberTypo: {
    width: 48,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  rectangleLayout: {
    width: 360,
    position: "absolute",
  },
  frameLayout: {
    height: 31,
    width: 25,
    position: "absolute",
  },
  homeLayout: {
    height: 20,
    color: Color.schemesOnPrimary,
  },
  loanTypo: {
    top: 44,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout1: {
    width: 38,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  wrapperLayout: {
    height: 25,
    top: 4,
    width: 20,
    position: "absolute",
  },
  wrapper5Layout: {
    height: 45,
    width: 45,
    position: "absolute",
  },
  cardsPageChild: {
    left: 13,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_3xs,
    top: 182,
    width: 100,
  },
  cardsPageItem: {
    left: 252,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_3xs,
    top: 182,
    width: 100,
  },
  axisBank: {
    top: 200,
    left: 10,
    color: "#f4e9e9",
    width: 97,
  },
  text: {
    top: 219,
    left: 21,
  },
  text1: {
    top: 245,
    left: 54,
    width: 26,
  },
  bankLogosSmall: {
    top: 186,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_3xs,
  },
  wrapper: {
    left: 135,
    top: 180,
  },
  text2: {
    top: 218,
    left: 144,
    width: 81,
    fontFamily: FontFamily.interRegular,
  },
  text3: {
    top: 249,
    left: 183,
    width: 26,
  },
  iciciBank: {
    top: 199,
    left: 141,
    color: "#faf2f2",
    width: 84,
  },
  bankLogosSmall1: {
    top: 187,
    left: 139,
    position: "absolute",
    overflow: "hidden",
  },
  text4: {
    top: 216,
    left: 262,
  },
  image26Icon: {
    top: 235,
    height: 10,
    width: 10,
  },
  text5: {
    top: 238,
    left: 274,
    width: 26,
  },
  stateBank: {
    top: 197,
    color: "#eee2e2",
    width: 93,
    height: 13,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    left: 259,
  },
  bankLogosSmall2: {
    top: 190,
    height: 10,
    width: 10,
    overflow: "hidden",
  },
  moreOption: {
    top: 292,
    textDecoration: "underline",
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_3xs,
    left: 297,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    height: 100,
    width: 100,
    position: "absolute",
  },
  bank: {
    left: 112,
    width: 33,
  },
  transfer: {
    top: 396,
    left: 110,
  },
  payPhone: {
    left: 206,
    width: 63,
  },
  number: {
    top: 398,
    height: 5,
    left: 209,
  },
  container: {
    left: 234,
    top: 11,
  },
  home: {
    left: 31,
    width: 38,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
    top: 43,
    textAlign: "left",
  },
  profile: {
    left: 286,
    width: 42,
    height: 20,
    color: Color.schemesOnPrimary,
  },
  history: {
    left: 223,
    width: 47,
    height: 20,
    color: Color.schemesOnPrimary,
  },
  cards: {
    left: 93,
    width: 38,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_smi,
    top: 43,
    textAlign: "left",
  },
  frame: {
    left: 38,
    top: 11,
  },
  frameChild: {
    left: 95,
    backgroundColor: Color.colorTurquoise,
    height: 32,
    top: 11,
    borderRadius: Border.br_3xs,
  },
  rectanglePressable: {
    left: 292,
    top: 13,
  },
  wrapper1: {
    left: 101,
    top: 11,
  },
  vectorIcon: {
    left: 168,
    top: 11,
  },
  loan: {
    left: 162,
    width: 75,
    height: 29,
    color: Color.colorWhitesmoke_400,
    top: 44,
  },
  rectangleParent: {
    top: 723,
    left: 4,
    backgroundColor: Color.colorDarkslategray_100,
    height: 77,
    overflow: "hidden",
  },
  image32Icon: {
    top: 445,
    left: 83,
    width: 194,
    height: 224,
    position: "absolute",
  },
  cardsPageInner: {
    top: 66,
    left: 430,
    width: 21,
    height: 132,
    position: "absolute",
  },
  rectangleView: {
    top: 0,
    left: 0,
    height: 154,
    backgroundColor: Color.colorDarkcyan,
  },
  ellipseIcon: {
    top: 50,
    left: 34,
    width: 80,
    height: 80,
    position: "absolute",
  },
  icon5: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "1.94%",
    top: "1%",
    right: "89.72%",
    bottom: "97.13%",
    width: "8.33%",
    height: "1.88%",
    position: "absolute",
  },
  welcomeBeckyHills: {
    left: 119,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    textAlign: "center",
    width: 233,
    height: 89,
    top: 43,
    color: Color.colorWhitesmoke_400,
    position: "absolute",
  },
  image20Icon: {
    top: 154,
    left: 307,
  },
  wrapper2: {
    left: 251,
  },
  wrapper3: {
    left: 287,
  },
  wrapper4: {
    left: 320,
  },
  cards1: {
    top: 159,
    left: 19,
    width: 111,
    height: 16,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkcyan,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  image19Icon: {
    top: 155,
    left: 333,
  },
  ellipsePressable: {
    top: 340,
    left: 209,
  },
  communicationPhone: {
    top: 350,
    left: 220,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  wrapper5: {
    left: 105,
    top: 339,
  },
  vector1: {
    left: "30.56%",
    top: "43.13%",
    right: "60.53%",
    bottom: "52.69%",
    width: "8.92%",
    height: "4.19%",
    position: "absolute",
  },
  cardsPageChild1: {
    top: 234,
    left: 17,
    width: 28,
    height: 28,
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.33%",
    width: "4.39%",
    top: "29.75%",
    right: "89.22%",
    bottom: "67.93%",
    left: "6.39%",
    position: "absolute",
  },
  frameIcon: {
    top: 229,
    left: 140,
    width: 155,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  text6: {
    top: 250,
    left: 297,
    fontFamily: FontFamily.interRegular,
    width: 26,
    fontSize: FontSize.size_6xs,
    height: 4,
    color: Color.colorWhitesmoke_400,
    textAlign: "left",
    position: "absolute",
  },
  cardsPage: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default CardsPage;
