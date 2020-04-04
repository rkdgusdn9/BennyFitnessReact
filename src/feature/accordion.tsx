import React, { useState } from 'react';

interface Props {
	title: string;
	content: string;
}

export const Accordion: React.FC<Props> = (props) => {
	const { title, content } = props;
	const [setActive, setActiveState] = useState('');
	const [setHeight, setHeightState] = useState('0px');

	function toggleAccordion() {
		setActiveState(setActive === '' ? 'active' : '');
		setHeightState(setActive === 'active' ? '0px' : '');
	}

	return (
		<div className="why-page__section">
			<div className="why-page__text">
				<div className={`accordion ${setActive}`} onClick={toggleAccordion}>
					<h2 className="accordion-title">{title}</h2>
				</div>
				<div style={{ maxHeight: `${setHeight}` }} className="accordion__content">
					<p className="accordion-content">{content}</p>
				</div>
			</div>
		</div>
	);
};
