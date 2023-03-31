import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FORM_POST } from '../constants';

const initialState = {
    aPosts: [],
    aFilteredPosts: [],
    oPost: DEFAULT_FORM_POST,
    sFlairFilter: 'all',
};

export const postSlice = createSlice({
    name: 'influencer',
    initialState,
    reducers: {
        handlePostFormChange: (state, action) => {
            const { name, value } = action.payload;
            state.oPost[name] = value;
        },
        savePostForm: (state) => {
            let aTempPosts = state.aPosts;
            state.aPosts = [...aTempPosts, state.oPost];
        },
        deletePostEntry: (state, action) => {
            const { value } = action.payload;
            let aTempPosts = state.aPosts;
            aTempPosts.splice(value, 1);
            state.aPosts = [...aTempPosts];
        },
        savePostModifications: (state, action) => {
            const { index, data } = action.payload;
            state.aPosts[index] = data;
        },
        modifyFeedFilter: (state, action) => {
            const { flair } = action.payload;
            let aPostsTemp = state.aPosts;
            state.sFlairFilter = flair !== null ? flair : state.sFlairFilter;
            if (state.sFlairFilter !== 'all') {
                state.aFilteredPosts = [...aPostsTemp].filter((oPost) => {
                    return oPost.flair === state.sFlairFilter;
                });
            } else {
                state.aFilteredPosts = [...aPostsTemp];
            }
        }
    },
});

export const {
    handlePostFormChange,
    savePostForm,
    deletePostEntry,
    savePostModifications,
    modifyFeedFilter,
} = postSlice.actions;

export const selectPostsList = (state) => state.posts.aPosts;
export const selectPostForm = (state) => state.posts.oPost;
export const selectFilteredPost = (state) => state.posts.aFilteredPosts;

export default postSlice.reducer;
