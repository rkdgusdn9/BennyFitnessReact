import React from 'react';
import logo from '../images/benny.png';

export const NavBar: React.FC = () => {
	return (
		<nav className="nav-bar">
			<div className="nav-bar__container">
				<div className="logo-container">
					<a href="/" className="logo-container__logo" id="logo">
						<img src={logo} alt="BennyFitness" height="80" width="150" />
					</a>
				</div>
				<div className="space-container">
					<div className="nav-items-container">
						<ul className="list-items">
							<li>
								<a href="/whyUs" className="list-items__text" id="whyUs">
									WHY US?
								</a>
							</li>
							<li>
								<a
									href="/memberships"
									className="list-items__text"
									id="memberships">
									MEMBERSHIPS
								</a>
							</li>
							<li>
								<a href="/classes" className="list-items__text" id="classes">
									CLASSES
								</a>
							</li>
							<li>
								<a href="#" className="list-items__text" id="training">
									TRAINING
								</a>
							</li>
							<li>
								<a href="#" className="list-items__text" id="contactUs">
									CONTACT US
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
