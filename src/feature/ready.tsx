import React from 'react';
import { Button } from '../components/button';

interface Props {
	title: string;
	description: string;
}

export const Ready: React.FC<Props> = (props) => {
	const { title, description } = props;

	return (
		<div className="ready">
			<div className="ready__items">
				<h1 className="ready-title">{title}</h1>
				<p className="ready-description">{description}</p>
				<Button buttonText="JOIN TODAY" buttonColour link="/memberships" />
			</div>
		</div>
	);
};
