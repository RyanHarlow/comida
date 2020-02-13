import React from 'react';

function SignupModal(props) {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                login modal
            </div>
            <button onClick={props.closeModal} className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}

export default SignupModal;