import React from 'react';
import { Button } from '../components/button';

interface Props {
	title: string;
	description: string;
}

export const Ready: React.FC<Props> = (props) => {
	const {title, description} = props;

	return (
		<div className="home-page__ready">
			<div className="home-page__ready-container">
				<h1 className="home-page__ready-title">
					{title}
				</h1>
				<p className="home-page__ready-description">
					{description}
				</p>
                <Button buttonText="JOIN TODAY" link="/"/>
			</div>
           
		</div>
	)
}
