import React, { useState } from 'react';
import './ForBusinesses.css';
function ForBusinesses(props) {

    const invest_card_object = [
        {
            id: 1,
            title: 'FRENCH FRY',
            counter: false,
            object_list: [
                {
                    id: 1,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
                {
                    id: 2,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
                {
                    id: 3,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
                {
                    id: 4,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
                {
                    id: 5,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
                {
                    id: 6,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
                {
                    id: 7,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
                {
                    id: 8,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234
                },
            ]
        },
    ]

    return (
        <div id='ForBusinesses'>
            <div className="page_container">

                {/* card */}
                <div className="card_wrapper">
                    {invest_card_object.map(v => {
                        return (
                            <div key={v.id}>
                                <h3 className="page_sub_header">
                                    <div className="header_row">
                                        <div>
                                            <h2 className="page_header">
                                                My Models<small className="counter">(CNFT)</small>
                                            </h2>

                                        </div>
                                        <div className="header_balance">
                                            <small>Total Modal</small>
                                            <strong>235</strong>
                                        </div>
                                    </div>
                                </h3>

                                <div className="card_row">
                                    {v.object_list.map(j => {
                                        return (
                                            <InvestCard key={j.id} j={j}></InvestCard>
                                        )
                                    })}


                                </div>
                            </div>
                        )
                    })}



                </div>
                {/* card end*/}
            </div>
        </div>
    );
}

export default ForBusinesses;


const InvestCard = ({ j, setIsModalOpen }) => {
    const [investCounter, setInvestCounter] = useState(j.invest_counter)
    return (
        <div key={j.id} className="invest_card">
            <div className="invest_card_header" style={{ '--header-bg': j.bg }}>
                <img src={j.img} alt="img" />
                <span className="invest_counter">
                    #{j.invest_counter}
                </span>
            </div>
            <div className="invest_card_body">
                <ul>
                    <li>
                        <div className="list_box">
                            <h3 className="list_title">
                                Car Speed Perpetual Swap
                            </h3>
                            <p className="list_desc">
                                The ETH staking promo ends in less than 24 hours. Don't miss your chance to win 1 free ETH by participating in our staking promo.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="invest_card_footer">
                <button className="invest_btn animate_btn">
                    In more detail
                </button>
            
            </div>
        </div>
    )
}