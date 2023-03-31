import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostEntry, modifyFeedFilter, selectFilteredPost, selectPostsList } from '../features/postSlice';
import EditPostForm from './EditPostForm';


const PostList= () => {
    const dispatch = useDispatch();
    const aPosts = useSelector(selectPostsList);
    const aFilteredPosts = useSelector(selectFilteredPost);
    const [bShowEditForm, setShowEditForm] = useState(false);
    const [oEditData, setEditData] = useState(null);

    const deletePost = (oEvent) => {
        const { value } = oEvent.target;
        dispatch(deletePostEntry({ value: value}));
    }

    const openEditForm = (iIndex, oPostData) => {
        setEditData({index: iIndex, oPost: oPostData});
        setShowEditForm(true);
    }

    const closeEditForm = () => {
        setShowEditForm(false);
    }

    useEffect(() => {
        dispatch(modifyFeedFilter({ flair: null}));
    }, [aPosts])

    return (
        <div>
            <section>
                {
                    aFilteredPosts.length > 0 ? 
                    (
                        aFilteredPosts.map((aData, iKey) => (
                            <div className='post-content' key={iKey}>
                                <p>{ aData.post_text }</p><br/>

                                <button onClick={ () => { openEditForm(iKey, aData)} } className='edit-post btn'>Edit</button>
                                <button value={iKey} onClick={deletePost} className='delete-post btn'>Delete</button>
                            </div>
                        ))
                    ) 
                    : 
                    (
                        <div className='empty-list'>
                            <h2>No Posts Available</h2>
                        </div>
                    )
                }
                {
                    bShowEditForm === true && (
                        <EditPostForm
                            oEditData={oEditData}
                            closeForm={closeEditForm}
                        />
                    )
                }
            </section>
        </div>
    );
}

export default PostList;
