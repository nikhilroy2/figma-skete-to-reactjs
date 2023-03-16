import React from 'react';
import './Dashboard.css';
function Dashboard(props) {
    return (
        <div id='Dashboard'>
            <div className="page_container">
                <h2 className="section_header">
                    Dashboard
                </h2>

                <div className="flex_row">
                    <div className="table_wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th># id</th>
                                    <th>Model Id</th>
                                    <th>Project name</th>
                                    <th>Share Price (Intell) </th>
                                    <th>Amount (Intell) </th>
                                    <th>Share Name</th>
                                    <th>In Progress</th>
                                    <th>Withdraw</th>
                                    <th>Shares</th>
                                    <th>View</th>
                                    <th>Share Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>0639 .... 1437</td>
                                    <td>French Fry</td>
                                    <td>236.23 </td>
                                    <td>1254.34 </td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#949494' }}>Withdraw</button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#763E1A' }}>
                                            Launched
                                        </button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#9075FF' }}>
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        0xFfA83c ..... 827A7682
                                    </td>
                                </tr>


                                <tr>
                                    <td>2</td>
                                    <td>0639 .... 1437</td>
                                    <td>French Fry</td>
                                    <td>236.23 </td>
                                    <td>2356.23 </td>
                                    <td>Snow (SNOW)</td>
                                    <td>253/1000 (25.3%)</td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#C73C3C' }}>Withdraw</button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#F6851B' }}>
                                            Launched
                                        </button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#9075FF' }}>
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        0xFfA83c ..... 827A7682
                                    </td>
                                </tr>

                                
                                <tr>
                                    <td>3</td>
                                    <td>0639 .... 1437</td>
                                    <td>French Fry</td>
                                    <td>236.23 </td>
                                    <td>1254.34  </td>
                                    <td>French Fry (FCF)</td>
                                    <td>253/1000 (25.3%)</td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#C73C3C' }}>Withdraw</button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#763E1A' }}>
                                            Launched
                                        </button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#9075FF' }}>
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        0xFfA83c ..... 827A7682
                                    </td>
                                </tr>


                                <tr>
                                    <td>4</td>
                                    <td>0639 .... 1437</td>
                                    <td>French Fry</td>
                                    <td>236.23 </td>
                                    <td>2356.23 </td>
                                    <td>Snow (SNOW)</td>
                                    <td>253/1000 (25.3%)</td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#C73C3C' }}>Withdraw</button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#F6851B' }}>
                                            Launched
                                        </button>
                                    </td>
                                    <td>
                                        <button className="table_action_btn animate_btn" style={{ '--bg': '#9075FF' }}>
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        -
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

export default Dashboard;