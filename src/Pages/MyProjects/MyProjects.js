import React from 'react';
import './MyProjects.css';
function MyProjects(props) {
    return (
        <div id='MyProjects'>
            <div className="page_container">
                <h2 className="section_header">
                    My Projects
                </h2>

                <div className="flex_row">
                    <div className="table_wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th># id</th>
                                    <th>Project id</th>
                                    <th>Project name</th>
                                    <th>Price (INTELL)</th>
                                    <th>Rewards (Intell) </th>
                                    <th>Inv Name</th>
                                    <th>In Progress</th>
                                    <th>End Time</th>
                                    <th>Withdraw</th>
                                    <th>Get Investment</th>
                                    <th>Get Ownership (CNFT)</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>0639 .... 1437</td>
                                    <td>French Fry</td>
                                    <td>236.23 </td>
                                    <td>1254.34 </td>
                                    <td>French Fry (FCF)</td>
                                    <td>253/1000 (25.3%)</td>
                                    <td>20:32 UTC 27th Mar</td>
                                    <td>
                                        <button className="table_action_btn" style={{ '--bg': '#C73C3C' }}>Withdraw</button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn" style={{ '--bg': '#F6851B' }}>
                                            Launched
                                        </button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn" style={{ '--bg': '#0AA56D', width: '131px' }}>
                                            Get a Ownership
                                        </button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn" style={{ '--bg': '#9075FF', width: '131px' }}>
                                            View
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;