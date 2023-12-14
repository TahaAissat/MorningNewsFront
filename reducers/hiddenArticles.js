import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : [],
}

export const hiddenArticleSlice = createSlice({
    name : 'hiddenArticles',
    initialState,
    reducers : {
        addHiddenArticle : (state,action) => {
            state.value.push(action.payload)
        },
        removeAllHidden : (state) => {
            state.value = []
        }
    }
});

export const {addHiddenArticle , removeAllHidden} = hiddenArticleSlice.actions
export default hiddenArticleSlice.reducer;