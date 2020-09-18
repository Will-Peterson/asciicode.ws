import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

const App = () => {
    return (
        <div className='layout'>
            <div className='parameter'>
                <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/terms-of-service' component={TermsOfService} />
                        <Route path='/privacy-policy' component={PrivacyPolicy} />
                        <Route path='/contact' component={Contact} />
                        <Route component={NoMatch} />
                    </Switch>
                <Footer />
            </div>
        </div>
    );
}

export default App;