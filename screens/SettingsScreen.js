import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Общие</Text>
          <View style={styles.item}>
            <Text style={styles.itemText}>Тёмная тема</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#f0f0f0", true: "#ababe8ff" }}
              thumbColor={darkMode ? "#fff" : "#f4f3f4"}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Уведомления</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: "#f0f0f0", true: "#ababe8ff" }}
              thumbColor={notifications ? "#fff" : "#f4f3f4"}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Аккаунт</Text>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="person-outline" size={22} color="#ababe8ff" />
            <Text style={styles.linkText}>Редактировать профиль</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="lock-closed-outline" size={22} color="#ababe8ff" />
            <Text style={styles.linkText}>Сменить пароль</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Информация</Text>
          <TouchableOpacity style={styles.item}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#ababe8ff"
            />
            <Text style={styles.linkText}>О приложении</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color="#ababe8ff" />
            <Text style={styles.backText}>Назад</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <Ionicons name="exit-outline" size={22} color="#fff" />
          <Text style={styles.logoutText}>Выйти из аккаунта</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingBottom: 40,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  linkText: {
    fontSize: 16,
    color: "#ababe8ff",
    marginLeft: 10,
  },
  logoutBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    paddingVertical: 12,
    backgroundColor: "#ababe8ff",
    borderRadius: 10,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ababe8ff",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 8,
  },
  backText: {
    color: "#ababe8ff",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
