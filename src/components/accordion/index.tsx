import React from 'react';

export const Accordion: React.FC = () => {
	return (
		<>
			<button className="accordion">Section 1</button>
			<div className="panel">
				<p>Lorem ipsum...</p>
			</div>

			<button className="accordion">Section 2</button>
			<div className="panel">
				<p>Lorem ipsum...</p>
			</div>

			<button className="accordion">Section 3</button>
			<div className="panel">
				<p>Lorem ipsum...</p>
			</div>
		</>
	);
};
