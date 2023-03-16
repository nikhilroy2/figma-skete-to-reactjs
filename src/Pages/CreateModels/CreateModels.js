import React from 'react';
import './CreateModels.css';
function CreateModels(props) {
    return (
        <div id='CreateModels'>
            <div className="page_container">
                <form action="" className="form_wrapper">
                    <h2 className="form_header">
                        Create a your model
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
                                Description:
                            </label>
                            <textarea name="" placeholder='Type...'></textarea>
                        </li>

                        <li className='form_field_list_item'>
                            <label htmlFor="">
                                Model:
                            </label>
                            <div className="drop_model">
                                Drop your model
                            </div>
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

export default CreateModels;