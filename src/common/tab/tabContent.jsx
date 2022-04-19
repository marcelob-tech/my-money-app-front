import React, { Component } from 'react';
import { connect } from 'react-redux';

class tabContent extends Component {
	render() {
		const selectedTab = this.props.tab.selected === this.props.id;
		return (
			<div
				id={this.props.id}
				className={`tab-pane ${selectedTab ? 'active' : ''}`}
			>
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ tab: state.tab });

export default connect(mapStateToProps)(tabContent);
