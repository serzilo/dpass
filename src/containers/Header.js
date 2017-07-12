import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

class HeaderContainer extends Component {
    render() {
        return <Header />;
    }
}

function mapStateToProps() {
    return {

    };
}

export default connect(mapStateToProps)(HeaderContainer);
