import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  search: {
    borderWidth: 1,
    padding: isAndroid ? 16 : null,
    backgroundColor: isAndroid ? "green" : "yellow",
    borderColor: "white",
  },
  list: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    padding: isAndroid ? 16 : null,
    backgroundColor: "blue",
  },
});
