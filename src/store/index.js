import { configureStore } from "@reduxjs/toolkit";
import { Product } from "../slice/addCartSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        product: Product, 
    }
})