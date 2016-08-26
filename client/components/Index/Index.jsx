import React, { Component } from 'react';
import Header from '../Header/Header';
import DiseaseSelection from '../DiseaseSelection/DiseaseSelection';
import DiseaseInfo from '../DiseaseInfo/DiseaseInfo';
import Questions from '../Questions/Questions';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import questionsStub from '../../../data/questions.json';
import diseasesStub from '../../../data/diseases.json';

class IndexComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			diseases: diseasesStub,
			questions: questionsStub,
			disease: null,
			shoppingCart: []
		}
	};
	setDisease(name) {
		let disease = this.state.diseases.find((disease) => {
			return disease.name == name;
		});
		this.setState({
			disease: disease,
			shoppingCart: []
		});
	};
	addQuestion(question) {
		let newCart = !this.state.shoppingCart ?
			[] :
			JSON.parse(JSON.stringify(this.state.shoppingCart));
		newCart.push(question);
		this.setState({
			shoppingCart: newCart
		});
	}
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
					<Questions questions={this.state.questions} disease={this.state.disease} addQuestion={this.addQuestion.bind(this)} />
				</div>
				<ShoppingCart shoppingCart={this.state.shoppingCart} disease={this.state.disease} />
			</div>
		);
	}
}

export default IndexComponent;
