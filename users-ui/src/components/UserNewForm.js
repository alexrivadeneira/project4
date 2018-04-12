import React, { Component } from 'react';

class UserNewForm extends Component{
	
	state = {
		newUser: {}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createUser(this.state.newUser);
	}

	handleChange = (event) => {
		const updatedProperty = event.target.name;
		const newValue = event.target.value

		const updatedUser = { ...this.state.newUser}
		updatedUser[updatedProperty] = newValue;
		this.setState({newUser: updatedUser});

	}

	render(){

		const formStyle = {
			background: "#bada55",
			width: "70%",
			margin: "0 auto",
			borderRight: "3px solid black",
			borderBottom: "5px solid black",
			borderRadius: "7px",
			padding: "15px",
		}

		return(
			<div>
				<h3>Sign Up</h3>
				<form style={formStyle}>
					<div>
						<label>username
							<input
								id="new-user-userName"
								name="userName"
								type="text"
								onChange={this.handleChange}
							/>
						</label>
						<label>First Name
							<input 
								id="new-user-firstName"
								name="firstName"
								type="text"
								onChange={this.handleChange}
							/>	
						</label>
						<label>Last Name
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