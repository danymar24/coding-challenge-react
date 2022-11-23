import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        items: [],
        favorites: [],
    },
    reducers: {
        changeValue: (state, action) => {
            return {
                ...state,
                items: action.payload,
            };
        },
        addFavorite: (state: any, action: any) => {
            return {
                ...state,
                favorites: state.favorites?.concat(action.payload),
            }
        },
        removeFavorite: (state: any, action: any) => {
            const itemIndex = state.favorites?.indexOf(action.payload.fdcId);
            if (itemIndex) {
                return {
                    ...state,
                    favorites: state.favorites?.slice(itemIndex, 0),
                }
            }
        }
    },
})

export const { changeValue, addFavorite, removeFavorite } = foodSlice.actions;
export default foodSlice.reducer;
