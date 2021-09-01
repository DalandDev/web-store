import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (!item) {
                state.push({
                    id: action.payload,
                    quantity: 1
                })
            }
            else {
                item.quantity += 1;
            }
        },
        removeItem: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            state.splice(state.indexOf(item), 1);
        },
        updateItem: (state, action) => {
            const item = state.find(item => item.id === action.payload.id);
            item.quantity = action.payload.quantity;
        }
    }
})

export const { addItem, removeItem, updateItem } = cartSlice.actions;

export default cartSlice.reducer;