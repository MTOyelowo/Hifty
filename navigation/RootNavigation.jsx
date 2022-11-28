import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator, View } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";

import MarketScreen from "../screens/MarketScreen";
import CategoryScreen from "../screens/CategoryScreen";
import AccountScreen from "../screens/AccountScreen";
import MyBusinessScreen from "../screens/MyBusinessScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MyBusinessPage from "../screens/MyBusinessPage";
import BusinessScreen from "../screens/BusinessScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Navigation() {
  return <RootNavigation />;
}

const RootStack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Business"
        component={BusinessScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MyBusinessPage"
        component={MyBusinessPage}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Market"
      screenOptions={{
        tabBarActiveTintColor: "#D15859",
        tabBarInactiveTintColor: "#F1D8D7",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "white",
          height: 50,
        },
        tabBarItemStyle: { padding: 5 },
        tabBarIconStyle: {},
      }}
    >
      <BottomTab.Screen
        name="Tracking"
        component={MyBusinessScreen}
        options={{
          title: "Tracking",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="business-time" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          title: "Market",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-group" size={40} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bubbles" size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
