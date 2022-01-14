export const INCREMENT_COUNTER = "INCREMENT_COUNTER"; 
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"; 

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 20,
    title: 'CJS'
}

export function increment(amount=1){
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

export function decrement(amount = 1){
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
}


export default function CounterReducer(state = initialState, action: any) {
   switch (action.type) {
       case INCREMENT_COUNTER:
           return {
                ...state,
                data: state.data + action.payload
           }
        case DECREMENT_COUNTER:
              return {
                ...state,
                data: state.data - action.payload
               }
        default:
        return state;
   }
   
}


/*
With redux, we can create a reducer that handles the state of our application.
The reducer is a pure function that takes the previous state and an action, and returns the next state.
Actions are objects that get sent to the store. We can send any type of action to the store, and the reducer will handle it.
We use the dispatch function to send actions to the store.

*/