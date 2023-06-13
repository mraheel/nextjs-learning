import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


export interface CounterState {
    value: number,
}

const initialState:CounterState = {
    value: 0
}

export const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers:{
        increement:(state)=> {
            state.value +=1
        },
        decrement:(state)=>{
            toast.dismiss();
            if((state.value-1) < 0){
                toast.error('You are going negative.')
            } 
            state.value -=1
            
            
        },
        incrementByAmount: (state, action:PayloadAction<number>)=>{
            state.value += action.payload
        }
    }
}) 

export const counterActions = counterSlice.actions
export default counterSlice.reducer