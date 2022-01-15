import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { basketSlice } from "../../features/basket/basketSlice";
import { catalogSlice } from "../../features/catalog/catalogSlice";
import { counterSlice } from "../../features/contact/counterSlice";


// redux store created with reducer
// export function ConfigStore() {
//     return createStore(CounterReducer);
// }


export const store = configureStore({
    reducer: {
     counter:   counterSlice.reducer,
     basket:    basketSlice.reducer,
     catalog:   catalogSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/*
Instead of redux thunk, we are using redux-toolkit.
Redux-toolkit is a library that helps us to create slices of the state that we want to manage.
We can then export the actions that we want to use in our components.

Redux thunk is a middleware that allows us to dispatch functions instead of plain objects.

*/