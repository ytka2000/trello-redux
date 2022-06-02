import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import cardReducer from "./cardReducer";
import columnReducer from "./columnReducer";

const rootReducer = combineReducers({
	cardsObj: cardReducer,
	columnsObj: columnReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
