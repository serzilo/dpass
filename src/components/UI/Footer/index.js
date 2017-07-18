import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import cx from 'classnames';

import ArrowIcon from './arrowIcon';

import links, { externalLinks } from '../../../matchConfig';
import {
	SERVICE_DODICALL,
	SERVICE_DODITRADE,
	SERVICE_DODIMAIL,
	SERVICE_DODIBOX,
	SERVICE_DODIOFFICE,
	SERVICE_DODIVOICE,
	CORPORATE,
	REQUEST,
	COUNTRY_RU,
	COUNTRY_GB,
	COUNTRY_TR,
} from '../../../configs/common';

export default class Footer extends Component {
    render() {
		const { country } = this.props;

        const action = SERVICE_DODIBOX;
		const year = new Date().getFullYear();

		const dodicallClassnames = cx({
			'link-to-service': true,
			'dodicall': true,
			'active': action === SERVICE_DODICALL,
		});

		const doditradeClassnames = cx({
			'link-to-service': true,
			'doditrade': true,
			'active': action === SERVICE_DODITRADE,
		});

		const dodimailClassnames = cx({
			'link-to-service': true,
			'dodimail': true,
			'active': action === SERVICE_DODIMAIL,
		});

		const dodiboxClassnames = cx({
			'link-to-service': true,
			'dodibox': true,
			'active': action === SERVICE_DODIBOX,
		});

		const corporateClassnames = cx({
			'link-to-service': true,
			'corporate': true,
			'active': action === CORPORATE,
		});

        return (
            <footer>
				<div className="container-fluid">
					<div className="row footer-main-row">
						{
							(action === SERVICE_DODIOFFICE || action === SERVICE_DODIVOICE || action === REQUEST) ? (
								<div className="col-xs-12">
									{
										country === COUNTRY_RU && (
											<div>
												<h2 className="infoportal__page-super-title">
													Контакты
												</h2>

												<div className="row footer__phone-block">
													<div className="col-xs-12 col-sm-4">
														<div className="footer__phone-label">В Москве</div>
														<div className="footer__text-block">+7 (499) 433-63-33</div>
													</div>
													<div className="col-xs-12 col-sm-4">
														<div className="footer__phone-label">В Санкт-Петербурге</div>
														<div className="footer__text-block">+7 (812) 240-14-44</div>
													</div>
													<div className="col-xs-12 col-sm-4">
														<div className="footer__phone-label">По России</div>
														<div className="footer__text-block">8 800 555-12-42</div>
													</div>
												</div>
											</div>
										)
									}

									{
										country === COUNTRY_GB && (
											<div>
												<h2 className="infoportal__page-super-title">
													C ontact us
												</h2>

												<div className="row footer__phone-block">
													<div className="col-xs-12 footer__text-block">
														+44 (0) 20 808 55555
													</div>
												</div>
											</div>
										)
									}

									{
										country === COUNTRY_TR && (
											<div>
												<h2 className="infoportal__page-super-title">
													İletişim
												</h2>

												<div className="row footer__phone-block">
													<div className="col-xs-12 footer__text-block">
														+353 (0) 1 8934941
													</div>
												</div>
											</div>
										)
									}

									{
										country !== COUNTRY_RU && country !== COUNTRY_GB && country !== COUNTRY_TR && (
											<div>
												<h2 className="infoportal__page-super-title">
													Contact us
												</h2>

												<div className="row footer__phone-block">
													<div className="col-xs-12 footer__text-block">
														+353 (0) 1 8934941
													</div>
												</div>
											</div>
										)
									}

									<div className="row footer__text-block">
										<div className="col-xs-12">
											info@dodidone.com
										</div>
									</div>

									<div className="row social-network-box">
										<div className="col-xs-12">
											<Link to={externalLinks.facebookrussia.path} target="_blank">
												<span className="icon icon-facebook" />
											</Link>

											<Link to={externalLinks.linkedininternational.path} target="_blank">
												<span className="icon icon-linkedin" />
											</Link>
										</div>
									</div>
								</div>
							) : (
								<div>
									<div className="col-xs-12 col-sm-2">
										<div className="icon icon-dodidone logo" />
									</div>
									<div className="col-xs-12 col-sm-10">
										<div className="row">
											<div className="col-xs-12 slogan">
												<span className="text-dark-blue">dodidone</span><br />
												get in touch & shake hands
											</div>
										</div>
										<div className="row link-services-box">
											<div className="col-xs-12 col-sm-4">
												<NavLink to={links.home.path} exact={true} activeClassName="active">All services</NavLink>
												<div className={dodicallClassnames}>
													{
														action === SERVICE_DODICALL && <ArrowIcon />
													}

													<Link to={externalLinks.dodicall.path} target="_blank">
														dodicall
													</Link>
												</div>
												<div className={doditradeClassnames}>
													{
														action === SERVICE_DODITRADE && <ArrowIcon />
													}

													<Link to={externalLinks.doditrade.path} target="_blank">
														doditrade
													</Link>
												</div>
												<div className={dodimailClassnames}>
													{
														action === SERVICE_DODIMAIL && <ArrowIcon />
													}

													<Link to={links.dodimail.path}>
														dodimail
													</Link>
												</div>
												<div className={dodiboxClassnames}>
													{
														action === SERVICE_DODIBOX && <ArrowIcon />
													}

													<Link to={links.dodibox.path}>
														dodibox
													</Link>
												</div>

												<div className={corporateClassnames}>
													{
														action === CORPORATE && <ArrowIcon />
													}

													<Link to={links.corporate.path}>
														Corporate
													</Link>
												</div>
											</div>
											<div className="col-xs-12 col-sm-4">
												<NavLink to={links.ask.path} activeClassName="active">
													Support
												</NavLink><br />

												<NavLink to={links.download.path} activeClassName="active">
													Download
												</NavLink><br />

												<NavLink to={links.prices.path} activeClassName="active">
													Pricing
												</NavLink>
											</div>
											<div className="col-xs-12 col-sm-4">
												<NavLink to={links.about.path} activeClassName="active">
													About the Project
												</NavLink><br />

												<NavLink to={links.forpartners.path} activeClassName="active">
													Cooperation
												</NavLink>
											</div>
										</div>
										<div className="row social-network-box">
											<div className="col-xs-12">
												<Link to={externalLinks.facebookrussia.path} target="_blank">
													<span className="icon icon-facebook" />
												</Link>

												<Link to={externalLinks.linkedininternational.path} target="_blank">
													<span className="icon icon-linkedin" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							)
						}
					</div>

					<div className="row copy-box">
						<div className="col-sm-offset-2 col-xs-12 col-sm-10">
							<span className="no-br text-black copy-text">&copy; {year} dodidone</span>
							<span className="inline-block">
								<Link to={links.termsofuse.path}>
									Terms of use
								</Link>
							</span>
							<span className="inline-block">
								<Link to={links.privacypolicy.path}>
									Privacy Policy
								</Link>
							</span>
						</div>
					</div>
				</div>
			</footer>
        );
    }
}

Footer.propTypes = {
	locale: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
};
