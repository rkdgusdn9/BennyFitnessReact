import React from 'react';
import { Member } from '../feature/member';

export const MembershipsPage: React.FC = () => {
	return (
		<div className="membership">
			<div className="membership-container">
				<Member />
				{/* <a href="" className="button-item" />
				<a href="" className="button-item1" />
				<a href="" className="button-item2" /> */}
			</div>
		</div>
	);
};
