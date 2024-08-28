import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const PermissionsPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

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
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.profile1, styles.historyTypo]}>Profile</Text>
      <Text style={[styles.history, styles.historyTypo]}>History</Text>
      <Text style={[styles.transac, styles.homeTypo]}>Transac...</Text>
      <Text style={[styles.cards, styles.homeTypo]}>Cards</Text>
      <Image
        style={styles.whatsappImage20240801At21}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240801-at-215327-99b2b4d4-1.png")}
      />
      <View style={[styles.permissionsPageItem, styles.deviceStatePosition]} />
      <Text style={styles.permissions}>Permissions</Text>
      <Pressable
        style={[styles.arrowLeft, styles.loanLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left10.png")}
        />
      </Pressable>
      <Image
        style={[styles.helpCircleIcon, styles.loanLayout]}
        contentFit="cover"
        source={require("../assets/help-circle.png")}
      />
      <View
        style={[styles.permissionsPageInner, styles.permissionsChildLayout]}
      />
      <View style={[styles.rectangleView, styles.permissionsChildLayout]} />
      <Text
        style={[styles.allowUpayitTo, styles.allowTypo]}
      >{`Allow UpayIt to send SMSs (for UPI
registration) and read your transactional messages (for OTPs)
`}</Text>
      <Text style={[styles.deviceState, styles.smsTypo]}>Device State</Text>
      <Text style={[styles.secureUpiPayments, styles.secureUpiPaymentsTypo]}>
        Secure UPI Payemnts
      </Text>
      <Text
        style={[styles.allowUpayitTo1, styles.allowTypo]}
      >{`Allow UPayIt to access verify your device and SIM details for using UPI
payments (as mandated by NPCI)
`}</Text>
      <View style={[styles.checkboxes, styles.checkboxesFlexBox]}>
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <View style={styles.container} />
          <Image
            style={[styles.checkSmallIcon, styles.frame5Position]}
            contentFit="cover"
            source={require("../assets/check-small.png")}
          />
        </View>
      </View>
      <View style={[styles.checkboxes1, styles.checkboxesFlexBox]}>
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <View style={styles.container} />
          <Image
            style={[styles.checkSmallIcon, styles.frame5Position]}
            contentFit="cover"
            source={require("../assets/check-small.png")}
          />
        </View>
      </View>
      <Text style={[styles.sms, styles.smsPosition]}>SMS</Text>
      <Text
        style={[styles.billPaymentReminders, styles.smsPosition]}
      >{`Bill Payment Reminders
`}</Text>
      <Text
        style={[styles.allowUsTo, styles.allowTypo]}
      >{`Allow us to access your text messages to fetch your bills and remind you on time.
`}</Text>
      <Image
        style={[styles.checkBoxOutlineBlankIcon, styles.checkIconPosition]}
        contentFit="cover"
        source={require("../assets/check-box-outline-blank.png")}
      />
      <View
        style={[styles.permissionsPageChild1, styles.permissionsChildLayout]}
      />
      <Image
        style={[
          styles.checkBoxOutlineBlankIcon1,
          styles.allowUpayitTo2Position,
        ]}
        contentFit="cover"
        source={require("../assets/check-box-outline-blank1.png")}
      />
      <Image
        style={[styles.checkBoxOutlineBlankIcon2, styles.checkIconPosition]}
        contentFit="cover"
        source={require("../assets/check-box-outline-blank.png")}
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
        contentFit="cover"
        source={require("../assets/check-box-outline-blank2.png")}
      />
      <View style={[styles.frameParent, styles.stateLayerFlexBox]}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={styles.frame1}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/rectangle-373.png")}
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
                    contentFit="cover"
                    source={require("../assets/rectangle-331.png")}
                  />
                </Pressable>
                <Text style={[styles.cards1, styles.loanTypo]}>Cards</Text>
              </View>
              <View style={[styles.frame5, styles.frameLayout1]}>
                <Image
                  style={styles.wrapper}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Pressable
                  style={styles.wrapper}
                  onPress={() => navigation.navigate("Transactions")}
                />
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
                  contentFit="cover"
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
              contentFit="cover"
              source={require("../assets/rectangle-353.png")}
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
  deviceStatePosition: {
    left: 0,
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
  permissionsChildLayout: {
    width: 330,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    marginLeft: -165,
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
  secureUpiPaymentsTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
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
  smsPosition: {
    left: 30,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_xl,
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
    gap: Gap.gap_7xs,
    height: 52,
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout: {
    gap: Gap.gap_6xs,
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
    backgroundColor: Color.colorDarkcyan,
    width: 362,
    height: 81,
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    top: 0,
  },
  permissions: {
    top: 20,
    left: 25,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    width: 229,
    height: 47,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    position: "absolute",
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
    top: 93,
    height: 138,
    position: "absolute",
  },
  rectangleView: {
    top: 238,
    height: 197,
    position: "absolute",
  },
  allowUpayitTo: {
    top: 263,
    width: 263,
    height: 75,
    color: Color.colorDarkcyan,
    left: 18,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  deviceState: {
    top: 102,
    width: 178,
    height: 20,
    color: Color.colorDarkcyan,
    left: 0,
    position: "absolute",
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  secureUpiPayments: {
    top: 124,
    left: 19,
    width: 223,
    height: 12,
    color: Color.colorDarkcyan,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  allowUpayitTo1: {
    left: 12,
    width: 292,
    height: 67,
    top: 158,
    color: Color.colorDarkcyan,
    position: "absolute",
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
    width: 69,
    height: 25,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  billPaymentReminders: {
    top: 336,
    width: 235,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    height: 23,
  },
  allowUsTo: {
    width: 307,
    height: 74,
    top: 376,
    color: Color.colorDarkcyan,
    left: 18,
    fontFamily: FontFamily.montserratRegular,
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
    top: 454,
    left: -10,
    width: 326,
    height: 31,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  orderdeliveryByExternal: {
    top: 485,
    left: 29,
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
    width: 330,
    backgroundColor: Color.schemesOnPrimary,
    borderRadius: Border.br_mini,
    marginLeft: -165,
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
    gap: Gap.gap_md,
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
    gap: Gap.gap_2xl,
  },
  frame: {
    width: 239,
    gap: Gap.gap_5xl,
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
    gap: Gap.gap_xl,
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
