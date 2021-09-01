import { createSlice, nanoid } from '@reduxjs/toolkit'

import vbucks from "../../img/vbucks.png";
import pizza from "../../img/pizza.png";
import dog from "../../img/dog.jpeg";
import ps5 from "../../img/ps5.jpeg";
import water from "../../img/water.png";
import ak47 from "../../img/ak47.jpeg"; 

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: [
        {
            id: nanoid(),
            name: "AK-47",
            image: ak47,
            price: 1200.00,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: nanoid(),
            name: "Pizza Slice",
            image: pizza,
            price: 9.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: nanoid(),
            name: "Cool Dog",
            image: dog,
            price: 100.00,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: nanoid(),
            name: "Water Bottle",
            image: water,
            price: 0.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: nanoid(),
            name: "PlayStation 5",
            image: ps5,
            price: 799.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: nanoid(),
            name: "1,000 V Bucks",
            image: vbucks,
            price: 9.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ],
    reducers: {
        addProduct: (state, action) => {
            const obj = action.payload;
            state.push({
                id: nanoid(),
                name: obj.name,
                image: obj.image,
                price: obj.price,
                description: obj.description,
            })
        },
        removeProduct: (state, action) => {
            const id = action.payload;
            const item = state.find(item => item.id === id);
            state.splice(state.indexOf(item), 1);
        }
    }
})

export const { addProduct, removeProduct } = catalogSlice.actions;

export default catalogSlice.reducer;