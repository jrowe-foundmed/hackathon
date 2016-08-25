import React, {Component, PropTypes} from 'react';
import ExpandableText from '../Common/ExpandableText';
import Remarkable from 'remarkable';

export default class DiseaseInfo extends Component {
	static propTypes = {
		disease: PropTypes.object
	};
	render() {
		let disease = this.props.disease;
		if (!disease)
			return null;
		let md = new Remarkable();
		return (
			<div className='disease-info'>
				<h2>What is {disease.name}?</h2>
				<div className='left-text-panel'>
					<ExpandableText text={disease.text}/>
				</div>
				<div className='right-image-panel'>
					<img src={require('../../../data/chart-1.png')} style={{'width':'100%'}} />
				</div>
			</div>
		);
	}
}
