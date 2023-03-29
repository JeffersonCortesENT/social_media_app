import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FORM_POST } from '../constants';

const initialState = {
    aPosts: [],
    oPost: DEFAULT_FORM_POST,
};

// export const getApplicantsList = createAsyncThunk(
//     'influencer/getApplicantsList',
//     async (oParams, { dispatch }) => {
//         const oResponse = await getApplicants(oParams);
//         return oResponse.data
//     }
// );

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
        }
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(getInfluencerList.fulfilled, (state, action) => {
        //         state.aInfluencers = action.payload.data.influencers;
        //         state.aSelectedInfluencers = [];
        //         state.iInfluencerListRequestFailCount = 0;
        //     })
    }
});

export const {
    handlePostFormChange,
    savePostForm,
    deletePostEntry,
    savePostModifications,
} = postSlice.actions;

export const selectPostsList = (state) => state.posts.aPosts;
export const selectPostForm = (state) => state.posts.oPost;

export default postSlice.reducer;
