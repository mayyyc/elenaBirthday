import React from "react";
import styled from "styled-components";
import { Header, StyledButtonLink, StyledLink } from "./styles";

const LinkBottom = styled(StyledLink)`
  position: absolute;
  bottom: 10px;
`;

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header>Is Elena amazing? </Header>
        <StyledButtonLink to="/why">Yes, Elena is amazing.</StyledButtonLink>
        <StyledButtonLink to="/why">No, Elena is more than amazing.</StyledButtonLink>
        <LinkBottom to="/reasons">{this.props.reasonCount} reasons why Elena is amazing</LinkBottom>
      </React.Fragment>
    );
  }
}
