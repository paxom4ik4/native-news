import React, { useContext } from "react";
import { View, Image, Text, Button, ScrollView } from "react-native";
import { Card } from "react-native-elements";

import { functionsContext, INewsItem } from "../../App";

interface NewsItemPageProps {
  navigation: any;
}

const NewsItemPage: React.FC<NewsItemPageProps> = ({ navigation }) => {
  const { currentNews }: any = useContext(functionsContext);
  return (
    <ScrollView>
      <Card>
        <Card.Title>{currentNews.title}</Card.Title>
        <View>
          <Text style={{ fontSize: 14, marginVertical: 5 }}>
            {currentNews.author}
          </Text>
        </View>
        <View>
          <Image
            style={{ height: 200 }}
            source={{ uri: currentNews.urlToImage }}
          ></Image>
          <Text style={{ marginVertical: 15 }}>{currentNews.content}</Text>
          <Card.Divider />
          <Text style={{ marginVertical: 5 }}>{currentNews.description}</Text>
        </View>
        <Text>{currentNews.publishedAt}</Text>
      </Card>
    </ScrollView>
  );
};

export default NewsItemPage;
