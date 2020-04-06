import React from 'react';

interface Props {
	title: string;
	title1: string;
	title2: string;
	title3: string;
	description: string;
	description1: string;
	description2: string;
	description3: string;
}

export const Benefit: React.FC<Props> = (props) => {
	const {
		title,
		title1,
		title2,
		title3,
		description,
		description1,
		description2,
		description3,
	} = props;

	return (
		<div className="benefit">
			<div className="benefit__container">
				<ul className="row">
					<li className="block">
						<h3 className="block__title">{title}</h3>
						<p className="block__description">{description}</p>
					</li>
					<li className="block">
						<h3 className="block__title">{title1}</h3>
						<p className="block__description">{description1}</p>
					</li>
					<li className="block">
						<h3 className="block__title">{title2}</h3>
						<p className="block__description">{description2}</p>
					</li>
					<li className="block">
						<h3 className="block__title">{title3}</h3>
						<p className="block__description">{description3}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
