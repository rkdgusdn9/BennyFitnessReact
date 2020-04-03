import React from 'react';
import { Link } from 'react-router-dom';

export const JobsPage: React.FC = () => {
	return (
		<div>
			<span>this is a jobs page</span>
			<Link to="/"> GO TO HOME PAGE </Link>
		</div>
	);
};

/*
	class base component {
		Life cycle method: (https://programmingwithmosh.com/javascript/react-lifecycle-methods/)
			componentDidMount
			componentDidUpdate
	}

	functional component {
		(hooks => https://reactjs.org/docs/hooks-state.html)
	}

	Accordion {
		https://codepen.io/renzyq19/pen/bovZKj
	}

	https://www.youtube.com/watch?v=Ke90Tje7VS0
*/
