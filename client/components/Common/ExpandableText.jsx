import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

export default class ExpandableText extends Component {
	static propTypes = {
		text: PropTypes.array
	};
	render() {
		let text = this.props.text;
		if (!_.isEmpty(text)) {
			return (
				<div>
					{
						_.map(text, (textObj) => {
							return _.isString(textObj) ?
								textObj :
								<ExpandableTextNode key={textObj.label} {...textObj} />
						})
					}
				</div>
			);

		} else return false;
	}
}

export class ExpandableTextNode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		}
	}
	static propTypes = {
		label: PropTypes.string,
		content: PropTypes.string
	}
	render() {
		let expandedVal = this.props.label + ' ' + this.props.content;
		let collapsedVal = this.props.label;
		return (
			<span className='expandable-text-node' onClick={() => { this.setState({expanded: !this.state.expanded})}}>
				{this.state.expanded ? expandedVal : collapsedVal}
			</span>
		)
	}
}
