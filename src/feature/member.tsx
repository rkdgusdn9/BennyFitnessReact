import React from 'react';

export const Member: React.FC = () => {
	return (
		<div className="membership__list">
			<h1 className="membership__list-title">
				Select the perfect
				<br></br>
				membership for you
			</h1>
			<h2 className="membership__list-item">
				With a membership at CityFitness, you have access to incredible services and
				amenities that will help you achieve your goals. We believe that you should get to
				choose the membership that works best for your needs without all the sales pressure.
				A section of our popular membership options are now available to buy online. We hope
				you take the next step on the path to living a healthier, happier life.
			</h2>
			<h2 className="membership__list-item">
				Exercise is proven to reduce stress/anxiety, increase energy, aid in weight loss,
				and improve overall health.
			</h2>
			<div className="membership__back-ground" />
		</div>
	);
};
