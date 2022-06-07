import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import cardReducer from "./cards/reducers";
import columnReducer from "./columns/reducers";

const rootReducer = combineReducers({
	cards: cardReducer,
	columns: columnReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
