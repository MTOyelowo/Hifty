import { useRoute } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CategoryBusinesses from "../screens/CategoryBusinesses";
import CategoryHome from "../screens/CategoryHome";

export default function CategoryNavigation(props) {
  const info = props.data;

  return <CategoryPageTabs information={info} />;
}

const Tab = createMaterialTopTabNavigator();

function CategoryPageTabs(props) {
  const data = props.information;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "#002F47",
        tabBarIndicatorStyle: { backgroundColor: "#002F47" },
        tabBarStyle: { height: 40, backgroundColor: "transparent" },
        tabBarContentContainerStyle: { height: 40 },
      }}
    >
      <Tab.Screen name="Home" component={CategoryHome} />
      <Tab.Screen name="Businesses" component={CategoryBusinesses} />
    </Tab.Navigator>
  );
}
