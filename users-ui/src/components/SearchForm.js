import React, {Component} from 'react';

class SearchForm extends Component{

	state = {
		category: "dob",
		limit: 10,
	};

	handleLimitChange(){

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
					<br/><br/>
					<label>Limit 
						<input 
							id="limit"
							name="limit"
							type="text"
							onChange={this.handleLimitChange}
						/>	
					</label>					
				</form>
			</div>
		);
	}
}

export default SearchForm;