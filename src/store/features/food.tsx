import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        items: [],
    },
    reducers: {
        changeValue: (state, action) => {
            return {
                ...state,
                items: action.payload,
            };
        },
    },
})

export const { changeValue } = foodSlice.actions;
export default foodSlice.reducer;
