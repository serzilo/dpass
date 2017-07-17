import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/UI/Header';
import commonActionCreator from '../actions/commonActions';

class HeaderContainer extends Component {
    render() {
        const {
			locale,
			country,
            actions,
        } = this.props;

        return <Header locale={locale} country={country} actions={actions} />;
    }
}

const mapStateToProps = (state, ownProps) => {
	const { common } = state;

	return {
		locale: common.get('locale'),
		country: common.get('country'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(commonActionCreator, dispatch),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
