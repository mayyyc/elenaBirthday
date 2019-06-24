import React, { Component, Fragment } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "./graphql/mutations";
import {
  Header,
  StyledButton,
  StyledButtonLink,
  StyledLink,
  StyledLinkDiv,
  InputStyles
} from "./styles";
import styled from "styled-components";

const StyledError = styled.div`
  margin-bottom: 10px;
`;
const StyledTextArea = styled.textarea`
  ${InputStyles}
  width: 200px;
  height: 150px;
  margin-bottom: 10px;
`;
const StyledInput = styled.input`
  width: 200px;
  margin-bottom: 10px;
  ${InputStyles}
  margin-bottom: 10px;
`;

const Text = styled.div`
  margin-bottom: 20px;
`;
export default class Why extends Component {
  state = {
    reason: "",
    name: "",
    isReasonCompleted: false,
    submitErrored: false,
    submitSucceeded: false
  };
  handleSubmit = async event => {
    const { reason, name } = this.state;
    await API.graphql(
      graphqlOperation(mutations.createReason, {
        input: { reason, name: name || null, timestamp: Date.now() }
      })
    ).catch(err => this.setState({ submitErrored: true }));
    this.setState({
      reason: "",
      name: "",
      isReasonCompleted: false,
      submitSucceeded: true
    });
  };

  handleCompleteReason = () => {
    if (this.state.reason) {
      this.setState({
        isReasonCompleted: true,
        reasonError: ""
      });
    } else {
      this.setState({
        reasonError: "Please..."
      });
    }
  };

  renderReason = () => {
    return (
      <Fragment>
        <Header>Why?</Header>
        <StyledError>{this.state.reasonError}</StyledError>
        <StyledTextArea
          autoFocus
          value={this.state.reason}
          onChange={e => this.setState({ reason: e.target.value })}
        />
        <StyledButton onClick={this.handleCompleteReason}>Continue</StyledButton>
        <StyledLink to="/">I'll do it later</StyledLink>
      </Fragment>
    );
  };
  renderName = () => {
    return (
      <Fragment>
        <Header>Who is this?</Header>
        <StyledInput
          autoFocus
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <StyledButton onClick={() => this.handleSubmit(this.props)}>Done</StyledButton>
        <StyledLinkDiv onClick={() => this.setState({ isReasonCompleted: false })}>
          Back
        </StyledLinkDiv>
      </Fragment>
    );
  };
  renderSuccess = () => {
    return (
      <Fragment>
        <Header>Thank you!</Header>
        <Text>You're Amazing too.</Text>
        <StyledButtonLink to="/">Yeah, I know.</StyledButtonLink>
      </Fragment>
    );
  };
  renderError = () => {
    return (
      <Fragment>
        <Header>Oops, something went wrong.</Header>
        <Text>Please try again.</Text>
        <StyledButtonLink to="/">I will, because I'm amazing.</StyledButtonLink>
      </Fragment>
    );
  };
  render() {
    const { isReasonCompleted, submitErrored, submitSucceeded } = this.state;
    return (
      <div>
        {submitErrored
          ? this.renderError()
          : submitSucceeded
          ? this.renderSuccess()
          : isReasonCompleted
          ? this.renderName()
          : this.renderReason()}
      </div>
    );
  }
}
