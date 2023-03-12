import React from 'react';
import './CreateMarket.css';
function CreateMarket(props) {
    return (
        <div id='CreateMarket'>
            <div className="page_container">
                <div className="action_wrapper">
                    <h2>Create  a market for your models</h2>
                    <button className="btn_action animate_btn" style={{ '--btn-bg': '#E2761B' }}>
                        Request a demo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateMarket;