import React from 'react';
import { Classes } from '../components/classes';

export const ClassesPage: React.FC = () => {
	return (
		<div className="classes-container">
			<div className="classes-row">
				<div className="read-container">
					<a href="#" className="read-classes">
						Read Class Descriptions
					</a>
				</div>
				<br></br>
				<Classes
					source="classes-img1"
					title="Cardio Classes"
					text="Short for cardiovascular exercise, 
                cardio workouts get your heart pumping - making it strong, helping you lose weight and 
                reducing your risk of heart attack, high blood pressure and high cholesterol. 
                We have a lot of cardio fitness classes from dance based workouts like Zumba and Groove
                 to Blast, our Step Training program, to spin classes R30 and Ride to the martial arts and 
                 boxing inspired, Kick. Our instructors help you get your best workout by offering adaptations 
                 for all levels, from beginners to long-time regulars."
				/>
				<br></br>
				<Classes
					source="classes-img2"
					title="Strength Classes"
					text="More and more, medical science is 
                recognizing the necessity of strength and weight training for a healthy body. Studies have shown 
                building muscle can protect your joints and bone density, help your body burn more fat and tons 
                of other mental and disease controlling benefits. With so many reasons to strength train, we’ve 
                added two classes that make it easy to get lifting. Check out Power, a fitness class led by our 
                amazing instructors using barbells and weights; Core, an athletic based total body workout that 
                uses a variety of equipment to improve your strength."
				/>
				<br></br>
				<Classes
					source="classes-img3"
					title="Yoga Classes"
					text="Looking for flexibility, coordination, 
                posture and stress relief in a workout? We offer Hot Yoga and Pilates classes*, as well as Centergy, 
                a class which combines both disciplines, at most locations."
				/>
				<br></br>
				<Classes
					source="classes-img4"
					title="Adaptable Impact Classes"
					text="Whether you’re just starting your fitness journey or returning to it after time away, you 
                    may be looking for a class with less intensity. Turn to Active, a class devoted to all aspects of 
                    exercise which can be adapted to fit your needs; Buggyfit, a class for new moms and dads to bring 
                    baby and buggy in and get a work out done; or Litepace, a low impact fitness class designed for our 
                    members with health concerns such as arthritis, heart disease, and balance issues."
				/>
			</div>
		</div>
	);
};
