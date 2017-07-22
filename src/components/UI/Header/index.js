import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	NavLink,
	Link ,
} from 'react-router-dom';
import cx from 'classnames';

import ArrowHeaderIcon from './arrowHeaderIcon';

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
} from '../../../configs/common';


export default class Header extends Component {
	matchPath(path) {
		return this.props.pathname.indexOf(path) >= 0;
	}

	render() {
		const {
			  locale,
			  country,
			  actions,
		  } = this.props;

		const isAuthed = true;
		const useInviteSystem = false;

		return (
			<div>
				<div className="header">
					<div className="big-menu xs-hide" id="big-menu">
						<NavLink to={links.home.path} exact={true} activeClassName="active" className="big-menu-item">
							<span className="menu-picture">
								<img src="https://dodidone.com/images/site-logo.svg" alt="dodidone" />
							</span>
							dodidone
						</NavLink>

						<NavLink to={externalLinks.dodicall.path} activeClassName="active" className="big-menu-item dodicall">
							<span className="menu-picture">
								<img src="https://dodidone.com/images/dodicall-bubles.png" alt="dodicall" />
							</span>
							dodicall
						</NavLink>

						<NavLink to={externalLinks.doditrade.path} activeClassName="active" className="big-menu-item doditrade">
							<span className="menu-picture">
								<img src="https://dodidone.com/images/doditrade-cart.png" alt="doditrade" />
							</span>
							doditrade
						</NavLink>

						<NavLink to={links.dodimail.path} activeClassName="active" className="big-menu-item dodimail">
							<span className="menu-picture">
								<img src="https://dodidone.com/images/dodimail-letter-without-key.png" alt="dodimail" />
							</span>
							dodimail
						</NavLink>

						<NavLink to={links.dodibox.path} activeClassName="active" className="big-menu-item dodibox">
							<span className="menu-picture">
								<img src="https://dodidone.com/images/dodibox-cloud.png" alt="dodibox" />
							</span>
							dodibox
						</NavLink>

						<NavLink to={links.corporate.path} activeClassName="active" className="big-menu-item corporate">
							<span className="menu-picture">
								<img src="https://dodidone.com/images/corporate_case.png" alt="corporate" />
							</span>
							corporate
						</NavLink>
					</div>


					<div className="header-inner">
						<div className="container-fluid">
							<div className="top-menu" id="top-menu">
								<button type="button" className="close xs-show sm-hide" aria-label="Close" id="close-offcanvas">
									<span>&times;</span>
								</button>

								<div className="menu-logo">
									<Link to={links.home.path} className="no-border">
										<img src="https://dodidone.com/images/site-logo-top.svg" alt="dodidone" />
									</Link>
								</div>

								<div className="row">
									<div className="col-xs-12 col-sm-2">
										{
											this.matchPath(SERVICE_DODICALL) && <div className="logo-big-menu-toggler for-dodicall xs-hide no-br" >dodicall <ArrowHeaderIcon /></div>
										}

										{
											this.matchPath(SERVICE_DODIMAIL) && <div className="logo-big-menu-toggler for-dodimail xs-hide no-br" >dodimail <ArrowHeaderIcon /></div>
										}

										{
											this.matchPath(SERVICE_DODITRADE) && <div className="logo-big-menu-toggler for-doditrade xs-hide no-br" >doditrade <ArrowHeaderIcon /></div>
										}

										{
											this.matchPath(SERVICE_DODIBOX) && <div className="logo-big-menu-toggler for-dodibox xs-hide no-br" >dodibox <ArrowHeaderIcon /></div>
										}

										{
											this.matchPath(SERVICE_DODIOFFICE) && <div className="logo-big-menu-toggler for-dodioffice xs-hide no-br" >dodioffice <ArrowHeaderIcon /></div>
										}

										{
											this.matchPath(SERVICE_DODIVOICE) && <div className="logo-big-menu-toggler for-dodivoice xs-hide no-br" >dodivoice <ArrowHeaderIcon /></div>
										}

										{
											this.matchPath(CORPORATE) && <div className="logo-big-menu-toggler for-corporate xs-hide no-br" >corporate <ArrowHeaderIcon /></div>
										}

										{
											this.matchPath(SERVICE_DODICALL) ||
											this.matchPath(SERVICE_DODIMAIL) ||
											this.matchPath(SERVICE_DODITRADE) ||
											this.matchPath(SERVICE_DODIBOX) ||
											this.matchPath(SERVICE_DODIOFFICE) ||
											this.matchPath(SERVICE_DODIVOICE) ||
											this.matchPath(CORPORATE) || <div className="logo-big-menu-toggler xs-hide no-br" >dodidone  <ArrowHeaderIcon /></div>
										}
									</div>

									<div className="col-xs-12 col-sm-2">
										<div className="dropdown inline-block select-lang">
											<button className="btn btn-link dropdown-toggle" type="button">
												Россия
											</button>
										</div>
									</div>

									<div className="col-xs-12 col-sm-8">
										<div className="to-right">
											{
												this.matchPath(SERVICE_DODIOFFICE) && (
													<div>
														<Link to={`${links.dodioffice.path}${links.dodioffice.local.benefits}`} className="xs-hide">
															Benefits
														</Link>

														<Link to={`${links.dodioffice.path}${links.dodioffice.local.tariffs}`} className="xs-hide">
															Tariffs
														</Link>

														<Link to={`${links.dodioffice.path}${links.dodioffice.local.contacts}`} className="xs-hide">
															Contacts
														</Link>

														{
															this.matchPath(REQUEST) || (
																<Link to={links.requestFromDodioffice.path} className="sign-up">
																	Join
																</Link>
															)
														}
													</div>
												)
											}

											<div className="menu-separator" />

											{
												this.matchPath(SERVICE_DODIVOICE) && (
													<div>
														<Link to={`${links.dodiovoice.path}${links.dodiovoice.local.benefits}`} className="xs-hide">
															Benefits
														</Link>

														<Link to={`${links.dodiovoice.path}${links.dodiovoice.local.tariffs}`} className="xs-hide">
															Tariffs
														</Link>

														<Link to={`${links.dodiovoice.path}${links.dodiovoice.local.contacts}`} className="xs-hide">
															Contacts
														</Link>

														{
															this.matchPath(REQUEST) || (
																<Link to={links.requestFromDodiovoice.path} className="sign-up">
																	Join
																</Link>
															)
														}
													</div>
												)
											}

											<div className="menu-separator" />

											{
												this.matchPath(SERVICE_DODIOFFICE) || this.matchPath(SERVICE_DODIVOICE) || (
													<div>
														<NavLink to={links.ask.path} activeClassName="active" className="xs-hide">
															Support
														</NavLink>

														<NavLink to={links.download.path} activeClassName="active" className="xs-hide">
															Download
														</NavLink>

														<NavLink to={links.prices.path} activeClassName="active" className="xs-hide">
															Pricing
														</NavLink>

														{
															isAuthed ? (
																<div className="dropdown inline-block sign-up">
																	<button className="btn btn-link dropdown-toggle" type="button">
																		auth
																	</button>
																	<ul className="dropdown-menu" aria-labelledby="user-profile">
																		<li>
																			<Link to={externalLinks.settings.path}>
																				Profile
																			</Link>
																		</li>
																		<li>
																			<Link to={externalLinks.logout.path}>
																				Logout
																			</Link>
																		</li>
																	</ul>
																</div>
															) : (
																<span>
																	{
																		useInviteSystem ? (
																			<Link to={Links.registration.path} className="sign-up">
																			<span className="no-br">
																				Request an Invite
																			</span>
																			</Link>
																		) : (
																			<Link to={Links.registration.path} className="sign-up">
																			<span className="no-br">
																				Join
																			</span>
																			</Link>
																		)
																	}

																	<span className="h-separator xs-hide" />

																	<Link to={Links.signIn.path} className="sign-in">
																		Sign in
																	</Link>
																</span>
															)
														}

														<div className="menu-separator" />

														<div className="services-links-box">
															<NavLink to={links.prices.path} activeClassName="active">
																Pricing
															</NavLink>

															<NavLink to={links.ask.path} activeClassName="active">
																Send a request
															</NavLink>

															<NavLink to={links.about.path} activeClassName="active">
																About the Project
															</NavLink>
														</div>

														<div className="menu-separator" />
													</div>
												)
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="HELPER">
					<nav>
						<ul>
							<li><NavLink to={links.home.path} exact={true} activeClassName="selected">Home</NavLink></li>
							<li><NavLink to={links.ask.path} activeClassName="selected">Поддержка</NavLink></li>
							<li><NavLink to={links.download.path} activeClassName="selected">Скачать</NavLink></li>
							<li><NavLink to={links.prices.path} activeClassName="selected">Цены</NavLink></li>
							<li><NavLink to={links.dodioffice.path} activeClassName="selected">dodioffice</NavLink></li>
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
					<button onClick={() => actions.setCountry('gb')}>gb</button>
					<button onClick={() => actions.setCountry('tr')}>tr</button>
					<button onClick={() => actions.setCountry('int')}>int</button>
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	actions: PropTypes.object,
	locale: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	pathname: PropTypes.string.isRequired,
};
