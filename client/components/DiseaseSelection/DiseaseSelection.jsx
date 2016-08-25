import React, { Component, PropTypes } from 'react';

export default class DiseaseSelection extends Component {
	static propTypes = {
		diseases: PropTypes.array,
		setDisease: PropTypes.func
	}
	render() {
		return (
			<div className='disease-selection'>
				<h2>Let us help you become an EXPERT IN YOU again.</h2>
				<div>I was diagnosed with <DiseaseSelect setDisease={this.props.setDisease} diseases={this.props.diseases} /></div>
			</div>
		);
	}
}

class DiseaseSelect extends Component {
	static propTypes = {
		diseases: PropTypes.array,
		setDisease: PropTypes.func
	};
	render() {
		let selectOnChange = (e) => {
			this.props.setDisease(e.target.options[e.target.selectedIndex].value);
		}
		return (
			<select onChange={selectOnChange}>
				<option value=''>DISEASE NAME</option>
				{
					this.props.diseases.map((disease) => {
						return <option key={disease.id} value={disease.id}>{disease.label}</option>;
					})
				}
			</select>
		);
	}
}
