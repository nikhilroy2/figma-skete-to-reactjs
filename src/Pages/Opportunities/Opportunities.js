import React, { useState } from 'react';
import './Opportunities.css';
function Opportunities(props) {
    const [investCounter, setInvestCounter] = useState(134)

    return (
        <div id='Opportunities'>
            <div className="page_container">
                <h2 className="page_header">
                    Opportunities<small className="counter">(12)</small>
                </h2>

                <h3 className="page_sub_header">
                    The Intelligence Exchange Ecosystem <small className="counter">(6)</small>
                </h3>

                {/* card */}
                <div className="card_wrapper">
                    <div className="invest_card">
                        <div className="invest_card_header" style={{ '--header-bg': '#0AA56D' }}>
                            <img src={require('../../images/logo-frenchfry.png')} alt="img" />
                        </div>
                        <div className="invest_card_body">
                            <ul>
                                <li>
                                    <div className="list_box">
                                        <h2 style={{ fontSize: '13px' }}>FRENCHFRY (Subway)</h2>
                                    </div>
                                    <div className="list_box" style={{ whiteSpace: 'nowrap' }}>
                                        {investCounter} / 888
                                    </div>
                                </li>
                                <li>
                                    <div className="list_box">
                                        <h2 style={{ fontSize: '19px' }}>
                                            5.2 TIEX
                                        </h2>
                                    </div>
                                    <div className="list_box">
                                        <div className="counter_wrapper">
                                            <button className="counter_plus" onClick={() => setInvestCounter(investCounter + 1)}>
                                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 4H0" stroke="white" strokeWidth={2} />
                                                    <path d="M4 8L4 0" stroke="white" strokeWidth={2} />
                                                </svg>

                                            </button>
                                            <span className="counter_value">{investCounter}</span>
                                            <button className="counter_minus" onClick={() => setInvestCounter(investCounter - 1)}>
                                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 4H0" stroke="white" strokeWidth={2} />
                                                    {/* <path d="M4 8L4 0" stroke="white" strokeWidth={2} /> */}
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="invest_card_footer">
                            <button className="invest_btn">
                                Invest
                            </button>
                        </div>
                    </div>
                    <div className="invest_card">
                        <div className="invest_card_header" style={{ '--header-bg': '#0AA56D' }}>
                            <img src={require('../../images/logo-frenchfry.png')} alt="img" />
                        </div>
                        <div className="invest_card_body">
                            <ul>
                                <li>
                                    <div className="list_box">
                                        <h2 style={{ fontSize: '13px' }}>FRENCHFRY (Subway)</h2>
                                    </div>
                                    <div className="list_box" style={{ whiteSpace: 'nowrap' }}>
                                        {investCounter} / 888
                                    </div>
                                </li>
                                <li>
                                    <div className="list_box">
                                        <h2 style={{ fontSize: '19px' }}>
                                            5.2 TIEX
                                        </h2>
                                    </div>
                                    <div className="list_box">
                                        <div className="counter_wrapper">
                                            <button className="counter_plus" onClick={() => setInvestCounter(investCounter + 1)}>
                                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 4H0" stroke="white" strokeWidth={2} />
                                                    <path d="M4 8L4 0" stroke="white" strokeWidth={2} />
                                                </svg>

                                            </button>
                                            <span className="counter_value">{investCounter}</span>
                                            <button className="counter_minus" onClick={() => setInvestCounter(investCounter - 1)}>
                                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 4H0" stroke="white" strokeWidth={2} />
                                                    {/* <path d="M4 8L4 0" stroke="white" strokeWidth={2} /> */}
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="invest_card_footer">
                            <button className="invest_btn">
                                Invest
                            </button>
                        </div>
                    </div>
                </div>
                {/* card end*/}
            </div>
        </div>
    );
}

export default Opportunities;