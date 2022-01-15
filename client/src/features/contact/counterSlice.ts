import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 20,
    title: 'CJS - Redux'
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload;
        },
        decrement: (state, action) => {
            state.data -= action.payload;
        }
}});

export const { increment, decrement } = counterSlice.actions;


/*
When using redux-toolkit, we can create a slice of the state that we want to manage.
We can then export the actions that we want to use in our components.
When creating a slice, we need to specify the name of the slice, the initial state, and the reducers.
Then we can export the actions that we want to use in our components.

We also need to add the redux tool kit in our store.ts file.


*/