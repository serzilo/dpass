import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/roster">Roster</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
