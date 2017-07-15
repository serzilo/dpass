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
                        <li><NavLink to="/ask" activeClassName="selected">Поддержка</NavLink></li>
                        <li><NavLink to="/download" activeClassName="selected">Скачать</NavLink></li>
                        <li><NavLink to="/prices" activeClassName="selected">Цены</NavLink></li>
                    </ul>

                    <ul>
                        <li><NavLink to="/registration" activeClassName="selected">Подключить</NavLink></li>
                        <li><NavLink to="/login" activeClassName="selected">Войти</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
