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
        getFoodItem: (state, action) => {
            return state.value.find((item: any) => item.fcdId === action.payload);
        }
    },
})

export const { changeValue } = foodSlice.actions;
export default foodSlice.reducer;
