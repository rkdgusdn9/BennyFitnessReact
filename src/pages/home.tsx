import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
import background1 from '../images/Header-Test.png';
import { List } from '../feature/list';
import { Benefit } from '../feature/benefit';
import { Ready } from '../feature/ready';

export const HomePage: React.FC = () => {
    return (
            <div className="home-page">
                <div className="home-page__list-container">
                    {/* <Link to="/jobs"> GO TO HOME PAGE </Link> */}

                    <List 
                        title="Membership Starting At"
                        price="$6.99 / Week"
                        description="At BennyFitness we are here to help you
                        achieve your health, wellness and fitness goals.
                        Members of BennyFitness clubs and gyms
                        are achieving their fitness goals in our clubs
                        all over New Zealand."
                    />

                    <Benefit 
                        title="LOSE WEIGHT"
                        description="Exercise, specifically Cardio, helps to burn calories &amp; body fat. It can aid in weight loss and boost your confidence."
                        
                        title1="REDUCE STRESS"
                        description1="Exercise lowers cortisol (stress hormones) &amp; releases endorphins (happy hormones). It can combat stress, anxiety, &amp; depression."

                        title2="BOOST ENERGY"
                        description2="Exercise enhances blood flow carrying oxygen &amp; nutrients to muscle tissue. It can fight fatigue and increase energy levels."

                        title3="IMPROVE HEALTH"
                        description3="Exercise strengthens the heart, improves circulation, &amp; decreases blood pressure. It can reduce the risk of chronic disease."
                    />

                    <Ready
                        title="READY TO JOIN?"
                        description="From our friendly front desk to expert personal trainers,
                        we’ll make sure you are well looked after! We’d love to have
                        you join our members who have had success."
                    />
                </div>

                
                
            {/* <Button/>
            <Link to="/jobs"> GO TO JOBS PAGE </Link> */}
            </div>
    )
}
