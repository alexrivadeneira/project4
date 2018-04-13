import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

	render(){
		const headerLeft = {
			display: "block",
			float: "left",
		};
		const headerRight = {
			display: "block",
			float: "right",
		}
		const clearStyle = {
			clear: "both",
		}
		const greetingArea = this.props.userName ? this.props.userName : <a href="/">Sign In</a>;
							
		return(
			<div>
				<div style={headerLeft}>
					<h3>NYDataViewer Portal</h3>
				</div>
				<div style={headerRight}>
					<h3>{greetingArea}</h3>
				</div>
				<hr style={clearStyle}/>
			</div>
		);
	}
}

export default Header;