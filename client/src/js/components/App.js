import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AddNewLocation from './AddNewLocation';
import Stand from './Stand'
import Profile from './Profile';
import Search from './Search';
import NoMatch from './NoMatch'
import Footer from './Footer';
import './App.css';
import Map from './Map'
import { Route, Switch } from 'react-router-dom';
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

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        if (!res.data.loggedIn) {
          props.setLoggedIn(false);
        }
      }).catch(err => {
        props.setLoggedIn(false);
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <Navbar loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/add'><AddNewLocation setLoginModalOpen={setLoginModalOpen}/></Route>
        <Route path='/profile/:id' component={Profile} />
        <Route path='/stand/:id' component={Stand} />
        <Route path='/search' component={Search} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  );
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedApp;
