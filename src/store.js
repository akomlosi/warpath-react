import { createStore, combineReducers } from "redux";
import unitReducer from './reducers/unitReducer';

export default createStore(combineReducers({unit: unitReducer}), {});