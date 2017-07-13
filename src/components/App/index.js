import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
    StaticRouter,
    Route,
    Switch,
    matchPath,
    Link
} from 'react-router-dom';

import topicActionCreator from '../../actions/topic';

import HeaderContainer from '../../containers/Header';
import FooterContainer from '../../containers/Footer';

import matchConfig from '../../matchConfig';

export default class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />

                {
                    matchConfig.map((route, index) => {
                        console.log(route);
                        return <Route key={`route${index}`} {...route} />;
                    })
                }

                <FooterContainer />
            </div>
        );
    }
}

/*
const mapStateToProps = (state, ownProps) => {
    const { topics } = state;

    return topics;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        thumbUp: (id) => {
            console.log(' ----- thumbUp', id);
            dispatch(topicActionCreator.thumbUp(id));
        },
        thumbDown: (id) => {
            console.log(' ----- thumbDown', id);
            dispatch(topicActionCreator.thumbDown(id));
        },
        createTopic: (content) => {
            console.log(' -------- createTopic', content);
            dispatch(topicActionCreator.createTopic({content}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
*/
