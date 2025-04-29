import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"Cart",
    initialState: [],
    reducers:{
        addTocart:(state, actions)=>{
            state.push(actions.payload);
        },

        removeFromcart:(state,actions)=>{
            return state.filter((item)=>item.id!==actions.payload)
        }
    }
})

export const {addTocart,removeFromcart} = CartSlice.actions;
export default CartSlice.reducer;