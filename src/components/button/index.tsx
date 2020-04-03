import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
	buttonText: string;
	link: string;
	buttonColour?: boolean;
}

export const Button: React.FC<Props> = (props) => {
	const { buttonText, link, buttonColour } = props;
	const buttonClasses = classNames('button', { 'button--red-hover': buttonColour });

	return (
		<Link to={link} className={buttonClasses}>
			{buttonText}
		</Link>
	);
};
