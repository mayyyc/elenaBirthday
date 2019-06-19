import React, { Component } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reasons: []
    };
  }

  async componentDidMount() {
    try {
      const reasons = await API.graphql(graphqlOperation(queries.listReasons));
      this.setState({
        reasons: reasons.data.listReasons.items
      });
    } catch (err) {
      console.log("error fetching candidates...", err);
    }
  }

  render() {
    return (
      <div className="App">
        <Why />
        <Reasons reasons={this.state.reasons} />
      </div>
    );
  }
}

class Reasons extends Component {
  render() {
    return (
      <div>
        <div>{this.props.reasons.length}</div>
        <div>
          {this.props.reasons.map((reason, index) => {
            return <div key={index}>{`${reason.reason} by ${reason.name}`}</div>;
          })}
        </div>
      </div>
    );
  }
}

class Why extends Component {
  state = {
    reason: "",
    name: ""
  };
  handleSubmit = async event => {
    await API.graphql(graphqlOperation(mutations.createReason, { input: this.state }));
    this.setState({
      reason: "",
      name: ""
    });
  };

  render() {
    return (
      <div>
        <label>
          Why
          <input
            type="text"
            value={this.state.reason}
            onChange={e => this.setState({ reason: e.target.value })}
          />
        </label>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <button onClick={() => this.handleSubmit(this.props)}>Done</button>
      </div>
    );
  }
}

export default App;
