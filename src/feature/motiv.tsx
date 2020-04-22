import React from 'react';
import video from '../assets/files/motivation.mp4';

export const Motiv: React.FC = () => {
	return (
		<video
			autoPlay
			loop
			muted
			style={{
				objectFit: 'cover',
				width: '100%',
				maxHeight: '30%',
				marginTop: '0.3%',
			}}>
			<source src={video} type="video/mp4" />
		</video>
	);
};
