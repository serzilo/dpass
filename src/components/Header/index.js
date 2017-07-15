import React, { PropTypes, Component } from 'react';
import { NavLink } from 'react-router-dom';

import cx from 'classnames';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact={true} activeClassName="selected">Home</NavLink></li>
                        <li><NavLink to="/contacts" activeClassName="selected">Contacts</NavLink></li>
                        <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
