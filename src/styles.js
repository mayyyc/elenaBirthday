import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  dark: "#202529",
  gray: "#77828c",
  light: "#F3F5F8",
  yellow: "#F2DD72",
  pink: "#FF665A"
};

export const Header = styled.div`
  font-size: 150%;
  margin-bottom: 20px;
`;
const ButtonStyles = css`
  color: ${colors.yellow};
  display: block;
  border: 1px solid ${colors.yellow};
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 10px;
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: ${colors.dark};
    background-color: ${colors.yellow};
  }
`;
export const StyledButton = styled.div`
  ${ButtonStyles}
`;
export const StyledButtonLink = styled(Link)`
  ${ButtonStyles}
`;
const LinkStyles = css`
  color: ${colors.gray};
  display: block;
  text-decoration: underline;
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: ${colors.light};
  }
`;
export const StyledLink = styled(Link)`
  ${LinkStyles}
`;
export const StyledLinkDiv = styled.div`
  ${LinkStyles}
`;
export const InputStyles = css`
  outline: none;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${colors.yellow};
  color: ${colors.yellow};
  padding: 5px;
`;
