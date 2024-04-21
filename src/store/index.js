import { configureStore } from "@reduxjs/toolkit";
import { Product } from "../slice/addCartSlice";

export const store = configureStore({
    reducer: {
        product: Product, 
    },
    devTools: true
})