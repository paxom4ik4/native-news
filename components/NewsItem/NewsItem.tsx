import React from "react";
import { Card } from "react-native-elements";
import { View, Button, Image } from "react-native";
import { withRouter } from "react-router-native";

import { INewsItem } from "../../App";

interface NewsItemProps {
  newsItem: INewsItem;
}

// const onItemPressHandler = () => {};

const NewsItem: React.FC<NewsItemProps> = ({ newsItem }) => {
  return (
    <Card>
      <Card.Title>{newsItem.title}</Card.Title>
      <View>
        <Image
          style={{ height: 200 }}
          source={{ uri: newsItem.urlToImage }}
        ></Image>
      </View>
    </Card>
  );
};

export default NewsItem;
