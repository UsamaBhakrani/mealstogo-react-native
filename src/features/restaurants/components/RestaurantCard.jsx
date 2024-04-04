import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const CardSkin = styled(Card)`
  background-color: white;
`;

const CardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

const CardTitle = styled(Card.Title)`
  color: red;
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
      <CardSkin>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <CardTitle title={name} />
      </CardSkin>
    </View>
  );
};

export default RestaurantInfo;
