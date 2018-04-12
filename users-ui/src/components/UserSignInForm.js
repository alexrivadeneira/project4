import React, { Component } from 'react';

class UserSignInForm extends Component{
	
	state = {
		newUser: {}
	}

	// check the DB to see if user is there
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createUser(this.state.newUser);
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
				<h3>Sign In</h3>
				<form style={formStyle}>
					<div>
						<label>username
							<input
								id="signin-user-userName"
								name="userName"
								type="text"
							/>
						</label>
					</div>
					<div>
						<button
							id="signin-user"
							value="Submit"
							onClick={this.handleSubmit}
						>
							Sign In
						</button>
					</div>									
				</form>
			</div>
		);
	}
}

export default UserSignInForm;