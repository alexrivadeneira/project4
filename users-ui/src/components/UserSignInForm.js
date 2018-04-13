import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';

class UserSignInForm extends Component{

	state = {
		updatedUserName: "",
	};
	
	// check the DB to see if user is there
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.signIn(this.state.updatedUserName);
	}

	handleChange = (event) => {
		const updatedUserName = event.target.value;
		this.setState({updatedUserName: updatedUserName});
	}

	render(){
		if(this.props.userIsLoggedIn){
			return <Redirect to="/" />;
		}

		const wrongUserNameMessage = this.props.wrongUserName ? <p>User not found!</p> : <p></p>;

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
								onBlur={this.handleChange}
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
					{wrongUserNameMessage}
					<Link to="/newUser">...or Sign Up</Link>			
				</form>
			</div>
		);
	}
}

export default UserSignInForm;