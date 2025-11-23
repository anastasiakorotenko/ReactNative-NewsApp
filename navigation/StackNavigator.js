import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{ title: "Детали новости" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Настройки" }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
