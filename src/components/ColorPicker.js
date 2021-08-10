import React, { Component } from "react";
import "./css/colorpicker.css";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "gray"]
    };
  }

  showColor(color) {
    return { backgroundColor: color };
  }

  setActive(color) {
    this.props.onReceive(color);
  }

  render() {
    let elementColor = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActive(color)}
        ></span>
      );
    });

    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Color Picker</h3>
          </div>

          <div className="card-body">{elementColor}</div>
        </div>
      </div>
    );
  }
}
