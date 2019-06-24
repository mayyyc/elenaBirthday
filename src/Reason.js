import React, { Fragment, Component } from "react";
import { InputStyles, colors } from "./styles";
import styled from "styled-components";
import moment from "moment";

const Message = styled.div`
  ${InputStyles}
  width: 200px;
  text-align: left;
  margin-bottom: 20px;
`;
const Date = styled.div`
  color: ${colors.light};
  font-size: 80%;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Name = styled.div`
  text-align: center;
  margin-top: 10px;
`;
export default class Reason extends Component {
  render() {
    const { reason, name, timestamp } = this.props.reason;
    return (
      <Fragment>
        <Date>{moment(Number(timestamp)).format("ll")}</Date>
        <Message>
          <div>{reason}</div>
          <Name>{`- ${name}`}</Name>
        </Message>
      </Fragment>
    );
  }
}
