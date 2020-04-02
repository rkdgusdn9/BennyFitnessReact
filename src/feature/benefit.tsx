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
    const {title,
        title1,
        title2,
        title3,    
        description,
        description1,
        description2,
        description3} = props;

	return (
		<div className="home-page__benefit">
			<ul className="home-page__row">
                <li className="home-page__row-block">
                    <h3 className="home-page__row-title">{title}</h3>
                    <p className="home-page__row-description">{description}</p>
                </li>
                <li className="home-page__row-block">
                    <h3 className="home-page__row-title">{title1}</h3>
                    <p className="home-page__row-description">{description1}</p>
                </li>
                <li className="home-page__row-block">
                    <h3 className="home-page__row-title">{title2}</h3>
                    <p className="home-page__row-description">{description2}</p>
                </li>
                <li className="home-page__row-block">
                    <h3 className="home-page__row-title">{title3}</h3>
                    <p className="home-page__row-description">{description3}</p>
                </li>
			</ul>
		</div>
	)
}
