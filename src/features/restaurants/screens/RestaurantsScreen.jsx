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
  padding: 16px;
`;

const RestaurantContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export default RestaurantsScreen;
