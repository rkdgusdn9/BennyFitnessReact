import React from 'react';
import './assets/styles/index.scss';
import { Footer } from './feature/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { JobsPage } from './pages/jobs';
import { TestPage } from './pages/test';
import { NavBar } from './feature/navBar';

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Route path="/" component={HomePage} exact />
				<Route path="/jobs" component={JobsPage} />
				<Route path="/test" component={TestPage} />
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
