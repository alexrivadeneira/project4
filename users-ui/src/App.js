import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList.js';
import UserNewForm from './components/UserNewForm.js';
import UserSignInForm from './components/UserSignInForm.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    isLoggedIn: false,
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_USERSAPI}/users`)
    .then((response) => {
      this.setState({users: response.data});
    }).catch((error) => {
      console.log("Error getting users");
      console.log(error);
    });
  }

  deleteUser = async (id, index) => {
    try {
      await axios.delete(`${process.env.REACT_APP_USERSAPI}/users/${id}`);
      const updatedUsers = [...this.state.users];
      updatedUsers.splice(index, 1);
      this.setState({users: updatedUsers});
    } catch (error){
      console.log(error);
    }
  }


  createUser = async (newUser) => {
    try {
      const newUserResponse = await axios.post(`${process.env.REACT_APP_USERSAPI}/users`, newUser);
      const newUserFromDb = newUserResponse.data;

      const updatedUsersList = [...this.state.users];
      updatedUsersList.push(newUserFromDb);
      this.setState({users: updatedUsersList});
      
    } catch (error){
      console.log(error);
    }
  }  


  render() {

  const UserNewFormComponent = () => (<UserNewForm createUser={this.createUser} />);

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UserSignInForm} />

          <Route exact path="/newUser" component={UserNewFormComponent} />
        </Switch>
      </Router>
    );
  }



}

        //createUser={this.createUser}
          // <UserList users={this.state.users} deleteUser={this.deleteUser}/>
          // <UserSignInForm />

export default App;
