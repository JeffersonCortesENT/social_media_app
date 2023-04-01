import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import { useDispatch, useSelector } from 'react-redux';
import { modifyFeedFilter, selectDescStatus, setOrderBy } from '../features/postSlice';

const NewsFeed = () => {
    const dispatch = useDispatch();
    const bDesc = useSelector(selectDescStatus);

    const applyFilter = (oEvent) => {
        const { value } = oEvent.target;
        dispatch(modifyFeedFilter({ flair: value }));
    }

    const setOrder = () => {
        dispatch(setOrderBy({ value: bDesc === true}));
    }


    return (
        <div className='feed-line'>
            <section>
                <b className='feed-header'>News Feed</b>
                <select className="flair-selection" name="flair" defaultValue={'all'} onChange={applyFilter} style={{ marginLeft: '15px' }}>
                    <option value="all">All</option>
                    <option value="news">News</option>
                    <option value="sports">Sports</option>
                    <option value="food">Food</option>
                    <option value="movies">Movies</option>
                </select>
                <button onClick={setOrder} className='order'>{bDesc === true ? 'Asc' : 'Desc'}</button>
            </section>
            <PostForm/>
            <PostList/>
        </div>
    );
}

export default NewsFeed;
