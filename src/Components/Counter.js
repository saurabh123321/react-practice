import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super(); 
        this.state = {
            count: 0
        }
    }

    incrementValue() {
        this.setState ({
            count: this.state.count+1
        })
    }
    decreamentValue() {
        this.setState ({
            count: this.state.count-1
        })
    }
  render() {
    return (
      <div>
        <h1>Count Value: {this.state.count}</h1>
        <button onClick={()=> this.incrementValue()}>Increment</button>
        <button onClick={()=> this.decreamentValue()}>Decrement</button>
      </div>
    )
  }
}

export default Counter