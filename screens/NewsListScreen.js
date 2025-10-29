import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const news = [
  {
    id: 1,
    title: "Кот украл сосиску и устроил забастовку",
    category: "Кошачьи проделки",
    image:
      "https://i.pinimg.com/736x/c1/54/79/c154796df60c40f087c805f44e56ac87.jpg",
    description: "Пушистый бунтарь требует увеличение пайки",
    date: "2 часа назад",
    likes: 156,
  },
  {
    id: 2,
    title: "Собака научилась открывать холодильник",
    category: "Собачьи хитрости",
    image:
      "https://i.pinimg.com/736x/d4/b8/d1/d4b8d154872411dc06cf860150e072a2.jpg",
    description: "Хозяева в шоке от кулинарных способностей питомца",
    date: "5 часов назад",
    likes: 203,
  },
  {
    id: 3,
    title: "Кот открыл собственный ресторан",
    category: "Ресторанный бизнес",
    image:
      "https://i.pinimg.com/736x/62/30/f6/6230f6c937ebbf861432084bab421a6d.jpg",
    description: "Меню состоит исключительно из рыбных блюд",
    date: "3 дня назад",
    likes: 289,
  },
];

export default function NewsListScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Новости</Text>
      </View>

      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.newsCard}
            onPress={() => navigation.navigate("NewsDetail", { news: item })}
          >
            <View style={styles.cardContent}>
              <View style={styles.textContent}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <Text style={styles.subtitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.date}>{item.date}</Text>
                  <View style={styles.likesContainer}>
                    <Ionicons name="heart" size={16} color="#ff6b6b" />
                    <Text style={styles.likesText}>{item.likes}</Text>
                  </View>
                </View>
              </View>
              {item.image && (
                <Image source={{ uri: item.image }} style={styles.newsImage} />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ababe8ff",
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  category: { fontSize: 14, color: "#666" },
  listContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  newsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContent: {
    flex: 1,
    marginRight: 12,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#ababe8ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 24,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
});
