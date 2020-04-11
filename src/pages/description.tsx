import React from 'react';
import { Description } from '../components/descriptions';

export const DescriptionPage: React.FC = () => {
	return (
		<div className="description-container">
			<div className="description-row">
				<div className="heading-column">
					<h1 className="heading-column__title">
						Fitness Class
						<br></br>
						Description
					</h1>
					<h2 className="heading-column__content">
						CityFitness has a class for every body that will help you exercise and
						achieve your fitness goals.
					</h2>
				</div>
			</div>
			<div className="description-row">
				<Description
					source="description-ride"
					title="Everyone finishes first in Ride®!"
					text="Pedal in groups, roll over hills, chase the pack, climb mountains and spin 
                your way to burning calories and strengthening your lower body. This 60-minute cycling 
                programme is geared for anyone that can ride a bike. Motivating music, awesome ride 
                instructors and an inspiring group environment lets you ride right on!"
				/>
				<Description
					source="description-groove"
					title="If you can move, you can groove!"
					text="You’ll stomp, flick, wiggle, jiggle, hip, hop, snap, shimmy, shake, slide, glide, 
                    smile and laugh your way through this 60-minute fitness dance programme. Experience a fusion 
                    of club, urban and Latin dance styles with motivating, chart-topping hits and retro classic tunes. 
                    Supportive, funky, easygoing instructors help you get a move on with Groove®!"
				/>
			</div>
			<div className="description-row">
				<Description
					source="description-blast"
					title="Discover new heights with Blast®!"
					text="Utilising the step in many positions and heights, this compelling 60-minute cardio programme 
                    strengthens and shapes the lower body one step at a time. Energetic music and motivating instructors 
                    create this awesome group experience. Get ready to have a BLAST!"
				/>
				<Description
					source="description-centergy"
					title="Redefine yourself with Centergy®!"
					text="Grow longer and stronger as you explore this 60-minute journey of Yoga and Pilates movements. 
                    Positive uplifting music, group dynamics and supportive instructors will enable you to centre your energy, 
                    reduce stress and even smile. Discover Centergy® now."
				/>
			</div>
			<div className="description-row">
				<Description
					source="description-zumba"
					title="It’s exercise in disguise!"
					text="This is the international runaway success, Latin-inspired dance fitness class that will sculpt your body. 
                    Workouts target glutes, legs, arms, core, abs and the most important muscle in the body... the heart! 
                    THE PARTY STARTS HERE!"
				/>
				<Description
					source="description-circuit"
					title="Every minute counts!"
					text="Circuit is a fun, effective body changing workout specifically designed for members 
                    who don’t have a lot of time on their hands. It’s a revolutionised 32 minute circuit formulated to provide 
                    a mix of cardio and resistance. No need to wait for scheduled class times – jump on the circuit any time! 
                    Ready, steady, GO!!!"
				/>
			</div>
			<div className="description-row">
				<Description
					source="description-yoga"
					title="Relax your mind and body!"
					text="We offer Hatha yoga, which is a softer style that’s perfect for beginners and those who haven’t exercised 
                    in a while. It’s basically meditation in action. Benefits include toning muscles, eliminating tension and 
                    easing chronic pain. When we strengthen weak areas of ourselves and open and stretch tight ones, our bodies 
                    return to their correct alignment."
				/>
				<Description
					source="description-litepace"
					title="A programme specifically designed for our senior members."
					text="Litepace® is a low impact programme that’s perfect for healthy ageing, even for people with conditions 
                    such as arthritis, heart disease, balance issues and many more. Fun is the focus, and with Litepace® 
                    a lifted spirit and an added spring in your step is an absolute certainty!"
				/>
			</div>
		</div>
	);
};
