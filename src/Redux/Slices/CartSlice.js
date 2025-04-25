import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"Cart",
    initialValue:[],
    reducers:{
        addTocart:()=>{

        },

        removeFromcart:()=>{

        }
    }
})

export const {addTocart,removeFromcart} = CartSlice.actions;
export default CartSlice.reducer;