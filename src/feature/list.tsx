import React from 'react';

interface Props {
	title: string;
	price: string;
	description: string;
}

export const List: React.FC<Props> = (props) => {
	const { title, price, description } = props;

	return (
		<div className="list">
			<h2 className="list__list-items">
				<span className="memberships">{title}</span>
				<br></br>
				<span className="price">{price}</span>
				<br></br>
				<span className="explain">{description}</span>
			</h2>
		</div>
	);
};
