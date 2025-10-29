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

const categories = [
  {
    id: 1,
    title: "Кошачьи проделки",
    description: "Самые забавные истории про котов",
    icon: "paw-outline",
    color: "#FF6B6B",
    count: 15,
    image:
      "https://i.pinimg.com/736x/38/5b/78/385b780dcbeca9f2555eba6adeaa7327.jpg",
  },
  {
    id: 2,
    title: "Собачьи хитрости",
    description: "Умные и смешные собаки",
    icon: "paw",
    color: "#4ECDC4",
    count: 12,
    image: "https://i.pinimg.com/736x/43/66/38/436638aacbfd576704dc681c7bd6dc52.jpg",
  },
  {
    id: 3,
    title: "Пушистые знаменитости",
    description: "Питомцы, покорившие интернет",
    icon: "trophy-outline",
    color: "#96CEB4",
    count: 20,
    image: "https://i.pinimg.com/736x/2e/12/d0/2e12d0992f988e081be5a10908ba2d3f.jpg",
  },
  {
    id: 4,
    title: "Смешные видео",
    description: "Лучшие моменты на видео",
    icon: "videocam-outline",
    color: "#FFEAA7",
    count: 25,
    image: "https://i.pinimg.com/736x/d4/b8/d1/d4b8d154872411dc06cf860150e072a2.jpg",
  },
];

export default function CategoriesScreen() {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    // Фильтруем новости по категории
    const categoryNews = [
      {
        id: 1,
        title: "Кот украл сосиску и устроил забастовку",
        category: category.title,
        image: null,
        description: "Пушистый бунтарь требует увеличение пайки",
        date: "2 часа назад",
        likes: 156,
      },
      {
        id: 2,
        title: "Собака научилась открывать холодильник",
        category: category.title,
        image: null,
        description: "Хозяева в шоке от кулинарных способностей питомца",
        date: "5 часов назад",
        likes: 203,
      },
    ];

    navigation.navigate("CategoryNews", {
      category: category,
      news: categoryNews,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Настройки</Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(item)}
          >
            <View style={styles.cardContent}>
              <View style={styles.textContent}>
                <View style={styles.headerRow}>
                  <View
                    style={[
                      styles.iconContainer,
                      { backgroundColor: item.color },
                    ]}
                  >
                    <Ionicons name={item.icon} size={20} color="#fff" />
                  </View>
                  <View style={styles.countBadge}>
                    <Text style={styles.countText}>{item.count}</Text>
                  </View>
                </View>

                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>

                <View style={styles.footer}>
                  <View style={styles.readMore}>
                    <Text style={styles.readMoreText}>Смотреть</Text>
                    <Ionicons
                      name="arrow-forward"
                      size={16}
                      color="#ababe8ff"
                    />
                  </View>
                </View>
              </View>

              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={styles.categoryImage}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  listContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ababe8ff",
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  categoryCard: {
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  countBadge: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  countText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
  },
  title: {
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  readMore: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  readMoreText: {
    color: "#ababe8ff",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 4,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
});
