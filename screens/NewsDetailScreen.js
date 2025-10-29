import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewsDetailScreen({ route, navigation }) {
  const { news } = route.params;

  const getFullContent = (id) => {
    const contents = {
      1: `В одном из домов произошел беспрецедентный случай - кот по кличке Барсик устроил настоящую забастовку после того, как хозяин отказался дать ему вторую сосиску.\n\n"Он просто сел посреди кухни, сложил лапки и начал смотреть на меня таким взглядом, что я почувствовал себя настоящим угнетателем", - рассказывает хозяин Михаил.\n\nЗабастовка длилась 3 часа, после чего Барсик все же получил желаемое. Теперь в доме действует новое правило: "Две сосиски - или забастовка!"`,

      2: `Золотистый ретривер по кличке Бадди шокировал своих хозяев, самостоятельно научившись открывать холодильник. Теперь семья регулярно находит следы "ночных набегов" на продукты.\n\n"Мы сначала думали, что это домовой, но камеры показали, что это Бадди! Он особенно любит сыр и колбасу", - смеется хозяйка Анна.\n\nСейчас семья рассматривает вариант установки специального замка на холодильник, но Бадди, кажется, уже придумал план "Б".`,

      3: `Необычный инцидент произошел в городском автобусе, где кот по кличке Васька занял место водителя и отказался его покидать.\n\n"Он уселся так уверенно, словно всю жизнь ждал этого момента. Пассажиры были в восторге!", - рассказывает кондуктор.\n\nВаська продержался на своем посту 15 минут, после чего сошел на своей остановке. Теперь водители этого маршрута шутят, что у них появился "пушистый напарник".`,

      4: `В истории автоинспекции произошло беспрецедентное событие - собака породы корги официально получила водительские права.\n\n"Он сдал теорию с первого раза, а на практике показал себя лучше многих людей", - заявил инструктор автошколы.\n\nПравда, есть одно ограничение - водить машину пес может только в сопровождении человека, так как не дотягивается до педалей. Но это, по его словам, "временные трудности".`,

      5: `В центре города открылся необычный ресторан "Мур-Мур", владельцем которого является кот по кличке Гарфилд. Основное меню заведения состоит из рыбных блюд.\n\n"Наш шеф-повар очень требователен к качеству рыбы. Если ему что-то не нравится, он просто уходит и ложится спать", - рассказывает управляющий (человек).\n\nНесмотря на своеобразный подход к работе, ресторан пользуется популярностью, особенно среди любителей кошек.`,
    };
    return contents[id] || "Полный текст новости скоро появится...";
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{news.title}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Заголовок и категория */}
        <View style={styles.headerSection}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{news.category}</Text>
          </View>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.description}>{news.description}</Text>
        </View>

        {/* Изображение новости */}
        {news.image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: news.image }} style={styles.newsImage} />
          </View>
        )}

        {/* Контент новости */}
        <View style={styles.contentSection}>
          <Text style={styles.contentText}>{getFullContent(news.id)}</Text>
        </View>

        {/* Статистика и дата */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.statText}>{news.date}</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="eye-outline" size={16} color="#666" />
              <Text style={styles.statText}>{news.likes + 245} просмотров</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="heart" size={16} color="#ff6b6b" />
              <Text style={styles.statText}>{news.likes} лайков</Text>
            </View>
          </View>
        </View>

        {/* Кнопки действий */}
        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="heart-outline" size={20} color="#ff6b6b" />
            <Text style={styles.actionText}>Нравится</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-social-outline" size={20} color="#ababe8ff" />
            <Text style={styles.actionText}>Поделиться</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="bookmark-outline" size={20} color="#666" />
            <Text style={styles.actionText}>Сохранить</Text>
          </TouchableOpacity>
        </View>

        {/* Похожие новости */}
        <View style={styles.relatedSection}>
          <Text style={styles.relatedTitle}>Похожие новости</Text>
          <Text style={styles.relatedText}>
            Еще больше смешных историй о животных вы найдете в разделе
            &quot;Кошачьи проделки&quot; и &quot;Собачьи хитрости&quot;
          </Text>
        </View>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#fff" />
          <Text style={styles.backText}>Назад</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ababe8ff",
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  contentContainer: {
    paddingBottom: 40,
  },
  headerSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    margin: 16,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#ababe8ff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 12,
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 32,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    fontStyle: "italic",
  },
  imageContainer: {
    margin: 16,
    marginVertical: 8,
  },
  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  contentSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    margin: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  statsSection: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    margin: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 6,
  },
  actionsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    margin: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  actionText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 6,
  },
  relatedSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    margin: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  relatedText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  backBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    paddingVertical: 12,
    backgroundColor: "#ababe8ff",
    borderRadius: 10,
  },
  backText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
