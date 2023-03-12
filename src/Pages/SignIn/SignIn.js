import React from 'react';
import './SignIn.css';
function SignIn(props) {
    return (
        <div id='SignIn'>
            <div className="page_container">
                <div className="sign_in_wrapper">
                    <h2>
                        Sign In
                    </h2>
                    <button className="sign_in_btn">
                        <img src={require('../../images/metamask_icon.png')} alt="icon" />
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;