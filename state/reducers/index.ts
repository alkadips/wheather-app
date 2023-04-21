import { combineReducers } from "redux";
import wheathersCurrencyReducer from "./wheathersCurrencyReducer";

const reducers = combineReducers({
    wheathercurrency: wheathersCurrencyReducer
})

export default reducers;