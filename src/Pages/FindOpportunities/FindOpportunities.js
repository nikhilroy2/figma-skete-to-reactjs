import React from 'react';
import './FindOpportunities.css';
function FindOpportunities(props) {
    return (
        <div id='FindOpportunities'>
            <div className="page_container">
                <div className="action_wrapper">
                    <h2>Find the opportunities here</h2>
                    <div className="btn_wrapper">
                        <button className="btn_action animate_btn" style={{ '--btn-bg': '#E2761B' }}>
                            Find Opportunities
                        </button>
                        <button className="btn_action animate_btn" style={{ '--btn-bg': '#C73C3C' }}>
                            My Assets
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindOpportunities;