import { useState } from "react";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      mode="view"
      icon={() => <AntDesign name="hearto" size={24} color="black" />}
    />
  );
};

export default SearchBar;
