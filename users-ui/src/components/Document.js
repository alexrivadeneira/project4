import React, {Component} from 'react';

class Document extends Component{

	render(){
		return(
			<div key={this.props.index}>
				<h3>{this.props.agencyName}</h3>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default Document;