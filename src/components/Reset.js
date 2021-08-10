import { Component } from "react";

export default class Reset extends Component {
  resetSetting = () => {
    this.props.onResetSetting(true);
  };

  render() {
    return (
      <button
        className="col-4 btn btn-primary mx-4 my-2"
        onClick={this.resetSetting}
      >
        Reset
      </button>
    );
  }
}
