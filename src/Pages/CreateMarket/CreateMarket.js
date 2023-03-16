import React from 'react';
import './CreateMarket.css';
import { Link } from 'react-router-dom';
function CreateMarket(props) {
    const links_object = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'My Models',
            path: '/my_models'
        },
        {
            id: 3,
            name: 'My Shares',
            path: '/my_shares'
        },
        {
            id: 4,
            name: 'For businesses',
            path: '/for_businesses'
        },
        {
            id: 5,
            name: 'For investors',
            path: '/for_investor'
        },
    ]
    return (
        <div id='CreateMarket'>
            <div className="page_container">
                <ul className="navbar_list">
                    {
                        links_object.map(v => {
                            return (
                                <li key={v.id} >
                                    <Link to={v.path}>
                                        {v.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
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