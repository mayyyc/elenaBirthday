import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  dark: "#202529",
  grayDark: "#32383D",
  grayLight: "#4C555C",
  light: "#F3F5F8",
  orange: "#FF8C12"
};

export const Header = styled.div`
  font-size: 150%;
`;

export const StyledLink = styled(Link)`
  color: ${colors.orange};
`;
