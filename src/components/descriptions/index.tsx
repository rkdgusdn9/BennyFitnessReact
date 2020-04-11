import React from 'react';

interface Props {
	source: string;
	title: string;
	text: string;
}

export const Description: React.FC<Props> = (props) => {
	const { source, title, text } = props;

	return (
		<div className="des-columns">
			<div className="des-shadow">
				<div className="des-white-padding">
					<div className={source} />
					<p className="des-title">{title}</p>
					<p className="des-text">{text}</p>
				</div>
			</div>
		</div>
	);
};
