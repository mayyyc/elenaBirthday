import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  dark: "#202529",
  gray: "#77828c",
  light: "#F3F5F8",
  yellow: "#F2DD72",
  pink: "#FF665A"
};

export const Container = styled.div`
  position: relative;
  height: 100%;
  max-width: 400px;
  margin: auto;
`;

export const Header = styled.div`
  font-size: 150%;
  position: absolute;
  top: 15%;
  @media screen and (max-height: 568px) {
    top: 8%;
  }
  text-align: center;
  width: 100%;
`;
export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Footer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const ButtonStyles = css`
  color: ${colors.yellow};
  display: block;
  border: 1px solid ${colors.yellow};
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-align: center;
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
  caret-color: ${colors.yellow};
`;

export const hideScrollBar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
