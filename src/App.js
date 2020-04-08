import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      &#169; &copy; ⌐
      <Body />
      <Footer />
    </div>
  );
}

export default App;
