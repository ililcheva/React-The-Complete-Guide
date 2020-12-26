import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: 'Lindy', profession: 'HR' },
      { username: 'Randy', profession: 'Software Engineer' },
      { username: 'Samuel', profession: 'Data Scientist' }
    ]
  }

  usernameChangeHandler = (event) => {
    this.setState(
      { users: [
        { username: 'Lindy', profession: 'Senior HR' },
        { username: event.target.value, profession: 'Software Engineer' },
        { username: 'Sally', profession: 'Data Scientist'}
      ]})
  }

  render() {
    const style = {
      width: '15%',
      marginTop: '16px'
    };

    return (
      <div className="App">
        <UserInput style={style} changed={this.usernameChangeHandler}/>
        <UserOutput username={this.state.users[0].username} profession={this.state.users[0].profession}/>
        <UserOutput username={this.state.users[1].username} profession={this.state.users[1].profession}/>
        <UserOutput username={this.state.users[2].username} profession={this.state.users[2].profession}/>
      </div>
    );
  }
}

export default App;
