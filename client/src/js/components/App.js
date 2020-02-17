import React, {useEffect} from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AddNewLocation from './AddNewLocation';
import Footer from './Footer';
import './App.css';
import Map from './Map'
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    setLoggedIn: logged => dispatch(setLoggedIn(logged))
  };
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

function App(props) {

  useEffect(() => {
    axios.get('/api/users')
    .then(res => {
      if(!res.data.loggedIn){
        props.setLoggedIn(false);
      }
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/map' component={Map} />
      <Route exact path='/add' component={AddNewLocation} />
      <Footer />
    </div>
  );
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedApp;
