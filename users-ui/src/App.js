import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList.js';
import UserNewForm from './components/UserNewForm.js';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_USERSAPI}`)
    .then((response) => {
      this.setState({users: response.data});
    }).catch((error) => {
      console.log("Error getting users");
      console.log(error);
    });
  }

  deleteUser = async (id, index) => {
    try {
      await axios.delete(`${process.env.REACT_APP_USERSAPI}/${id}`);
      const updatedUsers = [...this.state.users];
      updatedUsers.splice(index, 1);
      this.setState({users: updatedUsers});
    } catch (error){
      console.log(error);
    }
  }


  createUser = async (newUser) => {
    try {
      const newUserResponse = await axios.post(`${process.env.REACT_APP_USERSAPI}`, newUser);
      const newUserFromDb = newUserResponse.data;

      const updatedUsersList = [...this.state.users];
      updatedUsersList.push(newUserFromDb);
      this.setState({users: updatedUsersList});
      
    } catch (error){
      console.log(error);
    }
  }  



  render() {
    return (
      <div>
        <UserNewForm createUser={this.createUser}/>
        <UserList users={this.state.users} deleteUser={this.deleteUser}/>

      </div>
    );
  }


}

export default App;
