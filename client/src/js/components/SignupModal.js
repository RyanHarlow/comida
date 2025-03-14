import React, {useState} from 'react';
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/index";
import { Link } from 'react-router-dom';
import './SignupModal.css'
import axios from 'axios';

function mapDispatchToProps(dispatch) {
    return {
      setLoggedIn: logged => dispatch(setLoggedIn(logged))
    };
  }

function SignupModal(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [acceptsTerms, setAcceptsTerms] = useState(false);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');


    const handleSubmit = () => {

        const data = {
            firstName,
            lastName,
            username,
            email,
            password,
            birthdate,
            acceptsTerms
        }

        axios({
            url: '/api/users',
            method: 'POST',
            contentType: 'application/json',
            data: data,

        }).then((res) => {
            if(res.data.err){
                setSuccess('');
                setError(res.data.err)
            }else if(res.data.success){
                setError('');
                setSuccess(res.data.success)
                props.closeModal();
                props.setLoggedIn(true);
            }
        }).catch(err => {
            console.log(err)
        })
    }

    

    return (
        <div className="modal is-active SignupModal">
            <div className="modal-background"></div>
            <div className="modal-content">

                <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Birthdate</label>
                    <div className="control">
                        <input className="input" type="date" placeholder="" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
                    </div>
                </div>


                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" checked={acceptsTerms} onChange={() => setAcceptsTerms(!acceptsTerms)}/>
                            I agree to the <Link to="/terms" target="_blank" onClick={(event) => {event.preventDefault(); window.open("/terms");}}>terms and conditions</Link>

                        </label>
                    </div>
                </div>



                <div className="field is-grouped">
                    <div className="control">
                        <button onClick={handleSubmit} className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button onClick={props.closeModal} className="button is-link is-light">Cancel</button>
                    </div>
    {error && <div style={{color: 'red'}} className='error'>{error}</div>}
    {success && <div>{success}</div>}
                </div>
            </div>
            <button onClick={props.closeModal} className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}



const connectedSignupModal = connect(
    null,
    mapDispatchToProps
  )(SignupModal);
  
  export default connectedSignupModal;