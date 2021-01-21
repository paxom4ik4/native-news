import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

const AppHeader: React.FC = () => {
  return (
    <Header
      backgroundColor="#445BB3"
      leftComponent={{ icon: "sort", color: "#fff" }}
      centerComponent={{ text: "News", style: { color: "#fff", fontSize: 16 } }}
    />
  );
};

export default AppHeader;
