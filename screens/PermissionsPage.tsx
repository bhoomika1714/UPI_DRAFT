import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const PermissionsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.permissionsPage}>
      <Text style={styles.transaction}>Transaction</Text>
      <Text style={[styles.homeee, styles.homeeeTypo]}>{`Homeee
`}</Text>
      <Text style={[styles.profile, styles.homeeeTypo]}>{`Profile
`}</Text>
      <View style={styles.whatsappImage20240801At2} />
      <Image
        style={styles.permissionsPageChild}
        resizeMode="cover"
        source={require("../assets/rectangle-221.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.profile1, styles.historyTypo]}>Profile</Text>
      <Text style={[styles.history, styles.historyTypo]}>History</Text>
      <Text style={[styles.transac, styles.homeTypo]}>Transac...</Text>
      <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
      <Image
        style={styles.whatsappImage20240801At21}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20240801-at-215327-99b2b4d4-1.png")}
      />
      <View style={styles.permissionsPageItem} />
      <Text style={[styles.permissions, styles.permissionsFlexBox]}>
        Permissions
      </Text>
      <Pressable
        style={[styles.arrowLeft, styles.loanLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-left11.png")}
        />
      </Pressable>
      <Image
        style={[styles.helpCircleIcon, styles.loanLayout]}
        resizeMode="cover"
        source={require("../assets/help-circle.png")}
      />
      <View style={styles.permissionsPageInner} />
      <View style={[styles.rectangleView, styles.permissionsChildPosition]} />
      <Text
        style={[styles.allowUpayitTo, styles.allowTypo]}
      >{`Allow UpayIt to send SMSs (for UPI
registration) and read your transactional messages (for OTPs)
`}</Text>
      <Text style={[styles.deviceState, styles.smsTypo]}>Device State</Text>
      <Text
        style={[styles.secureUpiPayments, styles.secureUpiPaymentsPosition]}
      >
        Secure UPI Payemnts
      </Text>
      <Text
        style={[styles.allowUpayitTo1, styles.allowUpayitTo1Position]}
      >{`Allow UPayIt to access verify your device and SIM details for using UPI
payments (as mandated by NPCI)
`}</Text>
      <View style={[styles.checkboxes, styles.checkboxesFlexBox]}>
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <View style={styles.container} />
          <Image
            style={[styles.checkSmallIcon, styles.frame5Position]}
            resizeMode="cover"
            source={require("../assets/check-small.png")}
          />
        </View>
      </View>
      <View style={[styles.checkboxes1, styles.checkboxesFlexBox]}>
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <View style={styles.container} />
          <Image
            style={[styles.checkSmallIcon, styles.frame5Position]}
            resizeMode="cover"
            source={require("../assets/check-small.png")}
          />
        </View>
      </View>
      <Text style={[styles.sms, styles.smsTypo]}>SMS</Text>
      <Text
        style={[styles.billPaymentReminders, styles.secureUpiPaymentsPosition]}
      >{`Bill Payment Reminders
`}</Text>
      <Text
        style={[styles.allowUsTo, styles.allowTypo]}
      >{`Allow us to access your text messages to fetch your bills and remind you on time.
`}</Text>
      <Image
        style={[styles.checkBoxOutlineBlankIcon, styles.checkIconPosition]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank1.png")}
      />
      <View
        style={[styles.permissionsPageChild1, styles.permissionsChildPosition]}
      />
      <Image
        style={[
          styles.checkBoxOutlineBlankIcon1,
          styles.allowUpayitTo2Position,
        ]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank2.png")}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon2, styles.checkIconPosition]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank1.png")}
      />
      <Text
        style={[styles.addressContact, styles.addressContactTypo]}
      >{`Address & Contact Details`}</Text>
      <Text style={[styles.orderdeliveryByExternal, styles.addressContactTypo]}>
        OrderDelivery by External Merchants
      </Text>
      <Text
        style={[styles.allowUpayitTo2, styles.allowUpayitTo2Position]}
      >{`Allow UPayIt to share your address and contact details with merchant partners for order delivery
`}</Text>
      <View
        style={[styles.permissionsPageChild2, styles.creditInformationPosition]}
      />
      <Text
        style={[styles.creditInformation, styles.creditInformationPosition]}
      >
        Credit Information
      </Text>
      <Text
        style={styles.allowUpayitLending}
      >{`Allow UpayIt  Lending Services as your authorised representative to fetch and provide you access to your credit information from RBI-approved bureau(s) for the next six months and offer credit-related products/ services
`}</Text>
      <Image
        style={[styles.checkBoxOutlineBlankIcon3, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/check-box-outline-blank3.png")}
      />
      <View style={[styles.frameParent, styles.stateLayerFlexBox]}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={styles.frame1}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Home1")}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/rectangle-372.png")}
              />
            </Pressable>
            <Text style={[styles.home1, styles.loanTypo]}>Home</Text>
          </View>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <View style={styles.frame3}>
              <View style={[styles.frame4, styles.frameLayout1]}>
                <Pressable
                  style={styles.wrapper}
                  onPress={() => navigation.navigate("MyCardsBalance")}
                >
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/rectangle-33.png")}
                  />
                </Pressable>
                <Text style={[styles.cards1, styles.loanTypo]}>Cards</Text>
              </View>
              <View style={[styles.frame5, styles.frameLayout1]}>
                <Image
                  style={styles.wrapper}
                  resizeMode="cover"
                  source={require("../assets/vector4.png")}
                />
                <View style={styles.wrapper} />
                <Text style={[styles.transac1, styles.loanTypo]}>
                  Transac...
                </Text>
              </View>
              <Text style={[styles.loan, styles.loanLayout]}>{`Loan
`}</Text>
            </View>
            <View style={[styles.frame6, styles.frameLayout]}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("History1")}
              >
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/rectangle-341.png")}
                />
              </Pressable>
              <Text style={[styles.history1, styles.loanTypo]}>History</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame7, styles.frameLayout]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/rectangle-352.png")}
            />
          </Pressable>
          <Text style={[styles.profile2, styles.loanTypo]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeeeTypo: {
    height: 10,
    top: 505,
    width: 56,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.gloryRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  homeTypo: {
    height: 15,
    top: 500,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  historyTypo: {
    top: 501,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
    position: "absolute",
  },
  permissionsFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  loanLayout: {
    height: 29,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  permissionsChildPosition: {
    marginLeft: -165,
    width: 330,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    left: "50%",
  },
  allowTypo: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  smsTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  secureUpiPaymentsPosition: {
    left: 19,
    color: Color.colorDarkcyan,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  allowUpayitTo1Position: {
    left: 12,
    position: "absolute",
  },
  checkboxesFlexBox: {
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    position: "absolute",
  },
  stateLayerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frame5Position: {
    zIndex: 1,
    position: "absolute",
  },
  checkIconPosition: {
    left: 320,
    height: 24,
    width: 24,
    position: "absolute",
  },
  allowUpayitTo2Position: {
    top: 523,
    position: "absolute",
  },
  addressContactTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkcyan,
    textAlign: "center",
  },
  creditInformationPosition: {
    top: 614,
    position: "absolute",
  },
  checkIconLayout: {
    height: 24,
    width: 24,
  },
  frameFlexBox: {
    height: 53,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  loanTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  frameLayout1: {
    gap: Gap.gap_8xs,
    height: 52,
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout: {
    gap: Gap.gap_7xs,
    height: 53,
    alignItems: "center",
    overflow: "hidden",
  },
  transaction: {
    top: 502,
    left: -270,
    height: 11,
    width: 56,
    fontFamily: FontFamily.gloryRegular,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  homeee: {
    left: -430,
  },
  profile: {
    left: -198,
  },
  whatsappImage20240801At2: {
    top: -482,
    left: -770,
    width: 852,
    height: 1194,
    position: "absolute",
  },
  permissionsPageChild: {
    top: 476,
    left: -171,
    height: 23,
    width: 25,
    position: "absolute",
  },
  home: {
    left: -432,
    width: 38,
  },
  profile1: {
    left: -177,
    width: 42,
  },
  history: {
    left: -240,
    width: 47,
  },
  transac: {
    left: -320,
    width: 63,
  },
  cards: {
    left: -370,
    width: 38,
  },
  whatsappImage20240801At21: {
    top: -1387,
    left: -719,
    width: 605,
    height: 1600,
    position: "absolute",
  },
  permissionsPageItem: {
    left: 0,
    backgroundColor: Color.colorDarkcyan,
    width: 362,
    height: 81,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    top: 0,
    position: "absolute",
  },
  permissions: {
    top: 20,
    left: 25,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    width: 229,
    height: 47,
    color: Color.schemesOnPrimary,
    textAlign: "center",
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft: {
    left: 10,
    width: 40,
    top: 26,
    height: 29,
  },
  helpCircleIcon: {
    left: 307,
    width: 40,
    top: 26,
    height: 29,
    overflow: "hidden",
  },
  permissionsPageInner: {
    marginLeft: -166,
    top: 90,
    height: 138,
    width: 330,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    top: 238,
    height: 197,
    position: "absolute",
  },
  allowUpayitTo: {
    top: 272,
    left: 15,
    width: 274,
    height: 75,
    color: Color.colorDarkcyan,
    position: "absolute",
  },
  deviceState: {
    top: 102,
    left: 6,
    width: 178,
    height: 20,
    color: Color.colorDarkcyan,
    textAlign: "center",
    position: "absolute",
    fontSize: FontSize.size_xl,
  },
  secureUpiPayments: {
    top: 124,
    fontFamily: FontFamily.poppinsRegular,
    width: 223,
    height: 16,
  },
  allowUpayitTo1: {
    width: 292,
    height: 67,
    top: 158,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  container: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.schemesInverseOnSurface,
    width: 18,
    height: 18,
    zIndex: 0,
  },
  checkSmallIcon: {
    marginTop: -12,
    marginLeft: -12,
    top: "50%",
    height: 24,
    width: 24,
    left: "50%",
    zIndex: 1,
  },
  stateLayer: {
    borderRadius: Border.br_81xl,
    padding: Padding.p_2xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  checkboxes: {
    left: 302,
    top: 158,
  },
  checkboxes1: {
    top: 271,
    left: 299,
  },
  sms: {
    top: 237,
    left: 30,
    width: 69,
    height: 25,
    color: Color.colorDarkcyan,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  billPaymentReminders: {
    top: 337,
    width: 254,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: 23,
  },
  allowUsTo: {
    left: 18,
    width: 307,
    height: 74,
    top: 376,
    color: Color.colorDarkcyan,
    position: "absolute",
  },
  checkBoxOutlineBlankIcon: {
    top: 376,
  },
  permissionsPageChild1: {
    top: 450,
    height: 157,
    position: "absolute",
  },
  checkBoxOutlineBlankIcon1: {
    left: 315,
    height: 24,
    width: 24,
  },
  checkBoxOutlineBlankIcon2: {
    top: 662,
  },
  addressContact: {
    top: 456,
    width: 287,
    height: 31,
    left: 12,
    position: "absolute",
    fontSize: FontSize.size_xl,
  },
  orderdeliveryByExternal: {
    top: 487,
    left: 23,
    width: 270,
    height: 20,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    position: "absolute",
  },
  allowUpayitTo2: {
    left: 16,
    width: 265,
    height: 59,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  permissionsPageChild2: {
    height: 104,
    marginLeft: -165,
    width: 330,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    left: "50%",
  },
  creditInformation: {
    left: 26,
    width: 179,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkcyan,
    textAlign: "center",
    height: 20,
    fontSize: FontSize.size_xl,
  },
  allowUpayitLending: {
    top: 641,
    left: 11,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    width: 293,
    height: 65,
    fontWeight: "500",
    color: Color.colorDarkcyan,
    textAlign: "center",
    position: "absolute",
  },
  checkBoxOutlineBlankIcon3: {
    top: 633,
    left: 317,
    position: "absolute",
  },
  wrapper: {
    height: 31,
    width: 25,
  },
  home1: {
    marginTop: -2,
    height: 20,
    width: 38,
    textAlign: "left",
  },
  frame1: {
    height: 49,
    alignItems: "center",
    width: 38,
    overflow: "hidden",
  },
  cards1: {
    height: 20,
    width: 38,
    textAlign: "left",
  },
  frame4: {
    zIndex: 0,
    width: 38,
  },
  transac1: {
    height: 20,
    width: 63,
    textAlign: "left",
  },
  frame5: {
    left: 57,
    zIndex: 1,
    position: "absolute",
    top: 0,
    width: 63,
  },
  loan: {
    top: 34,
    left: 75,
    width: 75,
    zIndex: 2,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    color: Color.schemesOnPrimary,
  },
  frame3: {
    width: 113,
    gap: Gap.gap_sm,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  history1: {
    height: 20,
    width: 47,
    textAlign: "left",
  },
  frame6: {
    width: 47,
  },
  frame2: {
    width: 177,
    gap: Gap.gap_xl,
  },
  frame: {
    width: 239,
    gap: Gap.gap_4xl,
  },
  profile2: {
    height: 20,
    width: 42,
    textAlign: "left",
  },
  frame7: {
    width: 42,
  },
  frameParent: {
    top: 730,
    left: -5,
    backgroundColor: Color.colorDarkslategray_100,
    width: 371,
    height: 77,
    paddingHorizontal: Padding.p_12xl,
    paddingBottom: Padding.p_2xs,
    gap: Gap.gap_lg,
    position: "absolute",
    overflow: "hidden",
  },
  permissionsPage: {
    backgroundColor: "rgba(172, 172, 172, 0.15)",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PermissionsPage;
