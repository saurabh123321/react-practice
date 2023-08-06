import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      commnets: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      commnets: event.target.value,
    });
  };
  handleSelectionChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.commnets} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            onChange={this.handleUserNameChange}
            type="text"
            value={this.state.userName}
          ></input>
        </div>
        <div>
          <label>Commnets</label>
          <input
            onChange={this.handleCommentsChange}
            type="text"
            value={this.state.commnets}
          ></input>
        </div>
        <div>
          <label>Topic</label>
          <select
            value={this.state.topic}
            onChange={this.handleSelectionChange}
          >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
