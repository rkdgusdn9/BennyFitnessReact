import React from 'react';
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
						content={
							<div>
								There are 3 membership options available: Basic Membership ($6.99
								per week), Better Membership ($11.99 per week) or Black Card
								Membership ($13.99 per week).{' '}
								<a href="/memberships" className="anchor-tag">
									See more membership details or buy today
								</a>{' '}
								. When you purchase your membership online, you can pick up your
								membership card at the club during staffed hours.
							</div>
						}
					/>
					<Accordion
						title="# What is a family membership?"
						content={
							<div>
								An amazing privilege for our Black Card Members is that they can
								share their membership with family &amp; bring a guest with every
								visit - both family members and guests can then use BennyFitness for
								free. They must be 18 years of age or older unless accompanied by
								parent or guardian where the minimum age is 14 years old. The Black
								Card friend (guest or family member) has the same privileges as our{' '}
								<a href="/memberships" className="anchor-tag">
									Basic Membership
								</a>
								, excluding 24/7 access and fitness orientations. A Black Card
								friend can only visit during staffed hours
							</div>
						}
					/>
					<Accordion
						title="# Are all the clubs open 24/7? How are they staffed?"
						content={
							<div>
								All BennyFitness clubs are open 24 hours/7 days a week for all
								members.
							</div>
						}
					/>
					<Accordion
						title="# What if I have questions?"
						content={
							<div>
								If you have questions regarding your club or memberships please
								speak to one of the BennyFitness staff, at the club, during staffed
								hours.
							</div>
						}
					/>
					<Accordion
						title="# What equipment is available at BennyFitness?"
						content={
							<div>
								Each BennyFitness club features 30+ pieces of cardio equipment,
								selectorized strength equipment, which allows members to choose
								their own level of resistance, and a large free weight area (2.25kg
								to 50kg dumbbells).
							</div>
						}
					/>
					<Accordion
						title="# What services/programs are offered?"
						content={
							<div>
								Cardio and strength training equipment are available as well as
								stretching areas. Group Fitness Classes are available at all our
								locations for members with applicable membership types{' '}
								<a href="/memberships" className="anchor-tag">
									(see membership options)
								</a>
								. The Black Card Membership includes usage of massage chairs during
								staffed hours at applicable locations.
							</div>
						}
					/>
					<Accordion
						title="# Does BennyFitness offer personal training or fitness classes?"
						content={
							<div>
								Yes, BennyFitness is proud to offer a full range of fitness classes
								and personal training programs to help you achieve your fitness
								goals. Please note that personal training is only available for
								members.
							</div>
						}
					/>
					<Accordion
						title="# Do I need to bring my card every time? What if I forget my card?"
						content={
							<div>
								If a BennyFitness member or Black Card Friend does not have the
								membership card with them they will not be allowed entry into the
								club. If your card has been lost/stolen a new card can be purchased,
								during staffed hours, a $10 administration fee applies.
							</div>
						}
					/>
					<Accordion
						title="# Can I bring a guest?"
						content={
							<div>
								Black Card members can register family and/or friends to be a Black
								Card Friend allowing free access to BennyFitness. If you are not a
								Black Card member, but would like to bring a guest to the club with
								you, there is a $20 per visit guest fee.
							</div>
						}
					/>
					<Accordion
						title="# What are the rules for minors?"
						content={
							<div>
								A minor is anyone under the age of 18 years. A minor can only be in
								the club during staffed hours. For a minor to join BennyFitness they
								must be at least 14 years of age and must bring their parent/legal
								guardian into the club with them to register. A minor cannot
								purchase a membership online. Anyone under 14 years of age can not
								use our facilities.
							</div>
						}
					/>
					<Accordion
						title="# What should I wear to work out? Do I need to bring anything?"
						content={
							<div>
								Wear comfortable, breathable fabrics and running or cross-training
								shoes. We recommend that you always bring a lock, water bottle and
								sweat towel.
							</div>
						}
					/>
					<Accordion
						title="# How do I get a membership?"
						content={
							<div>
								Memberships can be purchased online or at any BennyFitness location
								during staffed hours. If you plan to sign up for a membership in
								club, please bring a void cheque to your first visit to be able to
								provide your banking details. If you purchase your membership
								online, you can pick up your membership card at the club during
								staffed hours.
							</div>
						}
					/>
					<Accordion
						title="# Can I upgrade my membership?"
						content={
							<div>
								You can upgrade your BennyFitness membership at any BennyFitness
								club during staffed hours.
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};
