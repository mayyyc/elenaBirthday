import React, { Fragment, Component } from "react";
import { InputStyles, hideScrollBar } from "./styles";
import styled from "styled-components";
import moment from "moment";

const Message = styled.div`
  ${InputStyles}
  padding: 10px;
  max-height: 240px;
  overflow-y: scroll;
  ${hideScrollBar}
`;
const From = styled.div`
  font-size: 80%;
  font-weight: bold;
  margin-top: 10px;
  text-align: right;
`;
export default class Reason extends Component {
  render() {
    const { reason, name, timestamp } = this.props.reason;
    return (
      <Fragment>
        <Message>
          {reason}
          <From>
            {name || "Anonymous"}
            <br />
            {moment(Number(timestamp)).format("ll")}
          </From>
        </Message>
      </Fragment>
    );
  }
}
