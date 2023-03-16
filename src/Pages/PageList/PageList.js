import React from 'react';
import { Link } from 'react-router-dom';
import './PageList.css'
function PageList(props) {
    return (
        <div id='PageList'>

            <ol>
                <li>
                    <Link style={{'color': 'white'}} to="/signin">signin</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/">Homepage</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/create_models">create_models</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/my_models">my_models</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/single_model_page">single_model_page</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/dashboard">dashboard</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/launch_share">launch_share</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/for_investor">for_investor</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/my_shares">my_shares</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/for_businesses">for_businesses</Link>
                </li>
                <li>
                    <Link style={{'color': 'white'}} to="/page_list">page_list</Link>
                </li>
            </ol>
        </div>
    );
}

export default PageList;