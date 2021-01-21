import React, { useState, useEffect, createContext } from "react";
import "react-native-gesture-handler";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppHeader from "./components/Header";
import NewsContainer from "./components/NewsContainer";
import Search from "./components/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsItemPage from "./components/NewsItemPage";

export interface INewsItem {
  [key: string]: string;
}

const Stack = createStackNavigator();

export const context = createContext<Array<INewsItem>>([{}]);
const { Provider } = context;

export const functionsContext = createContext({});

export default function App() {
  const [news, setNews] = useState<INewsItem[]>([]);
  const [currentNews, setCurrentNews] = useState<object>({});
  const [isItemPage, setIsItemPage] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>("economy");
  // API DATA
  const _apiKey = "d949b013141e46be8acd84b5e252c079";
  const _apiBase = "https://newsapi.org/v2/everything";

  useEffect(() => {
    fetch(`${_apiBase}?q=economy&apiKey=${_apiKey}`).then((res) =>
      res
        .json()
        .then((data) => setNews(data.articles))
        .catch((err) => setNews([]))
    );
  }, []);

  useEffect(() => {
    if (searchWord.trim() === "") {
      return;
    }
    fetch(`${_apiBase}?q=${searchWord}&apiKey=${_apiKey}`).then((res) =>
      res.json().then((data) => setNews(data.articles))
    );
  }, [searchWord]);

  const contextValue = news;

  const Stack = createStackNavigator();

  console.log(currentNews);

  const MainScreen = ({ navigation }: any) => {
    return (
      <React.Fragment>
        <Search setSearchWord={setSearchWord} />
        <NewsContainer navigation={navigation} />
      </React.Fragment>
    );
  };
  return (
    <Provider value={contextValue}>
      <functionsContext.Provider value={{ currentNews, setCurrentNews }}>
        <NavigationContainer>
          <SafeAreaProvider style={{ backgroundColor: "#ecf0f1" }}>
            <Stack.Navigator>
              <Stack.Screen
                name="News"
                component={MainScreen}
                options={{
                  title: "News",
                  headerStyle: {
                    backgroundColor: "#445BB3",
                    height: 60,
                  },
                }}
              />
              <Stack.Screen
                name="article"
                component={NewsItemPage}
                options={{
                  title: "",
                  headerStyle: {
                    backgroundColor: "#445BB3",
                    height: 60,
                  },
                }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </functionsContext.Provider>
    </Provider>
  );
}
