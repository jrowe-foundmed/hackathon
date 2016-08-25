import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='menu'>
					<span>ABOUT US</span>
					<span className='selected'>PATIENTS</span>
					<span>PHYSICIANS</span>
					<span>PRODUCTS</span>
					<span>INVESTORS & PRESS</span>
					<span>WORK WITH US</span>
				</div>
			</div>
		);
	}
}
