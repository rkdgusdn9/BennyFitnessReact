import React from 'react';
import './assets/styles/index.scss';
import { Footer } from './feature/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { WhyUsPage } from './pages/whyUs';
import { MembershipsPage } from './pages/memberships';
import { NavBar } from './feature/navBar';

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Route path="/" component={HomePage} exact />
				<Route path="/whyUs" component={WhyUsPage} />
				<Route path="/memberships" component={MembershipsPage} />
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
