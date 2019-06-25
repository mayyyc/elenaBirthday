import React from "react";
import { Container, Header, Content, Footer, StyledButtonLink, StyledLink } from "./styles";
import CountUp from "react-countup";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>Is Elena amazing? </Header>
        <Content>
          <StyledButtonLink to="/why">Yes, Elena is amazing.</StyledButtonLink>
          <StyledButtonLink to="/why">No, Elena is more than amazing.</StyledButtonLink>
        </Content>
        <Footer>
          <StyledLink to="/reasons">
            <CountUp end={this.props.reasonCount} /> reasons why Elena is amazing
          </StyledLink>
        </Footer>
      </Container>
    );
  }
}
