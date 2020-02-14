import React, {useState} from 'react';
import './SignupModal.css'
import axios from 'axios';

function SignupModal(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [acceptsTerms, setAcceptsTerms] = useState(false);


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
        console.log(data)

        axios({
            url: '/api/users',
            method: 'POST',
            contentType: 'application/json',
            data: data,

        }).then((res) => {
            console.log(res.data)
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
                            I agree to the <a href="#">terms and conditions</a>
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
                </div>
            </div>
            <button onClick={props.closeModal} className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}

export default SignupModal;