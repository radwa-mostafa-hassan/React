import { Component } from "react";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  sendData = () => {
    this.props.incomingData({ name: this.state.name, age: this.state.age });
  };

  render() {
    return (
      <div className="container-sm my-5">
        <div className="row border rounded-3 bg-light round">
          <div className="col-12 my-4 pt-4 align-self-stretch text-center input-group">
            <span className="input-group-text" id="inputGroup-sizing">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              value={this.state.txt}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="col-12 my-4 align-self-stretch text-center input-group">
            <span className="input-group-text" id="inputGroup-sizing">
              Age
            </span>
            <input
              type="text"
              className="form-control"
              value={this.state.txt}
              onChange={(e) => {
                this.setState({ age: e.target.value });
              }}
            />
          </div>
          <div className="col-12 my-4 text-center">
            <input
              type="button"
              value="Add"
              onClick={this.sendData}
              className="btn btn-success"
            />
          </div>
        </div>
      </div>
    );
  }
}