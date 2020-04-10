import React, { useState } from 'react';
import logo from '../images/benny.png';
import hamburger from '../images/Hamburger.png';

export const NavBar: React.FC = () => {
	const [setActive, setActiveState] = useState('');
	const className = 'className';

	function toggleHamburger() {
		setActiveState(setActive === '' ? 'active' : '');
	}

	return (
		<nav className="nav-bar">
			<div className="logo-container">
				<a href="/" id="logo">
					<img src={logo} alt="BennyFitness" />
				</a>

				<div className="hamburger-container">
					<a>
						<img
							className={`hamburger-menu ${setActive}`}
							src={hamburger}
							onClick={toggleHamburger}
						/>
					</a>
				</div>
			</div>

			<div id="navibar" className={`nav-items-container ${setActive}`}>
				<ul className="list-items">
					<li>
						<a href="/whyUs" className="list-items__text" id="whyUs">
							WHY US?
						</a>
					</li>
					<li>
						<a href="/memberships" className="list-items__text" id="memberships">
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
		</nav>
	);
};
