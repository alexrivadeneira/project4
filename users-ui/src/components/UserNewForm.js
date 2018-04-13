import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

class UserNewForm extends Component{
	
	state = {
		newUser: {},
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createUser(this.state.newUser);
	}

	handleChange = (event) => {
		const updatedProperty = event.target.name;
		const newValue = event.target.value

		const updatedUser = { ...this.state.newUser};
		updatedUser[updatedProperty] = newValue;
		this.setState({newUser: updatedUser});

	}

	render(){
		if(this.props.userIsLoggedIn){
			return <Redirect to="/documents" />;
		}
		
		const formStyle = {
			width: "70%",
			margin: "0 auto",
			border: "1px solid black",
			borderRight: "5px solid black",
			borderBottom: "5px solid black",
			borderRadius: "7px",
			padding: "15px",
		}
		const labelStyle = {
			display: "block",
		}
		return(
			<div>
				<h3>Sign Up</h3>
				<form style={formStyle}>
					<div>
						<label style={labelStyle}>username
							<input
								id="new-user-userName"
								name="userName"
								type="text"
								onChange={this.handleChange}
							/>
						</label>
						<label style={labelStyle}>First Name
							<input 
								id="new-user-firstName"
								name="firstName"
								type="text"
								onChange={this.handleChange}
							/>	
						</label>
						<label style={labelStyle}>Last Name
							<input
								id="new-user-lastName"
								name="lastName"
								type="text"
								onChange={this.handleChange}
							/>	
						</label>
					</div>
					<div>
						<button
							id="new-user-submit"
							value="Submit"
							onClick={this.handleSubmit}
						>
							Create User
						</button>
					</div>									
				</form>
			</div>
		);
	}
}

export default UserNewForm;