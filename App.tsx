const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Register from "./screens/Register";
import SETTINGSANDPREFERNECEPAGE1 from "./screens/SETTINGSANDPREFERNECEPAGE1";
import Help from "./screens/Help";
import Rewards from "./screens/Rewards";
import Bankorwallet from "./screens/Bankorwallet";
import MobileRecharge1 from "./screens/MobileRecharge1";
import Offers from "./screens/Offers";
import MyCardsBalance1 from "./screens/MyCardsBalance1";
import LoginPage from "./screens/LoginPage";
import Help2 from "./screens/Help2";
import SETTINGSANDPREFERNECEPAGE from "./screens/SETTINGSANDPREFERNECEPAGE";
import BANKBALANCE from "./screens/BANKBALANCE";
import BankLoan from "./screens/BankLoan";
import Map11 from "./screens/Map11";
import Incomedetails1 from "./screens/Incomedetails1";
import Mastercard from "./screens/Mastercard";
import Life from "./screens/Life";
import Notifications1 from "./screens/Notifications1";
import Succes from "./screens/Succes";
import TermCondition from "./screens/TermCondition";
import DataAnalysis2 from "./screens/DataAnalysis2";
import StatementOverview from "./screens/StatementOverview";
import AboutUS from "./screens/AboutUS";
import TermCondition1 from "./screens/TermCondition1";
import StatementYear from "./screens/StatementYear";
import History2 from "./screens/History2";
import CardsPage from "./screens/CardsPage";
import Rewards1 from "./screens/Rewards1";
import ReferralPage from "./screens/ReferralPage";
import Ai from "./screens/Ai";
import Cards from "./screens/Cards";
import DataAnalysis1 from "./screens/DataAnalysis1";
import Bankkpage from "./screens/Bankkpage";
import LoginPage1 from "./screens/LoginPage1";
import Login from "./screens/Login";
import DataAnalysis from "./screens/DataAnalysis";
import Year from "./screens/Year";
import AddMoney1 from "./screens/AddMoney1";
import Selectbank from "./screens/Selectbank";
import Ai2 from "./screens/Ai2";
import Rewards3 from "./screens/Rewards3";
import PermissionsPage from "./screens/PermissionsPage";
import VerifyAcc from "./screens/VerifyAcc";
import QrCode3 from "./screens/QrCode3";
import ViewStatement from "./screens/ViewStatement";
import Settings from "./screens/Settings";
import Application from "./screens/Application";
import GraphicalOverview from "./screens/GraphicalOverview";
import TandC from "./screens/TandC";
import Insurance from "./screens/Insurance";
import IncomeDetails from "./screens/IncomeDetails";
import Rewards2 from "./screens/Rewards2";
import Ai1 from "./screens/Ai1";
import Personaldetails from "./screens/Personaldetails";
import Pockets1 from "./screens/Pockets1";
import AmexCard from "./screens/AmexCard";
import QrCode2 from "./screens/QrCode2";
import Seleconloan from "./screens/Seleconloan";
import RechargeAndBills from "./screens/RechargeAndBills";
import Ai3 from "./screens/Ai3";
import MakePayment from "./screens/MakePayment";
import Authentication1 from "./screens/Authentication1";
import Trains from "./screens/Trains";
import ForgotPassword from "./screens/ForgotPassword";
import Travel from "./screens/Travel";
import TransactionDetails from "./screens/TransactionDetails";
import GraphYear from "./screens/GraphYear";
import QrCode from "./screens/QrCode";
import Map2 from "./screens/Map2";
import Congrats from "./screens/Congrats";
import TermCondition2 from "./screens/TermCondition2";
import Feedback from "./screens/Feedback";
import StatYear from "./screens/StatYear";
import Map4 from "./screens/Map4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
    "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "InriaSerif-Regular": require("./assets/fonts/InriaSerif-Regular.ttf"),
    "Glory-Regular": require("./assets/fonts/Glory-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="PermissionsPage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Home1"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SETTINGSANDPREFERNECEPAGE1"
              component={SETTINGSANDPREFERNECEPAGE1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards"
              component={Rewards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bankorwallet"
              component={Bankorwallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileRecharge"
              component={MobileRecharge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Offers"
              component={Offers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCardsBalance"
              component={MyCardsBalance1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Help1"
              component={Help2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SETTINGSANDPREFERNECEPAGE"
              component={SETTINGSANDPREFERNECEPAGE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BANKBALANCE"
              component={BANKBALANCE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankLoan"
              component={BankLoan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Incomedetails2"
              component={Incomedetails1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mastercard"
              component={Mastercard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Life1"
              component={Life}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Succes"
              component={Succes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermCondition"
              component={TermCondition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataAnalysis2"
              component={DataAnalysis2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatementOverview"
              component={StatementOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUS"
              component={AboutUS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermCondition1"
              component={TermCondition1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatementYear"
              component={StatementYear}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History1"
              component={History2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CardsPage"
              component={CardsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards1"
              component={Rewards1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReferralPage"
              component={ReferralPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai"
              component={Ai}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cards"
              component={Cards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataAnalysis1"
              component={DataAnalysis1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bankkpage"
              component={Bankkpage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage1"
              component={LoginPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataAnalysis"
              component={DataAnalysis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Year"
              component={Year}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddMoney"
              component={AddMoney1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Selectbank"
              component={Selectbank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai2"
              component={Ai2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards3"
              component={Rewards3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PermissionsPage"
              component={PermissionsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyAcc"
              component={VerifyAcc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QrCode3"
              component={QrCode3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewStatement"
              component={ViewStatement}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Application"
              component={Application}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GraphicalOverview1"
              component={GraphicalOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TandC"
              component={TandC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Insurance"
              component={Insurance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IncomeDetails"
              component={IncomeDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards2"
              component={Rewards2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai1"
              component={Ai1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Personaldetails"
              component={Personaldetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pockets"
              component={Pockets1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AmexCard"
              component={AmexCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QrCode2"
              component={QrCode2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Seleconloan"
              component={Seleconloan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RechargeAndBills"
              component={RechargeAndBills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai3"
              component={Ai3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakePayment"
              component={MakePayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authentication"
              component={Authentication1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trains1"
              component={Trains}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Travel"
              component={Travel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetails"
              component={TransactionDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GraphYear"
              component={GraphYear}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QrCode1"
              component={QrCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map3"
              component={Map2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Congrats"
              component={Congrats}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermCondition2"
              component={TermCondition2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatYear"
              component={StatYear}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map4"
              component={Map4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LoginPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
