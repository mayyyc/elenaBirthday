import React, { Component, Fragment } from "react";
import { Container, Header, Content, Footer, colors, StyledLink } from "./styles";
import styled from "styled-components";
import CountUp from "react-countup";
import Countdown from "react-countdown-now";
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
const BoldText = styled.div`
  font-size: 200%;
  text-align: center;
  color: ${colors.yellow};
`;
const PageAction = styled.span`
  cursor: pointer;
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
        <Countdown
          date={1565343000000}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed)
              return (
                <Fragment>
                  <Header className="header">
                    <CountUp end={reasonCount} duration={2} />
                    {` `}Reasons <br />
                    Why Elena Is Amazing
                  </Header>
                  <Content className="content-item">
                    {currentReason && <Reason reason={currentReason} />}
                  </Content>
                  <Page className="content-item">
                    <PageAction onClick={this.goToPrev}>{`<`}</PageAction>
                    {` ${currentIndex + 1} / ${reasonCount} `}
                    <PageAction onClick={this.goToNext}>{`>`}</PageAction>
                  </Page>
                </Fragment>
              );
            return (
              <Fragment>
                <Header className="header">Coming Soon</Header>
                <Content className="content-item">
                  <BoldText>
                    {days} d {hours} h {minutes} m {seconds} s
                  </BoldText>
                </Content>
              </Fragment>
            );
          }}
        />
        <Footer className="content-item">
          <StyledLink to="/">I'd like to tell Elena she's amazing too</StyledLink>
        </Footer>
      </Container>
    );
  }
}
