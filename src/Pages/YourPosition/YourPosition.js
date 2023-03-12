import React from 'react';
import './YourPosition.css';
function YourPosition(props) {
    return (
        <div id='YourPosition'>
            <div className="page_container">
                <div className="action_wrapper">
                    <h2>Choose your position</h2>
                    <div className="btn_wrapper">
                        <h3 className="btn_title">I’m ...</h3>
                        <button className="btn_action" style={{ '--btn-bg': '#E2761B' }}>
                            TIEX Admin
                        </button>
                        <button className="btn_action" style={{ '--btn-bg': '#C73C3C' }}>
                            Data Scientist
                        </button>
                        <button className="btn_action" style={{ '--btn-bg': '#2099DF' }}>
                            Investor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourPosition;