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

const paymentLink = process.env.REACT_APP_API_PAYMENT;

console.log(paymentLink);

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
        updateSize: (state, action) => {
            state.cartList.map((expense) => {
                if(expense.id === action.payload.id){
                    expense.size = action.payload.size;
                    localStorage.setItem('cart-list', JSON.stringify([...state.cartList]))
                }
            })
        },

        checkOut: (state, action) => {
            const arrayLength = state.cartList.length;
            for (let i = 0; i < arrayLength; i++){
                // state.cartList.shift(i);
                window.location.replace(process.env.REACT_APP_API_PAYMENT);
                // Swal.fire(
                //     'Place Order Sucessful!',
                //     '',
                //     'success'
                //   )
           } 
        }

    }
})

export const {addExpense, deleteExpense, updateExpense, updateSize, checkOut} = cartSlice.actions;
export default cartSlice.reducer;