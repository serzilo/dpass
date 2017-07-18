import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from '../../containers/Header';
import FooterContainer from '../../containers/Footer';

import matchConfig from '../../matchConfig';

// import '../../styles//site.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                {
					Object.keys(matchConfig).map(key => <Route key={key} {...matchConfig[key]} />)
                }
                <FooterContainer />
            </div>
        );
    }
}
