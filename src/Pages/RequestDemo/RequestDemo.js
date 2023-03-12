import React from 'react';
import './RequestDemo.css';
function RequestDemo(props) {
    return (
        <div id='RequestDemo'>
            <div className="page_container">
                <form action="" className="form_wrapper">
                    <h2 className="form_header">
                        Request a Demo
                    </h2>
                    <ul className="form_field_list">
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Project name:
                            </label>
                            <input type="text" placeholder='French Fry' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Price (TIEX)
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Brand:
                            </label>
                            <div className="drop_model">
                                <input type="range" />
                            </div>
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Model:
                            </label>
                            <div className="drop_model">
                                Drop your model
                            </div>
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                About:
                            </label>
                            <textarea name="" placeholder='Type...'></textarea>
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Tutorial:
                            </label>
                            <textarea name="" placeholder='Type...'></textarea>
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Website:
                            </label>
                            <input type="url" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Youtube:
                            </label>
                            <input type="url" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Facebook:
                            </label>
                            <input type="url" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Twitter:
                            </label>
                            <input type="url" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Instagram:
                            </label>
                            <input type="url" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Telegram:
                            </label>
                            <input type="url" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Contact (Email):
                            </label>
                            <input type="email" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Contact (Phone):
                            </label>
                            <input type="number" placeholder='' />
                        </li>
                    </ul>

                    <div className="btn_wrapper">
                        <button className="btn_action" style={{ '--btn-bg': '#C73C3C' }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RequestDemo;