import React from 'react';
import BennyKang from '../images/BennyKang.png';

export const Contact: React.FC = () => {
	return (
		<div className="contact-container">
			<div className="contact-row">
				<p>
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
				<img src={BennyKang}></img>
			</div>
			<br></br>
			<div>
				{/* <input type="text"></input>
				<br></br>
				<input type="text"></input>
				<br></br>
				<input type="text"></input>
				<br></br>
				<input type="text"></input> */}
			</div>
			<div></div>
		</div>
	);
};
