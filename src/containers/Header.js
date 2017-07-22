import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
			location,
        } = this.props;

        return <Header locale={locale} country={country} actions={actions} pathname={'ask'} />;
    }
}

HeaderContainer.propTypes = {
	locale: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
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
