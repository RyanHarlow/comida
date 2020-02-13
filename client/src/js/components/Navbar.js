import React, { useState } from 'react';
import 'bulma/css/bulma.css'
import logo from '../../res/logo.svg';
import { connect } from 'react-redux';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';


const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn };
  };



function Navbar(props) {

    let buttons = (
        <div className="buttons">
                            <button className="button is-primary" onClick={() => setSignupModalOpen(true)}>
                                <strong>Sign up</strong>
                            </button>
                            <button className="button is-light" onClick={() => setLoginModalOpen(true)}>
                                Log in
                            </button>
                        </div>
    )

    if(props.isLoggedIn){
        buttons = (<div className="buttons">
        <button className="button is-primary">
            <strong>Logout</strong>
        </button>
    </div>)
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const burgerClasses = menuOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger';
    const menuClasses = menuOpen ? 'navbar-menu is-active' : 'navbar-menu';

    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} style={{ height: '3rem', width: '3rem' }} alt='logo' />
                </a>
                <a href='/' className="navbar-item has-text-weight-bold">
                    Comida
                </a>

                <a
                    onClick={() => setMenuOpen(!menuOpen)}
                    role="button"
                    className={burgerClasses}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={menuClasses}>
                <div className="navbar-start" style={{width: '100%', display: 'block', marginRight: '0'}}>

                    <a className="navbar-item" style={{width: '80%', display: 'block', marginRight:'40px'}}>
                        <div className="field is-grouped" >
                            <p className="control is-expanded">
                                <input className="input" type="text" placeholder={`Buscar Lugares`} />
                            </p>
                            <p className="control">
                                <button className="button is-info">
                                    Buscar
                    </button>
                            </p>
                        </div>
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        {buttons}
                    </div>
                </div>
            </div>
            {loginModalOpen && <LoginModal closeModal={() => setLoginModalOpen(!loginModalOpen)}/>}
            {signupModalOpen && <SignupModal closeModal={() => setSignupModalOpen(!signupModalOpen)}/>}
        </nav>
    )
}

export default connect(mapStateToProps)(Navbar);