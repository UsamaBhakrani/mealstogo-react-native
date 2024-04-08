import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/Spacer";

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
  flex-direction: row;
`;

const OpenContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = ["https://picsum.photos/700"],
    address = "100 Street, Random Area",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
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
        <OpenContainer>
          <SvgContainer>
            {ratingArray.map((a, index) => {
              return <SvgXml key={index} xml={star} width={20} height={20} />;
            })}
          </SvgContainer>
          {isClosedTemporarily && (
            <Text style={{ color: theme.colors.ui.error }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          <Spacer position={left} size={large}>
            {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
          </Spacer>
        </OpenContainer>
      </CardSkin>
    </View>
  );
};

export default RestaurantInfo;
