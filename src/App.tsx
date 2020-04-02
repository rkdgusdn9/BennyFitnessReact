import React from 'react';
import './assets/styles/index.scss';
import { NavBar } from './feature/navBar';
import { Footer } from './feature/footer';
import { HashRouter, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { JobsPage } from './pages/jobs';
import { TestPage } from './pages/test';

function App() {
  return (
    <>
      <NavBar/>
        <HashRouter>
            <Route path="/" component={HomePage} exact/>
            <Route path="/jobs" component={JobsPage} />
            <Route path="/test" component={TestPage} />
        </HashRouter>
      <Footer/>
    </>
  );
}

export default App;
