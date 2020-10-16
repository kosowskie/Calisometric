import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutME from './components/pages/AboutME';
import Skills from './components/pages/Skills';
import ContactPage from './components/pages/ContactPage';

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
        </Switch>
      </Router>
    </>);
}

export default App;