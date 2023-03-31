import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlePostFormChange, selectPostForm, savePostForm } from '../features/postSlice';


const PostForm = () => {
    const dispatch = useDispatch();
    const oPostForm = useSelector(selectPostForm);

    const handleFormChange = (oEvent) => {
        const { value, name } = oEvent.target;
        dispatch(handlePostFormChange({ value, name }));
    }

    const savePost = () => {
        if (oPostForm.post_text !== '') {
            dispatch(savePostForm());
        }
        dispatch(handlePostFormChange({ value: '', name: 'post_text'}));
    }

    return (
        <div>
            <section>
                <div className='wrapper'>
                    <div className='input-box'>
                        <div className='post-form'>
                            <textarea name="post_text" placeholder='Share what you think!' value={oPostForm.post_text} onChange={handleFormChange}></textarea>
                        </div>
                    </div>
                    <div className="post-actions" defaultValue={'news'}>
                        <select className="flair-selection" name="flair" onChange={handleFormChange} value={oPostForm.flair}>
                            <option value="news">News</option>
                            <option value="sports">Sports</option>
                            <option value="food">Food</option>
                            <option value="movies">Movies</option>
                        </select>
                        <button className='save-post' onClick={savePost}>Post</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PostForm;
