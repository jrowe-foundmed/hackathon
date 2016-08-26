import React, { Component, PropTypes } from 'react';
import Question from '../Questions/Question';

export default class ShoppingCart extends Component {
	static propTypes = {
		shoppingCart: PropTypes.array,
		disease: PropTypes.object
	}
	render() {
		let disease = this.props.disease;
		let shoppingCart = this.props.shoppingCart;
		if (!this.props.disease || !this.props.shoppingCart) return null;
		return (
			<div className='shopping-cart'>
				<div className='cart-header'><span>Build your own Questionnaire</span></div>
				<div className='cart-body'>
					<ul>
						{shoppingCart.map((question) => {
							return <li key={question}>{Question.questionText(question, disease)}</li>;
						})}
					</ul>
					<div className='cart-output-buttons'>
						<div className='cart-button left'>DOWNLOAD PDF</div>
						<div className='cart-button'>EMAIL PDF</div>
					</div>
				</div>
			</div>
		);
	}
}
