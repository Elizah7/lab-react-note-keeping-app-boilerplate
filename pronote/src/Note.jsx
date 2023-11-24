import React, { Component } from 'react';

class InputMirror extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleInputChange = (event) => {
    const userInput = event.target.value;
    this.setState({ userInput });
  };

  render() {
    return (
      <div style={{ display: 'flex' }} className='parent'>
        {/* Left Div with Textarea */}
     
          <textarea
          style={{ flex: 1 }} className='child'
            rows="5"
            cols="30"
            placeholder="Type something..."
            value={this.state.userInput}
            onChange={this.handleInputChange}
          />

        {/* Right Div displaying the Input */}
        <div style={{ flex: 1, marginLeft: '10px' }} className='child'>
          <p>{this.state.userInput}</p>
        </div>
      </div>
    );
  }
}

export default InputMirror;
