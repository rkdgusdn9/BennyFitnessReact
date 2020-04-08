import React from 'react';

interface Props {
	source: string;
	title: string;
	text: string;
}

export const Classes: React.FC<Props> = (props) => {
	const { source, title, text } = props;

	return (
		<div className="class">
			<div className="shadow">
				<div className="white-padding">
					<div className={source} />
					<h2 className="class-heading">{title}</h2>
					<p className="class-text">{text}</p>
				</div>
			</div>
		</div>
	);
};
