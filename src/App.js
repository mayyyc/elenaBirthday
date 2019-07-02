import React, { Component } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";
import aws_exports from "./aws-exports";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./timelines";
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
        <Route
          render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{ enter: 750, exit: 150 }}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={props => <Home {...props} reasonCount={reasons.length} />}
                    />
                    <Route path="/why" component={Why} />
                    <Route
                      path="/reasons"
                      render={props => <Reasons {...props} reasons={reasons} />}
                    />
                  </Switch>
                </Transition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    );
  }
}
