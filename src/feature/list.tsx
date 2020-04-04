import React from 'react';
import logo from '../images/benny.png';
import { Button } from '../components/button';

interface Props {
	title: string;
	price: string;
	description: string;
}

export const List: React.FC<Props> = (props) => {
	const { title, price, description } = props;

	return (
		<div className="home-page__list">
			<h2 className="home-page__text">
				<span className="memberships">{title}</span>
				<br></br>
				<span className="price">{price}</span>
				<br></br>
				<span className="explain">{description}</span>
			</h2>
		</div>
	);
};
