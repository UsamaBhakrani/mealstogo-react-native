import styled from "styled-components/native";

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

Spacer.defaultProps = {
  postion: "top",
  size: small,
};

export default Spacer;
