import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../../features/contact/counterSlice";


// redux store created with reducer
// export function ConfigStore() {
//     return createStore(CounterReducer);
// }
export const store = configureStore({
    reducer: {
     counter:   counterSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;