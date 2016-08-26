import React, { Component, PropTypes } from 'react';
import Question from './Question';

export default class Questions extends Component {
	static propTypes = {
		questions: PropTypes.array,
		addQuestion: PropTypes.func,
		disease: PropTypes.object
	}
	render() {
		let questions = this.props.questions;
		let disease = this.props.disease;
		if (!questions || !disease) return null;
		return (
			<div className='questions'>
				{
					questions.map((question, index) => {
						return index < 3 ? <Question disease={disease} key={index} {...question} addQuestion={this.props.addQuestion} /> : false;
					})
				}
			</div>
		)
	}
}
