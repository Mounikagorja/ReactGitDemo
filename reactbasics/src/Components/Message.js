// Welcome.js

import React, { Component } from 'react';

class Message extends Component {
    constructor() {
      super()
      this.state = {
        Message: 'Welcome visitor'
      }
    }
    changeMessage(){
      this.setState({
        Message: 'Thanks for subscribe'
      })
      
    }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={()=>this.changeMessage()}> subscribe</button>
      </div>
    );
  }
}
export default Message;

