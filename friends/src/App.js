import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList/FriendsList';
import FriendForm from './FriendsList/FriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: '',
      }
    };
  };

  changeHandler = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [e.target.name] : e.target.value
        }
      };
    });
  };

  addFriend = e => {
    axios.post('http://localhost:5000/friends', this.state.newFriend)
    .then( res => {
      this.setState({
        friends: [...this.state.friends, res]
      })}
    );
  };

  trashFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => this.setState({
      friends: res.data}))
  };
  
  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err));
  };

 


  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendForm 
          newFriend={this.state.newFriend}
          changeHandler={this.changeHandler}
          addFriend={this.addFriend} 
          friends={this.state.friends} />
        <FriendsList 
          friends={this.state.friends}
          trashFriend={this.trashFriend} />
      </div>
    );
  };
}

export default App;
