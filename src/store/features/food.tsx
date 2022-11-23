import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        value: [],
    },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { changeValue } = foodSlice.actions;
export default foodSlice.reducer;
