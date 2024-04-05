import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";

const CardSkin = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardTitle = styled(Card.Title)``;

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
      <CardSkin elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <CardTitle
          title={name}
          titleStyle={{ color: theme.colors.ui.success }}
        />
      </CardSkin>
    </View>
  );
};

export default RestaurantInfo;
