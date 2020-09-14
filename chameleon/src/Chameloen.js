import React, { Component } from 'react'
import Colour from './Colour'

class Chameloen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colour: 'black'
    }
  }

  changeColour = (event) => {
    this.setState( {colour: event.target.value} )
  }

  render() {
    return(
      <div>
      <button value="red" onClick={this.changeColour}>Red</button>
      <button value="green" onClick={this.changeColour}>Green</button>
      <button value="yellow" onClick={this.changeColour}>Yellow</button>
      <Colour colour={this.state.colour}/>
      </div>
    )
  }
}

export default Chameloen