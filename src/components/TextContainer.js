import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  updateText(val) {
    this.setState({
      text: val
    })
  }

  render() {
    console.log("TextContainer props", this.props)
    return (
      <div className="textContainer">
        <textarea 
          style={{color: this.props.fontColor, fontSize: this.props.fontSize, fontFamily: this.props.fontFamily}}
          onChange={e => this.updateText(e.target.value)}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




