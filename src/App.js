import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/terms-and-conditions' component={TermsAndConditions} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/contact' component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;