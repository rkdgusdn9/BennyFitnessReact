import React from 'react';
import { Classes } from '../components/classes';

export const TrainingPage: React.FC = () => {
	return (
		<div className="training-container">
			<div className="training-row">
				<div className="training-column">
					<h1 className="training-column__title">
						Personal<br></br>Training
					</h1>
					<br></br>
					<h2 className="training-column__content">
						CityFitness Personal Training has a programme that will help you exercise
						and achieve your fitness goals.
					</h2>
					<br></br>
					<br></br>
					<Classes
						source="training-img1"
						title="Personal Training"
						text="All members receive a FREE one-hour orientation with a personal trainer to define the exercises, 
                        programmes and services best for you. For those looking for extra guidance, personal training is the most 
                        effective way to reach your fitness goals. Our certified personal trainers will work one-on-one with you 
                        to keep you motivated and educated while you focus on your goal. We have personal training options to 
                        benefit everyone. CityFitness personal trainers will help you stay motivated, encourage you to push to 
                        your potential, and help you achieve results faster than ever before. No matter what your fitness 
                        goals are, our personal trainers will create a goal-focused training plan for you that will help you achieve 
                        and exceed those goals through diverse routines designed to continuously challenge you."
					/>
					<br></br>
					<div className="training-class-row">
						<Classes
							source="training-img2"
							title="Improve Your Quality of Life"
							text="Working with a Certified Personal Trainer will help you discover new found confidence, 
                            a sense of accomplishment and an increased knowledge of health and fitness."
						/>
						<Classes
							source="training-img3"
							title="Reach Your Goals"
							text="Personal training is the most effective way to reach your fitness goals. Our certified 
                            personal trainers will work one-on-one with you to keepyou motivated and educated while you 
                            focus on your goal."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
