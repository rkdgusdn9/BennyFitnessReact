import React from 'react';
import Logo1 from '../images/Facebook.png';
import Logo2 from '../images/Twitter.png';
import Logo3 from '../images/Instagram.png';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
    	<footer className="footer margin-x magin-y">
			<div className='footer__copy'>COPYRIGHT © BENNYFITNESS</div>
			<div className='footer__terms'>
				<a className="footer__terms-item" href="terms">TERMS &amp; CONDITIONS </a>
				<span className="footer__divider">/</span>
				<a className="footer__terms-item" href="#"> PRIVACY POLICY</a>
			</div>
			<div className='footer__social'>
				<a href="#">
					<img className="footer__img" src={Logo1}/>
				</a>
				<a href="#">
					<img className="footer__img" src={Logo2}/>
				</a>
				<a href="#">
					<img className="footer__img" src={Logo3}/>
				</a>
			</div>
		</footer>
    )
}
