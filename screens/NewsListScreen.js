import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NewsListScreen = ({ navigation }) => {
  const newsData = [
    {
      id: "1",
      title: "React Native выпустил новую версию",
      date: "15 мая 2024",
      author: "Команда React Native",
    },
    {
      id: "2",
      title: "Искусственный интеллект в мобильных приложениях",
      content:
        "ИИ продолжает революционизировать мобильную разработку. Новые фреймворки позволяют интегрировать машинное обучение...",
      date: "14 мая 2024",
      author: "Технологический обозреватель",
    },
    {
      id: "3",
      title: "Лучшие практики навигации в React Native",
      content:
        "Правильная организация навигации - ключ к успешному мобильному приложению. Рассмотрим лучшие подходы..",
      date: "13 мая 2024",
      author: "React Native Developer",
    },
    {
      id: "4",
      title: "Лучшие практики навигации в React Native",
      content:
        "Современные инструменты позволяют создавать приложения для iOS и Android из единой кодовой базы..",
      date: "12 мая 2024",
      author: "Mobile Architect",
    },
  ];

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() =>
        navigation.navigate("NewsDetail", {
          id: item.id,
          title: item.title,
          content: item.content,
          date: item.date,
          author: item.author,
        })
      }
    >
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDate}>{item.date}</Text>
        <Text style={styles.newsAuthor}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 15,
  },
  newsItem: {
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
    borderLeftColor: "#ababe8ff",
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  newsDate: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  newsAuthor: {
    fontSize: 12,
    color: "#ababe8ff",
    fontWeight: "500",
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
  },
});

export default NewsListScreen;
