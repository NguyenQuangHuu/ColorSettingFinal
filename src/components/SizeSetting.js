import { Component } from "react";

export default class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }

  render() {
    return (
      <div className="col-sm-6 my-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              FontSize : {this.props.fontSize} pixel
            </h3>
          </div>

          <div className="card-body">
            <button
              className="btn btn-danger m-2"
              onClick={() => this.changeSize(-2)}
            >
              Giam
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.changeSize(+2)}
            >
              Tang
            </button>
          </div>
        </div>
      </div>
    );
  }
}
