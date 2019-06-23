import React from "react";
import styled from "styled-components";
import { Header, StyledLink } from "./styles";

const LinkBottom = styled(StyledLink)`
  position: absolute;
  bottom: 0;
`;

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header>Is Elena amazing? </Header>
        <StyledLink primary to="/why">
          Yes, Elena is amazing
        </StyledLink>
        <StyledLink primary to="/why">
          No, Elena is more than amazing
        </StyledLink>
        <LinkBottom to="/reasons">{this.props.reasonCount} reasons why Elena is amazing</LinkBottom>
      </React.Fragment>
    );
  }
}
