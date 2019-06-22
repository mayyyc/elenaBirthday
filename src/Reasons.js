import React from "react";
export default class Reasons extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.reasons.length}</div>
        <div>
          {this.props.reasons.map((reason, index) => {
            return (
              <div key={index}>{`${reason.reason} by ${reason.name} at ${reason.timestamp}`}</div>
            );
          })}
        </div>
      </div>
    );
  }
}
