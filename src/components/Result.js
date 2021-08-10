import React, { Component } from "react";

export default class Result extends Component {
  setColor() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  }

  render() {
    return (
      <div className="col-sm-12 pt-4 ">
        <h4>
          Color : {this.props.color} - Size : {this.props.fontSize}px
        </h4>
        <div className="card mb-4">
          <p className="" style={this.setColor()}>
            Content Result
          </p>
        </div>
      </div>
    );
  }
}
