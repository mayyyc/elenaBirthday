import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header, StyledLink } from "./styles";
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header>Is Elena amazing? </Header>
        <StyledLink to="/why">Yes, Elena is amazing.</StyledLink>
        <StyledLink to="/why">No, Elena is more than amazing.</StyledLink>
        <StyledLink to="/reasons">{this.props.reasonCount} reasons why Elena is amazing</StyledLink>
      </React.Fragment>
    );
  }
}
