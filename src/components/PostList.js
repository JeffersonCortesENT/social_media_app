import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostEntry, savePostModifications, selectPostsList } from '../features/postSlice';


const PostList= () => {
    const dispatch = useDispatch();
    const aPosts = useSelector(selectPostsList);

    const deletePost = (oEvent) => {
        const { value } = oEvent.target;
        dispatch(deletePostEntry({ value: value}));
    }

    const editPost = (iIndex, sPostText) => {
        let oEditForm = prompt("Post:", sPostText);
        if (oEditForm != null) {
            dispatch(savePostModifications({ index: iIndex, data: { post_text: oEditForm } }));
          }
    }

    return (
        <div>
            <section>
                {
                    aPosts.length > 0 ? 
                    (
                        aPosts.map((aData, iKey) => (
                            <div className='post-content' key={iKey}>
                                <p>{ aData.post_text }</p><br/>
                                <button onClick={ () => { editPost(iKey, aData.post_text) } }>Edit</button>
                                <button value={iKey} onClick={deletePost}>Delete</button>
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
            </section>
        </div>
    );
}

export default PostList;
