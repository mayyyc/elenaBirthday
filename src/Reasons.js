import React, { Fragment, Component } from "react";
import { Header, colors } from "./styles";
import styled from "styled-components";

import Reason from "./Reason";
const Page = styled.div`
  color: ${colors.gray};
  font-size: 80%;
`;

export default class Reasons extends Component {
  state = {
    currentIndex: 0
  };
  render() {
    const { currentIndex } = this.state;
    const { reasons } = this.props;
    const reasonCount = reasons.length;
    const currentReason = reasons[currentIndex];
    return (
      <Fragment>
        <Header>
          {reasonCount} Reasons <br />
          Why Elena Is Amazing
        </Header>
        {currentReason && <Reason reason={currentReason} />}
        <Page>{`${currentIndex + 1} / ${reasonCount}`}</Page>
      </Fragment>
    );
  }
}
