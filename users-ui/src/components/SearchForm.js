import React, {Component} from 'react';

class SearchForm extends Component{

	state = {
		category: "dob",
		limit: 10,
	};

	handleLimitChange = (event) => {
		const limit = event.target.value;
		this.setState({...limit});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.updateResults	("dob", 5);
	}



	render(){
		return(
			<div>
				<form>
					<select>
					  <option value="dob">DOB Job Application Filings</option>
					  <option value="newdriver">New Driver Application Status</option>
					  <option value="forhire">For Hire Vehicles</option>
					</select>
					<label>Limit 
						<input 
							id="limit"
							name="limit"
							type="text"
							onChange={this.handleLimitChange}
						/>	
					</label>
					<button
						id="new-search-submit"
						value="Submit"
						onClick={this.handleSubmit}
					>
						Update Results
					</button>										
				</form>
			</div>
		);
	}
}

export default SearchForm;