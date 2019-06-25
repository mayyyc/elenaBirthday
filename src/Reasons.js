import React, { Component } from "react";
import { Container, Header, Content, Footer, colors, StyledLink } from "./styles";
import styled from "styled-components";
import CountUp from "react-countup";
import Reason from "./Reason";
const Page = styled.div`
  color: ${colors.gray};
  font-size: 80%;
  text-align: center;
  position: absolute;
  bottom: 20%;
  @media screen and (max-height: 568px) {
    bottom: 15%;
  }
  width: 100%;
`;

export default class Reasons extends Component {
  state = {
    currentIndex: 0
  };
  goToPrev = () => {
    this.setState({
      currentIndex:
        (this.state.currentIndex + this.props.reasons.length - 1) % this.props.reasons.length
    });
  };
  goToNext = () => {
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % this.props.reasons.length
    });
  };
  render() {
    const { currentIndex } = this.state;
    const { reasons } = this.props;
    const reasonCount = reasons.length;
    const currentReason = reasons[currentIndex];
    return (
      <Container>
        <Header>
          <CountUp end={reasonCount} duration={2} />
          {` `}Reasons <br />
          Why Elena Is Amazing
        </Header>
        <Content>{currentReason && <Reason reason={currentReason} />}</Content>
        <Page>
          <span onClick={this.goToPrev}>{`<`}</span>
          {` ${currentIndex + 1} / ${reasonCount} `}
          <span onClick={this.goToNext}>{`>`}</span>
        </Page>
        <Footer>
          <StyledLink to="/">I'd like to tell Elena she's amazing too</StyledLink>
        </Footer>
      </Container>
    );
  }
}
