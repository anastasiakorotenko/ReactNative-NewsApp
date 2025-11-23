import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView,Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/07/b4/56/07b4562c6a29d9829e298b75b0cc4a18.jpg",
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Анастасия Коротенко</Text>
          <Text style={styles.email}>anastasiaK2048@google.com</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>124</Text>
            <Text style={styles.statLabel}>Подписки</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>87</Text>
            <Text style={styles.statLabel}>Читатели</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>32</Text>
            <Text style={styles.statLabel}>Публикации</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="create-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Редактировать профиль</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#f9f9f9",
  },
  profileHeader: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ababe8ff",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  actions: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#ababe8ff",
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
});
