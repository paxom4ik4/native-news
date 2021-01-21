import React, { useState } from "react";
import { Button, View } from "react-native";
import { SearchBar } from "react-native-elements";

interface SearchProps {
  setSearchWord: (title: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchWord }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <View
      style={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      <SearchBar
        lightTheme={true}
        placeholder="Search News"
        onChangeText={setSearchValue}
        value={searchValue}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginHorizontal: 15,
        }}
      >
        <Button
          title="search"
          onPress={() => {
            setSearchWord(searchValue);
            setSearchValue("");
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Search;
