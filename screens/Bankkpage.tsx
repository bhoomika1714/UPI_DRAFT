import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Bankkpage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bankkpage}>
      <View style={styles.bankkpageChild} />
      <Text style={[styles.helloBecklyWelcome, styles.profileFlexBox]}>
        HELLO BECKLY! WELCOME TO SBI LOANS
      </Text>
      <Image
        style={styles.image20Icon}
        resizeMode="cover"
        source={require("../assets/image-20.png")}
      />
      <Image
        style={[styles.imageIcon, styles.imageIconLayout2]}
        resizeMode="cover"
        source={require("../assets/image1.png")}
      />
      <Image
        style={[styles.imageIcon1, styles.imageIconLayout2]}
        resizeMode="cover"
        source={require("../assets/image2.png")}
      />
      <Image
        style={[styles.imageIcon2, styles.imageIconLayout2]}
        resizeMode="cover"
        source={require("../assets/image3.png")}
      />
      <Text
        style={[styles.personalizedSolutions, styles.convienientAccessTypo]}
      >{`Personalized 
Solutions`}</Text>
      <View style={[styles.bankkpageItem, styles.bankkpageLayout]} />
      <View style={[styles.bankkpageInner, styles.bankkpageLayout]} />
      <Image
        style={[styles.outlineinterfacecaretRightIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/outlineinterfacecaret-right4.png")}
      />
      <Image
        style={[styles.outlineinterfacecaretRightIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/outlineinterfacecaret-right4.png")}
      />
      <View style={[styles.rectangleView, styles.viewLayout]} />
      <Pressable
        style={[styles.image, styles.imageIconLayout]}
        onPress={() => navigation.navigate("Personaldetails")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image4.png")}
        />
      </Pressable>
      <Image
        style={[styles.imageIcon3, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image5.png")}
      />
      <Image
        style={[styles.imageIcon4, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image6.png")}
      />
      <Image
        style={[styles.imageIcon5, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image7.png")}
      />
      <Image
        style={[styles.imageIcon6, styles.imageIconPosition]}
        resizeMode="cover"
        source={require("../assets/image8.png")}
      />
      <Image
        style={[styles.imageIcon7, styles.imageIconPosition]}
        resizeMode="cover"
        source={require("../assets/image9.png")}
      />
      <View style={[styles.frameView, styles.viewLayout]} />
      <Image
        style={[styles.imageIcon8, styles.imageIconPosition]}
        resizeMode="cover"
        source={require("../assets/image10.png")}
      />
      <View style={[styles.bankkpageChild1, styles.bankkpageChildLayout]} />
      <View style={[styles.bankkpageChild2, styles.bankkpageChildLayout]} />
      <View style={[styles.bankkpageChild3, styles.bankkpageChildLayout]} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-67.png")}
      />
      <Image
        style={[styles.bankkpageChild4, styles.bankkpageChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-68.png")}
      />
      <Image
        style={[styles.bankkpageChild5, styles.bankkpageChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-69.png")}
      />
      <Image
        style={[styles.bankkpageChild6, styles.bankkpageChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-69.png")}
      />
      <View style={styles.homeParent}>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.profile, styles.goBackPosition]}>Profile</Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-373.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-353.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconThumbsUpLikeVoteN, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--thumbs-up-like-vote--negative.png")}
        />
        <Text style={[styles.feedback, styles.goBackPosition]}>Feedback</Text>
        <Image
          style={styles.iconBackArrowResetReply}
          resizeMode="cover"
          source={require("../assets/icon--back-arrow-reset-reply--neg.png")}
        />
        <Text style={[styles.goBack, styles.goBackTypo]}>Go back</Text>
        <Pressable
          style={styles.location}
          onPress={() => navigation.navigate("Application")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/location.png")}
          />
        </Pressable>
        <Text style={[styles.track, styles.homeTypo]}>Track</Text>
      </View>
      <Text style={[styles.personalLoan, styles.personalLoanTypo]}>
        Personal loan
      </Text>
      <Text
        style={[styles.lookingForSomethingContainer, styles.containerPosition]}
      >
        <Text style={styles.lookingForSomething}>{`Looking for something more?
`}</Text>
        <Text style={styles.ourTypo}>
          <Text
            style={styles.exploreOurRange}
          >{`Explore our range of financial solutions designed to
meet your unique needs`}</Text>
          <Text style={styles.text}>.</Text>
        </Text>
      </Text>
      <Text style={[styles.convienientAccess, styles.personalLoanTypo]}>
        Convienient access
      </Text>
      <Text style={[styles.fastService, styles.goBackTypo]}>Fast Service</Text>
      <Text style={[styles.x7HelpAndContainer, styles.containerPosition]}>
        <Text style={styles.lookingForSomething}>{`24x7 Help and Support
`}</Text>
        <Text
          style={[styles.ourDedicatedTeam, styles.ourTypo]}
        >{`Our dedicated team is available around the clock to
 assist you with your loan needs`}</Text>
      </Text>
      <Text style={[styles.inviteYourFriendsContainer, styles.profileFlexBox]}>
        <Text style={styles.inviteYourFriendsToSbiLoa}>
          <Text
            style={styles.inviteYourFriends}
          >{`Invite Your Friends to SBI Loans!
`}</Text>
        </Text>
        <Text style={styles.exploreOurRange}>
          <Text style={styles.inviteYourFriendsToSbiLoa}> </Text>
          <Text
            style={styles.ourTypo}
          >{`Share the benefits of SBI’s comprehensive loan solutions with your friends and
 family`}</Text>
        </Text>
      </Text>
      <Text style={[styles.businessLoan, styles.loanTypo]}>{`Business loan
`}</Text>
      <Text style={[styles.lowIncomeLoan, styles.loanTypo]}>
        Low Income loan
      </Text>
      <Text style={[styles.studentLoan, styles.loanTypo]}>Student loan</Text>
      <Text style={[styles.loanTypes, styles.profileFlexBox]}>Loan Types</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  imageIconLayout2: {
    height: 90,
    borderRadius: Border.br_3xs,
    top: 96,
    position: "absolute",
  },
  convienientAccessTypo: {
    top: 189,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsBold,
  },
  bankkpageLayout: {
    height: 1,
    width: 36,
    borderTopWidth: 1,
    borderColor: Color.colorDarkcyan,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewLayout: {
    width: 100,
    position: "absolute",
  },
  imageIconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  imageIconPosition: {
    left: 13,
    height: 50,
    width: 50,
    position: "absolute",
  },
  bankkpageChildLayout: {
    width: 254,
    backgroundColor: Color.colorPaleturquoise_100,
    left: 80,
    borderRadius: Border.br_8xs,
    height: 60,
    position: "absolute",
  },
  bankkpageChildPosition: {
    left: 14,
    height: 50,
    width: 50,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  goBackPosition: {
    top: 45,
    fontFamily: FontFamily.interBold,
  },
  wrapperLayout: {
    height: 25,
    width: 20,
    position: "absolute",
  },
  goBackTypo: {
    height: 15,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  personalLoanTypo: {
    height: 10,
    color: Color.colorDarkcyan,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  containerPosition: {
    left: 90,
    color: Color.colorDarkcyan,
    textAlign: "left",
    position: "absolute",
  },
  ourTypo: {
    fontFamily: FontFamily.poppinsExtraBoldItalic,
    fontWeight: "800",
    fontStyle: "italic",
  },
  loanTypo: {
    top: 340,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkcyan,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  bankkpageChild: {
    top: 0,
    width: 360,
    height: 60,
    backgroundColor: Color.colorDarkcyan,
    left: 0,
    position: "absolute",
  },
  helloBecklyWelcome: {
    top: 19,
    left: 9,
    fontSize: FontSize.size_base,
    width: 339,
    height: 42,
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  image20Icon: {
    top: 34,
    left: 334,
    height: 20,
    width: 20,
    position: "absolute",
  },
  imageIcon: {
    width: 90,
    height: 90,
    borderRadius: Border.br_3xs,
    top: 96,
    left: 18,
  },
  imageIcon1: {
    marginLeft: -40,
    left: "50%",
    width: 90,
    height: 90,
    borderRadius: Border.br_3xs,
    top: 96,
  },
  imageIcon2: {
    left: 251,
    width: 110,
    height: 90,
    borderRadius: Border.br_3xs,
    top: 96,
  },
  personalizedSolutions: {
    left: 267,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
    fontWeight: "700",
  },
  bankkpageItem: {
    top: 152,
    left: 108,
  },
  bankkpageInner: {
    top: 147,
    left: 216,
  },
  outlineinterfacecaretRightIcon: {
    top: "17.75%",
    right: "57.5%",
    bottom: "79.75%",
    left: "36.94%",
    width: "5.56%",
    height: "2.5%",
    maxWidth: "100%",
    position: "absolute",
  },
  outlineinterfacecaretRightIcon1: {
    top: "17%",
    right: "27.5%",
    bottom: "80.5%",
    left: "66.94%",
    width: "5.56%",
    height: "2.5%",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleView: {
    top: 241,
    left: 27,
    height: 30,
    borderRadius: Border.br_8xs,
    width: 100,
    backgroundColor: Color.colorDarkcyan,
  },
  image: {
    top: 285,
    height: 50,
    width: 50,
    left: 18,
  },
  imageIcon3: {
    top: 285,
    height: 50,
    width: 50,
    left: 108,
  },
  imageIcon4: {
    left: 209,
    top: 285,
    height: 50,
    width: 50,
  },
  imageIcon5: {
    left: 287,
    top: 285,
    height: 50,
    width: 50,
  },
  imageIcon6: {
    top: 386,
  },
  imageIcon7: {
    top: 495,
  },
  frameView: {
    top: 465,
    left: 73,
    height: 100,
    overflow: "hidden",
  },
  imageIcon8: {
    top: 601,
  },
  bankkpageChild1: {
    top: 391,
  },
  bankkpageChild2: {
    top: 498,
  },
  bankkpageChild3: {
    top: 604,
  },
  ellipseIcon: {
    top: 635,
    left: -56,
    width: 66,
    height: 61,
    position: "absolute",
  },
  bankkpageChild4: {
    top: 601,
  },
  bankkpageChild5: {
    top: 495,
  },
  bankkpageChild6: {
    top: 386,
  },
  home: {
    top: 43,
    left: 31,
    width: 38,
    height: 20,
    color: Color.schemesOnPrimary,
  },
  profile: {
    left: 238,
    width: 42,
    fontSize: FontSize.size_smi,
    height: 20,
    textAlign: "left",
    position: "absolute",
    color: Color.schemesOnPrimary,
    fontWeight: "700",
  },
  wrapper: {
    left: 40,
    top: 18,
  },
  container: {
    left: 249,
    top: 15,
  },
  iconThumbsUpLikeVoteN: {
    top: 3,
    left: 157,
  },
  feedback: {
    left: 155,
    color: Color.colorLavenderblush_100,
    width: 183,
    height: 16,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
    fontWeight: "700",
  },
  iconBackArrowResetReply: {
    top: 4,
    left: 299,
    width: 48,
    height: 48,
    position: "absolute",
  },
  goBack: {
    left: 297,
    color: Color.colorSnow_500,
    width: 74,
    top: 45,
    fontFamily: FontFamily.interBold,
  },
  icon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  location: {
    left: "28.3%",
    top: "23.38%",
    right: "66.31%",
    bottom: "39.48%",
    width: "5.39%",
    height: "37.14%",
    position: "absolute",
  },
  track: {
    top: 46,
    left: 96,
    color: Color.colorSnow_600,
    width: 69,
    height: 13,
  },
  homeParent: {
    top: 723,
    backgroundColor: Color.colorDarkslategray_100,
    width: 371,
    height: 77,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  personalLoan: {
    top: 341,
    left: 11,
    width: 87,
    fontSize: FontSize.size_2xs,
    height: 10,
    fontFamily: FontFamily.interBold,
  },
  lookingForSomething: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  exploreOurRange: {
    fontSize: FontSize.size_7xs,
  },
  text: {
    fontSize: FontSize.size_3xs,
  },
  lookingForSomethingContainer: {
    top: 401,
    width: 319,
    height: 36,
  },
  convienientAccess: {
    left: 153,
    width: 98,
    fontSize: FontSize.size_smi,
    top: 189,
    fontFamily: FontFamily.poppinsBold,
  },
  fastService: {
    top: 186,
    left: 22,
    width: 92,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.poppinsBold,
  },
  ourDedicatedTeam: {
    letterSpacing: 0.7,
    fontSize: FontSize.size_7xs,
  },
  x7HelpAndContainer: {
    top: 509,
    width: 288,
    height: 38,
  },
  inviteYourFriends: {
    fontSize: FontSize.size_smi,
  },
  inviteYourFriendsToSbiLoa: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  inviteYourFriendsContainer: {
    top: 611,
    left: 83,
    width: 345,
    height: 41,
    color: Color.colorDarkcyan,
  },
  businessLoan: {
    left: 99,
    width: 81,
    height: 9,
  },
  lowIncomeLoan: {
    left: 185,
    width: 138,
    height: 13,
  },
  studentLoan: {
    left: 285,
    width: 86,
    height: 12,
  },
  loanTypes: {
    top: 245,
    left: 38,
    color: Color.colorSnow_1000,
    width: 79,
    height: 14,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  bankkpage: {
    backgroundColor: Color.stateLayersPrimaryOpacity08,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Bankkpage;
