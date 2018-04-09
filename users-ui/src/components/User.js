import React, {Component} from 'react';

class User extends Component{

	render(){
		return(
			<div id={`user-${this.props.id}`} data-user-display>
				<div id={`user-${this.props.id}-user-name`}>
					<p>{this.props.userName}</p>
					<p>{this.props.firstName}</p>
					<p>{this.props.lastName}</p>
					<button id={`delete-user-${this.props.id}`}
						onClick={() => this.props.deleteUser(this.props.id, this.props.index)}>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default User;