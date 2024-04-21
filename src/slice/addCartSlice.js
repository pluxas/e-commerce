import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: 'addCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.product.push(action.payload)
        },
        removeToCart: (state, action) => {
            state.product = state.product.filter(product => product.id !== action.payload)
        },
        clearCart: (state) => {
            state.product = []
        }
    }
})

export const {addToCart, removeToCart, clearCart} = productSlice.actions
export const Product = productSlice.reducer