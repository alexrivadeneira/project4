import React, {Component} from 'react';
import Document from './Document.js';
import axios from 'axios';
import SearchForm from './SearchForm.js';


class DocumentList extends Component{

	state = {
		documents: [],
	}

	updateResults = (topic, limit) => {
		const topicCodeDict = {
			"dob": "ic3t-wcy2",
			"new-driver": "dpec-ucu7",
			"for-hire": "8wbx-tsch",
		};
		const request = "https://data.cityofnewyork.us/resource/";
		const requestTopicLimit = request + topicCodeDict[topic] + "?$limit=" + limit;


		console.log(">>>>", requestTopicLimit);

		axios.get(requestTopicLimit)
			.then((response) => {
				console.log("got here", response.data);
				this.setState({documents: response.data})
			}).catch((error) => {
				console.log("ERROR FILTERING DOCS");
				console.log(error);
			});
	}

	componentDidMount(){
		axios.get('https://data.cityofnewyork.us/resource/buex-bi6w.json?$limit=50')
		.then((response) => {
			console.log(response.data);
			this.setState({documents: response.data})
		}).catch((error) => {
			console.log("Error getting docs");
			console.log(error);
		});
	}

	render(){

		const documentsComponents = this.state.documents.map((doc, index) => {
			return <Document
				index={index} 
				agencyName={doc.agency_name} 
				description={doc.additional_description_1} 
				/>
		});
	
		return(
			<div>
				<SearchForm 
					updateResults={this.updateResults}
				/>
				{documentsComponents}
			</div>
		);
	}
}

export default DocumentList;
