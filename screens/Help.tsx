import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Help = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.help2}>
      <View style={styles.frame}>
        <Text style={styles.whatIfPayment}>
          What if payment is successful but the money has not reached the
          receiver?
        </Text>
        <View style={styles.frame1}>
          <Text
            style={styles.upayitOnlyRecords}
          >{`UpayIt only records a payment as
successful when we obtain
confirmation from the recipient’s
bank that the funds have been 
received. For UPI payments, banks 
quickly transfer the funds into 
the recipient’s account. Kindly request that the 
recipient look for a deposit confirmation on the 
pertinent bank account statement.
Note: To make sure you’ve paid the money to the 
right account, please review the payment details 
in the History section. `}</Text>
          <Text style={styles.text}>{`
`}</Text>
        </View>
        <Pressable
          style={styles.aboutUs}
          onPress={() => navigation.navigate("AboutUS")}
        >
          <Text style={styles.aboutUs1}>About Us</Text>
        </Pressable>
      </View>
      <View style={styles.frame2}>
        <View style={styles.frame3}>
          <View style={styles.barstopBarsv4}>
            <View style={styles.barsstatusBariphonelight}>
              <View style={styles.battery}>
                <View style={styles.border} />
                <Image
                  style={styles.capIcon}
                  resizeMode="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={styles.cellularConnectionIcon}
                resizeMode="cover"
                source={require("../assets/cellular-connection.png")}
              />
              <View style={styles.timeStyle}>
                <Text style={styles.time}>9:41</Text>
              </View>
            </View>
            <Image
              style={styles.iconL}
              resizeMode="cover"
              source={require("../assets/-icon--l.png")}
            />
          </View>
          <View style={styles.frame4}>
            <Text style={styles.help}>Help</Text>
          </View>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whatIfPayment: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    width: 355,
    height: 90,
    marginLeft: 14,
  },
  upayitOnlyRecords: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 366,
  },
  text: {
    position: "absolute",
    top: 228,
    left: 63,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
  },
  frame1: {
    width: 366,
    height: 480,
    overflow: "hidden",
    marginLeft: 18,
  },
  aboutUs1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 102,
    height: 49,
  },
  aboutUs: {
    height: 49,
    marginLeft: 129,
  },
  frame: {
    position: "absolute",
    top: 130,
    left: 0,
    width: 384,
    height: 647,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 14,
  },
  border: {
    position: "absolute",
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    borderWidth: 1,
    width: 22,
    height: 11,
    opacity: 0.35,
  },
  capIcon: {
    position: "absolute",
    top: 4,
    right: 0,
    width: 1,
    height: 4,
  },
  capacity: {
    position: "absolute",
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.miscellaneousFloatingTabTextUnselected,
    width: 18,
    height: 7,
  },
  battery: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    position: "relative",
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 16,
    height: 11,
  },
  time: {
    position: "absolute",
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "center",
    width: 54,
  },
  timeStyle: {
    position: "absolute",
    top: 7,
    left: 21,
    width: 54,
    height: 21,
  },
  barsstatusBariphonelight: {
    position: "absolute",
    height: "44%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "56%",
    left: "0%",
    display: "none",
  },
  iconL: {
    position: "absolute",
    marginTop: 10,
    top: "50%",
    left: 316,
    width: 24,
    height: 24,
    display: "none",
  },
  barstopBarsv4: {
    position: "relative",
    backgroundColor: Color.colorDarkcyan,
    width: 360,
    height: 100,
    zIndex: 0,
  },
  help: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.schemesOnPrimary,
    textAlign: "center",
  },
  frame4: {
    position: "absolute",
    marginLeft: -27,
    top: 19,
    left: "50%",
    height: 60,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  frameIcon: {
    position: "absolute",
    top: 19,
    left: 21,
    width: 40,
    height: 62,
    overflow: "hidden",
    zIndex: 2,
  },
  frame3: {
    width: 360,
    height: 100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  frame2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  help2: {
    position: "relative",
    backgroundColor: Color.stateLayersOutlineOpacity08,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Help;
