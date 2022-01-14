import { createStore } from "redux";
import CounterReducer from "../../features/contact/CounterReducer";


// redux store created with reducer
export function ConfigStore() {
    return createStore(CounterReducer);
}