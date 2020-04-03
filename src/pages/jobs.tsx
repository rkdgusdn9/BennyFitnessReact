import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '../components/accordion';

export const JobsPage: React.FC = () => {
	return (
		<div>
			<span>this is a jobs page</span>
			<Link to="/"> GO TO HOME PAGE </Link>
			<Accordion />
		</div>
	);
};
