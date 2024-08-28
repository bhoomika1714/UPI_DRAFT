const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Cards9 from "./screens/Cards9";
import IncomeDetails from "./screens/IncomeDetails";
import SETTINGSANDPREFERNECEPAGE from "./screens/SETTINGSANDPREFERNECEPAGE";
import QrCode6 from "./screens/QrCode6";
import DataAnalysis9 from "./screens/DataAnalysis9";
import Rewards1 from "./screens/Rewards1";
import MakePayment1 from "./screens/MakePayment1";
import ReferralPage from "./screens/ReferralPage";
import Notifications3 from "./screens/Notifications3";
import StatYear2 from "./screens/StatYear2";
import Selectbank from "./screens/Selectbank";
import Bankorwallet8 from "./screens/Bankorwallet8";
import TandC from "./screens/TandC";
import ViewStatement5 from "./screens/ViewStatement5";
import AmexCard1 from "./screens/AmexCard1";
import Settings9 from "./screens/Settings9";
import GraphicalOverview from "./screens/GraphicalOverview";
import Succes1 from "./screens/Succes1";
import RechargeAndBills from "./screens/RechargeAndBills";
import Seleconloan from "./screens/Seleconloan";
import Bankkpage from "./screens/Bankkpage";
import ForgotPassword from "./screens/ForgotPassword";
import Feedback from "./screens/Feedback";
import Transactions from "./screens/Transactions";
import BankLoan from "./screens/BankLoan";
import Ai from "./screens/Ai";
import Offers from "./screens/Offers";
import VerifyAcc from "./screens/VerifyAcc";
import PermissionsPage from "./screens/PermissionsPage";
import Pockets6 from "./screens/Pockets6";
import Help7 from "./screens/Help7";
import Year6 from "./screens/Year6";
import SETTINGSANDPREFERNECEPAGE1 from "./screens/SETTINGSANDPREFERNECEPAGE1";
import Application from "./screens/Application";
import Congrats from "./screens/Congrats";
import Ai1 from "./screens/Ai1";
import TransactionDetails from "./screens/TransactionDetails";
import Incomedetails1 from "./screens/Incomedetails1";
import MyCardsBalance from "./screens/MyCardsBalance";
import StatementYear from "./screens/StatementYear";
import TermCondition from "./screens/TermCondition";
import Life from "./screens/Life";
import LoginPage from "./screens/LoginPage";
import AboutUS from "./screens/AboutUS";
import QrCode9 from "./screens/QrCode9";
import HomeScroll from "./screens/HomeScroll";
import Rewards2 from "./screens/Rewards2";
import Investment from "./screens/Investment";
import GraphYear from "./screens/GraphYear";
import Trains from "./screens/Trains";
import AddMoney from "./screens/AddMoney";
import Rewards from "./screens/Rewards";
import Ai2 from "./screens/Ai2";
import MobileRecharge from "./screens/MobileRecharge";
import Insurance from "./screens/Insurance";
import History1 from "./screens/History1";
import Ai21 from "./screens/Ai21";
import StatementOverview from "./screens/StatementOverview";
import DataAnalysis10 from "./screens/DataAnalysis10";
import Map1 from "./screens/Map1";
import Personaldetails from "./screens/Personaldetails";
import Register from "./screens/Register";
import Authentication from "./screens/Authentication";
import Mastercard from "./screens/Mastercard";
import CardsPage from "./screens/CardsPage";
import Travel from "./screens/Travel";
import Login from "./screens/Login";
import QrCode8 from "./screens/QrCode8";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
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
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cards2"
              component={Cards9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IncomeDetails"
              component={IncomeDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SETTINGSANDPREFERNECEPAGE"
              component={SETTINGSANDPREFERNECEPAGE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QrCode1"
              component={QrCode6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataAnalysis7"
              component={DataAnalysis9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards1"
              component={Rewards1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakePayment10"
              component={MakePayment1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReferralPage"
              component={ReferralPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications7"
              component={Notifications3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatYear1"
              component={StatYear2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Selectbank"
              component={Selectbank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bankorwallet2"
              component={Bankorwallet8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TandC"
              component={TandC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewStatement"
              component={ViewStatement5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AmexCard3"
              component={AmexCard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings3"
              component={Settings9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GraphicalOverview1"
              component={GraphicalOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Succes2"
              component={Succes1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RechargeAndBills"
              component={RechargeAndBills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Seleconloan"
              component={Seleconloan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bankkpage"
              component={Bankkpage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankLoan"
              component={BankLoan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai"
              component={Ai}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Offers"
              component={Offers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyAcc"
              component={VerifyAcc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PermissionsPage"
              component={PermissionsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pockets7"
              component={Pockets6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Help4"
              component={Help7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Year1"
              component={Year6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SETTINGSANDPREFERNECEPAGE1"
              component={SETTINGSANDPREFERNECEPAGE1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Application"
              component={Application}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Congrats"
              component={Congrats}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai1"
              component={Ai1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetails"
              component={TransactionDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Incomedetails2"
              component={Incomedetails1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCardsBalance"
              component={MyCardsBalance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatementYear"
              component={StatementYear}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermCondition"
              component={TermCondition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Life"
              component={Life}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUS"
              component={AboutUS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QrCode9"
              component={QrCode9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScroll"
              component={HomeScroll}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards2"
              component={Rewards2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Investment"
              component={Investment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GraphYear"
              component={GraphYear}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trains"
              component={Trains}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddMoney"
              component={AddMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards"
              component={Rewards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai2"
              component={Ai2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileRecharge"
              component={MobileRecharge}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Insurance"
              component={Insurance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History1"
              component={History1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ai21"
              component={Ai21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatementOverview"
              component={StatementOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataAnalysis10"
              component={DataAnalysis10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Personaldetails"
              component={Personaldetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authentication"
              component={Authentication}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mastercard"
              component={Mastercard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CardsPage"
              component={CardsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Travel"
              component={Travel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QrCode8"
              component={QrCode8}
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
