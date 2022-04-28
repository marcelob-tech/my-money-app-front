import React, { Component } from 'react';
import { connect } from 'react-redux';
import If from '../operador/if';

class tabContent extends Component {
	render() {
		const selectedTab = this.props.tab.selected === this.props.id;
		const visible = this.props.tab.visible[this.props.id];
		return (
			<If test={visible}>
				<div
					id={this.props.id}
					className={`tab-pane ${selectedTab ? 'active' : ''}`}
				>
					{this.props.children}
				</div>
			</If>
		);
	}
}

const mapStateToProps = (state) => ({ tab: state.tab });

export default connect(mapStateToProps)(tabContent);
