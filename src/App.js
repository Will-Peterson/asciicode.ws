import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import './App.css';
// import About from './components/About';
import Contact from './components/Contact';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import CookieConsent, {Cookies} from 'react-cookie-consent';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <CookieConsent expires={999} > 
        Cookies and other technologies are used on this site to offer users the 
        best experience of relevant content, information, and advertising. See
        our <Link to='privacy-policy'>privacy policy</Link> for more.
      </CookieConsent>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/about' component={About} /> */}
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