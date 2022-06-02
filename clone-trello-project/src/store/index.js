import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cardReducer from "./cardReducer";
import columnReducer from "./columnReducer";

const rootReducer = combineReducers({
	cardsObj: cardReducer,
	columnsObj: columnReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
