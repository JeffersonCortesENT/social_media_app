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
        dispatch(savePostForm());
        dispatch(handlePostFormChange({ value: '', name: 'post_text'}));
    }

    return (
        <div>
            <textarea name="post_text" value={oPostForm.post_text} onChange={handleFormChange}></textarea>
            <button onClick={savePost}>Post</button>
        </div>
    );
}

export default PostForm;
