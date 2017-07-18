import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import links from '../../../matchConfig';

import cx from 'classnames';

export default class Header extends Component {
    render() {
        const {
            locale,
            country,
			actions,
        } = this.props;

        return (
            <header>
                <nav>
                    <ul>
                        <li><NavLink to={links.home.path} exact={true} activeClassName="selected">Home</NavLink></li>
                        <li><NavLink to={links.ask.path} activeClassName="selected">Поддержка</NavLink></li>
                        <li><NavLink to={links.download.path} activeClassName="selected">Скачать</NavLink></li>
                        <li><NavLink to={links.prices.path} activeClassName="selected">Цены</NavLink></li>
                    </ul>

                    <ul>
                        <li><NavLink to={links.registration.path} activeClassName="selected">Подключить</NavLink></li>
                        <li><NavLink to={links.login.path} activeClassName="selected">Войти</NavLink></li>
                    </ul>
                </nav>

				<hr />

                <div>locale: {locale}</div>
                <div>country: {country}</div>

				<hr />

				Locale:
				<button onClick={() => actions.setLocale('ru')}>ru</button>
				<button onClick={() => actions.setLocale('eng')}>eng</button>
				<button onClick={() => actions.setLocale('tr')}>tr</button>

				<hr />

				Country:
				<button onClick={() => actions.setCountry('ru')}>ru</button>
				<button onClick={() => actions.setCountry('eng')}>eng</button>
				<button onClick={() => actions.setCountry('tr')}>tr</button>
				<button onClick={() => actions.setCountry('int')}>int</button>
            </header>
        );
    }
}

Header.propTypes = {
	actions: PropTypes.object,
	locale: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
};
