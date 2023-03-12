import React from 'react';
import './ProfilePage.css';
function ProfilePage(props) {
    return (
        <div id='ProfilePage'>
            <div className="page_container">
                <form action="" className="form_wrapper">
                    <h2 className="form_header">
                        Profile
                    </h2>
                    <ul className="form_field_list">

                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Your account address:
                            </label>
                            <input type="text" value={'0xfe49 .... 1C457'} placeholder='' />
                        </li>

                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                First name:
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Last name:
                            </label>
                            <input type="text" placeholder='' />
                        </li>
                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Are you from United States?
                            </label>
                            {/* <input type="text" placeholder='' /> */}
                            <div className="form_confirm_box">
                                <button className="confirm_btn animate_btn" style={{ '--bg': "#9075FF" }}>
                                    Sure
                                </button>
                                <button className="confirm_btn animate_btn" style={{ '--bg': '#1F1F1F' }}>
                                    Not sure
                                </button>
                            </div>
                            <br />
                            <small className='form_helper_text'>You need to verify KYC so we can make sure if you are from United Status when you withdraw the reward as U.S. investor.</small>
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

export default ProfilePage;