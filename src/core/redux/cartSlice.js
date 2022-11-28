import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialList = () => {
    const list = localStorage.getItem('cart-list');
    let expenses = [];
    if(list){
        expenses = JSON.parse(list);
    }
    return expenses;
}

const initialState = {
    cartList: initialList(),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            if(state.cartList.map(item => item.id).includes(action.payload.id)){
                Swal.fire(
                    'OOPS',
                    `${action.payload.title} already added to cart!`,
                    'warning'
                  )
            } else {
                localStorage.setItem('cart-list', JSON.stringify([...state.cartList, action.payload]));
                state.cartList.push(action.payload);
                Swal.fire(
                    action.payload.title,
                    'Successfully Added!',
                    'success'
                  )
            }
        },
        deleteExpense: (state, action) => {
                state.cartList = state.cartList.filter((cart) => cart.id !== action.payload);
                localStorage.setItem('cart-list', JSON.stringify([...state.cartList]));
        },
        updateExpense: (state, action) => {
            state.cartList.map((expense) => {
                if(expense.id === action.payload.id){
                    expense.quantity = action.payload.newQuantity;
                    localStorage.setItem('cart-list', JSON.stringify([...state.cartList]))
                }
            })
        },

    }
})

export const {addExpense, deleteExpense, updateExpense} = cartSlice.actions;
export default cartSlice.reducer;