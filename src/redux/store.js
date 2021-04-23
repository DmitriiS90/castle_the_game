import { combineReducers, createStore } from "redux";
import inventoryReducer from "./inventory-reducer";
import personsReducer from "./persons-reducer";

const reducers = combineReducers({
    inventory: inventoryReducer,
    persons: personsReducer
})

const store = createStore(reducers)

window.store = store

export default store;

