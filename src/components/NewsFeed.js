import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import { useDispatch } from 'react-redux';
import { modifyFeedFilter } from '../features/postSlice';

const NewsFeed = () => {
    const dispatch = useDispatch();

    const applyFilter = (oEvent) => {
        const { value } = oEvent.target;
        dispatch(modifyFeedFilter({ flair: value }));
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
            </section>
            <PostForm/>
            <PostList/>
        </div>
    );
}

export default NewsFeed;
