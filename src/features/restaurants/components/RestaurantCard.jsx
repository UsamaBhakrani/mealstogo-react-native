import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";
import { fontWeights } from "../../../infrastructure/theme/fonts";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
const CardSkin = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardTitle = styled(Card.Title)`
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.space[3]};
`;

const SvgContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
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
      <CardSkin elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <CardTitle
          title={name}
          titleStyle={{
            fontFamily: theme.fonts.body,
            color: theme.colors.ui.primary,
          }}
          subtitle={address}
          subTitleStyle={{
            fontFamily: theme.fonts.heading,
            color: theme.colors.ui.primary,
          }}
        />
        <SvgContainer>
          <SvgXml xml={star} width={30} height={30} />
        </SvgContainer>
      </CardSkin>
    </View>
  );
};

export default RestaurantInfo;
