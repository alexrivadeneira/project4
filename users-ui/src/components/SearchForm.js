import React, {Component} from 'react';

class SearchForm extends Component{

	state = {
		category: "promos",
		limit: 10,
	};

	handleLimitChange = (event) => {
		const limit = event.target.value;
		this.setState({limit: limit});
	};

	handleCategoryChange = (event) => {
		const category = event.target.value;
		console.log("category change", event.target.value);
		this.setState({category: category});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.updateResults(this.state.category, this.state.limit);
	}



	render(){
		return(
			<div>
				<form>
					<select
						onChange={this.handleCategoryChange}
					>
						<option value="promos">Agency Promotions</option>
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