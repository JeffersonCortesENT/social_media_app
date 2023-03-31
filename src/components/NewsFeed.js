import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const NewsFeed= () => {
    return (
        <div className='feed-line'>
            <section>
                <b className='feed-header'>News Feed</b>
            </section>
            <PostForm/>
            <PostList/>
        </div>
    );
}

export default NewsFeed;
