import React from 'react';

export const Email: React.FC = () => {
	return (
		<div className="contact-box">
			<form className="contact-form" action="https://formspree.io/xoqnzgyr" method="POST">
				<label>
					Your Name
					<br></br>
					<input className="contact-input" type="text" name="name" />
				</label>
				<br></br>
				<label>
					Your Email
					<br></br>
					<input className="contact-input" type="email" name="_replyto" />
				</label>
				<br></br>
				<label>
					Message
					<br></br>
					<textarea
						className="contact-input"
						name="message"
						style={{ height: '100px' }}
					/>
				</label>
				<br></br>
				<input className="contact-button" type="submit" value="Send" />
			</form>
		</div>
	);
};
