import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList/FriendsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  
  componentDidMount = () => {
    axios
    .get('http://localhost:5000/friends')
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
