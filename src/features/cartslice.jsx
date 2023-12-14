import { createSlice } from "@reduxjs/toolkit";
import data from "../data";


const initialState = {
    amount:0,
    items:data
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        clearCart : (state) => {
            state.items=[]
        }
    }
})

export const {clearCart}=cartSlice.actions;
export default cartSlice.reducer;