import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const CategoriesScreen = ({ navigation }) => {
  const categories = [
    { id: "1", name: "Технологии", count: 24, color: "#2f95dc" },
    { id: "2", name: "Hayкa", count: 18, color: "#34c759" },
    { id: "3", name: "Искусство", count: 12, color: "#ff9500" },
    { id: "4", name: "Спорт", count: 32, color: "#ff3b30" },
    { id: "5", name: "Политика", count: 15, color: "#af52de" },
    { id: "6", name: "Экономика", count: 21, color: "#5856d6" },
    { id: "7", name: "Здоровье", count: 19, color: "#00c7be" },
    { id: "8", name: "Путешествия", count: 14, color: "#ff2d55" },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, { borderLeftColor: item.color }]}
      onPress={() => {
        alert(`Открыть категорию: ${item.name}`);
      }}
    >
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryCount}>{item.count} статей</Text>
      </View>
      <View
        style={[styles.categoryIcon, { backgroundColor: item.color + "20" }]}
      >
        <Text style={[styles.categoryIconText, { color: item.color }]}>
          {item.name.charAt(0)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 8,
  },
  listContent: {
    padding: 8,
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 12,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: "#666",
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryIconText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoriesScreen;
