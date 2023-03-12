import React from 'react';
import './LaunchShare.css';
function LaunchShare(props) {
    return (
        <div id='LaunchShare'>
            <div className="page_container">
                <form action="" className="form_wrapper">
                    <h2 className="form_header">
                        Launch shares for investors
                    </h2>
                    <ul className="form_field_list">

                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Share Name:
                            </label>
                            <input type="text" placeholder='French Fry' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Share Symbol:
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Max Total Supply:
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Share Price (TIEX):
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                MNSW:
                                <small>
                                    Maximum number of shares per an wallet:
                                </small>
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                MNST:
                                <small>
                                    Maximum number of shares per an tx
                                </small>
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Launch End Time:
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                    </ul>

                    <div className="btn_wrapper">
                        <button className="btn_action animate_btn" style={{ '--btn-bg': '#C73C3C' }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LaunchShare;