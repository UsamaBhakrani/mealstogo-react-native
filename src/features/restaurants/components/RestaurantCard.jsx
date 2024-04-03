import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  color: aquamarine;
  font-size: larger;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 Street, Random Area",
    isOpenNow = "",
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <View>
      <Card>
        <Card.Cover
          style={styles.cover}
          key={name}
          source={{ uri: photos[0] }}
        />
        <Card.Title title={name} />
        <Title>Hello</Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 10,
  },
});

export default RestaurantInfo;
