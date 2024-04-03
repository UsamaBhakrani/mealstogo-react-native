import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import SearchBar from "../../../components/SearchBar";
import RestaurantInfo from "../components/RestaurantCard";

const isAndroid = Platform.OS === "android";
const topHeight = StatusBar.currentHeight;

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: topHeight,
  },
  search: {
    borderWidth: 1,
    padding: isAndroid ? 16 : null,
    borderColor: "white",
  },
  list: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    padding: isAndroid ? 16 : null,
  },
});

export default RestaurantsScreen;
