import React, { PropTypes, Component } from 'react';

export default class Question extends Component {
	static propTypes = {
		text: PropTypes.array,
		disease: PropTypes.object,
		addQuestion: PropTypes.func
	}
	static questionText(text, disease) {
		return text.map((textObj) => {
			if (_.isString(textObj))
				return textObj;
			else {
				if (textObj.diseaseToken == 'name')
					return disease.name;
				else
					return '';
			}
		});
	}
	render() {
		let text = this.props.text;
		let disease = this.props.disease;
		if (!text || !disease) return null;
		return (
			<div className='question'>
				<span className='question-text'>
					{Question.questionText(text, disease)}
				</span>
				<span className='add-button' onClick={this.props.addQuestion.bind(this, this.props.text)}>+</span>
			</div>
		)
	}
}
