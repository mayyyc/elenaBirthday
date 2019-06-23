import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  dark: "#202529",
  gray: "#77828c",
  light: "#F3F5F8",
  yellow: "#F2DD72"
};

export const Header = styled.div`
  font-size: 150%;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: ${props => (props.primary ? colors.yellow : colors.gray)};
  display: block;
  text-decoration: ${props => (props.primary ? "none" : "underline")};
  border: ${props => (props.primary ? `1px solid ${colors.yellow}` : "none")};
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 10px;
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: ${props => (props.primary ? colors.dark : colors.light)};
    background-color: ${props => (props.primary ? colors.yellow : "none")};
  }
`;
