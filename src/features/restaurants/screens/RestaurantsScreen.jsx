import React from "react";
import { Platform, SafeAreaView, StatusBar, FlatList } from "react-native";
import SearchBar from "../../../components/SearchBar";
import RestaurantInfo from "../components/RestaurantCard";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";

const isAndroid = Platform.OS === "android";
const topHeight = StatusBar.currentHeight;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantContainer>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ backgroundColor: theme.colors.bg.primary }}
          showsVerticalScrollIndicator={false}
        />
      </RestaurantContainer>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${topHeight && `margin-top:${topHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export default RestaurantsScreen;
