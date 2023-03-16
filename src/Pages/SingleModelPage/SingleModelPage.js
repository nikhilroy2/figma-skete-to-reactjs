import React, { useState } from 'react';

import './SingleModelPage.css';
function SingleModelPage(props) {
    // const [tabIndex, setTabIndex] = useState(1);
    const [investCounter, setInvestCounter] = useState(134)
    return (
        <div id='SingleModelPage'>
            <div className="page_container">
                <h2 className="page_title">French Fry Prediction</h2>
                <section id="section_2">
                    <div className="section_body">
                        <div className="section_main">
                            <div className="description_box">

                                <div className="account_info">
                                    <h3 className="heading_3">
                                        Model Id on Storj
                                    </h3>
                                    <span className="account_number">
                                        #4565-8956-544r8-9658-89658-6985
                                    </span>
                                </div>


                                <h3 className="heading_3">
                                    Description
                                </h3>
                                <p>
                                    All geohackweek instructional material is made available under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution license</a>. The following is a human-readable summary of (and not a substitute for) the <a href="https://creativecommons.org/licenses/by/4.0/legalcode">full legal text of the CC BY 4.0 license</a>.
                                    You are free:
                                    <ul>
                                        <li>to Share—copy and redistribute the material in any medium or format</li>
                                    </ul>
                                    <ul>
                                        <li>to Adapt—remix, transform, and build upon the material</li>
                                    </ul>
                                    for any purpose, even commercially.
                                    The licensor cannot revoke these freedoms as long as you follow the license terms.

                                    <strong>Under the following terms:</strong>
                                    <ul>
                                        <li>
                                            Attribution—You must give appropriate credit (mentioning that your work is derived from work that is Copyright © geohackweek and, where practical, linking to http://geohackweek.github.io/), provide a <a href="https://creativecommons.org/licenses/by/4.0/">link to the license</a>, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
                                        </li>
                                    </ul>
                                    No additional restrictions—You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. With the understanding that:

                                    <strong>Notices:</strong>
                                    <ul>
                                        <li>
                                            You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
                                        </li>
                                        <li>
                                            No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.
                                        </li>
                                    </ul>
                                    <strong>Software</strong>
                                    <br />

                                    Except where otherwise noted, the example programs and other software provided by geohackweek are made available under the <a href="https://opensource.org/">OSI</a>-approved <a href="https://opensource.org/license/mit/">MIT license</a>. <br />
                                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                                    <br />
                                    <br />
                                    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                                </p>
                            </div>
                        </div>
                        <div className="section_aside">
                            <aside>
                                <h3 className="subtitle_header">Invest here</h3>
                                <div className="invest_card">
                                    <div className="invest_card_header" style={{ '--header-bg': '#0AA56D' }}>
                                        <img src={require('../../images/invest_icon/invest_icon_4.png')} alt="img" />
                                    </div>
                                    <div className="invest_card_body">
                                        <ul>
                                            <li>
                                                <div className="list_box">
                                                    <h2 style={{ fontSize: '13px' }}> 
                                                    French Fry Prediction (FFP)
                                                    </h2>
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
                                        <button className="invest_btn animate_btn">
                                            Invest
                                        </button>
                                    </div>
                                </div>

                                <h3 className="subtitle_header">Invest here</h3>
                                <div className="not_found_card">
                                    Unavailable
                                </div>

                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SingleModelPage;