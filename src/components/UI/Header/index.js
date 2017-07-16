import React, { PropTypes, Component } from 'react';
import { NavLink } from 'react-router-dom';

import links from '../../../configs/links.json';

import cx from 'classnames';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><NavLink to={links.home} exact={true} activeClassName="selected">Home</NavLink></li>
                        <li><NavLink to={links.ask} activeClassName="selected">Поддержка</NavLink></li>
                        <li><NavLink to={links.download} activeClassName="selected">Скачать</NavLink></li>
                        <li><NavLink to={links.prices} activeClassName="selected">Цены</NavLink></li>
                    </ul>

                    <ul>
                        <li><NavLink to={links.registration} activeClassName="selected">Подключить</NavLink></li>
                        <li><NavLink to={links.login} activeClassName="selected">Войти</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
