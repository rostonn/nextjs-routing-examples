import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCount: (state, action) => {
            state.count = action.payload
        }
    }
})

export default counterSlice.reducer

export const { setCount } = counterSlice.actions