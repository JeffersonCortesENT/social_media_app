import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePostModifications } from '../features/postSlice';


const EditPostForm = ({ closeForm, oEditData }) => {
    const dispatch = useDispatch();
    const [oForm, setForm] = useState({});

    const saveModifications = () => {
        dispatch(savePostModifications({ data: oForm, prev_data: oEditData.oPost }));
        closeForm();
    }

    const handleFormChange = (oEvent) => {
        const { value, name } = oEvent.target;
        let oTempForm = {...oForm};
        oTempForm[name] = value;
        setForm(oTempForm);
    }

    useEffect(() => {
        setForm(oEditData.oPost);
    }, [oEditData])

    return (
        <div>
            <section>
                <div className='modal'>
                    <div className='wrapper'>
                        <div className='input-box'>
                                <div className='post-form'>
                                    <textarea name="post_text" placeholder='Share what you think!' value={oForm.post_text} onChange={handleFormChange}></textarea>
                                </div>
                            </div>
                            <div className="post-actions">
                                <select className="flair-selection" name="flair" value={oForm.flair} onChange={handleFormChange}>
                                    <option value="news">News</option>
                                    <option value="sports">Sports</option>
                                    <option value="food">Food</option>
                                    <option value="movies">Movies</option>
                                </select>
                                <button className='save-post' onClick={saveModifications}>Save</button>
                                <button className='close-button' onClick={() => { closeForm() }}>Close</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EditPostForm;
