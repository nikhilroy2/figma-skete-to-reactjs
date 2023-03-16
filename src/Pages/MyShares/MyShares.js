import React, { useState } from 'react';
import './MyShares.css';
function MyShares(props) {

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
                    invest_counter: 1234,
                    aside_text: 'CSPS'
                },
                {
                    id: 2,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234,
                    aside_text: 'VSLP'

                },
                {
                    id: 3,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234,
                    aside_text: 'LTG'

                },
                {
                    id: 4,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234,
                    aside_text: 'XLM'

                },
                {
                    id: 5,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234,
                    aside_text: 'OPO'

                },
                {
                    id: 6,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234,
                    aside_text: 'KUS'

                },
                {
                    id: 7,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234,
                    aside_text: 'DAP'

                },
                {
                    id: 8,
                    bg: '#C73C3C',
                    img: require('../../images/invest_icon/invest_icon_1.png'),
                    subway: 1254,
                    tiex: '5.2 TIEX',
                    invest_counter: 1234,
                    aside_text: 'Web3'

                },
            ]
        },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen)
    return (
        <div id='MyShares'>
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
                                                My Shares<small className="counter">(CNFT)</small>
                                            </h2>

                                        </div>
                                        <div className="header_balance">
                                            <small>Balance</small>
                                            <strong>123</strong>
                                        </div>
                                    </div>
                                </h3>

                                <div className="card_row">
                                    {v.object_list.map(j => {
                                        return (
                                            <InvestCard setIsModalOpen={setIsModalOpen} key={j.id} j={j}></InvestCard>
                                        )
                                    })}


                                </div>
                            </div>
                        )
                    })}



                </div>
                {/* card end*/}
            </div>

            {isModalOpen && (
                <div className="modal_view">
                    <div className="modal_body">
                        <button onClick={() => setIsModalOpen(false)} className='close_btn'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg>
                        </button>
                        <div className="flex_row">
                            <div className="flex_item">
                                <strong>Transfer</strong>
                            </div>
                            <div className="flex_item">
                                <small>Send to</small>
                            </div>
                        </div>
                        <div className="form_control">
                            <input type="text" className="form_control_input" />
                        </div>
                        <div className="form_control">
                            <button className="send_btn animate_btn">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

            )}

        </div>
    );
}

export default MyShares;


const InvestCard = ({ j, setIsModalOpen }) => {
    const [investCounter, setInvestCounter] = useState(j.invest_counter)
    return (
        <div key={j.id} className="invest_card">
            <div className="invest_card_header" style={{ '--header-bg': j.bg }}>
                <img src={j.img} alt="img" />
                <span className="invest_counter">
                    #{j.invest_counter}
                </span>
                <div className="aside_text">
                    {j.aside_text}
                </div>
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
                    View
                </button>
                <button onClick={() => setIsModalOpen(true)} className="invest_btn animate_btn">
                    Transer
                </button>
            </div>
        </div>
    )
}