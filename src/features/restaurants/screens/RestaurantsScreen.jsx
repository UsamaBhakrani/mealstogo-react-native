import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import SearchBar from "../../../components/SearchBar";
import RestaurantInfo from "../components/RestaurantCard";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";
const topHeight = StatusBar.currentHeight;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantContainer>
        <RestaurantInfo />
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
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export default RestaurantsScreen;
