import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/UI/Header';

class HeaderContainer extends Component {
    render() {
        return <Header />;
    }
}

function mapStateToProps() {
    return {

    };
}

export default withRouter(connect(mapStateToProps)(HeaderContainer));
