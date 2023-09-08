import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface InputState {
  message: string
}

// Define the initial state using that type
const initialState: InputState = {
  message: "",
}

export const inputSlice = createSlice({
  name: 'input',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addText:(state,action: PayloadAction<string>)=>{
      state.message=  action.payload
    },
    cleanMessage:(state)=>{
        state.message=""
    }
  },
})

export const { addText ,cleanMessage} = inputSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectInput = (state: RootState) => state.input.message

export default inputSlice.reducer