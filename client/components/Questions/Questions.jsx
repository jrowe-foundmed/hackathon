import React, { Component, PropTypes } from 'react';

export default class Questions extends Component {
	static propTypes = {
		questions: PropTypes.array,
		disease: PropTypes.object
	}
	render() {
		console.log(this.props);
		let questions = this.props.questions;
		let disease = this.props.disease;
		if (!questions || !disease) return null;
		return (
			<div className='questions'>
				{
					questions.map((question, index) => {
						return index < 3 ? <Question disease={disease} key={index} {...question} /> : false;
					})
				}
			</div>
		)
	}
}

class Question extends Component {
	static propTypes = {
		text: PropTypes.array,
		disease: PropTypes.object
	}
	render() {
		let text = this.props.text;
		let disease = this.props.disease;
		if (!text || !disease) return null;
		return (
			<div className='question'>
				{
					text.map((textObj) => {
						if (_.isString(textObj))
							return textObj;
						else {
							if (textObj.diseaseToken == 'name')
								return disease.name;
							else
								return '';
						}
					})
				}
			</div>
		)
	}
}
