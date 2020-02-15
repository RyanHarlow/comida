import React, {useState} from 'react';
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/index";
import './LoginModal.css'
import axios from 'axios';

function mapDispatchToProps(dispatch) {
    return {
      setLoggedIn: logged => dispatch(setLoggedIn(logged))
    };
  }

function LoginModal(props) {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');


    const handleSubmit = () => {

        const data = {
            email,
            password
        }

        axios({
            url: '/api/users/login',
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
        <div className="modal is-active LoginModal">
            <div className="modal-background"></div>
            <div className="modal-content">


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



const connectedLoginModal = connect(
    null,
    mapDispatchToProps
  )(LoginModal);
  
  export default connectedLoginModal;