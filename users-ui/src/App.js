import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList.js';
import UserNewForm from './components/UserNewForm.js';
import UserSignInForm from './components/UserSignInForm.js';
import Header from './components/Header.js';
import DocumentList from './components/DocumentList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    userName: null,
    wrongUserName: false,
    userIsLoggedIn: false,
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

  signIn = (userName) => {
    const filteredUsers = this.state.users.filter(user => userName === user.userName);

    if(filteredUsers.length >= 1){
      this.setState({userName: filteredUsers[0].userName});
      this.setState({userIsLoggedIn: true});
    } else {
      this.setState({wrongUserName: true});
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
  document.body.style.width = "95%";
  document.body.style.margin = "0 auto";

  const UserNewFormComponent = () => (<UserNewForm createUser={this.createUser} />);
  const UserSignInFormComponent = () => (<UserSignInForm userIsLoggedIn={this.state.userIsLoggedIn} signIn={this.signIn} wrongUserName={this.state.wrongUserName} />);

  const DocumentListComponent = () => (<DocumentList />);

    return (
      <div>
        <Header userName={this.state.userName} />
        <Router>
          <Switch>
            <Route exact path="/" component={UserSignInFormComponent} />
            <Route exact path="/newUser" component={UserNewFormComponent} />
            <Route exact path="/documents" component={DocumentListComponent} />
          </Switch>
        </Router>
      </div>
    );
  }



}

        //createUser={this.createUser}
          // <UserList users={this.state.users} deleteUser={this.deleteUser}/>
          // <UserSignInForm />

export default App;
