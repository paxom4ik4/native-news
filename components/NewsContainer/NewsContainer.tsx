import React, { useContext } from "react";
import { Button, ScrollView, StyleSheet, View, Text } from "react-native";
import NewsItem from "../NewsItem";
import { context, functionsContext, INewsItem } from "../../App";

interface NewsContainerProps {
  navigation: any;
}

const NewsContainer: React.FC<NewsContainerProps> = ({ navigation }) => {
  const news = useContext<Array<INewsItem>>(context);
  const { setCurrentNews }: any = useContext(functionsContext);

  return (
    <ScrollView style={styles.newsContainer}>
      {news.length === 0 ? (
        <Text>No Such News</Text>
      ) : (
        news.map((item, id) => (
          <View key={id.toString()}>
            <NewsItem newsItem={item} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginHorizontal: 15,
              }}
            >
              <Button
                title="Full article"
                color="#000"
                onPress={() => {
                  setCurrentNews(item);
                  navigation.navigate("article");
                }}
              />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    height: "80%",
  },
});

export default NewsContainer;
