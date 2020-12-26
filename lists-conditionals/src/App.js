import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = { text: 'Hello!' };

  changeEventHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.text.split('');
    chars.splice(charIndex, 1);
    this.setState({ text: chars.join('') })
  }

  render() {
    const characters = (
      <div>
        { this.state.text.split('').map((char, index) => {
          return <Char
            clicked={() => this.deleteCharHandler(index)}
            character={char}
            key={index}
          />
        })}
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.changeEventHandler} value={this.state.text}  />
        <p>{this.state.text}</p>
        <Validation textLength={this.state.text.length}/>
        {characters}
      </div>
    );
  }
}

export default App;
