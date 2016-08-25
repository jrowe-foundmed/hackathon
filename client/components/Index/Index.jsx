import React, { Component } from 'react';
import Header from '../Header/Header';
import DiseaseSelection from '../DiseaseSelection/DiseaseSelection';
import DiseaseInfo from '../DiseaseInfo/DiseaseInfo';
import Questions from '../Questions/Questions';

import questionsStub from '../../../data/questions.json';
import diseasesStub from '../../../data/diseases.json';

class IndexComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			diseases: diseasesStub,
			questions: questionsStub,
			disease: null
		}
	};
	setDisease(id) {
		let disease = this.state.diseases.find((disease) => {
			return disease.id == id;
		});
		this.setState({
			disease: disease
		});
	};
	getSelectionList() {
		if (!this.state.diseases)
			return [];
		return this.state.diseases.map((disease) => {
			return {
				id: disease.id,
				label: disease.name
			}
		});
	}
	render() {
		return (
			<div>
				<Header />
				<div className='expert-body'>
					<DiseaseSelection diseases={this.getSelectionList()} setDisease={this.setDisease.bind(this)} />
					<DiseaseInfo disease={this.state.disease} />
					<Questions questions={this.state.questions} disease={this.state.disease} />
				</div>
			</div>
		);
	}
}

export default IndexComponent;
