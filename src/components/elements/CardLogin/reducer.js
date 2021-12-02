import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading: false,
    isError: false,
    items: {},
    user: {},

};

export const UserReducer = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setError: (state, action) => ({
            ...state,
            isError: action.payload,
        }),
        setData: (state, action) => ({ ...state, items: action.payload }),
        setUser: (state, action) => ({ ...state, user: action.payload }),
        reset: () => initialState,
    },
});

export default UserReducer.reducer;
