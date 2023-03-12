import React, { useState } from 'react';
import './Opportunities.css';
function Opportunities(props) {

    const invest_card_object = [
        {
            id: 1,
            title: 'The Intelligence Exchange Ecosystem',
            counter: 6,
            object_list: [
                {
                    id: 1,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 2,
                    bg: '#9075FF',
                    img: require('../../images/invest_icon/invest_icon_2.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 3,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 4,
                    bg: '#9075FF',
                    img: require('../../images/invest_icon/invest_icon_2.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 5,
                    bg: '#0AA56D',
                    img: require('../../images/invest_icon/invest_icon_4.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 6,
                    bg: '#8A8A8A',
                    img: require('../../images/invest_icon/invest_icon_5.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 7,
                    bg: '#7C3E1A',
                    img: require('../../images/invest_icon/invest_icon_6.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 8,
                    bg: '#546A25',
                    img: require('../../images/invest_icon/invest_icon_7.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
            ]
        },
        {
            id: 2,
            title: 'SingularityNET Ecosystem',
            counter: 3,
            object_list: [
                {
                    id: 1,
                    bg: '#161616',
                    img: require('../../images/invest_icon/invest_icon_8.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 2,
                    bg: '#014B2C',
                    img: require('../../images/invest_icon/invest_icon_9.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 3,
                    bg: '#0AA56D',
                    img: require('../../images/invest_icon/invest_icon_13.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
            ]
        },
        {
            id: 3,
            title: 'Ocean Protocol Ecosystem',
            counter: 4,
            object_list: [
                {
                    id: 1,
                    bg: '#161616',
                    img: require('../../images/invest_icon/invest_icon_11.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 2,
                    bg: '#014B2C',
                    img: require('../../images/invest_icon/invest_icon_12.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
                {
                    id: 3,
                    bg: '#0AA56D',
                    img: require('../../images/invest_icon/invest_icon_13.png'),
                    subway: 888,
                    tiex: '5.2 TIEX',
                    invest_counter: 134
                },
            ]
        },
    ]
    return (
        <div id='Opportunities'>
            <div className="page_container">
                <h2 className="page_header">
                    Opportunities<small className="counter">(12)</small>
                </h2>



                {/* card */}
                <div className="card_wrapper">
                    {invest_card_object.map(v => {
                        return (
                            <div key={v.id}>
                                <h3 className="page_sub_header">
                                    {v.title} <small className="counter">({v.counter})</small>
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

export default Opportunities;


const InvestCard = ({ j }) => {
    const [investCounter, setInvestCounter] = useState(j.invest_counter)
    return (
        <div key={j.id} className="invest_card">
            <div className="invest_card_header" style={{ '--header-bg': j.bg }}>
                <img src={j.img} alt="img" />
            </div>
            <div className="invest_card_body">
                <ul>
                    <li>
                        <div className="list_box">
                            <h2 style={{ fontSize: '13px' }}>FRENCHFRY (Subway)</h2>
                        </div>
                        <div className="list_box" style={{ whiteSpace: 'nowrap' }}>
                            {investCounter} / {j.subway}
                        </div>
                    </li>
                    <li>
                        <div className="list_box">
                            <h2 style={{ fontSize: '19px' }}>
                                {j.tiex}
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
    )
}