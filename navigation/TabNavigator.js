import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import NewsListScreen from "../screens/NewsListScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Новости") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Категории") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Профиль") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ababe8ff",
        tabBarInactiveTintColor: "gray",
        headerRight: () => (
          <Ionicons
            name="settings-outline"
            size={24}
            color="#ababe8ff"
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate("Settings")}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Новости"
        component={NewsListScreen}
        options={{ title: "Последние новости" }}
      />
      <Tab.Screen name="Категории" component={CategoriesScreen} />
      <Tab.Screen name="Профиль" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
