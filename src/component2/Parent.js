import React, { Component } from "react";
import MemoComp from "./MemoComp";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Saurabh",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        userName: "Saurabh",
      });
    }, 2000);
  }
  render() {
    console.log("******Parent Comp Render*******");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.userName}></MemoComp>
      </div>
    );
  }
}
