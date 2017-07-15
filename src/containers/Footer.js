import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from '../components/UI/Footer';

class FooterContainer extends Component {
    render() {
        return <Footer />;
    }
}

function mapStateToProps() {
    return {

    };
}

export default withRouter(connect(mapStateToProps)(FooterContainer));
