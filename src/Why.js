import React, { Component, Fragment } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "./graphql/mutations";
import {
  Container,
  Header,
  Content,
  Footer,
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
  height: 150px;
  margin-bottom: 10px;
`;
const StyledInput = styled.input`
  margin-bottom: 10px;
  ${InputStyles}
  margin-bottom: 10px;
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
        <Header className="header">Why?</Header>
        <Content>
          <StyledError>{this.state.reasonError}</StyledError>
          <StyledTextArea
            value={this.state.reason}
            onChange={e => this.setState({ reason: e.target.value })}
            className="content-item"
          />
          <StyledButton onClick={this.handleCompleteReason} className="content-item">
            Continue
          </StyledButton>
        </Content>
        <Footer className="content-item">
          <StyledLink to="/">I'll do it later</StyledLink>
        </Footer>
      </Fragment>
    );
  };
  renderName = () => {
    return (
      <Fragment>
        <Header className="header">Who is this?</Header>
        <Content>
          <StyledInput
            className="content-item"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <StyledButton onClick={() => this.handleSubmit(this.props)} className="content-item">
            Done
          </StyledButton>
        </Content>
        <Footer className="content-item">
          <StyledLinkDiv onClick={() => this.setState({ isReasonCompleted: false })}>
            Back
          </StyledLinkDiv>
        </Footer>
      </Fragment>
    );
  };
  renderSuccess = () => {
    return (
      <Fragment>
        <Header className="header">
          Thank you!
          <br />
          You're Amazing too.
        </Header>
        <Content>
          <StyledButtonLink to="/">Yeah, I know.</StyledButtonLink>
        </Content>
      </Fragment>
    );
  };
  renderError = () => {
    return (
      <Fragment>
        <Header className="header">
          Oops, something went wrong. <br />
          Please try again.
        </Header>
        <Content>
          <StyledButtonLink to="/">I will, because I'm amazing.</StyledButtonLink>
        </Content>
      </Fragment>
    );
  };
  render() {
    const { isReasonCompleted, submitErrored, submitSucceeded } = this.state;
    return (
      <Container>
        {submitErrored
          ? this.renderError()
          : submitSucceeded
          ? this.renderSuccess()
          : isReasonCompleted
          ? this.renderName()
          : this.renderReason()}
      </Container>
    );
  }
}
