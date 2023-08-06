import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }

    incrementCounter = () =>{
        this.setState({
            counter: this.state.counter+1
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.incrementCounter}>ClickMe</button>
      </div>
    )
  }
}

export default ClassCounter