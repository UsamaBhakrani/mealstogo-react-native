import { StyleSheet, Text, View } from "react-native";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [],
    address = "100 Street, Random Area",
    isOpenNow = "",
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <View>
      <Text>RestaurantInfo</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantInfo;
