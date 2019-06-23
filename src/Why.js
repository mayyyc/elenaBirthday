import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "./graphql/mutations";
import { Link } from "react-router-dom";
import { Header, StyledLink } from "./styles";

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
        reasonError: "Please. She would like to know why..."
      });
    }
  };

  renderReason = () => {
    return (
      <React.Fragment>
        <Header>Let her know why?</Header>
        <textarea
          value={this.state.reason}
          onChange={e => this.setState({ reason: e.target.value })}
        />
        <div>{this.state.reasonError}</div>
        <button onClick={this.handleCompleteReason}>Next</button>
      </React.Fragment>
    );
  };
  renderName = () => {
    return (
      <React.Fragment>
        <Header>Name</Header>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ isReasonCompleted: false })}>Back</button>
        <button onClick={() => this.handleSubmit(this.props)}>Done</button>
      </React.Fragment>
    );
  };
  renderSuccess = () => {
    return (
      <div>
        <div>Thank you!</div>
        <div>You're Amazing too.</div>
        <Link to="/">Yeah, I know.</Link>
      </div>
    );
  };
  renderError = () => {
    return (
      <div>
        <div>Oops, something went wrong.</div>
        <div>Please try again.</div>
        <Link to="/">I will, because I'm amazing</Link>
      </div>
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
