import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchItemSlice = createSlice({
    name: 'searchItem',
    initialState: [] as string[],
    reducers: {
        addSearchItem: (state, action: PayloadAction<string>) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        clearSearchItems: () => {
            return [];
        },
        removeSearchItem: (state, action: PayloadAction<string>) => {
            return state.filter(item => item !== action.payload); // Remove specific item
        }
    },
});

export const { addSearchItem, clearSearchItems, removeSearchItem } = searchItemSlice.actions;
export default searchItemSlice.reducer;