import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";

import Result from "./components/Result";

import "./styles.css";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12
    };

    this.activeColor = this.activeColor.bind(this);
    this.sizeChange = this.sizeChange.bind(this);
  }

  activeColor(params) {
    this.setState({
      color: params
    });
  }

  sizeChange(value) {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  }

  resetChange = (value) => {
    if (value === true) {
      this.setState({
        color: "red",
        fontSize: 12
      });
    }
  };

  /* Cach khong su dung bind(this);
  activeColor = (color) =>{
    this.setState({
      color: color
    })
  }
  */

  render() {
    return (
      <div className="container">
        <div className="row pt-4">
          <ColorPicker color={this.state.color} onReceive={this.activeColor} />
          <SizeSetting
            fontSize={this.state.fontSize}
            onChangeSize={this.sizeChange}
          />
          <Reset onResetSetting={this.resetChange} />
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}
