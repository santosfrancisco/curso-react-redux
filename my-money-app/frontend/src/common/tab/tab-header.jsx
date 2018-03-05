import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tab-actions'

class TabHeader extends Component {
	render() {
		const selected = this.props.tab.selected === this.props.target
		return (
			<li className={ selected ? 'active' : '' }>
				<a 
					data-toggle='tab' 
					data-target={this.props.target} 
					onClick={() => this.props.selectTab(this.props.target)}
					href='javascript:;'
				>
					<i className={`fa fa-${this.props.icon}`}> {this.props.label}</i>
				</a>
			</li>
		);
	}
}

const mapStateToProps = (state) => ({tab: state.tab})
const mapDispatchToProps = (dispatch) => bindActionCreators({
	selectTab
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TabHeader)