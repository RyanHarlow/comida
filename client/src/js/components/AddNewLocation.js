import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AddNewLocationMap from './AddNewLocationMap';
import AddNewLocationForm from './AddNewLocationForm';
import './AddNewLocation.css';


const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn };
};


class AddNewLocation extends Component {
    

    render() {

        if (!this.props.isLoggedIn) {
            return (<Redirect to="/" />)
        }
        else {
            return (
                <div className={'AddNewLocation'}>
                <AddNewLocationMap />
                <AddNewLocationForm />
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(AddNewLocation);