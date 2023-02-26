import { createSlice } from "@reduxjs/toolkit";
import { isOutdated } from "../utils/outdate";
import professionService from "../services/professionService";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        commentsRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});
const { reducer: commentsReducer, actions } = commentsSlice;
const { commentsRequestFiled, commentsReceived, commentsRequested } = actions;

export const loadProfessionsList = () => async (dispatch, getState) => {
    const lastFetch = getState().comments.lastFetch;
    if (isOutdated(lastFetch)) {
        dispatch(commentsRequested());
        try {
            const { content } = await professionService.get();
            dispatch(commentsReceived(content));
        } catch (error) {
            dispatch(commentsRequestFiled(error.message));
        }
    }
};

export const getProfessions = () => (state) => state.comments.entities;
export const getProfessionsLoadingStatus = () => (state) => state.comments.isLoading;
export const getProfessionsByIds = (commentsIds) => (state) => {
    if (state.comments.entities) {
        return state.comments.entities.find((prof) =>
            prof._id === commentsIds);
    }
};
export default commentsReducer;
