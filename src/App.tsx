import React from 'react';
import './assets/styles/index.scss';
import { Footer } from './feature/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { WhyUsPage } from './pages/whyUs';
import { MembershipsPage } from './pages/memberships';
import { ClassesPage } from './pages/classes';
import { NavBar } from './feature/navBar';
import { DescriptionPage } from './pages/description';
import { TrainingPage } from './pages/training';

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Route path="/" component={HomePage} exact />
				<Route path="/whyUs" component={WhyUsPage} />
				<Route path="/memberships" component={MembershipsPage} />
				<Route path="/classes" component={ClassesPage} />
				<Route path="/description" component={DescriptionPage} />
				<Route path="/training" component={TrainingPage} />
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
