import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FORM_POST } from '../constants';

const initialState = {
    aPosts: [],
    aFilteredPosts: [],
    oPost: DEFAULT_FORM_POST,
    sFlairFilter: 'all',
    bDesc: true,
};

export const postSlice = createSlice({
    name: 'influencer',
    initialState,
    reducers: {
        setOrderBy: (state, action) => {
            const { value } = action.payload;
            state.bDesc = value === true ? false : true;
        },
        handlePostFormChange: (state, action) => {
            const { name, value } = action.payload;
            state.oPost[name] = value;
        },
        savePostForm: (state) => {
            let aTempPosts = state.aPosts;
            state.oPost['id'] = ([...aTempPosts].length + 1 ) + Date.parse(new Date());
            state.aPosts = [...aTempPosts, state.oPost];
        },
        deletePostEntry: (state, action) => {
            const { value } = action.payload;
            let aTempPosts = state.aPosts;
            let index;
            aTempPosts.forEach((oPost, iIndex) => {
                if (oPost.id === value.id) {
                    index = iIndex;
                }
            });
            aTempPosts.splice(index, 1);
            state.aPosts = [...aTempPosts];
        },
        savePostModifications: (state, action) => {
            const { data, prev_data } = action.payload;
            let index;
            [...state.aPosts].forEach((oPost, iIndex) => {
                if (oPost.id === prev_data.id) {
                    index = iIndex;
                }
            });
            state.aPosts[index] = data;
        },
        modifyFeedFilter: (state, action) => {
            const { flair } = action.payload;
            let aPostsTemp = [...state.aPosts];
            state.sFlairFilter = flair !== null ? flair : state.sFlairFilter;
            if (state.sFlairFilter !== 'all') {
                state.aFilteredPosts = aPostsTemp.filter((oPost) => {
                    return oPost.flair === state.sFlairFilter;
                });
            } else {
                state.aFilteredPosts = [...aPostsTemp];
            }
            let aTempFiltered = [...state.aFilteredPosts];
            state.aFilteredPosts = state.bDesc === true ? aTempFiltered.reverse() : aTempFiltered;
        }
    },
});

export const {
    handlePostFormChange,
    savePostForm,
    deletePostEntry,
    savePostModifications,
    modifyFeedFilter,
    setOrderBy,
} = postSlice.actions;

export const selectPostsList = (state) => state.posts.aPosts;
export const selectPostForm = (state) => state.posts.oPost;
export const selectFilteredPost = (state) => state.posts.aFilteredPosts;
export const selectDescStatus = (state) => state.posts.bDesc;

export default postSlice.reducer;
