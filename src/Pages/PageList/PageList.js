import React from 'react';
import { Link } from 'react-router-dom';
import './PageList.css'
function PageList(props) {
    return (
        <div id='PageList'>

            <ol>
                <li>
                    <Link style={{'color': 'white'}} to="/">Homepage</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/page1">page1</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/opportunities">opportunities</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/my_assets">my_assets</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/create_market">create_market</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/find_opportunities">find_opportunities</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/your_position">your_position</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/request_demo">request_demo</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/launch_share">launch_share</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/request_data_scientist">request_data_scientist</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/my_projects">my_projects</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/profile_page">profile_page</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/signin">signin</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/page_list">Page list</Link>
                </li>
            </ol>
        </div>
    );
}

export default PageList;