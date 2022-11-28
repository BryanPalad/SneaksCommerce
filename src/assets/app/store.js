import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from '../../core/redux/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})