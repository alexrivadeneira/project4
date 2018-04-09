import React, {Component} from 'react';
import User from './User';

class UserList extends Component{


	render(){
		const userComponents = this.props.users.map((user, index) => {
			return <User 
				index={index} 
				id={user.id} 
				userName={user.userName} 
				firstName={user.firstName} 
				lastName={user.lastName} 
				deleteUser={this.props.deleteUser}
				/>
		})
		return(
			<div>
				<h2>User List</h2>
				<div >
					{userComponents}
				</div>
			</div>
		);
	}
}

export default UserList;