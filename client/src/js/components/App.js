import React, {useEffect} from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Footer from './Footer';
import './App.css';
import Map from './Map'
import { Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/map' component={Map} />
      <Footer />
    </div>
  );
}

export default App;
