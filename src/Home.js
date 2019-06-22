import React from "react";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Is Elena amazing? </div>
        <Link to="/why">Yes, Elena is amazing.</Link>
        <Link to="/why">No, Elena is more than amazing.</Link>
        <Link to="/reasons">{this.props.reasonCount} reasons why Elena is amazing</Link>
      </div>
    );
  }
}
