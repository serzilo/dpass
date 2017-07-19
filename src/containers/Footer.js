import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from '../components/UI/Footer';

class FooterContainer extends Component {
    render() {
		const {
            locale,
            country,
			location,
        } = this.props;

		return <Footer locale={locale} country={country} pathname={location.pathname} />;
    }
}

FooterContainer.propTypes = {
	locale: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	const { common } = state;

	return {
		locale: common.get('locale'),
		country: common.get('country'),
	};
}

export default withRouter(connect(mapStateToProps)(FooterContainer));
