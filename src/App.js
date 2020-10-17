import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutME from './components/pages/AboutME';
import Skills from './components/pages/Skills';
import ContactPage from './components/pages/ContactPage';
import CV from './components/pages/CV';
import Muscleup from './components/pages/Muscleup';
import Footer from './components/Footer'
import Backlever from './components/pages/Backlever'
import Workout from './components/pages/Workout'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/o-mnie' exact component = {AboutME} />
          <Route path='/skills' exact component = {Skills} />
          <Route path='/contact' exact component = {ContactPage} />
          <Route path='/portfolio' exact component = {CV} />
          <Route path='/muscle-up' exact component = {Muscleup} />
          <Route path='/backlever' exact component = {Backlever} />
          <Route path='/workout' exact component = {Workout} />
        </Switch>
        <Footer />
      </Router>
    </>);
}

export default App;