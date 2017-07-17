import React, { PropTypes, Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cx from 'classnames';

import ArrowIcon from './arrowIcon';

import links from '../../../configs/links.json';

export default class Footer extends Component {
    render() {
        const action = 'dodibox',
			  year = new Date().getFullYear(),

			  dodicallClassnames = cx({
				  'link-to-service': true,
				  'dodicall': true,
				  'active': action === 'dodicall',
			  }),
			  doditradeClassnames = cx({
				  'link-to-service': true,
				  'doditrade': true,
				  'active': action === 'doditrade',
			  }),
			  dodimailClassnames = cx({
				  'link-to-service': true,
				  'dodimail': true,
				  'active': action === 'dodimail',
			  }),
			  dodiboxClassnames = cx({
				  'link-to-service': true,
				  'dodibox': true,
				  'active': action === 'dodibox',
			  }),
			  corporateClassnames = cx({
				  'link-to-service': true,
				  'corporate': true,
				  'active': action === 'corporate',
			  });

        return (
            <footer>
				<div className="container-fluid">
					<div className="row footer-main-row">
						<div>
							<div className="col-xs-12 col-sm-2">
								<div className="icon icon-dodidone logo"></div>
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
										<NavLink to={links.home} exact={true} activeClassName="active">All services</NavLink>
										<div className={dodicallClassnames}>
											{
												action === 'dodicall' && <ArrowIcon />
											}
											<Link to={'http://dodidone.com/dodicall'} target="_blank">dodicall</Link>
										</div>
										<div className={doditradeClassnames}>
											{
												action === 'doditrade' && <ArrowIcon />
											}
											<Link to={'http://market.dodidone.com/'} target="_blank">doditrade</Link>
										</div>
										<div className={dodimailClassnames}>
											{
												action === 'dodimail' && <ArrowIcon />
											}
											<Link to={links.dodimail}>dodimail</Link>
										</div>
										<div className={dodiboxClassnames}>
											{
												action === 'dodibox' && <ArrowIcon />
											}
											<Link to={links.dodibox}>dodibox</Link>
										</div>

										<div className={corporateClassnames}>
											{
												action === 'corporate' && <ArrowIcon />
											}
											<Link to={links.corporate}>Corporate</Link>
										</div>
									</div>
									<div className="col-xs-12 col-sm-4">
										<NavLink to={links.ask} activeClassName="active">Support</NavLink><br />
										<NavLink to={links.download} activeClassName="active">Download</NavLink><br />
										<NavLink to={links.prices} activeClassName="active">Pricing</NavLink><br />
									</div>
									<div className="col-xs-12 col-sm-4">
										<NavLink to={links.aboutCompany} activeClassName="active">About the Project</NavLink><br />
										<NavLink to={links.forpartnes} activeClassName="active">Cooperation</NavLink>
									</div>
								</div>
								<div className="row social-network-box">
									<div className="col-xs-12">
										<Link to={'https://www.facebook.com/dodidone.russia'} target="_blank">
											<span className="icon icon-facebook"></span>
										</Link>

										<Link to={'https://www.linkedin.com/company/dodidone-international'} target="_blank">
											<span className="icon icon-linkedin"></span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row copy-box">
						<div className="col-sm-offset-2 col-xs-12 col-sm-10">
							<span className="no-br text-black copy-text">&copy; {year} dodidone</span>
							<span className="inline-block">
								<Link to={links.termsOfUse}>Terms of use</Link>
							</span>
							<span className="inline-block">
								<Link to={links.privacyPolicy}>Privacy Policy</Link>
							</span>
						</div>
					</div>
				</div>
			</footer>
        );
    }
}
