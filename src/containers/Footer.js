import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from '../components/Footer';

class FooterContainer extends Component {
    render() {
        return <Footer />;
    }
}

function mapStateToProps() {
    return {

    };
}

export default connect(mapStateToProps)(FooterContainer);
