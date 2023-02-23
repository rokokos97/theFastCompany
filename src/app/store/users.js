import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        usersRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});
const { reducer: usersReducer, actions } = usersSlice;
const { usersRequestFiled, usersReceived, usersRequested } = actions;

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.get();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFiled(error.message));
    }
};
export const getQualities = () => (state) => state.users.entities;
export const getQualitiesLoadingStatus = () => (state) => state.users.isLoading;
export default usersReducer;
