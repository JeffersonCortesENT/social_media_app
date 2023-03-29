import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const NewsFeed= () => {
    return (
        <div>
            {/*<Header />*/}
            <h1>News Feed</h1>
            <h1>Share what you think!</h1>
            <PostForm/>
            <PostList/>
        </div>
    );
}

export default NewsFeed;
