import React, { Component } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";
import aws_exports from "./aws-exports";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Why from "./Why";
import Reasons from "./Reasons";

Amplify.configure(aws_exports);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reasons: []
    };
  }

  async componentDidMount() {
    try {
      const reasons = await API.graphql(graphqlOperation(queries.listReasons, { limit: 100000 }));
      this.setState({
        reasons: reasons.data.listReasons.items
      });
    } catch (err) {
      console.log("error fetching data...", err);
    }
  }

  render() {
    const { reasons } = this.state;
    return (
      <Router>
        <Route exact path="/" render={props => <Home {...props} reasonCount={reasons.length} />} />
        <Route path="/why" component={Why} />
        <Route path="/reasons" render={props => <Reasons {...props} reasons={reasons} />} />
      </Router>
    );
  }
}
