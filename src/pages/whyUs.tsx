import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '../feature/accordion';

export const WhyUsPage: React.FC = () => {
	return (
		<div className="why-page">
			<div className="why-page__list-container">
				<div className="why-page__heading">
					<h2 className="why-page__heading-title">
						WHY CHOOSE <br></br> BENNYFITNESS ?
					</h2>
					<br></br>
					<span className="why-page__heading-content">
						HAVE QUESTIONS ABOUT BENNYFITNESS? HERE IS WHERE YOU CAN FIND YOUR ANSWERS!
					</span>
				</div>
				<div className="why-page__section-container">
					<Accordion
						title="# How much does a bennyfitness membership cost?"
						content="There are 3 membership options available: Basic Membership ($6.99 per week), 
						Better Membership ($11.99 per week) or Black Card Membership ($13.99 per week). 
						you can pick up your membership card at the club during staffed hours."
					/>
					<Accordion
						title="# What is a family membership?"
						content="An amazing privilege for our Black Card Members is that they can share their 
						membership with family &amp; bring a guest with every visit - both family members 
						and guests can then use BennyFitness for free. They must be 18 years of age or older unless 
						accompanied by parent or guardian where the minimum age is 14 years old. The Black Card friend 
						(guest or family member) has the same privileges as our Basic Membership, excluding 24/7 access 
						and fitness orientations. A Black Card friend can only visit during staffed hours"
					/>
					<Accordion
						title="# Are all the clubs open 24/7? How are they staffed?"
						content="All BennyFitness clubs are open 24 hours/7 days a week for all members. To check your
						club's staffed and unstaffed hours, click here."
					/>
					<Accordion
						title="# What if I have questions?"
						content="If you have questions regarding your club or memberships please speak to one of the 
						BennyFitness staff, at the club, during staffed hours. (see my club hours)."
					/>
					<Accordion
						title="# What equipment is available at BennyFitness?"
						content="Each BennyFitness club features 30+ pieces of cardio equipment, selectorized strength equipment, 
						which allows members to choose their own level of resistance, and a large free weight area (2.25kg to 50kg dumbbells)."
					/>
					<Accordion
						title="# What services/programs are offered?"
						content="Cardio and strength training equipment are available as well as stretching areas. 
						Group Fitness Classes are available at all our locations for members with applicable membership types 
						(see membership options). The Black Card Membership includes usage of massage chairs during staffed hours 
						(see my club hours) at applicable locations."
					/>
					<Accordion
						title="# Does BennyFitness offer personal training or fitness classes?"
						content="Yes, BennyFitness is proud to offer a full range of fitness classes and personal training programs 
						to help you achieve your fitness goals. Please note that personal training is only available for members."
					/>
					<Accordion
						title="# Do I need to bring my card every time? What if I forget my card?"
						content="If a BennyFitness member or Black Card Friend does not have the membership card with them 
						they will not be allowed entry into the club. If your card has been lost/stolen a new card can be purchased, 
						during staffed hours (see my club hours), a $10 administration fee applies."
					/>
					<Accordion
						title="# Can I bring a guest?"
						content="Black Card members can register family and/or friends to be a Black Card Friend allowing free 
						access to BennyFitness. If you are not a Black Card member, but would like to bring a guest to the club with you, 
						there is a $20 per visit guest fee."
					/>
					<Accordion
						title="# What are the rules for minors?"
						content="A minor is anyone under the age of 18 years. A minor can only be in the club during staffed hours. 
						For a minor to join BennyFitness they must be at least 14 years of age and must bring their parent/legal guardian 
						into the club with them to register. A minor cannot purchase a membership online. Anyone under 14 years of age 
						can not use our facilities."
					/>
					<Accordion
						title="# What should I wear to work out? Do I need to bring anything?"
						content="Wear comfortable, breathable fabrics and running or cross-training shoes. We recommend that 
						you always bring a lock, water bottle and sweat towel."
					/>
					<Accordion
						title="# How do I get a membership?"
						content="Memberships can be purchased online or at any BennyFitness location during staffed hours (see my club hours).
						 If you plan to sign up for a membership in club, please bring a void cheque to your first visit to be able to provide 
						 your banking details. If you purchase your membership online, you can pick up your membership card at the club during 
						 staffed hours (see my club hours)."
					/>
					<Accordion
						title="# Can I upgrade my membership?"
						content="You can upgrade your BennyFitness membership at any BennyFitness club during staffed hours."
					/>
				</div>
			</div>
		</div>
	);
};

{
	/* <div className="accordion-page">
			<div className="accordion-page__list-container">
				<div className="accordion-page__heading">
					<h2 className="accordion-page__heading-title">asfsadfs</h2>
					<br></br>
					<span className="accordion-page__heading-content">sdfasdf</span>
				</div>
				<div className="accordion__container">
					<Accordion
						title="What is your return policy?"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<Accordion
						title="Which languages does you support?"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				</div>
			</div>
		</div> */
}

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
