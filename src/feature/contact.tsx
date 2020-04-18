import React from 'react';
import BennyKang from '../images/BennyKang.png';
import { Email } from '../feature/email';

export const Contact: React.FC = () => {
	return (
		<div className="contact-container">
			<h1 style={{ fontSize: '250%', textAlign: 'center', textTransform: 'uppercase' }}>
				Contact Us
			</h1>
			<br></br>
			<div className="contact-row">
				<p className="contact-address">
					1/874A Mount Eden Road
					<br></br>
					Three Kings, Auckland
					<br></br>
					New Zealand
					<br></br>
					Email : rkdgusdn9@gmail.com
					<br></br>
					Phone : 021 102 7873
				</p>
				<img className="contact-img" src={BennyKang}></img>
			</div>
			<br></br>
			<br></br>
			<h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
				Please feel free to contact us if you need any further information.
			</h2>
			<Email />
		</div>
	);
};
