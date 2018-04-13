import React, {Component} from 'react';

class Document extends Component{

	render(){
		return(
			<div key={this.props.index}>
						<h4>{this.props.key1}</h4>
						<p>{this.props.val1}</p>
						<h4>{this.props.key2}</h4>
						<p>{this.props.val2}</p>
						<h4>{this.props.key3}</h4>
						<p>{this.props.val3}</p>
				<hr/>					
			</div>
		);
	}
}

export default Document;