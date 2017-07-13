import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopicList from '../TopicList'
import topicActionCreator from '../../actions/topic';

import HeaderContainer from '../../containers/Header';
import FooterContainer from '../../containers/Footer';

class App extends Component {
    static propTypes = {
        children: PropTypes.element
    };

    render() {
        return (
            <div>
                <HeaderContainer />
                <div>{this.props.children}</div>
                <FooterContainer />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { topics } = state;

    return topics;
}

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

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

// initState is a function which is run before server, and keep consistency as a thunk middleware, and return a promise
AppContainer.initState = (store,req,res) => {
    return (dispatch, getState) => {
        return new Promise( (resolve, reject)=> {
            resolve ()
        })
    }
}

export default AppContainer;
